import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import fs from "fs";

// Database configuration
const DB_PATH = path.join(process.cwd(), "database", "ecomus.db");

// Ensure database directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Database connection
let db = null;

export async function getDatabase() {
  if (db) {
    return db;
  }

  db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  // Enable foreign keys
  await db.exec("PRAGMA foreign_keys = ON");

  return db;
}

// Initialize database with schema and seed data
export async function initializeDatabase() {
  const database = await getDatabase();

  try {
    // Read and execute schema
    const schemaPath = path.join(process.cwd(), "database", "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");
    await database.exec(schema);

    // Check if data already exists
    const productCount = await database.get(
      "SELECT COUNT(*) as count FROM products"
    );

    if (productCount.count === 0) {
      // Read and execute seed data
      const seedPath = path.join(process.cwd(), "database", "seed.sql");
      const seed = fs.readFileSync(seedPath, "utf8");
      await database.exec(seed);
      console.log("Database initialized with sample data");
    } else {
      console.log("Database already contains data, skipping seed");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Product queries
export async function getAllProducts(limit = 50, offset = 0) {
  const database = await getDatabase();
  return await database.all(
    `
    SELECT 
      p.*,
      c.name as category_name,
      c.slug as category_slug,
      GROUP_CONCAT(DISTINCT pi.image_url) as images,
      GROUP_CONCAT(DISTINCT pv.variant_value) as colors
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id
    LEFT JOIN product_variants pv ON p.id = pv.product_id AND pv.variant_type = 'color'
    WHERE p.is_active = 1
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT ? OFFSET ?
  `,
    [limit, offset]
  );
}

export async function getProductBySlug(slug) {
  const database = await getDatabase();
  const product = await database.get(
    `
    SELECT 
      p.*,
      c.name as category_name,
      c.slug as category_slug
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE p.slug = ? AND p.is_active = 1
  `,
    [slug]
  );

  if (!product) return null;

  // Get product images
  const images = await database.all(
    `
    SELECT * FROM product_images 
    WHERE product_id = ? 
    ORDER BY is_primary DESC, sort_order ASC
  `,
    [product.id]
  );

  // Get product variants
  const variants = await database.all(
    `
    SELECT * FROM product_variants 
    WHERE product_id = ? AND is_active = 1
    ORDER BY variant_type, variant_label
  `,
    [product.id]
  );

  // Get product reviews
  const reviews = await database.all(
    `
    SELECT 
      pr.*,
      u.first_name,
      u.last_name
    FROM product_reviews pr
    LEFT JOIN users u ON pr.user_id = u.id
    WHERE pr.product_id = ? AND pr.is_approved = 1
    ORDER BY pr.created_at DESC
  `,
    [product.id]
  );

  return {
    ...product,
    images,
    variants,
    reviews,
  };
}

export async function getFeaturedProducts(limit = 8) {
  const database = await getDatabase();
  return await database.all(
    `
    SELECT 
      p.*,
      c.name as category_name,
      c.slug as category_slug,
      GROUP_CONCAT(DISTINCT pi.image_url) as images
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = 1
    WHERE p.is_active = 1 AND p.is_featured = 1
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT ?
  `,
    [limit]
  );
}

export async function searchProducts(query, limit = 20) {
  const database = await getDatabase();
  const searchTerm = `%${query}%`;

  return await database.all(
    `
    SELECT 
      p.*,
      c.name as category_name,
      c.slug as category_slug,
      GROUP_CONCAT(DISTINCT pi.image_url) as images
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = 1
    WHERE p.is_active = 1 
      AND (p.name LIKE ? OR p.description LIKE ? OR p.brand LIKE ?)
    GROUP BY p.id
    ORDER BY p.name LIKE ? DESC, p.created_at DESC
    LIMIT ?
  `,
    [searchTerm, searchTerm, searchTerm, searchTerm, limit]
  );
}

// Category queries
export async function getAllCategories() {
  const database = await getDatabase();
  return await database.all(`
    SELECT 
      c.*,
      COUNT(p.id) as product_count
    FROM categories c
    LEFT JOIN products p ON c.id = p.category_id AND p.is_active = 1
    WHERE c.parent_id IS NULL
    GROUP BY c.id
    ORDER BY c.name
  `);
}

export async function getCategoryBySlug(slug) {
  const database = await getDatabase();
  return await database.get(
    `
    SELECT * FROM categories WHERE slug = ?
  `,
    [slug]
  );
}

export async function getProductsByCategory(
  categorySlug,
  limit = 20,
  offset = 0
) {
  const database = await getDatabase();
  return await database.all(
    `
    SELECT 
      p.*,
      c.name as category_name,
      c.slug as category_slug,
      GROUP_CONCAT(DISTINCT pi.image_url) as images
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = 1
    WHERE p.is_active = 1 AND c.slug = ?
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT ? OFFSET ?
  `,
    [categorySlug, limit, offset]
  );
}

// User queries
export async function getUserByEmail(email) {
  const database = await getDatabase();
  return await database.get(
    `
    SELECT * FROM users WHERE email = ? AND is_active = 1
  `,
    [email]
  );
}

export async function createUser(userData) {
  const database = await getDatabase();
  const { email, password_hash, first_name, last_name, phone } = userData;

  const result = await database.run(
    `
    INSERT INTO users (email, password_hash, first_name, last_name, phone)
    VALUES (?, ?, ?, ?, ?)
  `,
    [email, password_hash, first_name, last_name, phone]
  );

  return result.lastID;
}

// Cart queries
export async function getCartItems(sessionId) {
  const database = await getDatabase();
  return await database.all(
    `
    SELECT 
      c.*,
      p.name as product_name,
      p.price as product_price,
      p.slug as product_slug,
      pi.image_url as product_image
    FROM cart c
    LEFT JOIN products p ON c.product_id = p.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = 1
    WHERE c.session_id = ?
    ORDER BY c.created_at DESC
  `,
    [sessionId]
  );
}

export async function addToCart(
  sessionId,
  productId,
  variantId = null,
  quantity = 1
) {
  const database = await getDatabase();

  // Check if item already exists in cart
  const existingItem = await database.get(
    `
    SELECT * FROM cart 
    WHERE session_id = ? AND product_id = ? AND product_variant_id = ?
  `,
    [sessionId, productId, variantId]
  );

  if (existingItem) {
    // Update quantity
    await database.run(
      `
      UPDATE cart 
      SET quantity = quantity + ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
      [quantity, existingItem.id]
    );
    return existingItem.id;
  } else {
    // Add new item
    const result = await database.run(
      `
      INSERT INTO cart (session_id, product_id, product_variant_id, quantity)
      VALUES (?, ?, ?, ?)
    `,
      [sessionId, productId, variantId, quantity]
    );
    return result.lastID;
  }
}

export async function updateCartItem(cartItemId, quantity) {
  const database = await getDatabase();
  await database.run(
    `
    UPDATE cart 
    SET quantity = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `,
    [quantity, cartItemId]
  );
}

export async function removeFromCart(cartItemId) {
  const database = await getDatabase();
  await database.run(
    `
    DELETE FROM cart WHERE id = ?
  `,
    [cartItemId]
  );
}

// Wishlist queries
export async function getWishlistItems(userId) {
  const database = await getDatabase();
  return await database.all(
    `
    SELECT 
      w.*,
      p.name as product_name,
      p.price as product_price,
      p.slug as product_slug,
      pi.image_url as product_image
    FROM wishlist w
    LEFT JOIN products p ON w.product_id = p.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = 1
    WHERE w.user_id = ?
    ORDER BY w.created_at DESC
  `,
    [userId]
  );
}

export async function addToWishlist(userId, productId) {
  const database = await getDatabase();
  try {
    const result = await database.run(
      `
      INSERT INTO wishlist (user_id, product_id)
      VALUES (?, ?)
    `,
      [userId, productId]
    );
    return result.lastID;
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT") {
      // Item already in wishlist
      return null;
    }
    throw error;
  }
}

export async function removeFromWishlist(userId, productId) {
  const database = await getDatabase();
  await database.run(
    `
    DELETE FROM wishlist 
    WHERE user_id = ? AND product_id = ?
  `,
    [userId, productId]
  );
}

// Coupon queries
export async function getCouponByCode(code) {
  const database = await getDatabase();
  return await database.get(
    `
    SELECT * FROM coupons 
    WHERE code = ? AND is_active = 1 
    AND (valid_from IS NULL OR valid_from <= CURRENT_TIMESTAMP)
    AND (valid_until IS NULL OR valid_until >= CURRENT_TIMESTAMP)
    AND (usage_limit IS NULL OR used_count < usage_limit)
  `,
    [code]
  );
}

// Close database connection
export async function closeDatabase() {
  if (db) {
    await db.close();
    db = null;
  }
}

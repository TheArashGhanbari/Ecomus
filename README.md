# Ecomus - E-commerce Platform

A modern e-commerce platform built with Next.js, featuring a local SQLite database, responsive design, and interactive product components.

## 🚀 Features

- **Local SQLite Database** - Complete e-commerce data structure
- **Product Management** - Categories, variants, images, reviews
- **User System** - Authentication, profiles, addresses
- **Shopping Cart** - Session-based cart functionality
- **Wishlist** - User wishlist management
- **Responsive Design** - Mobile-first approach
- **Interactive Components** - Product cards with hover effects
- **API Routes** - RESTful API endpoints

## 📦 Database Structure

The application uses a local SQLite database with the following main tables:

- **products** - Product information, pricing, inventory
- **categories** - Product categories and subcategories
- **product_images** - Multiple images per product
- **product_variants** - Color, size, and other variants
- **users** - User accounts and authentication
- **orders** - Order management and tracking
- **cart** - Shopping cart functionality
- **wishlist** - User wishlists
- **coupons** - Discount codes and promotions
- **product_reviews** - Customer reviews and ratings

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ecomus
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Initialize the database**

   ```bash
   npm run db:init
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Initialization

The database is automatically initialized when you run:

```bash
npm run db:init
```

This will:

- Create the SQLite database file (`database/ecomus.db`)
- Execute the schema (`database/schema.sql`)
- Populate with sample data (`database/seed.sql`)

### Sample Data

The database comes pre-populated with:

- 10 sample products (Logitech, Sony, Apple, etc.)
- 4 main categories with subcategories
- Product variants (colors)
- Sample users and reviews
- Coupon codes

## 📁 Project Structure

```
ecomus/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── database/             # Database files
│   ├── schema.sql        # Database schema
│   ├── seed.sql          # Sample data
│   └── ecomus.db         # SQLite database (auto-generated)
├── lib/                  # Utility libraries
│   ├── database.js       # Database connection and queries
│   └── utils.js          # Helper functions
├── scripts/              # Build and setup scripts
│   └── init-db.js        # Database initialization
└── public/               # Static assets
```

## 🔧 API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products?featured=true` - Get featured products
- `GET /api/products?search=query` - Search products
- `GET /api/products/[slug]` - Get product by slug

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/[slug]/products` - Get products by category

### Cart

- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/[id]` - Update cart item
- `DELETE /api/cart/[id]` - Remove from cart

### Wishlist

- `GET /api/wishlist` - Get wishlist items
- `POST /api/wishlist` - Add to wishlist
- `DELETE /api/wishlist/[id]` - Remove from wishlist

## 🎨 Components

### ProductCard

A modern product card component with:

- Hover effects and animations
- Color swatch selection
- Quick action buttons (cart, wishlist, compare, quick view)
- Responsive design

### TestimonialSlider

An interactive testimonial slider with:

- Smooth drag gestures
- Professional animations
- Responsive layout

## 🛒 E-commerce Features

### Product Management

- Product categories and subcategories
- Multiple product images
- Product variants (colors, sizes)
- Inventory tracking
- Featured products

### User Experience

- User registration and authentication
- Shopping cart functionality
- Wishlist management
- Product reviews and ratings
- Coupon codes and discounts

### Order Management

- Order creation and tracking
- Multiple shipping addresses
- Payment processing
- Order history

## 🔒 Security

- Password hashing for user accounts
- SQL injection prevention with parameterized queries
- Input validation and sanitization
- Secure session management

## 📱 Responsive Design

The application is built with a mobile-first approach using Tailwind CSS:

- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes
- Progressive enhancement

## 🚀 Performance

- SQLite database for fast local queries
- Optimized database indexes
- Efficient API endpoints
- Image optimization with Next.js
- Code splitting and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the code examples

---

Built with ❤️ using Next.js, React, Tailwind CSS, and SQLite

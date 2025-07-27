-- Sample data for E-commerce Database

-- Insert Categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Gaming', 'gaming', 'Gaming peripherals and accessories', '/images/categories/gaming.jpg'),
('Audio', 'audio', 'Headphones, speakers, and audio equipment', '/images/categories/audio.jpg'),
('Computing', 'computing', 'Computer accessories and peripherals', '/images/categories/computing.jpg'),
('Mobile', 'mobile', 'Mobile phone accessories', '/images/categories/mobile.jpg');

-- Insert subcategories
INSERT INTO categories (name, slug, description, image_url, parent_id) VALUES
('Gaming Mice', 'gaming-mice', 'High-performance gaming mice', '/images/categories/gaming-mice.jpg', 1),
('Gaming Keyboards', 'gaming-keyboards', 'Mechanical gaming keyboards', '/images/categories/gaming-keyboards.jpg', 1),
('Gaming Headsets', 'gaming-headsets', 'Gaming audio headsets', '/images/categories/gaming-headsets.jpg', 1),
('Wireless Headphones', 'wireless-headphones', 'Bluetooth and wireless headphones', '/images/categories/wireless-headphones.jpg', 2),
('Wired Headphones', 'wired-headphones', 'High-quality wired headphones', '/images/categories/wired-headphones.jpg', 2),
('Productivity Mice', 'productivity-mice', 'Ergonomic and productivity mice', '/images/categories/productivity-mice.jpg', 3);

-- Insert Products
INSERT INTO products (name, slug, description, short_description, price, original_price, sku, stock_quantity, weight, dimensions, category_id, brand, is_active, is_featured) VALUES
('Logitech G29 Driving Force Racing Wheel', 'logitech-g29-driving-force', 'Professional racing wheel with force feedback for realistic driving simulation', 'Premium racing wheel with dual-motor force feedback', 299.99, 349.99, 'G29-001', 15, 2.5, '27.5 x 26.5 x 10.5 cm', 1, 'Logitech', 1, 1),
('Logitech G435 Wireless Gaming Headset', 'logitech-g435-wireless', 'Lightweight wireless gaming headset with advanced audio technology', 'Ultra-lightweight wireless gaming headset', 79.99, 99.99, 'G435-001', 25, 0.165, '17.5 x 8.5 x 18.5 cm', 3, 'Logitech', 1, 1),
('Logitech G502 HERO Gaming Mouse', 'logitech-g502-hero', 'High-precision gaming mouse with HERO sensor and customizable weights', 'Advanced gaming mouse with 25K HERO sensor', 59.99, 79.99, 'G502-001', 30, 0.121, '13.2 x 6.8 x 4.1 cm', 5, 'Logitech', 1, 1),
('Logitech MX Master 3S Wireless Mouse', 'logitech-mx-master-3s', 'Premium wireless mouse with silent clicks and MagSpeed scroll', 'Silent wireless mouse for productivity', 99.99, 119.99, 'MX-M3S-001', 20, 0.141, '12.5 x 8.4 x 5.1 cm', 6, 'Logitech', 1, 0),
('Sony WH-1000XM4 Wireless Headphones', 'sony-wh-1000xm4', 'Industry-leading noise canceling wireless headphones', 'Premium noise-canceling wireless headphones', 349.99, 399.99, 'WH-1000XM4', 12, 0.254, '16.7 x 7.3 x 25.4 cm', 4, 'Sony', 1, 1),
('Apple AirPods Pro 2nd Generation', 'apple-airpods-pro-2', 'Active noise cancellation with spatial audio', 'Premium wireless earbuds with noise cancellation', 249.99, 279.99, 'AP-PRO-2', 18, 0.005, '3.0 x 2.4 x 1.8 cm', 4, 'Apple', 1, 1),
('Samsung Galaxy Buds2 Pro', 'samsung-galaxy-buds2-pro', 'Premium wireless earbuds with intelligent ANC', 'High-quality wireless earbuds with smart features', 199.99, 229.99, 'GB2-PRO', 22, 0.005, '2.9 x 2.3 x 1.7 cm', 4, 'Samsung', 1, 0),
('Bose QuietComfort 45', 'bose-quietcomfort-45', 'Premium wireless noise canceling headphones', 'Comfortable noise-canceling headphones', 329.99, 379.99, 'QC-45', 14, 0.238, '17.0 x 7.5 x 24.0 cm', 4, 'Bose', 1, 0),
('Jabra Elite 85t', 'jabra-elite-85t', 'True wireless earbuds with active noise cancellation', 'Premium wireless earbuds with ANC', 179.99, 229.99, 'JE-85T', 16, 0.006, '3.1 x 2.5 x 1.9 cm', 4, 'Jabra', 1, 0),
('Razer DeathAdder V3 Pro', 'razer-deathadder-v3-pro', 'Ultra-lightweight wireless gaming mouse', 'Lightweight wireless gaming mouse', 159.99, 179.99, 'DA-V3-PRO', 8, 0.063, '12.8 x 6.8 x 4.3 cm', 5, 'Razer', 1, 1);

-- Insert Product Images
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order) VALUES
(1, '/images/products/g29-wheel-main.jpg', 'Logitech G29 Racing Wheel', 1, 1),
(1, '/images/products/g29-wheel-side.jpg', 'Logitech G29 Side View', 0, 2),
(1, '/images/products/g29-wheel-detail.jpg', 'Logitech G29 Detail View', 0, 3),
(2, '/images/products/g435-headset-main.jpg', 'Logitech G435 Headset', 1, 1),
(2, '/images/products/g435-headset-side.jpg', 'Logitech G435 Side View', 0, 2),
(3, '/images/products/g502-mouse-main.jpg', 'Logitech G502 Mouse', 1, 1),
(3, '/images/products/g502-mouse-side.jpg', 'Logitech G502 Side View', 0, 2),
(4, '/images/products/mx-master-3s-main.jpg', 'Logitech MX Master 3S', 1, 1),
(4, '/images/products/mx-master-3s-side.jpg', 'Logitech MX Master 3S Side View', 0, 2),
(5, '/images/products/wh-1000xm4-main.jpg', 'Sony WH-1000XM4', 1, 1),
(5, '/images/products/wh-1000xm4-side.jpg', 'Sony WH-1000XM4 Side View', 0, 2),
(6, '/images/products/airpods-pro-2-main.jpg', 'Apple AirPods Pro 2', 1, 1),
(6, '/images/products/airpods-pro-2-case.jpg', 'Apple AirPods Pro 2 Case', 0, 2),
(7, '/images/products/galaxy-buds2-pro-main.jpg', 'Samsung Galaxy Buds2 Pro', 1, 1),
(7, '/images/products/galaxy-buds2-pro-case.jpg', 'Samsung Galaxy Buds2 Pro Case', 0, 2),
(8, '/images/products/qc-45-main.jpg', 'Bose QuietComfort 45', 1, 1),
(8, '/images/products/qc-45-side.jpg', 'Bose QuietComfort 45 Side View', 0, 2),
(9, '/images/products/elite-85t-main.jpg', 'Jabra Elite 85t', 1, 1),
(9, '/images/products/elite-85t-case.jpg', 'Jabra Elite 85t Case', 0, 2),
(10, '/images/products/deathadder-v3-pro-main.jpg', 'Razer DeathAdder V3 Pro', 1, 1),
(10, '/images/products/deathadder-v3-pro-side.jpg', 'Razer DeathAdder V3 Pro Side View', 0, 2);

-- Insert Product Variants (Colors)
INSERT INTO product_variants (product_id, variant_type, variant_value, variant_label, price_adjustment, stock_quantity, image_url) VALUES
(1, 'color', '#000000', 'Black', 0, 8, '/images/products/g29-wheel-black.jpg'),
(1, 'color', '#C0C0C0', 'Silver', 0, 7, '/images/products/g29-wheel-silver.jpg'),
(2, 'color', '#87CEEB', 'Light Blue', 0, 12, '/images/products/g435-light-blue.jpg'),
(2, 'color', '#FFFFFF', 'White', 0, 13, '/images/products/g435-white.jpg'),
(3, 'color', '#000000', 'Black', 0, 18, '/images/products/g502-black.jpg'),
(3, 'color', '#FFFFFF', 'White', 0, 12, '/images/products/g502-white.jpg'),
(4, 'color', '#2F2F2F', 'Graphite', 0, 10, '/images/products/mx-master-3s-graphite.jpg'),
(4, 'color', '#FFFFFF', 'Pale Grey', 0, 10, '/images/products/mx-master-3s-pale-grey.jpg'),
(5, 'color', '#000000', 'Black', 0, 6, '/images/products/wh-1000xm4-black.jpg'),
(5, 'color', '#C0C0C0', 'Silver', 0, 6, '/images/products/wh-1000xm4-silver.jpg'),
(6, 'color', '#FFFFFF', 'White', 0, 9, '/images/products/airpods-pro-2-white.jpg'),
(6, 'color', '#000000', 'Black', 0, 9, '/images/products/airpods-pro-2-black.jpg'),
(7, 'color', '#800080', 'Purple', 0, 11, '/images/products/galaxy-buds2-pro-purple.jpg'),
(7, 'color', '#000000', 'Black', 0, 11, '/images/products/galaxy-buds2-pro-black.jpg'),
(8, 'color', '#000000', 'Black', 0, 7, '/images/products/qc-45-black.jpg'),
(8, 'color', '#FFFFFF', 'White', 0, 7, '/images/products/qc-45-white.jpg'),
(9, 'color', '#2F2F2F', 'Titanium Black', 0, 8, '/images/products/elite-85t-titanium.jpg'),
(10, 'color', '#000000', 'Black', 0, 4, '/images/products/deathadder-v3-pro-black.jpg'),
(10, 'color', '#FFFFFF', 'White', 0, 4, '/images/products/deathadder-v3-pro-white.jpg');

-- Insert Sample Users
INSERT INTO users (email, password_hash, first_name, last_name, phone, is_active, is_admin) VALUES
('admin@ecomus.com', '$2b$10$hashedpassword123', 'Admin', 'User', '+1234567890', 1, 1),
('john.doe@example.com', '$2b$10$hashedpassword456', 'John', 'Doe', '+1234567891', 1, 0),
('jane.smith@example.com', '$2b$10$hashedpassword789', 'Jane', 'Smith', '+1234567892', 1, 0),
('mike.wilson@example.com', '$2b$10$hashedpassword012', 'Mike', 'Wilson', '+1234567893', 1, 0);

-- Insert Sample User Addresses
INSERT INTO user_addresses (user_id, address_type, first_name, last_name, company, address_line1, address_line2, city, state, postal_code, country, phone, is_default) VALUES
(2, 'shipping', 'John', 'Doe', 'Tech Corp', '123 Main Street', 'Apt 4B', 'New York', 'NY', '10001', 'United States', '+1234567891', 1),
(2, 'billing', 'John', 'Doe', 'Tech Corp', '123 Main Street', 'Apt 4B', 'New York', 'NY', '10001', 'United States', '+1234567891', 1),
(3, 'shipping', 'Jane', 'Smith', 'Design Studio', '456 Oak Avenue', 'Suite 200', 'Los Angeles', 'CA', '90210', 'United States', '+1234567892', 1),
(3, 'billing', 'Jane', 'Smith', 'Design Studio', '456 Oak Avenue', 'Suite 200', 'Los Angeles', 'CA', '90210', 'United States', '+1234567892', 1);

-- Insert Sample Coupons
INSERT INTO coupons (code, description, discount_type, discount_value, minimum_order_amount, maximum_discount, usage_limit, is_active, valid_from, valid_until) VALUES
('WELCOME10', 'Welcome discount for new customers', 'percentage', 10.00, 50.00, 25.00, 1000, 1, '2024-01-01 00:00:00', '2024-12-31 23:59:59'),
('SAVE20', 'Save 20% on gaming products', 'percentage', 20.00, 100.00, 50.00, 500, 1, '2024-01-01 00:00:00', '2024-12-31 23:59:59'),
('FREESHIP', 'Free shipping on orders over $50', 'fixed', 10.00, 50.00, 10.00, 2000, 1, '2024-01-01 00:00:00', '2024-12-31 23:59:59'),
('FLASH25', 'Flash sale - 25% off everything', 'percentage', 25.00, 25.00, 100.00, 100, 1, '2024-01-01 00:00:00', '2024-12-31 23:59:59');

-- Insert Sample Product Reviews
INSERT INTO product_reviews (product_id, user_id, rating, title, review_text, is_approved) VALUES
(1, 2, 5, 'Excellent Racing Wheel', 'This racing wheel is amazing! The force feedback is incredibly realistic and the build quality is top-notch.', 1),
(1, 3, 4, 'Great for Sim Racing', 'Perfect for my sim racing setup. The pedals feel great and the wheel is very responsive.', 1),
(2, 2, 5, 'Lightweight and Comfortable', 'These headphones are so light you forget you are wearing them. Great sound quality too!', 1),
(3, 3, 5, 'Best Gaming Mouse', 'The G502 is my favorite gaming mouse. The HERO sensor is incredibly accurate.', 1),
(4, 2, 4, 'Great Productivity Mouse', 'The MX Master 3S is perfect for work. The silent clicks are a game-changer.', 1),
(5, 3, 5, 'Amazing Noise Cancellation', 'The noise cancellation on these headphones is incredible. Perfect for travel.', 1);

-- Insert Sample Wishlist Items
INSERT INTO wishlist (user_id, product_id) VALUES
(2, 1),
(2, 3),
(2, 5),
(3, 2),
(3, 4),
(3, 6); 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    // Allowed domains for image optimization
    domains: [
      "ecomus-2-2.myshopify.com", // Shopify CDN
      "randomuser.me", // User avatars
    ],
    // Image formats to optimize
    formats: ["image/webp", "image/avif"],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;

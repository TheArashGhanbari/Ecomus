/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecomus-2-2.myshopify.com",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;

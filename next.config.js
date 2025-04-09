/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'linkedin.com'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    typedRoutes: true
  }
};

module.exports = nextConfig;

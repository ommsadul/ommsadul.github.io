/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['github.com', 'linkedin.com'],
    unoptimized: true,
  },
  basePath: '',
  experimental: {
    optimizePackageImports: ['framer-motion'],
    typedRoutes: true
  }
};

module.exports = nextConfig;

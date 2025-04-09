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
    // Disabling typedRoutes to resolve type errors with href props
    typedRoutes: false
  }
};

module.exports = nextConfig;

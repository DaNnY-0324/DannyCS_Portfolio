/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages repository name
  basePath: '',
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This is needed to make GitHub Pages work with Next.js
  // It adds trailing slashes to URLs
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable React strict mode for production
  reactStrictMode: false
};

module.exports = nextConfig;

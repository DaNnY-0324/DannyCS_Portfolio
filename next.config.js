/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages repository name - this will be automatically injected by the GitHub Pages action
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
  }
};

module.exports = nextConfig;

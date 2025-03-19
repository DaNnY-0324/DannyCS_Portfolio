/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DannyCS_Portfolio',
  images: {
    unoptimized: true,
  },
  // This is needed to make GitHub Pages work with Next.js
  // It adds trailing slashes to URLs
  trailingSlash: true,
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;

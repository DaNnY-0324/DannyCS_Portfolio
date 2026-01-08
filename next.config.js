/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // GitHub Pages project site repo name
  basePath: "/DannyCS_Portfolio",
  assetPrefix: "/DannyCS_Portfolio/",

  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

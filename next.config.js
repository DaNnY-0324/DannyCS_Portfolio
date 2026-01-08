const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // GitHub Pages project site repo name (only in production)
  basePath: isProd ? "/DannyCS_Portfolio" : "",
  assetPrefix: isProd ? "/DannyCS_Portfolio/" : "",

  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

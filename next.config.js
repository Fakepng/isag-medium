const isProd = process.env.NODE_ENV === "production";
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? process.env.BASE_PATH : "",
  assetPrefix: isProd ? process.env.ASSETS_PREFIX : "",
  images: {
    unoptimized: true,
  },
};

module.exports = withPlugins([
  [withBundleAnalyzer],
])

module.exports = nextConfig;

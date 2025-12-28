/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/stories",
  assetPrefix: process.env.ASSET_PREFIX || "/stories",
  output: "standalone",
};

module.exports = nextConfig;

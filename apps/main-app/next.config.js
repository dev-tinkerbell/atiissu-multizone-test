/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/stories",
        destination: process.env.STORIES_APP_URL || "http://localhost:3001/stories",
      },
      {
        source: "/stories/:path*",
        destination: process.env.STORIES_APP_URL ? `${process.env.STORIES_APP_URL}/stories/:path*` : "http://localhost:3001/stories/:path*",
      },
    ];
  },
  output: "standalone",
};

module.exports = nextConfig;

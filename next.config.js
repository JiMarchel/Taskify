/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all paths from this domain
      },
    ],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  }
};

export default nextConfig;

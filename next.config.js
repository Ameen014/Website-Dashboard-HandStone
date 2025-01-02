// next.config.js  

/** @type {import('next').NextConfig} */  
const nextConfig = {  
  reactStrictMode: true,  
  images: {  
    remotePatterns: [  
      {  
        protocol: "https",  
        hostname: "res.cloudinary.com",  
        pathname: "/**", // Allow all paths from this domain  
      },  
    ],  
  },  
  env: {  
    DATABASE_URL: process.env.DATABASE_URL,  
  },  
  experimental: {  
    serverActions: true, // Enable the Server Actions feature flag  
  },  
};  

// Export the configuration  
module.exports = nextConfig;
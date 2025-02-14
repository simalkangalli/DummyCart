import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
        
      },
    ],
  },

    domains: ["cdn.dummyjson.com"], // api için cdn eklendi 

};
  
  


export default nextConfig;

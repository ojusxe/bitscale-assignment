import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons**',
      },
    ],
  },
};

export default nextConfig;

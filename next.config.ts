import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - Flag requested by Vercel to fix workspace root inference
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // @ts-ignore - Supress NextConfig type error for eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

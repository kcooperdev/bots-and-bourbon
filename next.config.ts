import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Spotify embed images if Next Image is used in future
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = "inline-source-map"; // Inline source maps, no .map files
      // config.devtool = "source-map";     // External .map files
    }

    config.optimization = {
      ...config.optimization,
      minimize: false,
      minimizer: [],
    };

    return config;
  },
};

export default nextConfig;

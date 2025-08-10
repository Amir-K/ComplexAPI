import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = "source-map";
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

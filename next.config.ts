import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
}

export default withContentlayer(nextConfig)

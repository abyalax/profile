import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
}

export default withContentlayer(nextConfig)

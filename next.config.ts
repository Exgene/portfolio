import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  pageExtensions: ['jsx', 'js', 'md', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/
})

export default withMDX(nextConfig);

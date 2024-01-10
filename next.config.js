const { withContentlayer } = require('next-contentlayer')

// const withBundleAnalyze = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: ['lucide-react'],
}

module.exports = withContentlayer(nextConfig)

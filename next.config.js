const withBundleAnalyze = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['lucide-react'],
}

module.exports = withBundleAnalyze(nextConfig)

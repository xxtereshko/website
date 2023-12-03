const withBundleAnalyze = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  reactStrictMode: false,
}

module.exports = withBundleAnalyze(nextConfig)

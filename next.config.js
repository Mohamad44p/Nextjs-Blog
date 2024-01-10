/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    concurrentFeatures: true,
  }
}

module.exports = nextConfig

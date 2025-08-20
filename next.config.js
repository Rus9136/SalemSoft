/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
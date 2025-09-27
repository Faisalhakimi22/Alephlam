/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Temporarily disabled for debugging
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
}

module.exports = nextConfig

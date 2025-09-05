import { setupDevPlatform } from '@cloudflare/next-on-pages/setup';

// Run the setup for the dev platform, this is a no-op when not using wrangler
setupDevPlatform();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Enable the React Strict Mode in development
  reactStrictMode: true,
};

export default nextConfig;
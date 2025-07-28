/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: false, // Enable optimization for better performance
  },
  // Ensure static files are properly served
  trailingSlash: false,
  // Enable experimental features for better image handling
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig

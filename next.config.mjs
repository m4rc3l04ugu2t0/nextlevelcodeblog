/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend-newsletter.onrender.com',
      }
    ]
  }
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'http://192.168.0.108',
        pathname: '/api/assets/**',
      }
    ]
  },
}

export default nextConfig

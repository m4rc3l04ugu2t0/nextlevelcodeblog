/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url_api: "https://backend-newsletter.onrender.com/api/"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
      }
    ]
  }
}

export default nextConfig

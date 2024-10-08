// pages/404.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
      <p className="text-gray-500 mb-8">
        Oops! It seems the page you are looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Go Back Home
        </a>
      </Link>
    </div>
  )
}

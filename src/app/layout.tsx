import Link from 'next/link'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextLevelCodeBlog',
  description: 'Next Level Code Blog sobre Linux, programação e Bitcoin',
  icons: {
    icon: '/src/public/assets/favicon.icon'
  },
  openGraph: {
    title: 'NextLevelCodeBlog',
    description: 'Blog educacional sobre Linux, programação e Bitcoin',
    type: 'website',
    url: 'https://nextlevelcodeblog.com'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Rodapé Fixo */}
        <footer
          id="footer"
          className="bg-gray-800 text-gray-300 text-center p-4 mt-auto"
        >
          {/* Seção Sobre */}
          <div className="mt-4 text-gray-400">
            <p className="mb-2">
              Mandem mensagem por email para qualquer dúvida. Obrigado!
            </p>
          </div>
          <p>
            Contato:{' '}
            <Link
              href="mailto:nextlevelcode014@gmail.com"
              className="text-blue-500 hover:underline"
            >
              nextlevelcode014@gmail.com
            </Link>
          </p>
          <p>
            GitHub:{' '}
            <Link
              href="https://github.com/m4rc3l04ugu2t0"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              m4rc3l04ugu2t0
            </Link>
          </p>
          <p>&copy; 2024 NextLevelCodeBlog.</p>
        </footer>
      </body>
    </html>
  )
}

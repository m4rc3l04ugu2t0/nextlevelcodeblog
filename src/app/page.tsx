// app/page.tsx - Server Component
import Profile from '../public/assets/profile.jpg'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { fetchPosts } from './services/api'
import Div from './Components/Div'
import H1 from './Components/H1'
import P from './Components/P'
import H2 from './Components/H2'

const PostsList = dynamic(() => import('./Components/PostList'), { ssr: false })

export const revalidate = 60 // Revalida os dados a cada 60 segundos

export default async function Home() {
  const posts = await fetchPosts() // Busca posts no servidor

  return (
    <Div className="flex flex-col min-h-screen">
      {/* Header com Menu e Barra de Pesquisa */}
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Div className="flex items-center gap-1">
            <Image
              src={Profile}
              alt="Imagem de Perfil"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Div className="responsive-reading text-white font-bold">
              Next Level Code
            </Div>
          </Div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#footer" className="text-gray-300 hover:text-white">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#footer" className="text-gray-300 hover:text-white">
                Contato
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Assinar
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto p-4 flex-grow">
        {/* Texto sobre o propósito do blog */}
        <section className="mb-8">
          <H1>Bem-vindo ao meu Blog!</H1>
          <P>
            Blog desenvolvido com fins educacionais e para a propagação de
            ideias e estudos, tanto tecnológicos quanto políticos e sobre
            Bitcoin. As postagens serão sempre uma transcrição dos vídeos
            postados em meu canal do{' '}
            <Link
              href={'tube.com/'}
              className="font-bold text-blue-500 underline"
            >
              YouTube
            </Link>
            ,
            <Link
              href={'https://www.youtube.com/@NextLevelCode014'}
              className="font-bold text-blue-500 underline"
              passHref
            >
              NextLevelCode
            </Link>
            . Você encontrará, em grande parte, tutoriais sobre
            <Link
              href={'https://www.linux.org/'}
              className="font-bold text-blue-500 underline"
            >
              {' '}
              Linux
            </Link>
            , programação e{' '}
            <Link
              href={'https://bitcoin.org/en/'}
              className="font-bold text-blue-500 underline"
            >
              Bitcoin
            </Link>
            . Espero poder ajudar toda a comunidade assim como fui ajudado um
            dia. Agradeço a quem se interessa e gosta do conteúdo. Divirtam-se
            aprendendo!
          </P>
        </section>

        <H2>Últimos Posts</H2>
        <P className="text-gray-700 mb-8">
          Aqui você encontra as últimas atualizações, artigos e muito mais.
          Escolha um post abaixo para começar a leitura.
        </P>

        {/* Lista de Posts com funcionalidade de pesquisa */}
        <PostsList initialPosts={posts} />
      </main>
    </Div>
  )
}

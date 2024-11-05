import Link from 'next/link'
import Div from './Components/Div'
import H1 from './Components/H1'
import P from './Components/P'
import H2 from './Components/H2'
import Header from './Components/Header'
import PostsList from './Components/PostList'

export const revalidate = 60 // Revalida os dados a cada 60 segundos

export default async function Home() {
  return (
    <Div className="flex flex-col min-h-screen">
      <Header />
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
              href={'https://www.youtube.com'}
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
        <PostsList />
      </main>
    </Div>
  )
}

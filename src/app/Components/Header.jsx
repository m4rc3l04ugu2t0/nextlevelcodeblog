'use client'
import Profile from '../../public/assets/profile.jpg'
import Image from 'next/image'
import Div from './Div'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Div className="flex items-center gap-1">
          {usePathname() === '/' && (
            <Image
              src={Profile}
              alt="Imagem de Perfil"
              width={50}
              height={50}
              className="rounded-full"
              loading="eager"
            />
          )}
          <Div className="responsive-reading text-white font-bold">
            Next Level Code
          </Div>
        </Div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={
                usePathname() === '/'
                  ? 'text-white font-bold mr-4'
                  : 'text-gray-300 hover:text-white'
              }
            >
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
  )
}

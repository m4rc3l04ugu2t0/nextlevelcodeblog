'use client'
import Profile from '../../public/assets/profile.jpg'
import Image from 'next/image'
import Div from './Div'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'

export default function Header() {
  return (
   <header className="bg-[#0f0f0f] p-4 shadow-lg border-b-2 border-gray-800">
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
          <Div className="responsive-reading text-slate-300 font-bold">
            Next Level Code
          </Div>
        </Div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={
                usePathname() === '/'
                  ? 'flex items-center text-blue-400 font-bold hover:text-blue-300 transition duration-200'
                  : 'text-gray-400 hover:text-gray-200 transition duration-200'
              }
            >
              <FaHome className="h-5 w-5 mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link href="#footer" className="text-gray-400 hover:text-gray-200 transition duration-200">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#footer" className="text-gray-400 hover:text-gray-200 transition duration-200">
              Contato
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 hover:text-gray-200 transition duration-200">
              Assinar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

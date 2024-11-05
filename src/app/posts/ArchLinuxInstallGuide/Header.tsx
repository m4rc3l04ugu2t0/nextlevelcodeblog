import Div from "@/app/Components/Div";
import Link from "next/link";

export default function Header() {
  return (
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Div className="responsive-reading text-white font-bold">
            Next Level Code
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
              <Link href="#" className="text-gray-300 hover:text-white">
                Assinar
              </Link>
            </li>
            <li>
              <Link href="#footer" className="text-gray-300 hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
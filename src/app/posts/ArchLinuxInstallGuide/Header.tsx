import Div from "@/app/Components/Div";
import Link from "next/link";

export default function Header() {
  return (
      <header className="bg-[#0f0f0f] p-4 shadow-lg border-b-2 border-gray-800">
          <Div className="responsive-reading text-white font-bold">
            Next Level Code
          </Div>
          <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="#footer" className="text-gray-300 hover:text-white">
                Sobre
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Assinar
              </Link>
              <Link href="#footer" className="text-gray-300 hover:text-white">
                Contato
              </Link>
        </nav>
      </header>
  )
}
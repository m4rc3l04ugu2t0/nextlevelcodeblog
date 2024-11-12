// pages/post_in_progress.tsx
import Link from 'next/link';

export default function PostInProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">Poste em Desenvolvimento</h1>
      <p className="text-lg text-gray-300 mb-6">
        O conteúdo deste post ainda está sendo preparado e será publicado em breve.
      </p>
      <p className="text-gray-400 mb-8">
        Estamos trabalhando para fornecer as melhores informações para você. Fique atento!
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-700 text-gray-100 rounded-lg hover:bg-blue-800 transition-all">
          Voltar para a Página Inicial
        </a>
      </Link>
    </div>
  );
}

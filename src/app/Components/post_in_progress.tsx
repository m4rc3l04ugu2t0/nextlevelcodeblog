import Link from 'next/link';

export default function PostInProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Poste em Desenvolvimento</h1>
      <p className="text-lg text-gray-600 mb-6">
        O conteúdo deste post ainda está sendo preparado e será publicado em breve.
      </p>
      <p className="text-gray-500 mb-8">
        Estamos trabalhando para fornecer as melhores informações para você. Fique atento!
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Voltar para a Página Inicial
        </a>
      </Link>
    </div>
  );
}

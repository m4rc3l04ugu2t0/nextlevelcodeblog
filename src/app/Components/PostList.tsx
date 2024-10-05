// components/PostsList.tsx - Client Component
'use client'

import { useState } from 'react'
import { Post } from '../types/index'
import Image from 'next/image'
import Link from 'next/link'

interface PostsListProps {
  initialPosts: Post[]
}

export default function PostsList({ initialPosts }: PostsListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    // Filtra os posts com base no título
    const filtered = initialPosts.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredPosts(filtered)
  }

  return (
    <>
      {/* Input de pesquisa */}
      <div className="relative mb-8">
        <input
          type="text"
          className="rounded-full pl-10 pr-4 py-2 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Pesquisar posts..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <svg
          className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3.5a7.5 7.5 0 006.65 12.65z"
          />
        </svg>
      </div>

      {/* Exibe os posts filtrados */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.name}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                className="w-full h-48 object-cover"
                src={post.images[0]}
                alt={post.title}
                width={800}
                height={600}
              />
              <div className="p-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {post.description.substring(0, 100)}...
                </p>
                <Link
                  href={`/posts/${post.name}`}
                  replace
                  className="text-blue-600 hover:underline"
                >
                  Leia mais
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="text-gray-700">Nenhum post encontrado</p>
        )}
      </section>
    </>
  )
}

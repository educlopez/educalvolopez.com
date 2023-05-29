'use client'

import { Suspense, useState } from 'react'
import { allPosts } from 'contentlayer/generated'
import { Search } from 'lucide-react'

import Article from '@/components/ArticleCard'

export default function SearchPost() {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <div className="flex flex-col max-w-3xl space-y-16">
      <div className="relative w-full mb-4">
        <input
          aria-label="Buscar artículos por título o tema"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Buscar artículos por título o tema"
          className="block w-full px-4 py-2 border rounded-full border-black/10 bg-zinc-50/70 text-neutral-700 backdrop-blur-sm placeholder:text-neutral-700 hover:text-neutral-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur placeholder:dark:text-zinc-300 dark:hover:text-white"
        />
        <Search className="absolute w-5 h-5 right-3 top-3 text-neutral-900 dark:text-zinc-300" />
      </div>
      <Suspense fallback={null}>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No se han encontrado artículos.
          </p>
        )}
        {filteredBlogPosts
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post) => (
            <Article key={post.slug} post={post} home={false} />
          ))}
      </Suspense>
    </div>
  )
}

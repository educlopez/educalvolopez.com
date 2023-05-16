'use client'

import { Suspense, useState } from 'react'
import { allPosts } from 'contentlayer/generated'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import Article from '@/components/Article'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function ArticlesIndex({}) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <>
      <SimpleLayout
        title="Escribiendo sobre diseño de interfaces, programación y hobbies."
        intro={`Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn.`}
      >
        <motion.div
          className="md:border-l md:border-black/10 md:pl-6 md:dark:border-white/10"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
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
              {allPosts.map((post) => (
                <Article key={post.slug} post={post} />
              ))}
            </Suspense>
          </div>
        </motion.div>
      </SimpleLayout>
    </>
  )
}

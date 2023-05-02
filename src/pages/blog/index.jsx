import { Suspense, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

function Article({ article }) {
  return (
    <motion.article className="md:grid md:grid-cols-4 md:items-baseline" layout>
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>
          {article.description}
          <br></br>
          {article.tags.map((tag) => (
            <a
              href="#"
              key={tag}
              className="inline-block text-neutral-700  before:content-['#'] dark:text-zinc-400 "
            >
              <span className="inline-flex items-center mt-2 mr-2 text-xs font-medium text-neutral-700 dark:text-zinc-400">
                {tag}
              </span>
            </a>
          ))}
        </Card.Description>
        <Card.Cta>Leer artículo</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="hidden mt-1 md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </motion.article>
  )
}

export default function ArticlesIndex({ articles }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      )
  )
  return (
    <>
      <Head>
        <title>Blog - Edu Calvo</title>
        <meta
          name="description"
          content="Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn."
        />
        <meta
          name="keywords"
          content="diseño de interfaces, programación, hobbies, escritura, perfil LinkedIn"
        />
        <meta property="og:url" content="https://educalvolopez.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Edu Calvo" />
        <meta
          property="og:description"
          content="Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Blog"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta property="twitter:url" content="https://educalvolopez.com/blog" />
        <meta name="twitter:title" content="Blog - Edu Calvo" />
        <meta
          name="twitter:description"
          content="Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Blog"
        />
      </Head>
      <SimpleLayout
        title="Escribiendo sobre diseño de interfaces, programación y hobbies."
        intro={`Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies, actualmente he escrito ${articles.length} artículos. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn.`}
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
              {!filteredBlogPosts.length && (
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  No se han encontrado artículos.
                </p>
              )}
              {filteredBlogPosts.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </Suspense>
          </div>
        </motion.div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

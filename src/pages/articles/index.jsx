import Head from 'next/head';
import { Suspense, useState } from 'react';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants';

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
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
              className="inline-block text-zinc-600  before:content-['#'] dark:text-zinc-400 "
            >
              <span className="mt-2 mr-2 inline-flex items-center text-xs font-medium text-zinc-600 dark:text-zinc-400">
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
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default function ArticlesIndex({ articles }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );
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
        <meta property="og:url" content="https://educalvolopez.com/articles" />
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
        <meta
          property="twitter:url"
          content="https://educalvolopez.com/articles"
        />
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
          className="md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex max-w-3xl flex-col space-y-16">
            <div className="relative mb-4 w-full">
              <input
                aria-label="Buscar artículos"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar artículos"
                className="block w-full rounded-full border border-zinc-900/10 bg-white/10 px-4 py-2 text-zinc-600 backdrop-blur-sm placeholder:text-zinc-600 hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur placeholder:dark:text-zinc-300 dark:hover:text-white"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-3 h-5 w-5 text-zinc-900 dark:text-zinc-300" />
            </div>
            <Suspense fallback={null}>
              {!filteredBlogPosts.length && (
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  No posts found.
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
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta)
    }
  };
}

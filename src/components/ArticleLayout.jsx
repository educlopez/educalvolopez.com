import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Container } from '@/components/Container';
import { formatDate } from '@/lib/formatDate';
import { Prose } from '@/components/Prose';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion'
import {
  FADE_DOWN_ANIMATION_VARIANTS,
} from '@/lib/constants';

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname
}) {
  let router = useRouter();

  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Edu Calvo`}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta
          property="og:image"
          content={`https://educalvolopez.com/api/og?title=${meta.title}`}
        />
        <meta
          property="og:url"
          content={`https://educalvolopez.com/articles/${meta.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${meta.title} - Edu Calvo`} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta
          property="twitter:url"
          content={`https://educalvolopez.com/articles/${meta.slug}`}
        />
        <meta name="twitter:title" content={`${meta.title} - Edu Calvo`} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`https://educalvolopez.com/api/og?title=${meta.title}`}
        />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="max-w-2xl mx-auto">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Ir atrás al blog"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <motion.h1
                  className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  <Balancer>{meta.title}</Balancer>
                </motion.h1>

                <motion.time
                  dateTime={meta.date}
                  className="flex items-center order-first text-base text-zinc-600 dark:text-zinc-400"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </motion.time>
              </header>
              <div className="inline-flex gap-2 mt-4">
                {meta.tags.map((tag) => (
                  <motion.a
                    href="#"
                    key={tag}
                    className="inline-block text-zinc-600 before:content-['#'] dark:text-zinc-400"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                  >
                    <span className="inline-flex items-center mt-2 mr-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {tag}
                    </span>
                  </motion.a>
                ))}
              </div>
              <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <Prose className="mt-8">{children}</Prose>
              </motion.div>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}

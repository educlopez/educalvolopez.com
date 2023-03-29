import Head from 'next/head'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import Resume from '@/components/Resume'
import { SocialLinks } from '@/components/SocialLinks'
import { StatusWork } from '@/components/StatusWork'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>
        {article.description}
        <br></br>
        {article.tags.map((tag) => (
          <a
            href="#"
            key={tag}
            className="inline-block text-zinc-600 before:content-['#'] dark:text-zinc-400"
          >
            <span className="inline-flex items-center mt-2 mr-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {tag}
            </span>
          </a>
        ))}
      </Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  )
}

export default function Home({ articles }) {
  const isAvailable = true
  return (
    <>
      <Head>
        <title>Edu Calvo - Diseñador Web & Frontend</title>
        <meta
          name="description"
          content=" Soy Eduardo, soy diseñador web y Frontend con sede en Madrid."
        />
        <meta
          name="keywords"
          content="diseñador web, frontend, maquetador, Madrid, Cinetic Digital, Freelance, portfolio, edu, calvo"
        />
        <meta property="og:url" content="https://educalvolopez.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edu Calvo - Diseñador web y Frontend"
        />
        <meta
          property="og:description"
          content="Soy Eduardo, soy diseñador web y Frontend con sede en Madrid."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Edu Calvo - Diseñador web y Frontend"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta property="twitter:url" content="https://educalvolopez.com" />
        <meta
          name="twitter:title"
          content="Edu Calvo - Diseñador web y Frontend"
        />
        <meta
          name="twitter:description"
          content="Soy Eduardo, soy diseñador web y Frontend con sede en Madrid."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Edu Calvo - Diseñador web y Frontend"
        />
      </Head>
      <Container className="mt-9">
        <motion.div
          className="max-w-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <h1 className="sr-only">Edu Calvo</h1>

          <Balancer className="text-base text-zinc-600 dark:text-zinc-400">
            <span className="text-2xl font-bold  text-zinc-700 dark:text-white">
              Edu Calvo
            </span>
            <br></br>Soy diseñador web y frontend con sede en Madrid.
            <br></br>
            Trabajo actualmente en Cinetic Digital y como Freelance.
          </Balancer>
          <StatusWork isAvailable={isAvailable} className="mt-4" />
          <SocialLinks />
        </motion.div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <motion.div
          className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 3)
        .map(({ component, ...meta }) => meta),
    },
  }
}

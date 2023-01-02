import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';

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
              <span className="inline-flex items-center mt-2 mr-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
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
    </article>
  );
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Blog - Edu Calvo</title>
        <meta
          name="description"
          content="Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn."
        />
        <meta name="keywords" content="diseño de interfaces, programación, hobbies, escritura, perfil LinkedIn" />
        <meta property="og:url" content="https://educalvolopez.com/articles" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Edu Calvo" />
        <meta
          property="og:description"
          content="Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Blog - Edu Calvo"
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
          content="https://educalvolopez.com/api/og?title=Blog - Edu Calvo"
        />
      </Head>
      <SimpleLayout
        title="Escribiendo sobre diseño de interfaces, programación y hobbies."
        intro="Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn."
      >
        <div className="md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10">
          <div className="flex flex-col max-w-3xl space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
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

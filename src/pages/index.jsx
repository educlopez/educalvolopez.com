import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoTantra from '@/images/logos/tantra.svg'
import logoBdo from '@/images/logos/bdo.svg'
import logoAdraba from '@/images/logos/adraba.svg'
import logoCinetic from '@/images/logos/cineticdigital.svg'
import logoPapayagroup from '@/images/logos/papayagroup.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import  Weather from '@/components/Weather'


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-900/10 stroke-slate-900 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-slate-900 dark:stroke-slate-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>
        {article.description}
        <br></br>
        {article.tags.map((tag) => (
          <a href="#" key={tag} className="inline-block before:content-['#'] text-slate-800 dark:text-slate-400">
            <span className="inline-flex items-center mt-2 mr-2 text-xs font-medium text-slate-800 dark:text-slate-400">{tag}</span>
          </a>
        ))}
      </Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-slate-700 group-hover:fill-slate-600 dark:fill-slate-400 dark:group-hover:fill-slate-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Cinetic Digital',
      title: 'Diseñador Gráfico y Maquetador Web',
      logo: logoCinetic,
      start: '2021',
      end: {
        label: 'Presente',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Ádraba',
      title: 'Diseñador Gráfico y Desarrollador Web',
      logo: logoAdraba,
      start: '2018',
      end: '2021',
    },
    {
      company: 'Tantra',
      title: 'Diseñador Gráfico y maquetador web',
      logo: logoTantra,
      start: '2015',
      end: '2019',
    },
    {
      company: 'BDO',
      title: 'Diseñador en Marketing y comunicación',
      logo: logoBdo,
      start: '2016',
      end: '2017',
    },
    {
      company: 'Papaya Group',
      title: 'Diseñador Gráfico',
      logo: logoPapayagroup,
      start: '2014',
      end: '2014',
    },
  ]

  return (
    <div className="p-6 border bg-white/20 dark:bg-slate-900/50 rounded-2xl border-zinc-100/30 dark:border-zinc-700/40 backdrop-blur">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Trabajo</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-slate-900 dark:text-white">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-slate-800 dark:text-slate-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-slate-700 dark:text-slate-400"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="eduardo_calvo_lopez_curriculum_vitae.pdf" variant="secondary" className="w-full mt-6 group" target="_blank">
        Descargar CV
        <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}


export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Eduardo Calvo - Diseñador Web & Maquetador
        </title>
        <meta
          name="description"
          content=" Soy Eduardo, soy diseñador web y maquetador con sede en Madrid."
        />

        <meta property="og:url" content="https://educalvolopez.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eduardo Calvo - Diseñador web y maquetador" />
        <meta property="og:description" content="Soy Eduardo, soy diseñador web y maquetador con sede en Madrid." />
        <meta property="og:image" content="https://educalvolopez.com/api/og?title=Eduardo Calvo - Diseñador web y maquetador" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta property="twitter:url" content="https://educalvolopez.com" />
        <meta name="twitter:title" content="Eduardo Calvo - Diseñador web y maquetador" />
        <meta name="twitter:description" content="Soy Eduardo, soy diseñador web y maquetador con sede en Madrid." />
        <meta name="twitter:image" content="https://educalvolopez.com/api/og?title=Eduardo Calvo - Diseñador web y maquetador" />

      </Head>
      <Container className="mt-9">
        <div className="max-w-xl">
          <p className="mt-6 text-base text-slate-700 dark:text-slate-400">
            Soy Eduardo, soy diseñador web y maquetador con sede en Madrid. <br></br>Trabajo actualmente en Cinetic Digital y como Freelance.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink
              href="https://twitter.com/educlopez93"
              rel="noopener noreferrer" target="_blank"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/educlopez93"
              rel="noopener noreferrer" target="_blank"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/educlopez"
              rel="noopener noreferrer" target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/educlopez"
              rel="noopener noreferrer" target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Weather/>
            <Resume />
          </div>
        </div>
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
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

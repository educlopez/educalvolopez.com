import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

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

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-zinc-400 dark:fill-slate-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

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
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-slate-500 group-hover:fill-slate-600 dark:fill-slate-400 dark:group-hover:fill-slate-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <MailIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Estar al día</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
      Reciba una notificación cuando publique algo nuevo y cancele su suscripción en cualquier momento.
      </p>
      <div className="flex mt-6">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-amber-400 dark:focus:ring-amber-400/10 sm:text-sm"
        />
        <Button type="submit" className="flex-none ml-4">
          Unirse
        </Button>
      </div>
    </form>
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
        label: 'Present',
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
    <div className="p-6 border bg-white/20 dark:bg-slate-900/50 rounded-2xl border-zinc-100 dark:border-zinc-700/40 backdrop-blur">
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
          Eduardo Calvo - Diseñador UI/UX & Frontend
        </title>
        <meta
          name="description"
          content="Hola soy Eduardo, diseñador UI/UX y Frontend en Madrid."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
          Eduardo Calvo - Diseñador UI/UX & Frontend
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
          Hola soy Eduardo, diseñador UI/UX y Frontend en Madrid.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink
              href="https://twitter.com/educlopez93"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/educlopez93"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/educlopez"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/educlopez"
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

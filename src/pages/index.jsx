import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { BriefcaseIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  ReadcvIcon
} from '@/components/SocialIcons';
import logoTantra from '@/images/logos/tantra.svg';
import logoBdo from '@/images/logos/bdo.svg';
import logoAdraba from '@/images/logos/adraba.svg';
import logoCinetic from '@/images/logos/cineticdigital.svg';
import logoPapayagroup from '@/images/logos/papayagroup.svg';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';
import Weather from '@/components/Weather';
import { motion } from 'framer-motion';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants';

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
          <a
            href="#"
            key={tag}
            className="inline-block text-zinc-600 before:content-['#'] dark:text-zinc-400"
          >
            <span className="mt-2 mr-2 inline-flex items-center text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {tag}
            </span>
          </a>
        ))}
      </Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-600 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
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
        dateTime: new Date().getFullYear()
      }
    },
    {
      company: 'Ádraba',
      title: 'Diseñador Gráfico y Desarrollador Web',
      logo: logoAdraba,
      start: '2018',
      end: '2021'
    },
    {
      company: 'Tantra',
      title: 'Diseñador Gráfico y maquetador web',
      logo: logoTantra,
      start: '2015',
      end: '2019'
    },
    {
      company: 'BDO',
      title: 'Diseñador en Marketing y comunicación',
      logo: logoBdo,
      start: '2016',
      end: '2017'
    },
    {
      company: 'Papaya Group',
      title: 'Diseñador Gráfico',
      logo: logoPapayagroup,
      start: '2014',
      end: '2014'
    }
  ];

  return (
    <div className="rounded-2xl border border-zinc-900/10 bg-white/10 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Trabajo</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-white">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-600 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-600 dark:text-zinc-400"
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
      <div className="flex gap-4">
        <Button
          href="https://read.cv/educlopez"
          variant="secondary"
          className="group mt-6 w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReadcvIcon className="h-6 w-6 fill-zinc-400 transition group-active:fill-zinc-600 dark:group-hover:fill-zinc-50 dark:group-active:fill-zinc-50" />
          Cv online
        </Button>
        <Button
          href="eduardo_calvo_lopez_curriculum_vitae.pdf"
          variant="secondary"
          className="group mt-6 w-full"
          target="_blank"
        >
          Descargar Cv
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Edu Calvo - Diseñador Web & Maquetador</title>
        <meta
          name="description"
          content=" Soy Eduardo, soy diseñador web y maquetador con sede en Madrid."
        />
        <meta
          name="keywords"
          content="diseñador web, maquetador, Madrid, Cinetic Digital, Freelance, portfolio, edu, calvo"
        />
        <meta property="og:url" content="https://educalvolopez.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edu Calvo - Diseñador web y maquetador"
        />
        <meta
          property="og:description"
          content="Soy Eduardo, soy diseñador web y maquetador con sede en Madrid."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Edu Calvo - Diseñador web y maquetador"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta property="twitter:url" content="https://educalvolopez.com" />
        <meta
          name="twitter:title"
          content="Edu Calvo - Diseñador web y maquetador"
        />
        <meta
          name="twitter:description"
          content="Soy Eduardo, soy diseñador web y maquetador con sede en Madrid."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Edu Calvo - Diseñador web y maquetador"
        />
      </Head>
      <Container className="mt-9">
        <motion.div
          className="max-w-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <h1 className="sr-only">Edu Calvo</h1>
          <p>
            <span className="pointer-events-auto hidden items-center rounded-md border border-zinc-200 bg-white/10 px-2 py-0 text-xs font-semibold text-zinc-900 backdrop-blur dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100 sm:inline-flex">
              <span className="mr-1.5 flex h-3 w-3 items-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
              </span>
              Disponible para nuevos proyectos
            </span>
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Soy Edu Calvo, soy diseñador web y maquetador con sede en Madrid.{' '}
            <br></br>Trabajo actualmente en Cinetic Digital y como Freelance.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/educlopez93"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/educlopez93"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/educlopez"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/educlopez"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </motion.div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <motion.div
          className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div>
              <Weather />
            </div>
            <Resume />
          </div>
        </motion.div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta)
    }
  };
}

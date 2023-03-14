import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logoAneto from '@/images/logos/circle/aneto.svg'
import logoDentaid from '@/images/logos/circle/dentaid.svg'
import logoJane from '@/images/logos/circle/jane.svg'
import logoNet2phone from '@/images/logos/circle/net2phone.svg'
import logoTantra from '@/images/logos/circle/tantra.svg'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { getPinnedRepos } from '@/lib/github'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import Clients from '@/components/Clients'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon } from '@/components/SocialIcons'

const projects = [
  {
    name: 'Sms Net2phone',
    description:
      'Dashboard en Laravel para el envío y gestión de sms para la empresa Net2phone',
    link: { href: 'https://sms.net2phone.es/login', label: 'sms.net2phone.es' },
    logo: logoNet2phone,
  },
  {
    name: 'Tantra Spain',
    description:
      'Website en laravel con catálogo auto gestionable por el cliente',
    link: { href: 'https://tantraspain.com/', label: 'tantraspain.com' },
    logo: logoTantra,
  },
  {
    name: 'Aneto',
    description:
      'Tienda online de caldos realizada en Prestashop para la empresa Aneto ',
    link: { href: 'https://tiendaneto.com/es/', label: 'tiendaneto.com' },
    logo: logoAneto,
  },
  {
    name: 'Janeworld',
    description:
      'Multitienda online de productos de bebes realziada en Prestashop',
    link: { href: 'https://janeworld.com/', label: 'janeworld.com' },
    logo: logoJane,
  },
  {
    name: 'Dentaid & Waterpike',
    description: 'Tiendas online de productos para el cuidado dental ',
    link: {
      href: 'https://www.dentaidcomprasonline.pe/',
      label: 'dentaidcomprasonline.pe',
    },
    logo: logoDentaid,
  },
]

export default function Projects({ pinnedRepos }) {
  return (
    <>
      <Head>
        <title>Proyectos - Edu Calvo</title>
        <meta
          name="description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          name="keywords"
          content="proyectos de carrera, colaboración con grandes marcas, ayuda a pequeños negocios, calidad en trabajo"
        />
        <meta property="og:url" content="https://educalvolopez.com/proyectos" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proyectos - Edu Calvo" />
        <meta
          property="og:description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Proyectos"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta
          property="twitter:url"
          content="https://educalvolopez.com/proyectos"
        />
        <meta name="twitter:title" content="Proyectos - Edu Calvo" />
        <meta
          name="twitter:description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Proyectos"
        />
      </Head>
      <SimpleLayout
        title="Proyectos que he realizado durante mi carrera."
        intro="¿No sabes por dónde empezar? He trabajado en montones de pequeños proyectos a lo largo de los años, pero estos son los que más me enorgullecen. Muchos de ellos son privados y no podré publicarlos a continuación."
      >
        <motion.h2
          className="mb-10 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Side Projects
        </motion.h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pinnedRepos.map((repo) => (
            <Card as="li" key={repo.name}>
              <div className="relative z-10 flex items-center justify-center w-full bg-white shadow-md rounded-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={repo.openGraphImageUrl}
                  alt={repo.name}
                  width={323}
                  height={162}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <h2 className="z-10 mt-6 text-base font-semibold text-zinc-900 dark:text-white">
                <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </Link>
              </h2>
              <Card.Description>
                <span className="line-clamp-2">{repo.description}</span>
              </Card.Description>
              <div className="z-30 flex gap-4">
                <Button className="z-40 w-full mt-6 group" variant="solid">
                  <Link
                    href={repo.url}
                    className="z-50 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="flex-none w-4 h-4 dark:fill-white fill-zinc-900" />
                    <span className="ml-2">Github</span>
                  </Link>
                </Button>
                <Button className="z-40 w-full mt-6 group" variant="solid">
                  <Link
                    href={repo.homepageUrl}
                    className="z-50 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link2 className="flex-none w-4 h-4" />{' '}
                    <span className="ml-2">Website</span>
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </ul>

        <motion.h2
          className="mt-16 mb-10 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Proyectos
        </motion.h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt={project.name}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-900 dark:text-white">
                <Card.Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className="flex gap-4 ">
                <Button className="z-40 w-full mt-6 group" variant="solid">
                  <Link
                    href={project.link.href}
                    className="z-50 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link2 className="flex-none w-4 h-4" />
                    <span className="ml-2">{project.link.label}</span>
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </ul>
        <Clients />
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      pinnedRepos: (await getPinnedRepos()).sort(
        (a, b) => b.stargazerCount - a.stargazerCount
      ),
    },
  }
}

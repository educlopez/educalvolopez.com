import Image from 'next/image';
import Head from 'next/head';
import Clients from '@/components/Clients';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

import logoTantra from '@/images/logos/tantra.svg';
import logoJane from '@/images/logos/jane.svg';
import logoAneto from '@/images/logos/aneto.svg';
import logoDentaid from '@/images/logos/dentaid.svg';
import logoNet2phone from '@/images/logos/net2phone.svg';

import projectMovielist from '@/images/projects/cover-project-movielist.png';
import projectTalkworld from '@/images/projects/cover-project-talkworld.png';
import projectGamedev from '@/images/projects/cover-project-gamedev.png';
import projectChefhere from '@/images/projects/cover-project-chefhere.png';

import { LinkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants';
const projects = [
  {
    name: 'Sms Net2phone',
    description:
      'Panel de usuario para el envio y gestión de sms para la empresa Net2phone',
    link: { href: 'https://sms.net2phone.es/login', label: 'sms.net2phone.es' },
    logo: logoNet2phone
  },
  {
    name: 'Tantra Spain',
    description: 'Website con catalogo aunto gestionable por el cliente',
    link: { href: 'https://tantraspain.com/', label: 'tantraspain.com' },
    logo: logoTantra
  },
  {
    name: 'Aneto',
    description: 'Tienda online de caldos',
    link: { href: '', label: 'próximamente' },
    logo: logoAneto
  },
  {
    name: 'Janeworld',
    description: 'Tienda online de productos de bebes',
    link: { href: 'https://janeworld.com/', label: 'janeworld.com' },
    logo: logoJane
  },
  {
    name: 'Dentaid',
    description: 'Tienda online de productos para el cuidado dental',
    link: {
      href: 'https://www.dentaidcomprasonline.pe/',
      label: 'dentaidcomprasonline.pe'
    },
    logo: logoDentaid
  }
];
const sideprojects = [
  {
    name: 'Movie List',
    description: 'Website usando la api de TMDB con Nextjs y Tailwind',
    link: {
      href: 'https://movielist.educalvolopez.com/',
      label: 'Movie List'
    },
    github: {
      href: 'https://github.com/educlopez/movie-list',
      label: 'Github'
    },
    img: projectMovielist
  },
  {
    name: 'Talk World',
    description: 'Website usando Tailwind, Supabase y Remix',
    link: {
      href: 'https://talkworld.educalvolopez.com/',
      label: 'Talk World'
    },
    github: {
      href: 'https://github.com/educlopez/supabase-remix-talkworld-chat',
      label: 'Github'
    },
    img: projectTalkworld
  },
  {
    name: 'Game Dev',
    description: 'Plataforma con distintos juegos usando Nextjs y Tailwind',
    link: {
      href: 'https://gamedev.educalvolopez.com/',
      label: 'Game Dev'
    },
    github: {
      href: 'https://github.com/educlopez/gamedev',
      label: 'Github'
    },
    img: projectGamedev
  },
  {
    name: 'Chef:here',
    description:
      'Generador de recetas con la Api de Co:here usando Tailwind y Nextjs',
    link: {
      href: 'https://chefhere.educalvolopez.com/',
      label: 'Chefhere'
    },
    github: {
      href: 'https://github.com/educlopez/chefhere-ai-cohere',
      label: 'Github'
    },
    img: projectChefhere
  }
];

export default function Projects() {
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
          {sideprojects.map((sideproject) => (
            <Card as="li" key={sideproject.name}>
              <div className="relative z-10 flex w-full items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={sideproject.img}
                  alt={sideproject.name}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-900 dark:text-white">
                <Card.Link
                  href={sideproject.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sideproject.name}
                </Card.Link>
              </h2>
              <Card.Description>{sideproject.description}</Card.Description>

              <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-900 transition group-hover:text-amber-500 dark:text-zinc-200">
                <LinkIcon className="h-4 w-4 flex-none" />
                <span className="ml-2">{sideproject.link.label}</span>
              </p>
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
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt={project.name}
                  className="h-8 w-8"
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
              <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-900 transition group-hover:text-amber-500 dark:text-zinc-200">
                <LinkIcon className="h-4 w-4 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
        <Clients />
      </SimpleLayout>
    </>
  );
}

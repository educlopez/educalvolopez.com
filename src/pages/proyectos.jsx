import Head from 'next/head'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { getPinnedRepos } from '@/lib/github'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import Clients from '@/components/Clients'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon } from '@/components/SocialIcons'

export default function Projects({ pinnedRepos }) {
  const sideprojects = pinnedRepos.map((repo, index) => {
    let descriptionEs = ''
    switch (index % 6) {
      case 0:
        descriptionEs =
          'Sitio web en NextJS y Tailwind, uso de la API de TMDB para mostrar diferentes colecciones de películas y series. El proyecto todavía está en desarrollo'
        break
      case 1:
        descriptionEs =
          'Portafolio hecho con NextJS, Tailwindcss, MDX y varios experimentos'
        break
      case 2:
        descriptionEs =
          'Proyecto realizado con remix.run y usando Suppabase para crear un chat. Para los estilos, se está utilizando Tailwindcss.'
        break
      case 3:
        descriptionEs =
          'Gamedev es un proyecto donde agregaré minijuegos a medida que aprenda React, Nextjs, y posiblemente migraré de JavaScript a TypeScript. Todos los comentarios y consejos para mejorar el código son bienvenidos.'
        break
      case 4:
        descriptionEs =
          'Generador de recetas con co:here, pasando ciertos parametros el prompt se completa y devuelve una receta con los ingredientes y pasos a seguir'
        break
      case 5:
        descriptionEs =
          '¡Descubre su guardarropa como nunca antes con Wardrobeme! Sube una imagen de tu ropa y deja que la api de cloudinary detecte elementos y colores individuales en la imagen.'
        break
      default:
        break
    }

    return {
      name: repo.name,
      openGraphImageUrl: repo.openGraphImageUrl,
      description: repo.description,
      url: repo.url,
      homepageUrl: repo.homepageUrl,
      miCampo: descriptionEs,
    }
  })
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
          {sideprojects.map((repo) => (
            <Card as="li" key={repo.name}>
              <div className="relative z-10 flex items-center justify-center w-full bg-white shadow-md rounded-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={repo.openGraphImageUrl}
                  alt={repo.name}
                  width={323}
                  height={162}
                  className="w-full transition-transform duration-700 rounded-xl group-hover:scale-105"
                  unoptimized
                />
              </div>
              <h2 className="z-10 mt-6 text-base font-semibold text-zinc-900 dark:text-white">
                <Card.Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </Card.Link>
              </h2>
              <Card.Description>
                <span className="line-clamp-2">{repo.miCampo}</span>
              </Card.Description>
              <div className="z-30 flex gap-4">
                <Button
                  className="z-40 flex items-center w-full mt-6 group"
                  href={repo.url}
                  variant="solid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="w-4 h-4 transition fill-zinc-600 dark:fill-zinc-600 group-active:fill-zinc-900 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 dark:group-active:fill-zinc-50" />
                  <span className="ml-2">Github</span>
                </Button>
                <Button
                  className="z-40 flex items-center w-full mt-6 group"
                  href={repo.homepageUrl}
                  variant="solid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-600 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />{' '}
                  <span className="ml-2">Website</span>
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
                  className="w-12 h-12"
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
                <Button
                  className="z-40 flex items-center w-full mt-6 group"
                  href={project.link.href}
                  variant="solid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-600 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
                  <span className="ml-2">{project.link.label}</span>
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

'use client'

import Image from 'next/image'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import Clients from '@/components/Clients'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon } from '@/components/SocialIcons'

export default function Projects({}) {
  return (
    <>
      <SimpleLayout
        title="Proyectos que he realizado durante mi carrera."
        intro="¿No sabes por dónde empezar? He trabajado en montones de pequeños proyectos a lo largo de los años, pero estos son los que más me enorgullecen. Muchos de ellos son privados y no podré publicarlos a continuación."
      >
        <motion.h2
          className="mt-16 mb-10 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl"
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
              <h2 className="mt-6 text-base font-semibold text-neutral-900 dark:text-white">
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
                  <Link2 className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
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

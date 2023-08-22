'use client'

import Image from 'next/image'
import { Link2, Sparkles } from 'lucide-react'

import { formatDatPro } from '@/lib/formatDate'
import { cn } from '@/lib/utils'
import { Button } from '@/components/Button'
import { GitHubIcon } from '@/components/SocialIcons'
import { Card } from '@/components/cards/Card'

export function ProjectCardHome({ project, github, className, video }) {
  return (
    <Card as="div" key={project.name} className={cn(className)}>
      <div className="relative z-10 w-full h-full overflow-hidden rounded-lg">
        <div className="absolute z-20  w-full h-full -bottom-[64px] bg-gradient-to-t from-neutral-100 dark:from-neutral-900 to-transparent"></div>
        <Image
          src={project.cover}
          alt={project.name}
          width={323}
          height={162}
          className="block object-cover w-full h-full"
        />

        <span className="absolute z-20 flex flex-row items-center justify-between w-full h-8 p-4 flex-nowrap bottom-2">
          <p>{project.name}</p>
          <p>{formatDatPro(project.publishedAt)}</p>
        </span>
      </div>
    </Card>
  )
}

export function ProjectCardGal({ project, github, className }) {
  return (
    <Card as="div" key={project.name} className={cn(className)}>
      <div className="relative z-10 flex items-center justify-center w-full rounded-lg shadow-md shadow-zinc-800/5 ">
        <Image
          src={project.cover}
          alt={project.name}
          width={323}
          height={162}
          className="w-full transition-transform duration-700 rounded-xl group-hover:scale-105"
        />
      </div>
      <h2 className="z-10 mt-6 text-base font-semibold body-primary">
        <Card.Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
        </Card.Link>
      </h2>

      <Card.Description>
        <span className="line-clamp-2">{project.description}</span>
        <span className="line-clamp-2">{project.job}</span>
      </Card.Description>

      <div className="z-30 flex w-full gap-4">
        {github && (
          <Button
            className="z-40 flex items-center w-1/2 mt-6 group"
            href={project.github}
            styleBtn="solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-4 h-4 transition fill-zinc-600 dark:fill-zinc-400 group-active:fill-zinc-900 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 dark:group-active:fill-zinc-50" />
            <span className="ml-2">Github</span>
          </Button>
        )}
        <Button
          className="z-40 flex items-center w-1/2 mt-6 group"
          href={project.link}
          styleBtn="solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link2 className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />{' '}
          <span className="ml-2">Website</span>
        </Button>
      </div>
    </Card>
  )
}

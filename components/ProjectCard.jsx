import Image from 'next/image'
import { Link2 } from 'lucide-react'

import { GitHubIcon } from '@/components/SocialIcons'
import { Button } from './Button'
import { Card } from './Card'

export default function ProjectCard({ project, github }) {
  return (
    <Card as="li" key={project.name}>
      <div className="relative z-10 flex items-center justify-center w-full shadow-md rounded-xl shadow-zinc-800/5 ">
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
      <div className="z-30 flex gap-4">
        {github && (
          <Button
            className="z-40 flex items-center w-full mt-6 group"
            href={project.github}
            variant="solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-4 h-4 transition fill-zinc-600 dark:fill-zinc-400 group-active:fill-zinc-900 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 dark:group-active:fill-zinc-50" />
            <span className="ml-2">Github</span>
          </Button>
        )}
        <Button
          className="z-40 flex items-center w-full mt-6 group"
          href={project.link}
          variant="solid"
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

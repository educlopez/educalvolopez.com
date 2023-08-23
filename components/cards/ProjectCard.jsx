'use client'

import Image from 'next/image'

import { formatDatPro } from '@/lib/formatDate'
import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'

export function ProjectCardHome({ project, className, index }) {
  return (
    <Card as="div" key={project.title} className={cn('p-0', className)}>
      <div className="relative z-10 w-full h-full overflow-hidden rounded-lg">
        <div className="absolute z-10  w-full h-full -bottom-[64px] bg-gradient-to-t from-neutral-900 to-transparent"></div>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={323}
            height={162}
            className="block object-cover w-full h-full"
            priority={index <= 1}
          />
        )}
        <Card.Link href={project.slug}>{project.title}</Card.Link>
        <span className="absolute z-10 flex flex-row items-center justify-between w-full h-8 p-4 text-white flex-nowrap bottom-2">
          <p>{project.title}</p>
          <p>{formatDatPro(project.publishedAt)}</p>
        </span>
      </div>
    </Card>
  )
}

export function ProjectCardGal({ project, className, index }) {
  return (
    <Card as="div" key={project.title} className={cn('p-0', className)}>
      <div className="relative z-10 w-full h-full overflow-hidden rounded-lg">
        <div className="absolute z-10  w-full h-full -bottom-[64px] bg-gradient-to-t from-neutral-900 to-transparent "></div>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={323}
            height={162}
            className="block object-cover w-full h-full"
            priority={index <= 1}
          />
        )}
        <Card.Link href={project.slug}>{project.title}</Card.Link>
        <span className="absolute z-10 flex flex-row items-center justify-between w-full h-8 p-4 text-white flex-nowrap bottom-2">
          <p>{project.title}</p>
          <p>{formatDatPro(project.publishedAt)}</p>
        </span>
      </div>
    </Card>
  )
}

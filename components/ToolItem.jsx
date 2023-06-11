import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import LinkArrow from '@/components/LinkArrow'
import { Pill } from '@/components/Pill'

export function Toollist({ title, href, children, pills }) {
  return (
    <Card as="li" className="relative z-10">
      <LinkArrow />
      <Card.Title
        as="div"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {title}{' '}
        {pills && (
          <div className="inline-flex flex-wrap gap-2 ml-1">
            {pills.map((pill) => (
              <Pill key={pill.name} variant={pill.name} />
            ))}
          </div>
        )}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}
export function Toolgrid({ title, href, img, pills }) {
  return (
    <li className="relative z-10 group">
      <div className="block w-full p-3 overflow-hidden transition-transform duration-700 border rounded-lg shadow aspect-w-10 aspect-h-7 group bg-zinc-50/70 backdrop-blur-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 dark:backdrop-blur group-hover:scale-105 border-black/10 group-hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/20">
        <LinkArrow variant="grid" />
        <Image
          src={img}
          alt={title}
          placeholder="blur"
          width={70}
          height={70}
          className="object-cover mx-auto transition-transform duration-700 pointer-events-none "
        />
        <Link
          href={href}
          type="button"
          className="absolute inset-0 focus:outline-none"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="sr-only">Ver {title}</span>
        </Link>
        <p className="block my-2 text-sm font-medium text-center truncate pointer-events-none text-neutral-900 dark:text-white">
          {title}
        </p>
        {pills && (
          <div className="absolute inline-flex items-center justify-between gap-2 inset-x-1 top-1 ">
            {pills.map((pill) => (
              <Pill key={pill.name} variant={pill.name} />
            ))}
          </div>
        )}
      </div>
    </li>
  )
}

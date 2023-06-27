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
      <div className="block w-full p-3 overflow-hidden transition-transform duration-700 rounded-lg shadow aspect-w-10 aspect-h-7 group group-hover:scale-105 group-hover:shadow-lg box-gen">
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
        <p className="block my-2 text-sm font-medium text-center truncate pointer-events-none body-primary">
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

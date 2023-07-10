import Image from 'next/image'

import { Card } from '@/components/Card'
import LinkArrow from '@/components/LinkArrow'

export function Tool({ title, href, img, children, grid }) {
  return (
    <Card as="li" className="relative z-10">
      <LinkArrow variant="grid" />
      {grid && (
        <Image
          src={img}
          alt={title}
          placeholder="blur"
          width={70}
          height={70}
          className="object-cover mx-auto transition-transform duration-700 pointer-events-none "
        />
      )}
      <Card.Title
        as="div"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={grid && 'text-sm'}
      >
        {title}
      </Card.Title>
      {!grid && <Card.Description>{children}</Card.Description>}
    </Card>
  )
}

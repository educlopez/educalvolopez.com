import { Sparkles } from 'lucide-react'

import { formatDate } from '@/lib/formatDate'
import { cn } from '@/lib/utils'
import { Card } from '@/components/Card'
import { Pill } from '@/components/Pill'

export default function Article({ post, home, className }) {
  return (
    <article
      className={cn(
        className,
        home == false ? `md:grid md:grid-cols-4 md:items-baseline` : 'h-full'
      )}
    >
      <Card
        className={cn(className, home == false ? `md:col-span-3` : 'h-full')}
      >
        {home && <Pill icon={Sparkles}>Último Post</Pill>}
        <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
        {home && (
          <Card.Eyebrow as="time" decorate>
            {formatDate(post.publishedAt)}
          </Card.Eyebrow>
        )}
        <Card.Description className={home && `line-clamp-7`}>
          {post.description}
        </Card.Description>
        <Card.Cta>Leer artículo</Card.Cta>
      </Card>
      {!home && (
        <Card.Eyebrow as="time" className="hidden mt-1 md:block">
          {formatDate(post.publishedAt)}
        </Card.Eyebrow>
      )}
    </article>
  )
}

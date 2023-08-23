import { Sparkles } from 'lucide-react'

import { formatDate } from '@/lib/formatDate'
import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'

export default function Article({ post, home, className }) {
  return (
    <Card className={cn(className)}>
      {home && (
        <Card.Pill icon={Sparkles} className="mb-3">
          Último Post
        </Card.Pill>
      )}
      <Card.Title href={post.slug}>{post.title}</Card.Title>

      <Card.Eyebrow as="time" decorate>
        {formatDate(post.publishedAt)}
      </Card.Eyebrow>

      <Card.Description>{post.description}</Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  )
}

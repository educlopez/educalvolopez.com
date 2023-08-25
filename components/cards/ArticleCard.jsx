import { Sparkles } from 'lucide-react'

import { formatDate } from '@/lib/formatDate'
import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import { Button } from '@/components/ui/Button'

export default function Article({ post, home, className }) {
  const sortedTags = post.tags.sort((a, b) => a.localeCompare(b))
  return (
    <Card className={cn('gap-2', className)}>
      {home && <Card.Pill icon={Sparkles}>Último Post</Card.Pill>}
      <Card.Eyebrow as="time" decorate>
        {formatDate(post.publishedAt)}
      </Card.Eyebrow>
      <Card.Title href={post.slug}>{post.title}</Card.Title>
      <div className="inline-flex gap-2">
        {sortedTags.map((tag) => (
          <div
            key={tag}
            className="px-2 py-1  text-xs rounded-md box-gen before:content-['#']"
          >
            {tag}
          </div>
        ))}
      </div>

      <Card.Description className="line-clamp-6">
        {post.description}
      </Card.Description>
    </Card>
  )
}

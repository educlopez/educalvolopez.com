import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'

export default function Article({ post, home }) {
  return (
    <article className={!home && `md:grid md:grid-cols-4 md:items-baseline`}>
      <Card className={!home && `md:col-span-3`}>
        <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
        {home && (
          <Card.Eyebrow as="time" decorate>
            {formatDate(post.publishedAt)}
          </Card.Eyebrow>
        )}
        <Card.Description>{post.description}</Card.Description>
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

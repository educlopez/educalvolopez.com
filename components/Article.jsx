import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'


export default function Article({ post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow as="time" className="md:hidden">
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Leer artículo</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" className="hidden mt-1 md:block">
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  )
}

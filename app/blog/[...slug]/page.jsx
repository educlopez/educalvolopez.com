import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { ArrowLeft } from 'lucide-react'
import { Balancer } from 'react-wrap-balancer'

import { Mdx } from '@/components/Mdx-components'
import { Container } from '@/components/ui/Container'

async function getPostFromParams(params) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }
  const {
    title,
    keywords,
    publishedAt: publishedTime,
    description,
    image,
    slug,
    tags = [], // Add default value for tags
  } = post
  const ogImage = image
    ? `https://educalvolopez.com${image}`
    : `https://educalvolopez.com/api/og?title=${title}`

  return {
    title,
    description,
    keywords: keywords,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://educalvolopez.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }
  const sortedTags = post.tags.sort((a, b) => a.localeCompare(b))

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/proyectos"
            className="items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full box-gen"
          >
            <ArrowLeft className="w-4 h-4 " />
          </Link>
          <article className="pb-6 prose dark:prose-invert">
            <header className="flex flex-col">
              <h1 className="mt-6 title-primary">
                <Balancer>{post.title}</Balancer>
              </h1>
              <div className="inline-flex gap-2 mt-4">
                {sortedTags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md box-gen before:content-['#']"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex items-center order-first text-base text-neutral-700 dark:text-zinc-400">
                <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" />
                <span className="ml-3">{post.publishedAt}</span>
              </div>
            </header>
            <Mdx code={post.body.code} />
          </article>
        </div>
      </div>
    </Container>
  )
}

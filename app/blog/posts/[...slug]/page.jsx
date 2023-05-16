import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { Balancer } from 'react-wrap-balancer'

import { Container } from '@/components/Container'
import { Mdx } from '@/components/mdx-components'



async function getPostFromParams(params) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}) {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
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

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="max-w-2xl mx-auto">
          <article className="py-6 prose dark:prose-invert">
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                <Balancer>{post.title}</Balancer>
              </h1>

              <div className="flex items-center order-first text-base text-neutral-700 dark:text-zinc-400">
                <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" />
                <span className="ml-3">{post.date}</span>
              </div>
            </header>
            <Mdx code={post.body.code} />
          </article>
        </div>
      </div>
    </Container>
  )
}

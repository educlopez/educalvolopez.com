import { allBlogs } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://educalvolopez.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ['', '/about', '/blog', '/recomendaciones', '/proyectos'].map(
    (route) => ({
      url: `https://educalvolopez.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [...routes, ...blogs]
}

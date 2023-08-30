import { allPosts, allProjects } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://educalvolopez.com${post.slug}`,
    lastModified: post.publishedAt,
  }))
  const projects = allProjects.map((project) => ({
    url: `https://educalvolopez.com${project.slug}`,
    lastModified: project.publishedAt,
  }))

  const routes = ['', '/about', '/blog', '/stack', '/proyectos'].map(
    (route) => ({
      url: `https://educalvolopez.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [...routes, ...blogs, ...projects]
}

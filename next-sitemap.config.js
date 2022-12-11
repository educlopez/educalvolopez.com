/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    changefreq: 'weekly',
    priority: 0.7,
    generateRobotsTxt: true,
    exclude: ['/sinpublicar/*'],
    sitemapSize: 7000,
}
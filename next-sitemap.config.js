/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  exclude: ['/sinpublicar/*'],
  sitemapSize: 7000
};

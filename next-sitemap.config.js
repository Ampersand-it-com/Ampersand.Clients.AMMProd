/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://example.com", // твой домен
  generateRobotsTxt: false, // robots.txt тоже создаст
  outDir: "./out", // если билдишь через next export
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
};

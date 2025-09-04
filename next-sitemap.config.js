/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ammagency.com.ua",
  generateRobotsTxt: false,
  outDir: "./out",
  sitemapSize: 5000,
  exclude: ["/sent", "/en/sent", "/ua/sent", "/ru/sent"],

  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
    };
  },
};

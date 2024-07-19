/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://winuiblog.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["*/_meta"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
    ],
  },
};

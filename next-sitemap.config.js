// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.aazkal.com",
  generateRobotsTxt: true, // ✅ enables robots.txt
  sitemapSize: 7000,
  exclude: ["/admin/*"], // optional if you have private routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
    additionalSitemaps: [
      "https://www.aazkal.com/sitemap.xml", // ✅ link to your sitemap
    ],
  },
};

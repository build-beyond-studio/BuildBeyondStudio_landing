const fs = require('fs');
const path = require('path');

// Load blogs from JSON
function getAdditionalPaths() {
  const blogsPath = path.join(__dirname, 'data', 'blogs.json');
  const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

  // Add blog index page without fake lastmod
  const paths = [
    {
      loc: '/blog',
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];

  // Add individual blog posts with their actual published date
  blogs.forEach((blog) => {
    paths.push({
      loc: `/blog/${blog.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: blog.date,
    });
  });

  return paths;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://buildbeyondstudio.com',
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: false,
  exclude: [
    '/leads',
    '/leads/*',
    '/panel',
    '/panel/*',
    '/robots.txt',
    '/sitemap.xml',
    '/for-agencies',
    '/services/white-label',
  ],
  transform: async (config, url) => {
    // Exclude internal, lead, panel, robots, and non-canonical sitemap URLs
    if (
      url.startsWith('/panel') ||
      url.startsWith('/leads') ||
      url === '/robots.txt' ||
      url === '/sitemap.xml' ||
      url === '/for-agencies' ||
      url === '/services/white-label'
    ) {
      return null;
    }

    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      // omit lastmod unless reliably known
    };
  },
  additionalPaths: async (config) => {
    return getAdditionalPaths();
  },
};
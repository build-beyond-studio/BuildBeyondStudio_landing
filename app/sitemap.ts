import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://buildbeyondstudio.com',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://buildbeyondstudio.com/for-agencies',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://buildbeyondstudio.com/services/white-label',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://buildbeyondstudio.com/services/web-applications',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://buildbeyondstudio.com/services/devops',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://buildbeyondstudio.com/services/consulting',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://buildbeyondstudio.com/blog',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/how-marketing-agencies-offer-web-development-without-hiring-developers',
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/why-marketing-agencies-lose-clients-to-full-service-competitors',
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/real-cost-hiring-web-developer-vs-white-label',
      lastModified: new Date('2026-05-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/how-to-price-web-projects-marketing-agency',
      lastModified: new Date('2026-05-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/high-converting-website-increases-revenue',
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/why-branding-critical-startup-growth',
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://buildbeyondstudio.com/blog/seo-strategies-modern-businesses',
      lastModified: new Date('2026-02-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://buildbeyondstudio.com/privacy',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
import { MetadataRoute } from 'next'

import blogs from '@/data/blogs.json'
import { COURSES } from './training-programs/data'
import { CASE_STUDIES } from './case-studies/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildbeyondstudio.com';

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/for-agencies', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/white-label-web-development', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/ambikapur', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/how-we-partner', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/success-stories', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/case-studies', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/training-programs', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date('2026-07-18'),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const servicePages = [
    '/services',
    '/services/website-development',
    '/services/mobile-app-development',
    '/services/seo-aeo-geo',
    '/services/google-meta-ads',
    '/services/social-media-management',
    '/services/ai-content-video-production',
    '/services/analytics-tracking',
    '/services/white-label',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-08-19'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogs.map(blog => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const coursePages = COURSES.map(course => ({
    url: `${baseUrl}/training-programs/${course.id}`,
    lastModified: new Date('2026-07-18'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const caseStudyPages = CASE_STUDIES.map(cs => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date('2026-07-18'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...coursePages,
    ...caseStudyPages,
  ];
}
import fs from 'fs';
import path from 'path';
import type { MetadataRoute } from 'next';

import blogs from '@/data/blogs.json';
import { COURSES } from './training-programs/data';
import { CASE_STUDIES } from './case-studies/data';

const BASE_URL = 'https://buildbeyondstudio.com';

const ROUTE_CONFIG: Record<string, { priority: number; changeFrequency: string }> = {
  '/': { priority: 1.0, changeFrequency: 'weekly' },
  '/white-label-web-development': { priority: 1.0, changeFrequency: 'weekly' },
  '/white-label-web-development-uk': { priority: 1.0, changeFrequency: 'weekly' },
  '/services': { priority: 0.9, changeFrequency: 'weekly' },
  '/how-we-partner': { priority: 0.9, changeFrequency: 'weekly' },
  '/success-stories': { priority: 0.9, changeFrequency: 'weekly' },
  '/case-studies': { priority: 0.9, changeFrequency: 'weekly' },
  '/training-programs': { priority: 0.9, changeFrequency: 'weekly' },
  '/our-work': { priority: 0.9, changeFrequency: 'weekly' },
  '/ambikapur': { priority: 0.9, changeFrequency: 'monthly' },
  '/blog': { priority: 0.8, changeFrequency: 'weekly' },
  '/privacy': { priority: 0.3, changeFrequency: 'yearly' },
  '/terms': { priority: 0.3, changeFrequency: 'yearly' },
};

const EXCLUDED_DIRS = new Set(['api', 'assets', '_components', 'leads', 'panel']);

function discoverStaticRoutes(dir: string, basePath = ''): string[] {
  const routes: string[] = [];

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  const hasPage = entries.some(
    (entry) => !entry.isDirectory() && ['page.tsx', 'page.ts', 'page.jsx', 'page.js'].includes(entry.name)
  );

  if (hasPage && basePath !== '/robots.txt' && basePath !== '/sitemap.xml') {
    routes.push(basePath || '/');
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const dirName = entry.name;

    if (dirName.startsWith('[') && dirName.endsWith(']')) continue;
    if (EXCLUDED_DIRS.has(dirName)) continue;
    if (dirName.startsWith('_') || dirName.startsWith('.')) continue;

    const childPath = `${basePath}/${dirName}`;
    routes.push(...discoverStaticRoutes(path.join(dir, dirName), childPath));
  }

  return routes;
}

function getRouteConfig(routePath: string) {
  if (ROUTE_CONFIG[routePath]) {
    return ROUTE_CONFIG[routePath];
  }

  if (routePath.startsWith('/services/')) {
    return { priority: 0.8, changeFrequency: 'monthly' };
  }

  const depth = routePath.split('/').filter(Boolean).length;
  if (depth <= 1) {
    return { priority: 0.8, changeFrequency: 'monthly' };
  }
  return { priority: 0.7, changeFrequency: 'monthly' };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app');
  const staticRoutes = discoverStaticRoutes(appDir).filter(
    (route) =>
      !route.startsWith('/leads') &&
      !route.startsWith('/panel') &&
      route !== '/for-agencies' &&
      route !== '/services/white-label'
  );

  const staticPages = staticRoutes.map((route) => {
    const config = getRouteConfig(route);
    return {
      url: `${BASE_URL}${route === '/' ? '' : route}`,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });

  const blogPages = blogs.map((blog: { slug: string; date: string }) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const coursePages = COURSES.map((course) => ({
    url: `${BASE_URL}/training-programs/${course.id}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const caseStudyPages = CASE_STUDIES.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...staticPages, ...blogPages, ...coursePages, ...caseStudyPages];
  const seen = new Set<string>();
  const deduped: MetadataRoute.Sitemap = [];

  for (const page of allPages) {
    if (!seen.has(page.url)) {
      seen.add(page.url);
      deduped.push(page);
    }
  }

  return deduped;
}

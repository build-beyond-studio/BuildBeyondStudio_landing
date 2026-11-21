import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { MetadataRoute } from 'next';

import blogs from '@/data/blogs.json';
import { CASE_STUDIES } from './case-studies/data';
import { COURSES } from './training-programs/data';

const BASE_URL = 'https://buildbeyondstudio.com';
const APP_DIR = path.join(process.cwd(), 'app');
const PAGE_FILES = new Set(['page.tsx', 'page.ts', 'page.jsx', 'page.js']);

// Exclude private and duplicate-canonical routes even if their noindex metadata changes.
const EXCLUDED_ROUTES = new Set([
  '/leads',
  '/panel',
  '/for-agencies',
  '/services/white-label',
]);

export const dynamic = 'force-static';

type RouteFile = { route: string; file: string };
type SitemapEntry = MetadataRoute.Sitemap[number];

function isExcludedRoute(route: string): boolean {
  for (const excluded of EXCLUDED_ROUTES) {
    if (route === excluded || route.startsWith(`${excluded}/`)) return true;
  }
  return false;
}

function stripRouteGroups(segments: string[]): string[] {
  return segments.filter((segment) => !(segment.startsWith('(') && segment.endsWith(')')));
}

async function findPages(directory: string, routeSegments: string[] = []): Promise<RouteFile[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const page = entries.find((entry) => entry.isFile() && PAGE_FILES.has(entry.name));
  const routes: RouteFile[] = [];

  if (page && !routeSegments.some((segment) => segment.startsWith('[') && segment.endsWith(']'))) {
    const urlSegments = stripRouteGroups(routeSegments);
    const route = `/${urlSegments.join('/')}`.replace(/\/+$/, '') || '/';
    routes.push({ route, file: path.join(directory, page.name) });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (
      entry.name.startsWith('_') ||
      entry.name.startsWith('.') ||
      entry.name === 'api' ||
      entry.name === 'assets'
    ) {
      continue;
    }
    routes.push(
      ...(await findPages(path.join(directory, entry.name), [...routeSegments, entry.name]))
    );
  }
  return routes;
}

async function hasNoindexDirective(routeFile: RouteFile): Promise<boolean> {
  const sourceFiles = [routeFile.file];
  let directory = path.dirname(routeFile.file);
  while (directory === APP_DIR || directory.startsWith(`${APP_DIR}${path.sep}`)) {
    for (const name of ['layout.tsx', 'layout.ts', 'layout.jsx', 'layout.js']) {
      sourceFiles.push(path.join(directory, name));
    }
    if (directory === APP_DIR) break;
    directory = path.dirname(directory);
  }

  for (const file of new Set(sourceFiles)) {
    try {
      const source = await readFile(file, 'utf8');
      if (/\bindex\s*:\s*false\b/.test(source)) return true;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }
  }
  return false;
}

async function getRedirectSources(): Promise<Set<string>> {
  const configPath = path.join(process.cwd(), 'next.config.mjs');
  const configSource = await readFile(configPath, 'utf8');
  const redirectsBlock = configSource.match(
    /async\s+redirects\s*\(\s*\)\s*\{\s*return\s*\[([\s\S]*?)\]\s*\}/
  );
  if (!redirectsBlock) {
    throw new Error('Could not read the static redirects() list from next.config.mjs');
  }
  const sources = [...redirectsBlock[1].matchAll(/\bsource\s*:\s*(['"])(.*?)\1/g)].map(
    ([, , source]) => source
  );
  if (sources.length === 0) {
    throw new Error('The redirects() list in next.config.mjs contains no source routes');
  }
  return new Set(sources);
}

function canonicalEntry(route: string, lastModified?: Date): SitemapEntry {
  const pathname = route === '/' ? '' : route.replace(/\/+$/, '');
  return {
    url: `${BASE_URL}${pathname}`,
    ...(lastModified ? { lastModified } : {}),
  };
}

function datedEntry(
  route: string,
  date: string | undefined
): SitemapEntry {
  const lastModified = date ? new Date(date) : undefined;
  return canonicalEntry(
    route,
    lastModified && !Number.isNaN(lastModified.getTime()) ? lastModified : undefined
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [discoveredPages, redirectSources] = await Promise.all([
    findPages(APP_DIR),
    getRedirectSources(),
  ]);
  const staticPages = await Promise.all(
    discoveredPages
      .filter((page) => !isExcludedRoute(page.route) && !redirectSources.has(page.route))
      .map(async (page) => {
        if (await hasNoindexDirective(page)) return null;
        return canonicalEntry(page.route);
      })
  );

  const dataPages: SitemapEntry[] = [
    ...blogs.map((blog: { slug: string; date?: string; updatedAt?: string; updatedDate?: string }) =>
      datedEntry(`/blog/${blog.slug}`, blog.updatedDate ?? blog.updatedAt ?? blog.date)
    ),
    ...COURSES.map((course) =>
      datedEntry(
        `/training-programs/${course.id}`,
        'date' in course && typeof course.date === 'string' ? course.date : undefined
      )
    ),
    ...CASE_STUDIES.map((study) =>
      datedEntry(
        `/case-studies/${study.slug}`,
        'date' in study && typeof study.date === 'string' ? study.date : undefined
      )
    ),
  ];

  const unique = new Map<string, SitemapEntry>();
  for (const page of [...staticPages, ...dataPages]) {
    if (!page) continue;
    const url = new URL(page.url);
    url.search = '';
    url.hash = '';
    if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/+$/, '');
    url.hostname = 'buildbeyondstudio.com';
    url.protocol = 'https:';
    const normalized = { ...page, url: url.href.replace(/\/$/, url.pathname === '/' ? '' : '') };
    if (url.pathname === '/') normalized.url = BASE_URL;
    if (!unique.has(normalized.url)) unique.set(normalized.url, normalized);
  }
  return [...unique.values()];
}

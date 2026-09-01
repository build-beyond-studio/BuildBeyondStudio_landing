import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

import blogs from '@/data/blogs.json'
import { COURSES } from './training-programs/data'
import { CASE_STUDIES } from './case-studies/data'

const BASE_URL = 'https://buildbeyondstudio.com'

/**
 * Priority & changeFrequency configuration for known route patterns.
 * Routes not listed here get sensible defaults based on their depth.
 */
const ROUTE_CONFIG: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
  '/': { priority: 1.0, changeFrequency: 'weekly' },
  '/for-agencies': { priority: 1.0, changeFrequency: 'weekly' },
  '/white-label-web-development': { priority: 1.0, changeFrequency: 'weekly' },
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
}

/**
 * Directories to exclude from sitemap (API routes, assets, etc.)
 */
const EXCLUDED_DIRS = new Set(['api', 'assets', '_components'])

/**
 * Recursively scans the app directory to discover all static routes
 * (directories containing a page.tsx that are NOT dynamic [slug] routes).
 */
function discoverStaticRoutes(dir: string, basePath: string = ''): string[] {
  const routes: string[] = []

  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return routes
  }

  // Check if this directory has a page.tsx (meaning it's a valid route)
  const hasPage = entries.some(
    (e) => !e.isDirectory() && (e.name === 'page.tsx' || e.name === 'page.ts' || e.name === 'page.jsx' || e.name === 'page.js')
  )

  if (hasPage) {
    routes.push(basePath || '/')
  }

  // Recurse into subdirectories
  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const dirName = entry.name

    // Skip dynamic route segments — they are handled separately
    if (dirName.startsWith('[') && dirName.endsWith(']')) continue

    // Skip excluded directories
    if (EXCLUDED_DIRS.has(dirName)) continue

    // Skip hidden/internal directories
    if (dirName.startsWith('_') || dirName.startsWith('.')) continue

    const childPath = `${basePath}/${dirName}`
    routes.push(...discoverStaticRoutes(path.join(dir, dirName), childPath))
  }

  return routes
}

/**
 * Returns default priority and changeFrequency for a route based on its pattern.
 */
function getRouteConfig(routePath: string) {
  // Check for an explicit config first
  if (ROUTE_CONFIG[routePath]) {
    return ROUTE_CONFIG[routePath]
  }

  // Service sub-pages
  if (routePath.startsWith('/services/')) {
    return { priority: 0.8, changeFrequency: 'monthly' as const }
  }

  // Fallback based on depth
  const depth = routePath.split('/').filter(Boolean).length
  if (depth <= 1) {
    return { priority: 0.8, changeFrequency: 'monthly' as const }
  }
  return { priority: 0.7, changeFrequency: 'monthly' as const }
}

/**
 * Generates a fully dynamic sitemap by:
 * 1. Scanning the filesystem for all page.tsx files (static routes)
 * 2. Resolving dynamic [slug] routes from data sources (blogs, courses, case studies)
 *
 * Any new page.tsx added to the app directory is automatically included.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const appDir = path.join(process.cwd(), 'app')

  // ── 1. Discover all static routes from the filesystem ──
  const staticRoutes = discoverStaticRoutes(appDir)

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    const config = getRouteConfig(route)
    return {
      url: `${BASE_URL}${route === '/' ? '' : route}`,
      lastModified: now,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    }
  })

  // ── 2. Resolve dynamic [slug] routes from data sources ──

  // Blog posts from blogs.json
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Training program courses
  const coursePages: MetadataRoute.Sitemap = COURSES.map((course: { id: string }) => ({
    url: `${BASE_URL}/training-programs/${course.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Case studies
  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── 3. Combine and deduplicate ──
  const allPages = [...staticPages, ...blogPages, ...coursePages, ...caseStudyPages]

  // Deduplicate by URL (in case a dynamic route overlaps with a discovered static route)
  const seen = new Set<string>()
  const deduped: MetadataRoute.Sitemap = []
  for (const page of allPages) {
    if (!seen.has(page.url)) {
      seen.add(page.url)
      deduped.push(page)
    }
  }

  return deduped
}
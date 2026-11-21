import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, '.next', 'server', 'app');
const SITEMAP_FILE = path.join(BUILD_DIR, 'sitemap.xml.body');
const VERCEL_STATIC_DIR = path.join(ROOT, '.vercel', 'output', 'static');
const BASE_URL = 'https://buildbeyondstudio.com';
const SOURCE_DIRS = ['app', 'components', 'data'];
const OUTPUT_UNAVAILABLE_MESSAGE = 'SEO check skipped: build output not available on Vercel';

class BuildOutputUnavailableError extends Error {}

function skipForUnavailableVercelOutput() {
  if (!process.env.VERCEL) return false;
  console.log(OUTPUT_UNAVAILABLE_MESSAGE);
  return true;
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

async function loadRedirects() {
  const { default: config } = await import(pathToFileURL(path.join(ROOT, 'next.config.mjs')).href);
  return typeof config.redirects === 'function' ? config.redirects() : [];
}

function isRedirectPath(pathname, redirects) {
  return redirects.some(({ source }) => {
    const pattern = source
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/:[^/]+/g, '[^/]+')
      .replace(/\\\*/g, '.*');
    return new RegExp(`^${pattern}/?$`).test(pathname);
  });
}

function getRenderedFiles(pathname) {
  const relative = pathname === '/' ? 'index.html' : `${pathname.replace(/^\/+/, '')}.html`;
  const candidates = [path.join(BUILD_DIR, relative)];
  if (pathname !== '/') {
    const routePath = pathname.replace(/^\/+/, '');
    candidates.push(
      path.join(VERCEL_STATIC_DIR, relative),
      path.join(VERCEL_STATIC_DIR, routePath),
      path.join(VERCEL_STATIC_DIR, routePath, 'index.html')
    );
  } else {
    candidates.push(path.join(VERCEL_STATIC_DIR, relative));
  }
  return candidates;
}

async function readFirstExistingFile(files) {
  for (const file of files) {
    try {
      return { file, content: await readFile(file, 'utf8') };
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return null;
}

async function readBuiltSitemap() {
  const result = await readFirstExistingFile([
    SITEMAP_FILE,
    path.join(VERCEL_STATIC_DIR, 'sitemap.xml'),
    path.join(VERCEL_STATIC_DIR, 'sitemap.xml.body'),
  ]);
  if (!result) {
    throw new BuildOutputUnavailableError(
      `Built sitemap not found. Checked ${SITEMAP_FILE} and Vercel static output ${VERCEL_STATIC_DIR}.`
    );
  }
  return result.content;
}

function plainText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|apos|lt|gt|#\d+|#x[0-9a-f]+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function getTagAttribute(html, tag, attribute, matcher = () => true) {
  const tags = html.match(new RegExp(`<${tag}\\b[^>]*>`, 'gi')) ?? [];
  for (const element of tags) {
    const attributes = Object.fromEntries(
      [...element.matchAll(/([^\s=]+)=["']([^"']*)["']/g)].map(([, key, value]) => [
        key.toLowerCase(),
        value,
      ])
    );
    if (matcher(attributes)) return attributes[attribute.toLowerCase()];
  }
  return undefined;
}

function getH1Count(html) {
  return [...html.matchAll(/<h1\b[^>]*>/gi)].length;
}

function normalizeInternalPath(value) {
  try {
    const url = new URL(value, BASE_URL);
    if (url.origin !== BASE_URL) return null;
    return url.pathname.replace(/\/+$/, '') || '/';
  } catch {
    return null;
  }
}

async function walkFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(file)));
    else files.push(file);
  }
  return files;
}

async function validateInternalLinks(redirects, errors) {
  const sourcePattern = /\bhref\s*=\s*["'`]([^"'`]+)["'`]/g;
  for (const directory of SOURCE_DIRS) {
    const files = await walkFiles(path.join(ROOT, directory));
    for (const file of files) {
      if (!/\.(?:tsx?|jsx?|json)$/.test(file)) continue;
      const source = await readFile(file, 'utf8');
      for (const match of source.matchAll(sourcePattern)) {
        const pathname = normalizeInternalPath(match[1]);
        if (pathname && isRedirectPath(pathname, redirects)) {
          errors.push(
            `Internal link in ${path.relative(ROOT, file)} points to redirect source ${pathname}`
          );
        }
      }
    }
  }
}

function inspectJsonLd(html, canonical, errors, route) {
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, source] of scripts) {
    try {
      const data = JSON.parse(source.replace(/&quot;/g, '"'));
      const inspect = (value) => {
        if (!value || typeof value !== 'object') return;
        if (typeof value.mainEntityOfPage === 'string') {
          assert(value.mainEntityOfPage === canonical, `${route}: JSON-LD mainEntityOfPage does not match canonical`, errors);
        } else if (value.mainEntityOfPage?.['@id']) {
          assert(value.mainEntityOfPage['@id'] === canonical, `${route}: JSON-LD mainEntityOfPage does not match canonical`, errors);
        }
        for (const nested of Object.values(value)) {
          if (Array.isArray(nested)) nested.forEach(inspect);
          else if (nested && typeof nested === 'object') inspect(nested);
        }
      };
      inspect(data);
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }
}

async function main() {
  const errors = [];
  const warnings = [];
  const redirects = await loadRedirects();
  const sitemap = await readBuiltSitemap();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url.trim());
  const seen = new Set();
  const titles = new Map();
  const descriptions = new Map();
  const pages = new Map();
  const metadataLengthWarnings = [];
  const imageWarnings = [];

  assert(urls.length > 0, 'The built sitemap contains no URLs', errors);

  for (const url of urls) {
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      errors.push(`Invalid sitemap URL: ${url}`);
      continue;
    }

    const pathname = parsed.pathname || '/';
    assert(!seen.has(url), `Duplicate sitemap URL: ${url}`, errors);
    seen.add(url);
    assert(parsed.protocol === 'https:', `Non-HTTPS sitemap URL: ${url}`, errors);
    assert(parsed.host === 'buildbeyondstudio.com', `Non-canonical sitemap host: ${url}`, errors);
    assert(!parsed.search && !parsed.hash, `Query string or fragment in sitemap URL: ${url}`, errors);
    assert(pathname === '/' || !pathname.endsWith('/'), `Trailing slash in sitemap URL: ${url}`, errors);
    assert(!isRedirectPath(pathname, redirects), `Sitemap URL is a redirect source: ${url}`, errors);

    const renderedPage = await readFirstExistingFile(getRenderedFiles(pathname));
    if (!renderedPage) {
      if (skipForUnavailableVercelOutput()) return;
      errors.push(`No rendered HTML for sitemap URL: ${url}`);
      continue;
    }
    const html = renderedPage.content;

    const canonical = getTagAttribute(html, 'link', 'href', (attributes) =>
      attributes.rel?.toLowerCase() === 'canonical'
    );
    const title = decodeHtml((html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i) ?? [])[1]?.trim() ?? '');
    const description = decodeHtml(getTagAttribute(html, 'meta', 'content', (attributes) =>
      attributes.name?.toLowerCase() === 'description'
    ) ?? '');
    const robots = getTagAttribute(html, 'meta', 'content', (attributes) =>
      attributes.name?.toLowerCase() === 'robots'
    ) ?? '';
    const h1Count = getH1Count(html);
    const main = (html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i) ?? [])[1] ?? html;
    const wordCount = (plainText(main).match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).length;

    assert(canonical === url, `${url}: rendered canonical ${canonical ?? '(missing)'} does not match URL`, errors);
    assert(!/\bnoindex\b/i.test(robots), `${url}: rendered as noindex`, errors);
    assert(Boolean(title), `${url}: missing title`, errors);
    assert(Boolean(description), `${url}: missing meta description`, errors);
    assert(h1Count === 1, `${url}: expected exactly one H1, found ${h1Count}`, errors);
    if (title.length > 60) {
      metadataLengthWarnings.push(`${url}: title is ${title.length} characters (maximum 60)`);
    }
    if (description.length < 120 || description.length > 160) {
      metadataLengthWarnings.push(
        `${url}: meta description is ${description.length} characters (target 120-160)`
      );
    }

    if (titles.has(title)) errors.push(`Duplicate title on ${url} and ${titles.get(title)}`);
    else titles.set(title, url);
    if (descriptions.has(description)) errors.push(`Duplicate description on ${url} and ${descriptions.get(description)}`);
    else descriptions.set(description, url);

    if (wordCount < 300) warnings.push(`${url}: main content has ${wordCount} words (<300)`);
    for (const [index, image] of [...html.matchAll(/<img\b[^>]*>/gi)].entries()) {
      const attributes = Object.fromEntries(
        [...image[0].matchAll(/([^\s=]+)=["']([^"']*)["']/g)].map(([, key, value]) => [
          key.toLowerCase(),
          value,
        ])
      );
      if (!('alt' in attributes)) {
        imageWarnings.push(`${url}: image ${index + 1} is missing alt text`);
      }
      const usesFillLayout = attributes['data-nimg'] === 'fill';
      if (!usesFillLayout && (!attributes.width || !attributes.height)) {
        imageWarnings.push(`${url}: image ${index + 1} is missing explicit width/height`);
      }
      if (!attributes.loading && !attributes.fetchpriority && !attributes['data-nimg']) {
        imageWarnings.push(`${url}: image ${index + 1} has no loading or fetch-priority hint`);
      }
    }
    inspectJsonLd(html, url, errors, url);
    pages.set(pathname, html);
  }

  const linksByPath = new Map();
  for (const [pathname, html] of pages) {
    const links = [...html.matchAll(/\bhref=["']([^"'#]+)["']/gi)]
      .map(([, href]) => normalizeInternalPath(href))
      .filter((target) => target && pages.has(target));
    linksByPath.set(pathname, links);
  }

  const depths = new Map([['/', 0]]);
  const queue = ['/'];
  while (queue.length) {
    const current = queue.shift();
    const depth = depths.get(current);
    if (depth >= 3) continue;
    for (const target of linksByPath.get(current) ?? []) {
      if (!depths.has(target)) {
        depths.set(target, depth + 1);
        queue.push(target);
      }
    }
  }
  for (const pathname of pages.keys()) {
    if (!depths.has(pathname) || depths.get(pathname) > 3) {
      errors.push(`${pathname}: not reachable within 3 internal clicks from the homepage`);
    }
  }

  await validateInternalLinks(redirects, errors);

  console.table([
    { Check: 'Sitemap URLs', Result: urls.length },
    { Check: 'Rendered pages checked', Result: pages.size },
    { Check: 'Reachable within 3 clicks', Result: depths.size },
    { Check: 'Warnings (<300 words)', Result: warnings.length },
    { Check: 'Title/description length warnings', Result: metadataLengthWarnings.length },
    { Check: 'Image alt/dimension warnings', Result: imageWarnings.length },
    { Check: 'Errors', Result: errors.length },
  ]);
  if (warnings.length) {
    console.warn('\nContent warnings:\n' + warnings.map((warning) => `- ${warning}`).join('\n'));
  }
  if (metadataLengthWarnings.length) {
    console.warn(
      '\nMetadata length warnings:\n' +
        metadataLengthWarnings.map((warning) => `- ${warning}`).join('\n')
    );
  }
  if (imageWarnings.length) {
    console.warn('\nImage warnings:\n' + imageWarnings.map((warning) => `- ${warning}`).join('\n'));
  }
  if (errors.length) {
    console.error('\nSEO validation failed:\n' + errors.map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
    return;
  }
  console.log('SEO validation passed.');
}

main().catch((error) => {
  if (process.env.VERCEL && error instanceof BuildOutputUnavailableError) {
    skipForUnavailableVercelOutput();
    return;
  }
  console.error('SEO validation could not complete:', error);
  process.exitCode = 1;
});

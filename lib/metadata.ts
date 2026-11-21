import { Metadata } from 'next';

/**
 * Helper to build metadata with self-referencing canonical URL
 * @param path The path of the route (e.g. '/' or '/services/white-label')
 * @param title Optional title
 * @param description Optional description
 * @param extra Optional extra Metadata fields
 */
export function buildMetadata(path: string, metadata: Partial<Metadata>): Metadata;
export function buildMetadata(
  path: string,
  title?: string,
  description?: string,
  extra?: Partial<Metadata>
): Metadata;
export function buildMetadata(
  path: string,
  titleOrMetadata?: string | Partial<Metadata>,
  description?: string,
  metadataExtra: Partial<Metadata> = {}
): Metadata {
  const baseUrl = 'https://buildbeyondstudio.com';
  const pathname = new URL(path, baseUrl).pathname.replace(/\/+$/, '') || '/';
  const canonicalUrl = pathname === '/' ? baseUrl : `${baseUrl}${pathname}`;
  const extra = typeof titleOrMetadata === 'object' ? titleOrMetadata : metadataExtra;
  const title =
    typeof titleOrMetadata === 'string'
      ? titleOrMetadata
      : typeof extra.title === 'string'
        ? extra.title
        : undefined;
  const pageDescription = description ?? extra.description ?? undefined;
  const titleSuffix = ' | BBS';
  const maxTitleLength = 60;
  const cleanTitle = title
    ?.trim()
    .replace(/\s*\|\s*(?:BBS(?: Academy)?|Build Beyond Studio)$/i, '');
  const shortenedTitle = cleanTitle
    ? cleanTitle.length + titleSuffix.length <= maxTitleLength
        ? cleanTitle
        : `${cleanTitle.slice(0, maxTitleLength - titleSuffix.length - 1).replace(/\s+\S*$/, '').trim()}…`
    : 'Build Beyond Studio';
  const fullTitle = `${shortenedTitle}${titleSuffix}`;
  const defaultImage = {
    url: 'https://buildbeyondstudio.com/og-home.png',
    width: 1200,
    height: 630,
    alt: 'Build Beyond Studio',
  };
  const openGraphType =
    extra.openGraph && 'type' in extra.openGraph ? extra.openGraph.type : 'website';
  const twitterCard =
    extra.twitter && 'card' in extra.twitter ? extra.twitter.card : 'summary_large_image';

  const mergedOpenGraph = {
    ...extra.openGraph,
    title: extra.openGraph?.title ?? fullTitle,
    description: extra.openGraph?.description ?? pageDescription,
    url: canonicalUrl,
    type: openGraphType,
    siteName: extra.openGraph?.siteName ?? 'Build Beyond Studio',
    images: extra.openGraph?.images ?? [defaultImage],
  };

  const mergedTwitter = {
    ...extra.twitter,
    card: twitterCard,
    title: extra.twitter?.title ?? fullTitle,
    description: extra.twitter?.description ?? pageDescription,
    images: extra.twitter?.images ?? [defaultImage.url],
  };

  return {
    ...extra,
    ...(title ? { title: { absolute: fullTitle } } : {}),
    ...(pageDescription ? { description: pageDescription } : {}),
    alternates: {
      ...extra.alternates,
      canonical: canonicalUrl,
    },
    openGraph: mergedOpenGraph,
    twitter: mergedTwitter,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  const baseUrl = 'https://buildbeyondstudio.com';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') || item.path.startsWith('#')
        ? (item.path.startsWith('#') ? `${baseUrl}/${item.path}` : item.path)
        : `${baseUrl}${item.path.startsWith('/') ? item.path : '/' + item.path}`,
    })),
  };
}

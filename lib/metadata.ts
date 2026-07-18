import { Metadata } from 'next';

/**
 * Helper to build metadata with self-referencing canonical URL
 * @param path The path of the route (e.g. '/' or '/services/white-label')
 * @param title Optional title
 * @param description Optional description
 * @param extra Optional extra Metadata fields
 */
export function buildMetadata(
  path: string,
  title?: string,
  description?: string,
  extra: Partial<Metadata> = {}
): Metadata {
  const baseUrl = 'https://buildbeyondstudio.com';
  
  // Normalize the path
  let cleanPath = path;
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  if (cleanPath.endsWith('/') && cleanPath.length > 1) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const canonicalUrl = cleanPath === '/' ? baseUrl : `${baseUrl}${cleanPath}`;
  const fullTitle = title 
    ? `${title} | Build Beyond Studio` 
    : 'Build Beyond Studio | White-Label Web Dev Partner for Marketing Agencies';

  const mergedOpenGraph = {
    title: fullTitle,
    description: description,
    url: canonicalUrl,
    type: 'website',
    siteName: 'Build Beyond Studio',
    ...extra.openGraph,
  };

  const mergedTwitter = {
    card: 'summary_large_image',
    title: fullTitle,
    description: description,
    ...extra.twitter,
  };

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...extra,
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

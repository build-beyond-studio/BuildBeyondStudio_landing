export const REDIRECTS = [
  {
    source: '/services/analytics-tracking',
    destination: '/services/tracking-conversion-setup',
    statusCode: 301,
  },
  {
    source: '/services/tracking-funnels',
    destination: '/services/tracking-conversion-setup',
    statusCode: 301,
  },
  {
    source: '/services/web-applications',
    destination: '/services/website-development',
    statusCode: 301,
  },
  {
    source: '/services/custom-web-applications',
    destination: '/services/website-development',
    statusCode: 301,
  },
  {
    source: '/services/devops-infrastructure',
    destination: '/services/devops-hosting-support',
    statusCode: 301,
  },
  {
    source: '/services/devops',
    destination: '/services/devops-hosting-support',
    statusCode: 301,
  },
  {
    source: '/services/aeo-geo',
    destination: '/services/seo-aeo-geo',
    statusCode: 301,
  },
  {
    source: '/services/performance-ads',
    destination: '/services',
    statusCode: 301,
  },
  {
    source: '/services/social-media-management',
    destination: '/services',
    statusCode: 301,
  },
  {
    source: '/services/ai-content-video-production',
    destination: '/services',
    statusCode: 301,
  },
  {
    source: '/services/ai-visuals',
    destination: '/services',
    statusCode: 301,
  },
];

export const REDIRECT_SOURCES = REDIRECTS.map(({ source }) => source);

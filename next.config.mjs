/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  serverExternalPackages: ['nodemailer'],
  async redirects() {
    return [
      // Old service slugs → new service slugs (301 permanent — SEO equity preserved)
      {
        source: '/services/custom-web-applications',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/services/devops-infrastructure',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/technical-consulting',
        destination: '/services/seo-aeo-geo',
        permanent: true,
      },
      {
        source: '/services/aeo-geo',
        destination: '/services/seo-aeo-geo',
        permanent: true,
      },
      {
        source: '/services/performance-ads',
        destination: '/services/google-meta-ads',
        permanent: true,
      },
      {
        source: '/services/tracking-funnels',
        destination: '/services/ai-content-video-production',
        permanent: true,
      },
      {
        source: '/services/ai-visuals',
        destination: '/services/analytics-tracking',
        permanent: true,
      },
      // Legacy/duplicate slugs
      {
        source: '/services/web-applications',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/services/devops',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/consulting',
        destination: '/services/seo-aeo-geo',
        permanent: true,
      },
      {
        source: '/services/aeo',
        destination: '/services/seo-aeo-geo',
        permanent: true,
      },
      {
        source: '/services/seo',
        destination: '/services/seo-aeo-geo',
        permanent: true,
      },
      {
        source: '/services/geo',
        destination: '/services/seo-aeo-geo',
        permanent: true,
      },
      {
        source: '/services/ads-lead-generation',
        destination: '/services/google-meta-ads',
        permanent: true,
      },
      {
        source: '/services/ai-ad-creative',
        destination: '/services/ai-content-video-production',
        permanent: true,
      },
      {
        source: '/services/tracking-attribution',
        destination: '/services/analytics-tracking',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

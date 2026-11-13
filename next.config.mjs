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
    ]
  },
}

export default nextConfig

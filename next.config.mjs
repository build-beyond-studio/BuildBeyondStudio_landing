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
        source: '/services/seo-aeo-geo',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/google-meta-ads',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/social-media-management',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/ai-content-video-production',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/analytics-tracking',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/aeo-geo',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/performance-ads',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/tracking-funnels',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/ai-visuals',
        destination: '/services',
        permanent: true,
      },
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
        source: '/services/web-applications',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/services/devops',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

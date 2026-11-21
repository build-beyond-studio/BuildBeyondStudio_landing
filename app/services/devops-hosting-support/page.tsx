import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata('/services/devops-hosting-support', {
  title: "White Label DevOps & Cloud Hosting Support for Agencies | BBS",
  description: "DevOps and cloud hosting for marketing agencies: production deployments, CI/CD, SSL, DNS, and monitoring for client projects under your brand.",
  openGraph: {
    title: "White Label DevOps & Cloud Hosting Support for Agencies | BBS",
    description: "DevOps and cloud hosting for marketing agencies: production deployments, CI/CD, SSL, DNS, and monitoring for client projects under your brand.",
    type: "website",
  },
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'DevOps & Hosting Support', path: '/services/devops-hosting-support' },
])

const faqs = [
  {
    question: "What hosting platforms does BBS support?",
    answer: "We support Vercel, AWS (EC2, S3, CloudFront, Lambda, ECS), Google Cloud Platform (GCP), DigitalOcean, Hostinger, cPanel/WHM, and Dockerized VPS environments."
  },
  {
    question: "Can BBS handle DNS and SSL configuration on client domains?",
    answer: "Yes. We configure DNS records (Cloudflare, GoDaddy, Namecheap), set up wildcard SSL certificates, enforce HTTPS redirects, and configure reverse proxies without client disruption."
  },
  {
    question: "How do you handle CI/CD automated deployments?",
    answer: "We set up automated GitHub Actions or GitLab CI/CD pipelines that automatically build, test, and deploy code to staging or production whenever your team merges approved changes."
  },
  {
    question: "Do you offer emergency downtime support?",
    answer: "Yes. Under our agency maintenance retainers, we provide automated uptime monitoring (pinging every 60 seconds) and rapid resolution for unexpected server or SSL issues."
  },
  {
    question: "Do we retain complete ownership of hosting accounts?",
    answer: "Yes. All infrastructure is deployed on your agency's or your client's cloud accounts. We do not host your clients on proprietary servers, preventing vendor lock-in."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DevOps & Cloud Hosting Support for Agencies",
  "serviceType": "White Label Infrastructure Support",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "DevOps, deployment pipelines, DNS setup, and cloud hosting management delivered white-label for marketing agencies."
}

export default function DevOpsHostingPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            Infrastructure & Operations
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.08]">
            DevOps & Cloud Hosting Support for Marketing Agencies
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Offload the complexity of server deployments, DNS mapping, SSL certificates, CI/CD automation, and cloud infrastructure to a dedicated technical partner.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['Vercel & AWS Deployments', 'CI/CD GitHub Actions', 'DNS & Cloudflare Setup', 'SSL Certificates', 'Automated Backups'].map((badge) => (
              <span 
                key={badge} 
                className="px-4 py-1.5 rounded-full bg-white border border-[rgba(200,134,10,0.2)] text-[12px] font-bold text-[#C8860A] shadow-sm uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 space-y-16">
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4">
            Eliminate Server Crashes and Deployment Bottlenecks
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8">
            Managing client servers, DNS records, staging URLs, and production cutovers consumes valuable hours and exposes agencies to reputation risk if a website goes down. BBS manages your cloud operations quietly in the background.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
              <div className="font-bold text-black mb-1.5">Production Deployments</div>
              <p className="text-gray-600 font-light leading-relaxed">
                Smooth zero-downtime cutovers, domain mapping, SSL certificate provisioning, and DNS migration management.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
              <div className="font-bold text-black mb-1.5">CI/CD Pipelines</div>
              <p className="text-gray-600 font-light leading-relaxed">
                Automated deployment pipelines via GitHub Actions ensuring code automatically deploys to preview and production branches.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
              <div className="font-bold text-black mb-1.5">Cloud Migration</div>
              <p className="text-gray-600 font-light leading-relaxed">
                Migrating slow client websites from congested shared hosting onto fast modern cloud setups (AWS, Vercel, DigitalOcean).
              </p>
            </div>
          </div>
        </div>

        {/* Supported Environments */}
        <div className="bg-[#FAF9F5] border border-[rgba(200,134,10,0.18)] rounded-3xl p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-black text-black tracking-tight mb-6">
            Supported Cloud & Hosting Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700 font-light">
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Vercel & Netlify:</strong> Edge SSR, Serverless functions, domain routing, and preview staging links.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Amazon Web Services (AWS):</strong> EC2, S3 asset buckets, CloudFront CDN, and RDS database management.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Cloudflare CDN & Security:</strong> DDoS protection, Web Application Firewall (WAF), and DNS proxying.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Docker & Linux VPS:</strong> Containerized microservices, Nginx reverse proxying, and automated cron backups.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Reliable Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Need DevOps Support for an Agency Project?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Let us handle deployment, server configurations, or staging pipelines under strict NDA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg text-sm"
              style={{
                background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
                boxShadow: '0 4px 16px rgba(200,134,10,0.30)'
              }}
            >
              Send a Project Brief →
            </Link>
            <Link
              href="/services/website-app-maintenance"
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              See Maintenance Retainers
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  )
}

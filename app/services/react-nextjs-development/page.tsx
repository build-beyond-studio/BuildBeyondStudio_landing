import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: "React & Next.js Development for Marketing Agencies | BBS",
  description: "White-label React and Next.js engineering for marketing agencies. Production-grade server-side rendering, App Router architecture, and full IP handover.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/services/react-nextjs-development",
  },
  openGraph: {
    title: "React & Next.js Development for Marketing Agencies | BBS",
    description: "White-label React and Next.js engineering for marketing agencies. Production-grade server-side rendering, App Router architecture, and full IP handover.",
    url: "https://buildbeyondstudio.com/services/react-nextjs-development",
    type: "website",
  },
}

const faqs = [
  {
    question: "When should an agency choose Next.js over a CMS like WordPress?",
    answer: "Next.js is the preferred choice when an agency client requires sub-second load times, complex interactive dashboards, custom SaaS features, high Core Web Vitals scores, or custom API integrations that traditional monolithic CMS platforms struggle to deliver smoothly."
  },
  {
    question: "Do you use Next.js App Router and TypeScript?",
    answer: "Yes. Our standard modern stack utilizes Next.js App Router, React Server Components (RSC), TypeScript for strict type safety, and Tailwind CSS for maintainable design systems."
  },
  {
    question: "Can we connect a headless CMS to Next.js?",
    answer: "Yes. We frequently integrate headless CMS platforms like Sanity, Strapi, Contentful, or headless WordPress, allowing your client's marketing team to edit content while preserving Next.js speed and security."
  },
  {
    question: "How do you handle hosting and deployment for Next.js builds?",
    answer: "We deploy production Next.js apps to Vercel, AWS (via SST / Amplify / ECS), or VPS containers with automated CI/CD pipelines, custom domain mapping, and edge CDN caching."
  },
  {
    question: "Do we receive the full source code and repository?",
    answer: "Always. 100% of the TypeScript/React source code, component libraries, and build scripts are transferred directly to your agency's GitHub/GitLab account upon completion."
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
  "name": "React & Next.js Development for Agencies",
  "serviceType": "White Label Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "White-label React and Next.js engineering for marketing agencies in India. High performance App Router builds delivered under your brand."
}

export default function ReactNextjsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            Engineering Specialisation
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.08]">
            React & Next.js Development for Marketing Agencies
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Deliver custom, high-speed web platforms for demanding agency clients without hiring senior frontend engineers in-house. App Router architecture, TypeScript, and 100% code handover.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js App Router', 'React Server Components', 'TypeScript Type-Safety', 'Headless CMS Integration', 'Edge Caching'].map((badge) => (
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

      {/* What We Build */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 space-y-16">
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4">
            Why Agencies Partner with BBS for Next.js Engineering
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-6">
            React and Next.js are the industry benchmark for modern web development, but finding senior full-stack developers who understand SEO semantic structure, responsive UI, and edge rendering is costly. BBS acts as your plug-and-play engineering pod.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
              <div className="font-bold text-black mb-1.5">High Core Web Vitals</div>
              <p className="text-gray-600 font-light leading-relaxed">
                Server-side rendering (SSR) and static generation (SSG) ensure fast First Contentful Paint and 90+ Lighthouse performance scores.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
              <div className="font-bold text-black mb-1.5">Headless Flexibility</div>
              <p className="text-gray-600 font-light leading-relaxed">
                Connect Next.js frontends to Sanity, Shopify Storefront API, Strapi, or headless WordPress for seamless client editorial workflows.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
              <div className="font-bold text-black mb-1.5">Zero Vendor Lock-In</div>
              <p className="text-gray-600 font-light leading-relaxed">
                Clean TypeScript code adhering to React standards. Full repository ownership transferred directly to your organization.
              </p>
            </div>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="bg-[#FAF9F5] border border-[rgba(200,134,10,0.18)] rounded-3xl p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-black text-black tracking-tight mb-6">
            Next.js Builds Handled by BBS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700 font-light">
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>High-Performance Corporate Websites:</strong> Pixel-perfect Figma implementations with responsive mobile layouts.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Headless E-commerce Stores:</strong> Shopify Hydrogen or Next.js commerce setups for ultra-fast product browsing.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Interactive Web Applications:</strong> Client portals, SaaS dashboards, booking engines, and CRM integrations.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>WordPress-to-Next.js Migrations:</strong> Rebuilding sluggish legacy sites into fast modern frontends.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Next.js Specialists</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Need a Next.js Build for an Agency Client?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Send us the Figma design or project brief. We respond within 24 hours with an itemised fixed quote under NDA.
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
              href="/pricing-model"
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              See Partner Pricing Model
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  )
}


import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'

export const metadata: Metadata = buildMetadata(
  '/white-label-web-development-uk',
  'White Label Web Development for UK Marketing Agencies | BBS',
  'White-label engineering for UK marketing agencies: React and Next.js builds, e-commerce, tracking, and dedicated development pods delivered under your brand.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White-Label Web Development Services for UK Agencies",
  "serviceType": "White-Label Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "GB",
  "description": "White-label engineering partner for UK marketing agencies. Custom React and Next.js builds, e-commerce, tracking setups, and dedicated pods delivered under your agency brand."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'White-Label Web Development UK', path: '/white-label-web-development-uk' },
])

const faqs: FAQItem[] = [
  {
    question: "How does BBS work with UK marketing agencies?",
    answer: "We act as your white-label technical development partner. Your agency manages client communication, project scoping, and branding. We build the solution under an NDA, provide weekly progress updates with a staging link, test thoroughly, and transfer 100% code and IP upon completion."
  },
  {
    question: "Do you ever contact our UK clients directly?",
    answer: "We do not contact your clients unless you ask us to. Your agency retains complete ownership of client communication and relationships."
  },
  {
    question: "What are your payment terms for UK agency projects?",
    answer: "Your first project: no upfront payment. You pay after delivery, once you are satisfied. After that, projects are billed 50% in advance and 50% on completion."
  },
  {
    question: "How do you handle project updates and communication?",
    answer: "We respond within 24 hours. During active development, you get a weekly progress update with a staging link so you and your client can review working milestones."
  },
  {
    question: "Who owns the intellectual property and source code?",
    answer: "You receive 100% of the source code and IP when development is complete. All repositories, deployment configurations, and technical assets belong to your agency."
  },
  {
    question: "How is quality assurance handled before delivery?",
    answer: "Every build is tested by our QA testers before delivery. We run multi-device checks, cross-browser validation, and performance tests before any staging preview is shared."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }))
}

const CORE_SERVICES = [
  {
    title: "React & Next.js Development",
    href: "/services/react-nextjs-development",
    desc: "Modern, high-performance web applications, marketing sites, and client portals built on React and Next.js."
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    desc: "Custom marketing websites and business platforms built to your agency's Figma specifications and design systems."
  },
  {
    title: "E-commerce & Headless Stores",
    href: "/services/online-store-development",
    desc: "Fast, conversion-focused online stores built on Shopify, WooCommerce, or modern headless commerce stacks."
  },
  {
    title: "Tracking & Conversion Setup",
    href: "/services/tracking-conversion-setup",
    desc: "Accurate server-side GA4, Google Tag Manager, Meta Pixel, and Conversions API setups tested and verified."
  },
  {
    title: "Dedicated Development Pod",
    href: "/services/dedicated-development-pod",
    desc: "A dedicated engineering team aligned with your agency sprints for ongoing client work and continuous capacity."
  },
  {
    title: "Website & App Maintenance",
    href: "/services/website-app-maintenance",
    desc: "Ongoing security patching, core updates, performance monitoring, and bug fixes under structured SLAs."
  },
]

export default function WhiteLabelWebDevelopmentUkPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <section className="max-w-4xl mx-auto pt-24 pb-16 px-4 sm:px-6">
        {/* Breadcrumb links */}
        <div className="mb-6 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#C8860A] font-medium">White-Label Web Development UK</span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-5">
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#C8860A] uppercase">
            UK Agency Partner • White-Label Engineering
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl font-black text-black mb-6 tracking-tight leading-[1.12]">
          White-Label Web Development for UK Marketing Agencies
        </h1>

        {/* Short Answer Block */}
        <div className="bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-2xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
            Build Beyond Studio is the white-label engineering partner behind growing UK marketing, creative, and digital agencies. We build bespoke React and Next.js sites, e-commerce storefronts, web applications, and analytics pipelines behind your brand. We sign an NDA upfront, transfer 100% IP ownership, and operate as your silent technical delivery team.
          </p>
        </div>

        {/* Primary CTA button */}
        <div className="mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
              boxShadow: '0 4px 18px rgba(200,134,10,0.32)',
            }}
          >
            <span>Discuss a Project Brief</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Core Capabilities
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
            Engineering Disciplines We Deliver for UK Agencies
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            From design-to-code implementations to headless e-commerce and server-side tracking, BBS manages full-cycle development under your agency brand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.16)] hover:border-[rgba(200,134,10,0.4)] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-black text-base group-hover:text-[#C8860A] transition-colors mb-2">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#C8860A] flex items-center gap-1">
                  <span>Explore capability</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* How Agencies Work With BBS */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Working Together
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
            How UK Agencies Partner With BBS Under Their Own Brand
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our structured delivery workflow ensures your account managers maintain full client control with clear milestone visibility.
          </p>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Briefing & Mutual NDA',
                desc: 'You share your Figma files, project specifications, or client requirements. We sign an NDA before receiving proprietary details. We respond within 24 hours.'
              },
              {
                step: '02',
                title: 'Architecture & Fixed Quote',
                desc: 'We map out data models, third-party integrations, and milestone timelines, providing an itemised fixed quote based on the approved scope.'
              },
              {
                step: '03',
                title: 'Sprint Development & Weekly Previews',
                desc: 'Our engineering team develops the solution. You get a weekly progress update with a staging link. Every build is tested by our QA testers before delivery.'
              },
              {
                step: '04',
                title: 'Handover & 100% IP Ownership',
                desc: 'You receive 100% of the source code and IP when development is complete. We transfer all code, repository access, and technical documentation under your agency brand.'
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-2xl bg-white border border-[rgba(200,134,10,0.14)] shadow-sm">
                <span className="text-[#C8860A] font-mono text-base font-bold pt-0.5 shrink-0">{item.step}</span>
                <div>
                  <h4 className="font-bold text-black mb-1 text-base">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Principles & Trust Points */}
        <div className="mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.16)] shadow-sm">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
            Trust & Partnership
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Built Strictly for Agency Protection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">Zero Direct Client Contact:</strong> We do not contact your clients unless you ask us to. Your agency leads all client-facing conversations.</div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">100% IP & Code Ownership:</strong> You receive 100% of the source code and IP when development is complete.</div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">QA Verified Delivery:</strong> Every build is tested by our QA testers before delivery across devices and browsers.</div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">Predictable Communication:</strong> We respond within 24 hours. You get a weekly progress update with a staging link.</div>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div className="mb-16 bg-[#FAF9F5] border border-[rgba(200,134,10,0.18)] rounded-3xl p-8 sm:p-10 shadow-sm">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
            Payment Terms
          </h2>
          <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
            Low-Risk Commercial Model for Your Agency
          </h3>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed font-light">
            <p className="font-semibold text-black">
              Your first project: no upfront payment. You pay after delivery, once you are satisfied.
            </p>
            <p>
              After that, projects are billed 50% in advance and 50% on completion.
            </p>
            <p className="text-xs text-gray-500 pt-2 border-t border-black/5">
              You set your own retail pricing for your UK clients, bill them on your terms, and retain your full gross margin. For specific project scopes, we provide itemised partner estimates.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/pricing-model"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
            >
              <span>Read our complete pricing model</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5 text-center sm:text-left">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.12] pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight relative z-10">
            Scale Your Agency&apos;s Development Capacity
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed font-light relative z-10 max-w-xl">
            Share your project brief with BBS under an NDA. We respond within 24 hours with an itemised partner quote and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8860A] text-white px-8 py-3.5 rounded-xl hover:bg-[#A06A00] transition-all font-bold text-sm"
              style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.25)' }}
            >
              <span>Send a Project Brief</span>
              <span aria-hidden="true">→</span>
            </Link>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi!%20I%20run%20a%20UK%20agency%20and%20I%27d%20like%20to%20discuss%20a%20white-label%20web%20project%20with%20BBS."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'white_label_uk_cta' }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-8 py-3.5 rounded-xl transition-all font-bold text-sm"
            >
              <span>Chat on WhatsApp</span>
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} title="White-Label Web Development FAQs for UK Agencies" />
      <Footer />
    </main>
  )
}

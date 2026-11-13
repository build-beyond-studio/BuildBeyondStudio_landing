import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/website-development',
  'White Label Website Development for Agencies | BBS',
  'White label website development for agencies. BBS delivers marketing sites, landing pages, portals, and web apps under your brand.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White Label Website Development",
  "serviceType": "Website Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "White label website development for agencies. BBS delivers marketing sites, landing pages, portals, and web apps under your brand."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website Development', path: '/services/website-development' },
])

const included = [
  "Custom UI/UX implementation matching your approved Figma / design files",
  "Responsive, mobile-first frontend development using React and Next.js",
  "Clean semantic HTML structure with performance checks against Core Web Vitals",
  "CMS integration for seamless client-side content management",
  "Cross-browser testing across modern desktop and mobile viewports",
  "SSL setup, staging deployment, and production hosting configuration",
  "Planned cutover with rollback plan for zero-loss domain migrations",
  "Post-launch support available under a separate maintenance agreement",
]

const whatYouReceive = [
  "Complete production-ready source code repository",
  "Comprehensive technical architecture and setup documentation",
  "Private password-protected staging preview link for your reviews",
  "Pre-launch QA testing checklist and handover report",
]

const process = [
  { step: "01", title: "Briefing & Scope Review", desc: "Share your client requirements or design files. We review specifications, confirm deliverables, and provide a fixed quote." },
  { step: "02", title: "Staging Setup & Milestone Planning", desc: "We map out the technical sprint schedule, initialize the repository, and provide a private staging link." },
  { step: "03", title: "Frontend & Backend Development", desc: "Development sprint where you get a weekly progress update with a staging link — clean, documented code on React / Next.js and Node.js." },
  { step: "04", title: "QA Testing & Agency Review", desc: "Every build undergoes multi-device testing and performance checks against Core Web Vitals before agency sign-off." },
  { step: "05", title: "Planned Cutover & IP Handover", desc: "We execute a planned cutover with rollback plan, transferring 100% source code, documentation, and IP." },
]

const faqs: FAQItem[] = [
  {
    question: "Can we outsource website development even if we handle the design?",
    answer: "Yes. You manage the strategy, branding, and Figma design while BBS handles frontend and backend engineering, testing, and deployment under your brand."
  },
  {
    question: "Do you build websites that are ready for SEO?",
    answer: "Yes. We implement clean page structures, responsive layouts, sensible heading hierarchies, schema markup, and performance checks against Core Web Vitals."
  },
  {
    question: "How long does a website project usually take?",
    answer: "Timelines depend on scope, page count, and integration requirements. Typical marketing websites take 2 to 4 weeks, while complex web applications take 4 to 8 weeks."
  },
  {
    question: "Which technologies do you use for website development?",
    answer: "We develop primarily using React, Next.js, TypeScript, Tailwind CSS, Node.js, and Express, pairing with headless CMS options or MongoDB as required."
  },
  {
    question: "Can you redesign or migrate an existing client website?",
    answer: "Yes. We handle redesigns and platform migrations with a planned cutover and rollback plan to ensure business continuity without disruption."
  },
  {
    question: "Who owns the code upon completion?",
    answer: "You receive 100% of the source code and IP when development is complete. BBS retains zero rights or claims."
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

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <section className="max-w-4xl mx-auto pt-24 pb-8 px-4 sm:px-6">
        <div className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#C8860A] font-medium">Website Development</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">
            Core Service
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-black mb-4 leading-tight">
          White Label Website Development for Agencies
        </h1>
        <p className="text-lg text-gray-600 font-light mb-8">
          Custom marketing sites, client portals, and web applications delivered under your agency brand.
        </p>

        {/* Answer-first intro block */}
        <div className="bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            BBS builds marketing websites, landing pages, client portals, and web applications for agency client projects. We build from your approved Figma designs or functional briefs, conduct thorough QA testing, and hand over production-ready code under your agency’s brand.
          </p>
        </div>

        <div className="mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
              boxShadow: '0 4px 18px rgba(200,134,10,0.32)',
            }}
          >
            <span>Send a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-20 px-4 sm:px-6">
        <div className="space-y-14 text-gray-700">

          {/* What You Receive Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.18)] shadow-sm">
            <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
              Deliverables
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              What You Receive Upon Handover
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {whatYouReceive.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8860A] shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div>
            <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
              Technical Scope
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              What's Included in Every Build
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white p-3.5 rounded-xl border border-black/5">
                  <span className="text-[#C8860A] font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our process */}
          <div>
            <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
              Step-by-Step Delivery
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Our Development & Handover Process
            </h3>
            <div className="space-y-3">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4 p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)] shadow-sm">
                  <span className="text-[#C8860A] font-mono text-sm pt-0.5 shrink-0 font-bold">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-black mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Partner Proof */}
          <div className="bg-[#FAF8F4] p-6 rounded-2xl border border-[rgba(200,134,10,0.18)]">
            <span className="text-xs font-bold text-[#A06A00] uppercase tracking-widest block mb-1">
              Case Study Evidence
            </span>
            <h3 className="text-lg font-bold text-black mb-2">
              TechTasteFood &amp; FranFirst Web Platforms
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              BBS built scalable web assets, custom client dashboards, and CRM portals under strict NDA for Sarthak's agencies in Delhi, adding +₹75,000/mo net profit in web retainers.
            </p>
            <Link
              href="/case-studies/techtastefood"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8860A] hover:text-[#A06A00]"
            >
              <span>Read the full case study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Services */}
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/white-label-web-development" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                White-Label Overview Pillar →
              </Link>
              <Link href="/services/dedicated-development-pod" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                Dedicated Development Pod →
              </Link>
              <Link href="/services/online-store-development" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                Online Store Development →
              </Link>
              <Link href="/services/website-app-maintenance" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                Website &amp; App Maintenance →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single merged FAQ */}
      <FAQSection faqs={faqs} title="Website Development FAQs" />
      <Footer />
    </main>
  )
}

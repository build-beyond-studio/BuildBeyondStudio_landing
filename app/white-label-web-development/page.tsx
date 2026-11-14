import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'

export const metadata: Metadata = buildMetadata(
  '/white-label-web-development',
  'White Label Web Development Services for Agencies | BBS',
  'White label web development for agencies in India. BBS builds websites, stores, portals and web apps under your brand, under NDA, with full IP handover.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White-Label Web Development Services",
  "serviceType": "White-Label Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "White label web development for agencies in India. BBS builds websites, stores, portals and web apps under your brand, under NDA, with full IP handover."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'White-Label Web Development', path: '/white-label-web-development' },
])

const faqs: FAQItem[] = [
  {
    question: "What is white-label web development?",
    answer: "White-label web development is when an engineering team builds websites and applications behind the scenes for your agency clients. All code, staging environments, and deliverables are delivered under your agency's brand. Your client sees your agency's brand, and we do not contact them unless you ask."
  },
  {
    question: "How does the white label delivery model work?",
    answer: "Your agency shares the approved project brief and remains the primary client lead. BBS confirms the scope, delivers weekly progress updates with a staging link, performs thorough QA testing, and hands over complete code and documentation upon completion."
  },
  {
    question: "Do you sign NDAs before receiving client details?",
    answer: "Yes. We sign an NDA before receiving your client or project details. We operate as an invisible extension of your team and do not contact your clients unless you specifically ask us to."
  },
  {
    question: "Who owns the code and intellectual property?",
    answer: "You receive 100% of the source code and IP when development is complete. Full rights transfer directly to your agency or your client upon project completion and final payment."
  },
  {
    question: "What technology stack do you use?",
    answer: "We build on modern production stacks including React, Next.js, Node.js, Express, MongoDB (MERN Stack), Tailwind CSS, Docker, and AWS / GCP cloud environments."
  },
  {
    question: "Can you develop from our designs or existing code?",
    answer: "Yes. You can supply Figma files, wireframes, or technical briefs, or have us audit and improve existing codebases under the same white-label standards."
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
  { title: "Website Development", href: "/services/website-development", desc: "Custom marketing websites and business platforms built on React and Next.js." },
  { title: "E-commerce & Headless Stores", href: "/services/online-store-development", desc: "High-performance stores built on Shopify, WooCommerce or headless commerce." },
  { title: "Tracking & Conversion Setup", href: "/services/tracking-conversion-setup", desc: "Server-side GA4, Tag Manager and Meta Pixel tracking tested and verified." },
  { title: "Dedicated Development Pod", href: "/services/dedicated-development-pod", desc: "Dedicated agile engineering team dedicated to your ongoing client accounts." },
  { title: "Website & App Maintenance", href: "/services/website-app-maintenance", desc: "Security patches, performance tuning, and updates under structured SLAs." },
]

export default function WhiteLabelPillarPage() {
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
          <span className="text-[#C8860A] font-medium">White-Label Web Development</span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-5">
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#C8860A] uppercase">
            Pillar Page • India
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl font-black text-black mb-6 tracking-tight leading-[1.12]">
          White Label Web Development for Marketing Agencies in India
        </h1>

        {/* 1. Short Answer Block (50-70 words) */}
        <div className="bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-2xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
            White-label web development allows marketing agencies to deliver custom websites, e-commerce stores, client portals, and web applications without hiring an in-house engineering team. Build Beyond Studio (BBS) operates as an invisible technical partner behind your agency’s brand in India, signing strict NDAs, transferring 100% IP ownership upon completion, and never contacting your clients unless you specifically ask.
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
            <span>Send a Project Brief</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 2. What BBS Builds */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Core Scope
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
            What BBS Builds Behind Your Agency
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We handle full-cycle technical execution across five core white-label disciplines. Every build includes responsive QA testing, performance verification, and complete source code handover.
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
                  <span>Explore service</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. How the Model Works (Four Steps) */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Delivery Process
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
            How the White Label Delivery Model Works
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our structured delivery workflow ensures you stay in full control of your client commitments, timelines, and margins.
          </p>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Scope & NDA', desc: 'You share the project brief. We sign an NDA before receiving your client or project details, ensuring complete protection of your business relationships.' },
              { step: '02', title: 'Fixed Quote & Architecture', desc: 'We review requirements, map the technical architecture, and provide a fixed quote for your approved scope. We respond within 24 hours.' },
              { step: '03', title: 'Build, Test & Review', desc: 'Our engineering team develops the solution. Your team receives a staging link and a weekly progress update. Every build is tested by our QA testers before delivery.' },
              { step: '04', title: 'Launch & IP Handover', desc: 'We deliver the completed work with source code, documentation, and 100% IP handover under your agency brand. Post-launch support is available under a separate maintenance agreement.' },
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

        {/* 4. What White-Label Means Here */}
        <div className="mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.16)] shadow-sm">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
            Partnership Principles
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            What White-Label Means at BBS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">Your brand:</strong> All deliverables, staging environments, and client-facing assets carry your agency identity.</div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">Your client:</strong> You own 100% of the client relationship, contracts, invoicing, and account direction.</div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">Your approvals:</strong> Nothing moves to production without your sign-off and approval.</div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#C8860A] font-bold">✓</span>
              <div><strong className="text-black">Behind the scenes:</strong> BBS operates as your silent technical pod, communicating with your internal team via your chosen channels.</div>
            </div>
          </div>
        </div>

        {/* 5. Engagement Models */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Engagement Models
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">
            Flexible Structures for Growing Agencies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-[rgba(200,134,10,0.15)] flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-black text-lg mb-2">Per-Project Fixed Quote</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ideal for standalone website builds, store setups, and defined scopes. You receive a guaranteed fixed price quote based on approved requirements.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-bold text-[#C8860A]">
                Predictable project margins
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[rgba(200,134,10,0.15)] flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-black text-lg mb-2">Dedicated Development Pod</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A managed, sprint-aligned developer pod dedicated to your ongoing client deliverables. Scales your engineering capacity without hiring headaches.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-bold text-[#C8860A]">
                Ongoing monthly capacity
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[rgba(200,134,10,0.15)] flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-black text-lg mb-2">Maintenance Retainer</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Post-launch support, security patches, plugin updates, and regular technical maintenance delivered under your agency’s service level agreements.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-bold text-[#C8860A]">
                Recurring retainer revenue
              </div>
            </div>
          </div>
        </div>

        {/* 6. Technology Stack */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Technology Stack
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
            Production-Proven Modern Stacks
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We build with scalable, high-performance technologies chosen to match each client’s technical needs and long-term maintenance requirements:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {['React & Next.js', 'Node.js & Express', 'MongoDB & Databases', 'Tailwind CSS', 'Docker & CI/CD', 'AWS & GCP Hosting', 'Shopify & Headless', 'REST & GraphQL APIs'].map((tech) => (
              <div key={tech} className="bg-white p-4 rounded-xl border border-[rgba(200,134,10,0.14)] text-xs font-bold text-gray-800">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 7. Protections */}
        <div className="mb-16 bg-[#FDF8F0] p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.22)]">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
            Agency Protections
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Protected by Design
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li className="flex gap-2">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>NDA before sharing project details:</strong> Signed prior to receiving any client briefs or confidential materials.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>We do not contact your clients unless you ask us to:</strong> Your agency leads all client-facing conversations by default.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>100% Source Code & IP Handover:</strong> You receive all code, repositories, and documentation upon completion.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8860A] font-bold">✓</span>
              <span><strong>Scope changes approved in writing:</strong> Every scope adjustment is priced and approved prior to development.</span>
            </li>
          </ul>
          <Link
            href="/trust"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
          >
            <span>Learn how we protect your agency</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 8. Partner Economics / Pricing */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-3">
            Pricing Model
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-3">
            Fixed Partner Pricing. You Set the Client Price.
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We provide a fixed engineering quote for the agreed scope. You set your own client price, invoice your client under your terms, and keep 100% of the gross margin.
          </p>
          <Link
            href="/pricing-model"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
          >
            <span>See how partner pricing works</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Final CTA Banner */}
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5 text-center sm:text-left">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.12] pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight relative z-10">
            Ready to Expand Your Technical Capacity?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed font-light relative z-10 max-w-xl">
            Share your project requirements with BBS under an NDA. We will review your brief and respond with an estimate within 24 hours.
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
              href="https://wa.me/917697339962?text=Hi!%20I%20run%20a%20marketing%20agency%20and%20I%27d%20like%20to%20discuss%20a%20white-label%20web%20project%20with%20BBS."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'white_label_pillar_cta' }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-8 py-3.5 rounded-xl transition-all font-bold text-sm"
            >
              <span>Chat on WhatsApp</span>
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* 9. Single unified FAQ section */}
      <FAQSection faqs={faqs} title="White-Label Web Development FAQs" />
      <Footer />
    </main>
  )
}

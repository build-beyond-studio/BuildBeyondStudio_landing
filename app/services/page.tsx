import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, Globe, ShoppingBag, BarChart3, Users2, Wrench, Smartphone, Palette, Puzzle, Cpu, Search, Bot, Send } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services',
  'White Label Services for Marketing Agencies | BBS',
  'White-label web development, ecommerce, tracking, maintenance and dedicated dev pods for marketing agencies. Fixed partner pricing and NDA-first delivery.'
)

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
])

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "White-Label Services for Marketing Agencies",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "White-Label Web & Web App Development",
      "url": "https://buildbeyondstudio.com/services/website-development"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "E-commerce & Headless Stores",
      "url": "https://buildbeyondstudio.com/services/online-store-development"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Tracking & Conversion Setup",
      "url": "https://buildbeyondstudio.com/services/tracking-conversion-setup"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Dedicated Development Pod",
      "url": "https://buildbeyondstudio.com/services/dedicated-development-pod"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Website & App Maintenance",
      "url": "https://buildbeyondstudio.com/services/website-app-maintenance"
    }
  ]
}

const CORE_SERVICES = [
  {
    title: "White-Label Web & Web App Development",
    desc: "Custom marketing sites, client portals, and responsive web applications built on modern React and Next.js stacks under your agency's brand.",
    link: "/services/website-development",
    icon: Globe,
    badge: "Core Service",
  },
  {
    title: "E-commerce & Headless Stores",
    desc: "Custom e-commerce platforms and high-converting storefronts built on Shopify, WooCommerce or headless architectures.",
    link: "/services/online-store-development",
    icon: ShoppingBag,
    badge: "Core Service",
  },
  {
    title: "Tracking & Conversion Setup",
    desc: "Accurate server-side GA4, Google Tag Manager, Meta Pixel and ad conversion tracking fully configured, tested, and verified.",
    link: "/services/tracking-conversion-setup",
    icon: BarChart3,
    badge: "Core Service",
  },
  {
    title: "Dedicated Development Pod",
    desc: "A managed, sprint-aligned developer pod dedicated to your ongoing agency deliverables and high-volume client accounts.",
    link: "/services/dedicated-development-pod",
    icon: Users2,
    badge: "Core Service",
  },
  {
    title: "Website & App Maintenance",
    desc: "Proactive security updates, bug fixes, performance monitoring, and SLA-backed maintenance to keep client websites reliable.",
    link: "/services/website-app-maintenance",
    icon: Wrench,
    badge: "Core Service",
  },
]

const ADDITIONAL_CAPABILITIES = [
  {
    title: "Mobile App Development",
    desc: "iOS and Android mobile apps engineered on React Native or native frameworks from MVP scoping to store launch.",
    link: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    desc: "Conversion-focused wireframes, interface strategy, and Figma design systems tailored for agency client briefs.",
    link: "/services/ui-ux-design",
    icon: Palette,
  },
  {
    title: "App Integrations",
    desc: "Seamless integrations connecting client sites to CRMs, payment gateways, ERPs, and external business tools.",
    link: "/services/app-integrations",
    icon: Puzzle,
  },
  {
    title: "Custom Software Development",
    desc: "Bespoke internal software tools, operational workflows, and administrative dashboards engineered for client needs.",
    link: "/services/custom-software-development",
    icon: Cpu,
  },
  {
    title: "Technical SEO, AEO & GEO",
    desc: "Technical site architecture, schema markup, Core Web Vitals optimization, and answer engine visibility support.",
    link: "/services/seo-aeo-geo",
    icon: Search,
  },
  {
    title: "AI Chatbots & Assistants",
    desc: "Intelligent chatbot and customer assistant implementations with human handoff for 24/7 lead capture.",
    link: "/services/ai-chatbots-assistants",
    icon: Bot,
  },
  {
    title: "LinkedIn Outreach Automation",
    desc: "Technical outreach workflow automation, message sequencing, lead capture, and CRM syncing executed under your agency brand.",
    link: "/services/linkedin-lead-generation-automation",
    icon: Send,
  },
]

const faqs: FAQItem[] = [
  {
    question: "What technical services does BBS provide to agencies?",
    answer: "Our core services include white-label web and web app development, e-commerce stores, tracking and conversion setup, dedicated developer pods, and ongoing maintenance. We also support specialized capabilities including mobile apps, UI/UX design, app integrations, custom software, and technical SEO."
  },
  {
    question: "Can we outsource a single project or component?",
    answer: "Yes. You can start with a single project such as a landing page or store build, or outsource specific components like frontend development, API integrations, or tracking setups."
  },
  {
    question: "How does white-label partnership work?",
    answer: "BBS works completely behind your brand. You lead the client relationship and commercial terms, while we sign an NDA, build the approved scope, and hand over 100% IP rights upon completion."
  },
  {
    question: "How do we receive quotes and communicate?",
    answer: "Share your project brief and we provide a fixed quote within 24 hours. During delivery, you receive weekly progress updates with a staging link, and every build undergoes internal QA testing before handover."
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C8860A] font-medium">Services</span>
        </div>

        {/* Header with exactly 2 concise intro sentences */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-5">
            <span className="text-[11px] font-bold tracking-[0.16em] text-[#C8860A] uppercase">
              White-Label Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-black mb-5 leading-tight">
            White-Label Services for Marketing Agencies
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Build Beyond Studio is the white-label engineering partner behind marketing and creative agencies. We build custom websites, e-commerce stores, and web applications, and handle DevOps and tracking under your brand at fixed partner pricing.
          </p>
        </div>

        {/* 2. Core Services (Exactly 5 Cards) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#A06A00] uppercase tracking-widest block mb-1">
                Primary Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                Five Core Engineering Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              Delivered under NDA with fixed quotes and 100% IP handover upon project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((svc) => (
              <Link
                key={svc.link}
                href={svc.link}
                className="bg-white border border-[rgba(200,134,10,0.18)] rounded-2xl p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(200,134,10,0.12)] hover:-translate-y-1 hover:border-[rgba(200,134,10,0.38)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(200,134,10,0.08)] border border-[rgba(200,134,10,0.2)] flex items-center justify-center text-[#C8860A] group-hover:scale-105 transition-transform">
                      <svc.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5200] bg-[rgba(200,134,10,0.1)] px-2.5 py-1 rounded-full border border-[rgba(200,134,10,0.2)]">
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-[#C8860A] transition-colors mb-2 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-[#C8860A] group-hover:text-[#A06A00]">
                  <span>Explore service details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. Additional Capabilities (Secondary) */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">
              Extended Scope
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Additional Technical Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Specialized technical services available to support complex agency engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADDITIONAL_CAPABILITIES.map((cap) => (
              <Link
                key={cap.link}
                href={cap.link}
                className="bg-white/80 border border-black/10 rounded-xl p-5 hover:bg-white hover:border-[rgba(200,134,10,0.28)] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 mb-3 group-hover:text-[#C8860A] transition-colors">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-1.5 group-hover:text-[#C8860A] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#C8860A] flex items-center gap-1">
                  <span>View capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. How We Work (Three-line summary + link) */}
        <div className="mb-20 bg-white p-7 sm:p-9 rounded-2xl border border-[rgba(200,134,10,0.18)] shadow-sm">
          <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
            Partnership Process
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            How Agency Partnership Works
          </h3>
          <div className="space-y-2 text-sm text-gray-700 leading-relaxed mb-6 font-normal">
            <p>1. You share an approved client brief under a mutual NDA, and we return a fixed-price engineering quote within 24 hours.</p>
            <p>2. We build, test, and provide staging updates weekly while your team leads all client communication under your brand.</p>
            <p>3. Every build undergoes rigorous QA before delivery, handing over 100% of source code and IP directly to you upon completion.</p>
          </div>
          <Link
            href="/how-we-partner"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
          >
            <span>Learn how we partner with marketing agencies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5. Final CTA */}
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5 text-center sm:text-left">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.12] pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight relative z-10">
            Have an Upcoming Client Project?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed font-light relative z-10 max-w-xl">
            Send us your brief for a fixed quote within 24 hours. We sign an NDA before receiving any sensitive details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8860A] text-white px-8 py-3.5 rounded-xl hover:bg-[#A06A00] transition-all font-bold text-sm"
              style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.25)' }}
            >
              <span>Send a Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi!%20I%20run%20a%20marketing%20agency%20and%20I%27d%20like%20to%20discuss%20partnering%20with%20BBS."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'services_hub_cta' }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-8 py-3.5 rounded-xl transition-all font-bold text-sm"
            >
              <span>Chat on WhatsApp</span>
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Unified FAQ */}
      <FAQSection faqs={faqs} title="Agency Services FAQs" />
      <Footer />
    </main>
  )
}

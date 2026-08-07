import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services',
  'Our Services',
  'Explore our high-ticket technical solutions including custom web apps, devops, technical consulting, and performance marketing.'
)

const servicesList = [
  {
    num: "01",
    title: "Custom Web &\nPortal Development",
    desc: "Build highly-customized, high-retention web assets that keep your clients engaged.",
    features: ["Sticky Client Portals", "High-Retention Dashboards", "Flawless Performance"],
    link: "/services/custom-web-applications",
    color: "#C8860A",
  },
  {
    num: "02",
    title: "Auto-Scaling\nCloud & DevOps",
    desc: "Campaign-proof infrastructure. Make sure your clients' sites never crash during high-traffic ad launches.",
    features: ["Zero Downtime", "Campaign-Proof Architecture", "Auto-Scaling"],
    link: "/services/devops-infrastructure",
    color: "#A06A00",
  },
  {
    num: "03",
    title: "Fractional CTO &\nTech Roadmap",
    desc: "Act as a Fractional CTO for your clients, bringing strategic tech planning that demands a premium retainer.",
    features: ["Fractional CTO Value", "Tech Roadmapping", "Premium Retainers"],
    link: "/services/technical-consulting",
    color: "#E8A020",
  },
  {
    num: "04",
    title: "AI-Era Search\nVisibility (SEO/AEO)",
    desc: "Optimize web code and contents so they rank in traditional engines and are cited as top-tier sources by AI engines.",
    features: ["Answer Engine Optimization", "Schema Injecting", "LLM Context Citations"],
    link: "/services/aeo-geo",
    color: "#B87800",
  },
  {
    num: "05",
    title: "Meta & Google\nPerformance Ads",
    desc: "Direct-response paid traffic setup, conversion copywriting, and bidding optimization geared for high-margin ROI.",
    features: ["Hyper-Targeted Ads", "Ad Copy Optimization", "Low CPA"],
    link: "/services/performance-ads",
    color: "#C8860A",
  },
  {
    num: "06",
    title: "E-Comm Funnel Audits\n& Tracking",
    desc: "End-to-end GA4 event mapping, Meta Pixel server-side API setups, and funnel audits to isolate and resolve drop-offs.",
    features: ["GA4 Custom Events", "Meta Pixel Server API", "Funnel Analytics"],
    link: "/services/tracking-funnels",
    color: "#A06A00",
  },
  {
    num: "07",
    title: "AI-Powered\nVisual Production",
    desc: "Cost-effective, studio-grade product photo and video assets generated via advanced AI models.",
    features: ["Generative AI Shoots", "High-Conversion Videos", "Studio-less"],
    link: "/services/ai-visuals",
    color: "#E8A020",
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-6">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">Our Capabilities</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black mb-6">
            Elite Technical Execution
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We translate complex technology into business outcomes you can sell. Explore our comprehensive suite of high-ticket technical solutions.
          </p>
        </div>

        {/* 3-column grid to achieve the 3-3-1 layout for 7 items */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {servicesList.map((svc, idx) => (
            <Link 
              key={idx} 
              href={svc.link}
              className="group block mx-auto w-full max-w-[300px]"
            >
              {/* aspect-square enforces the square shape, rounded-2xl for slightly round corners */}
              <div className="aspect-square bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1">
                
                {/* Number Badge */}
                <div className="mb-2 sm:mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] text-[#C8860A] font-mono text-[11px] sm:text-base font-bold group-hover:bg-[#C8860A] group-hover:text-white transition-colors duration-300">
                    {svc.num}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-[13px] sm:text-xl font-bold text-black tracking-tight whitespace-pre-line leading-tight mb-1 sm:mb-2 group-hover:text-[#C8860A] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] sm:text-[13px] leading-[1.3] sm:leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {svc.desc}
                  </p>
                </div>
                
                {/* Features Pill */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {svc.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-gray-50 border border-gray-100 text-[8px] sm:text-[10px] font-medium text-gray-600 truncate max-w-full ${i === 1 ? 'hidden sm:block' : ''}`}>
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Icon Indicator */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[#C8860A] group-hover:text-white group-hover:border-[#C8860A] transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

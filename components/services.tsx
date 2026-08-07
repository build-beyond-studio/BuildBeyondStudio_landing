"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Custom Web &\nPortal Development",
    desc: "Build highly-customized, high-retention web assets that keep your clients engaged.",
    features: ["Sticky Client Portals", "High-Retention Dashboards", "Flawless Performance"],
    link: "/services/custom-web-applications",
    color: "#C8860A",
    image: "/services_images/ser_one.png"
  },
  {
    num: "02",
    title: "Auto-Scaling\nCloud & DevOps",
    desc: "Campaign-proof infrastructure. Make sure your clients' sites never crash during high-traffic ad launches.",
    features: ["Zero Downtime", "Campaign-Proof Architecture", "Auto-Scaling"],
    link: "/services/devops-infrastructure",
    color: "#A06A00",
    image: "/services_images/ser_two.png"
  },
  {
    num: "03",
    title: "Fractional CTO &\nTech Roadmap",
    desc: "Act as a Fractional CTO for your clients, bringing strategic tech planning that demands a premium retainer.",
    features: ["Fractional CTO Value", "Tech Roadmapping", "Premium Retainers"],
    link: "/services/technical-consulting",
    color: "#E8A020",
    image: "/services_images/ser_three.png"
  },
  {
    num: "04",
    title: "AI-Era Search\nVisibility (SEO/AEO)",
    desc: "Optimize web code and contents so they rank in traditional engines and are cited as top-tier sources by AI engines.",
    features: ["Answer Engine Optimization", "Schema Injecting", "LLM Context Citations"],
    link: "/services/aeo-geo",
    color: "#B87800",
    image: "/services_images/ser_four.png"
  },
  {
    num: "05",
    title: "Meta & Google\nPerformance Ads",
    desc: "Direct-response paid traffic setup, conversion copywriting, and bidding optimization geared for high-margin ROI.",
    features: ["Hyper-Targeted Ads", "Ad Copy Optimization", "Low CPA"],
    link: "/services/performance-ads",
    color: "#C8860A",
    image: "/services_images/ser_five.png"
  },
  {
    num: "06",
    title: "E-Comm Funnel Audits\n& Tracking",
    desc: "End-to-end GA4 event mapping, Meta Pixel server-side API setups, and funnel audits to isolate and resolve drop-offs.",
    features: ["GA4 Custom Events", "Meta Pixel Server API", "Funnel Analytics"],
    link: "/services/tracking-funnels",
    color: "#A06A00",
    image: "/services_images/ser_six.png"
  },
  {
    num: "07",
    title: "AI-Powered\nVisual Production",
    desc: "Cost-effective, studio-grade product photo and video assets generated via advanced AI models.",
    features: ["Generative AI Shoots", "High-Conversion Videos", "Studio-less"],
    link: "/services/ai-visuals",
    color: "#E8A020",
    image: "/services_images/ser_seven.png"
  }
];

const ServiceCard = ({ svc }: { svc: any }) => {
  return (
    <Link href={svc.link} className="block shrink-0 focus:outline-none group/card">
      <div className="flex flex-col items-center w-[220px] sm:w-[260px] lg:w-[320px] xl:w-[360px]">
        
        {/* Top: Circular Image */}
        <div className="relative w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px] rounded-full overflow-hidden mb-4 lg:mb-6 shadow-md border-2 border-white/50 transition-transform duration-500 shrink-0 z-10 bg-gray-100 flex items-center justify-center">
          <img 
            src={svc.image} 
            alt={svc.title.replace('\n', ' ')}
            className={`w-full h-full object-center transition-transform duration-700 ${svc.imageClass || 'object-cover'}`}
          />
        </div>

        {/* Bottom: Content Box */}
        <div className="w-full flex flex-col items-center text-center">
          
          <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-bold text-gray-900 tracking-tight whitespace-pre-line leading-tight mb-2 sm:mb-3 transition-colors duration-300 group-hover/card:text-[#C8860A]">
            {svc.title}
          </h3>

          <p className="text-gray-500 text-[11px] sm:text-[12px] lg:text-[13.5px] xl:text-[14.5px] leading-[1.6] mb-4 sm:mb-5 lg:mb-6 line-clamp-3">
            {svc.desc}
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {svc.features.slice(0, 2).map((feat: string) => (
              <span key={feat} className="px-2.5 sm:px-3 lg:px-4 py-1 lg:py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[9px] sm:text-[10px] lg:text-[11px] font-medium text-gray-600 truncate max-w-full">
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const MarqueeRow = ({ items, direction = "left", speed = "35s" }: { items: any[], direction?: "left" | "right", speed?: string }) => {
  // Multiply items to ensure seamless infinite scroll on ultra-wide screens
  const baseItems = [...items, ...items, ...items, ...items];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex overflow-hidden w-full group/row py-4 md:py-6">
      <div 
        className={`flex w-max ${animationClass} group-hover/row:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {/* Set 1 */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 pr-4 sm:pr-6 lg:pr-8 xl:pr-10 shrink-0">
          {baseItems.map((svc, i) => (
             <ServiceCard key={i} svc={svc} />
          ))}
        </div>
        {/* Set 2 */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 pr-4 sm:pr-6 lg:pr-8 xl:pr-10 shrink-0">
          {baseItems.map((svc, i) => (
             <ServiceCard key={`dup-${i}`} svc={svc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const upperServices = services.slice(0, 4);
  const lowerServices = services.slice(4, 7);

  return (
    <section id="services" className="bg-[#F5F2EC] text-black py-24 relative overflow-hidden border-t border-black/5">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-[15%] w-[40vw] h-[40vw] rounded-full blur-[140px] pointer-events-none z-0" style={{ background: 'rgba(200,134,10,0.06)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-8">
        <div className="flex flex-col items-center text-center mx-auto max-w-4xl mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-6">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">High-Ticket Technical Solutions</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
            Elite Technical Execution.<br className="hidden md:block"/> <span className="text-gray-400">Pure Agency Profit.</span>
          </h2>
          <p className="text-[14.5px] md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            We translate complex technology into business outcomes you can sell. High-retention web assets, campaign-proof infrastructure, and CTO-level guidance.
          </p>
          <div className="text-sm md:text-base font-semibold text-gray-600">
            Looking for an outsourcing partner? Learn about our <Link href="/white-label-web-development" className="text-[#C8860A] hover:underline hover:text-[#A06A00]">white label web development</Link> services.
          </div>
        </div>

        {/* Marquee Carousels */}
        <div className="w-full flex flex-col gap-2 md:gap-4 relative z-10 overflow-hidden">
          {/* Upper Row (Scrolls Right) */}
          <MarqueeRow items={upperServices} direction="right" speed="95s" />
          
          {/* Lower Row (Scrolls Left) */}
          <MarqueeRow items={lowerServices} direction="left" speed="90s" />
        </div>
      </div>
    </section>
  );
}

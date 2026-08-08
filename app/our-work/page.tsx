import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingAIAssistant from "@/components/FloatingAIAssistant";
import FloatingQuickLinks from "@/components/FloatingQuickLinks";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import AIShowcaseSection from "@/components/portfolio/AIShowcaseSection";
import SeoShowcaseSection from "@/components/portfolio/SeoShowcaseSection";
import TrackingShowcaseSection from "@/components/portfolio/TrackingShowcaseSection";
export const metadata: Metadata = buildMetadata(
  '/our-work',
  'Our Work',
  "Real products. Real businesses. Real growth. Explore Build Beyond Studio's portfolio of high-converting websites crafted for modern brands."
);

export default function OurWork() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <FloatingWhatsApp />
      <FloatingQuickLinks />

      <Header />

      {/* Page Title Section */}
      <section className="pt-16 pb-4 md:pt-24 md:pb-8 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-4 md:mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-xs font-bold tracking-widest text-[#C8860A] uppercase mb-4">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
              Our Work
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
              Real products. Real businesses. Real growth.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <AIShowcaseSection />
      
      <SeoShowcaseSection />

      <TrackingShowcaseSection />

      {/* Space for future sections (Brand Identity, etc.) */}

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

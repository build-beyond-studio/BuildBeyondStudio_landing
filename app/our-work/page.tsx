import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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

      <PortfolioSection columns={3} />

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

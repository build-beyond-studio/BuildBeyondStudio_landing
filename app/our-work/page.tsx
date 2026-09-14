import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingQuickLinks from "@/components/FloatingQuickLinks";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import AppShowcaseSection from "@/components/portfolio/AppShowcaseSection";
import SeoShowcaseSection from "@/components/portfolio/SeoShowcaseSection";
export const metadata: Metadata = buildMetadata(
  '/our-work',
  'Our Work: Websites & Apps Built for Agency Clients | BBS',
  'Browse websites, apps, and platforms Build Beyond Studio has delivered white label for marketing agencies across India and beyond.'
);

export default function OurWork() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <FloatingWhatsApp />
      <FloatingQuickLinks />

      <h1 className="sr-only">Work Delivered Under Our Partner Agencies' Brands</h1>

      <Header />

      <PortfolioSection columns={3} />

      <AppShowcaseSection />

      <SeoShowcaseSection />

      {/* Space for future sections (Brand Identity, etc.) */}

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

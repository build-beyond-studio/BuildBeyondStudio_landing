import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from "@/components/header";
import Hero from "@/components/hero";
import Workflow from "@/components/Workflow";
import Services from "@/components/services";
import InternshipProgramsSection from "@/components/internship-programs";
import RevenueMath from "@/components/revenue-math";
import WhyUs from "@/components/why-us";
import Testimonials from "@/components/testimonials";
import FounderNote from "@/components/founder-note";
import FAQ, { faqs } from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingAIAssistant from "@/components/FloatingAIAssistant";

export const metadata: Metadata = buildMetadata(
  '/',
  undefined,
  "Marketing agency? We're your invisible web dev team. You bring the clients, we build and deliver — fully under your brand. Zero overhead, full IP."
);


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FloatingWhatsApp />
      <FloatingAIAssistant />
      <Header />
      <Hero />
      <Testimonials />
      <Workflow />
      <Services />
      <InternshipProgramsSection />
      <RevenueMath />
      <WhyUs />
      <FounderNote />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
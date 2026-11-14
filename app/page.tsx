import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Workflow from "@/components/Workflow";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import RevenueMath from "@/components/revenue-math";
import Testimonials from "@/components/testimonials";
import WhyUs from "@/components/why-us";
import FounderNote from "@/components/founder-note";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingQuickLinks from "@/components/FloatingQuickLinks";
import VideoPopup from "@/components/VideoPopup";
import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";

export const metadata: Metadata = {
  title: "Build Beyond Studio | White Label Partner for Marketing Agencies",
  description:
    "BBS is the white-label engineering team for marketing agencies in India. Custom web builds, DevOps and tracking delivered under your brand.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/",
  },
  openGraph: {
    title: "Build Beyond Studio: White Label Development Partner for Agencies",
    description:
      "BBS is the white-label engineering team for marketing agencies in India. Custom web builds, DevOps and tracking delivered under your brand.",
    url: "https://buildbeyondstudio.com/",
    type: "website",
    siteName: "Build Beyond Studio",
    images: [
      {
        url: "https://buildbeyondstudio.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Build Beyond Studio: White Label Development Partner for Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Beyond Studio: White Label Development Partner for Agencies",
    description:
      "BBS is the white-label engineering team for marketing agencies in India. Custom web builds, DevOps and tracking delivered under your brand.",
    images: ["https://buildbeyondstudio.com/og-home.png"],
  },
};

// Structured Data: Organization, WebSite, and FAQPage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://buildbeyondstudio.com/#organization",
  "name": "Build Beyond Studio",
  "alternateName": "BBS",
  "url": "https://buildbeyondstudio.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://buildbeyondstudio.com/logo.png",
    "width": 512,
    "height": 512,
  },
  "description":
    "BBS is the white-label engineering partner for marketing agencies, providing custom websites, web apps, e-commerce stores, DevOps and conversion tracking under the agency's brand.",
  "email": "admin@buildbeyondstudio.com",
  "telephone": "+917697339962",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ambikapur",
    "addressLocality": "Surguja",
    "addressRegion": "Chhattisgarh",
    "postalCode": "497001",
    "addressCountry": "IN",
  },
  "sameAs": [
    "https://www.linkedin.com/company/buildbeyondstudio",
    "https://www.linkedin.com/in/ankush-kumar-gupta-191b923b1/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://buildbeyondstudio.com/#website",
  "name": "Build Beyond Studio",
  "url": "https://buildbeyondstudio.com/",
  "publisher": {
    "@id": "https://buildbeyondstudio.com/#organization",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      {/* Structured Data: Organization, WebSite, FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FloatingWhatsApp />
      <FloatingQuickLinks />
      <VideoPopup />
      <Header />
      <Hero />
      <Testimonials />
      <Workflow />
      <Services />
      <HowItWorks />
      <RevenueMath />
      <WhyUs />
      <FounderNote />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

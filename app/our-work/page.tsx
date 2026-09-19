import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingQuickLinks from "@/components/FloatingQuickLinks";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import AppShowcaseSection from "@/components/portfolio/AppShowcaseSection";
import SeoShowcaseSection from "@/components/portfolio/SeoShowcaseSection";
import FAQSection from '@/components/FAQSection';
export const metadata: Metadata = buildMetadata(
  '/our-work',
  'Our Work: Websites & Apps Built for Agency Clients | BBS',
  'Browse websites, apps, and platforms Build Beyond Studio has delivered white label for marketing agencies across India and beyond.'
);


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of projects are included in your portfolio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our work can include websites, web applications, mobile apps, software platforms, integrations, and infrastructure-related projects delivered for agency partners."
      }
    },
    {
      "@type": "Question",
      "name": "Can we see examples similar to our client's project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tell us what type of project you are planning, and we can share relevant examples where they are available and approved for sharing."
      }
    },
    {
      "@type": "Question",
      "name": "Are the projects shown in your portfolio white-label projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many projects are delivered behind partner agencies. Because of client confidentiality and white-label agreements, some project details may be limited."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build something similar to a project in your portfolio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Possibly. A portfolio example can help explain our approach, but the final scope depends on your client's requirements, design, integrations, and expected functionality."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only work on new projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We can also support redesigns, feature improvements, migrations, maintenance, performance work, and development of existing platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Can our agency use the completed project in its own portfolio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the agreement and client permission. We can discuss portfolio rights before the project begins."
      }
    }
  ]
};

const pageSpecificFaqs = [
  {
    "question": "What types of projects are included in your portfolio?",
    "answer": "Our work can include websites, web applications, mobile apps, software platforms, integrations, and infrastructure-related projects delivered for agency partners."
  },
  {
    "question": "Can we see examples similar to our client's project?",
    "answer": "Yes. Tell us what type of project you are planning, and we can share relevant examples where they are available and approved for sharing."
  },
  {
    "question": "Are the projects shown in your portfolio white-label projects?",
    "answer": "Many projects are delivered behind partner agencies. Because of client confidentiality and white-label agreements, some project details may be limited."
  },
  {
    "question": "Can you build something similar to a project in your portfolio?",
    "answer": "Possibly. A portfolio example can help explain our approach, but the final scope depends on your client's requirements, design, integrations, and expected functionality."
  },
  {
    "question": "Do you only work on new projects?",
    "answer": "No. We can also support redesigns, feature improvements, migrations, maintenance, performance work, and development of existing platforms."
  },
  {
    "question": "Can our agency use the completed project in its own portfolio?",
    "answer": "That depends on the agreement and client permission. We can discuss portfolio rights before the project begins."
  }
];

export default function OurWork() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FloatingWhatsApp />
      <FloatingQuickLinks />

      <h1 className="sr-only">Work Delivered Under Our Partner Agencies' Brands</h1>

      <Header />

      <PortfolioSection columns={3} />

      <AppShowcaseSection />

      <SeoShowcaseSection />

      {/* Space for future sections (Brand Identity, etc.) */}

      <div className="mt-20">
        <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
      </div>
    </main>
  );
}

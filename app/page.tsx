// import ClientHomeWrapper from "@/components/ClientHomeWrapper";
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
import FloatingQuickLinks from "@/components/FloatingQuickLinks";
import VideoPopup from "@/components/VideoPopup";
import FAQSection from '@/components/FAQSection';




export const metadata = {
  title: "White Label Web Dev & DevOps Agency for Marketing Agencies | BBS",
  description: "Build Beyond Studio is the invisible tech team behind marketing agencies. White label web, app, and DevOps delivery under your brand. Book a call.",
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do you work directly with our clients?", "acceptedAnswer": { "@type": "Answer", "text": "No. Build Beyond Studio works behind your agency. You manage the client relationship, communication, pricing, and account, while we handle the technical delivery under your brand." } },
    { "@type": "Question", "name": "What services can we outsource to BBS?", "acceptedAnswer": { "@type": "Answer", "text": "You can outsource website development, mobile apps, custom software, web applications, DevOps, infrastructure management, integrations, maintenance, and technical consulting." } },
    { "@type": "Question", "name": "Can we sell your services under our own brand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our services are designed for white-label partnerships. Your client sees your agency as the service provider, while BBS works as your behind-the-scenes delivery team." } },
    { "@type": "Question", "name": "Will you contact our client directly?", "acceptedAnswer": { "@type": "Answer", "text": "Not unless you specifically approve it. Our normal process is to communicate with your team, so you remain in control of the client relationship." } },
    { "@type": "Question", "name": "Can you work with our existing designers and SEO team?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can work from your existing designs, content, SEO plans, technical documents, or client brief. Our role is to support the parts your agency cannot handle internally." } },
    { "@type": "Question", "name": "Is BBS suitable for small marketing agencies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You do not need a large client base or an internal development department. BBS can support individual projects, ongoing delivery, or extra technical capacity when your workload increases." } }
  ]
};


const pageSpecificFaqs = [
  {
    "question": "Do you work directly with our clients?",
    "answer": "No. Build Beyond Studio works behind your agency. You manage the client relationship, communication, pricing, and account, while we handle the technical delivery under your brand."
  },
  {
    "question": "What services can we outsource to BBS?",
    "answer": "You can outsource website development, mobile apps, custom software, web applications, DevOps, infrastructure management, integrations, maintenance, and technical consulting."
  },
  {
    "question": "Can we sell your services under our own brand?",
    "answer": "Yes. Our services are designed for white-label partnerships. Your client sees your agency as the service provider, while BBS works as your behind-the-scenes delivery team."
  },
  {
    "question": "Will you contact our client directly?",
    "answer": "Not unless you specifically approve it. Our normal process is to communicate with your team, so you remain in control of the client relationship."
  },
  {
    "question": "Can you work with our existing designers and SEO team?",
    "answer": "Yes. We can work from your existing designs, content, SEO plans, technical documents, or client brief. Our role is to support the parts your agency cannot handle internally."
  },
  {
    "question": "Is BBS suitable for small marketing agencies?",
    "answer": "Yes. You do not need a large client base or an internal development department. BBS can support individual projects, ongoing delivery, or extra technical capacity when your workload increases."
  }
];

export default function Home() {
  return (
    // <ClientHomeWrapper>
    <main className="min-h-screen bg-[#F5F2EC] text-black">
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
      <InternshipProgramsSection />
      <RevenueMath />
      <WhyUs />
      <FounderNote />
      
      <Contact />
      <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
    </main>
    // </ClientHomeWrapper>
  )
}
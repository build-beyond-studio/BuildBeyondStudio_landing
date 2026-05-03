import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import WhyUs from "@/components/why-us";
import AgencyPartners from "@/components/agency-partners";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is white-label web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White-label web development means your agency offers web development to clients, but a technical partner like Build Beyond Studio builds everything behind the scenes. You present the work under your brand, invoice the client at your price, and keep the full margin. Your clients never know we were involved.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with agencies in Ambikapur and Chhattisgarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Build Beyond Studio is based in Ambikapur, Chhattisgarh. We work with marketing agencies, businesses, and startups across Ambikapur, Surguja, Raipur, Bilaspur, and all of India.",
      },
    },
    {
      "@type": "Question",
      name: "What is your typical project timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website takes 2–3 weeks. A custom web application takes 4–8 weeks depending on complexity. We provide a firm timeline upfront before any project begins — no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build on the MERN stack — MongoDB, Express.js, React, and Node.js — combined with Next.js for frontend and full DevOps setup including Docker and CI/CD pipelines for deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Do clients get full ownership of the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 100% of the source code, design files, and documentation belong to you or your client on delivery. Build Beyond Studio retains nothing. Full IP transfer is standard on every project.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Build Beyond Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply reach out via our contact form or WhatsApp. Share your project requirements or your client's brief. We'll respond within 24 hours with a clear estimate and timeline.",
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FloatingWhatsApp />
      <Header />
      <Hero />
      <Workflow />
      <Services />
      <CaseStudies />
      {/* <WhyUs /> */}
      <Testimonials />
      <AgencyPartners />
      <WhyUs />
      <FAQ />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </main>
  )
}
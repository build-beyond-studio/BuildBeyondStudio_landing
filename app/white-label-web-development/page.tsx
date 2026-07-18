import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/white-label-web-development',
  'White-Label Web Development Services for Agencies',
  'Scale your agency with a dedicated white-label web development partner. Deliver MERN, Next.js, and DevOps projects invisibly under your brand.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White-Label Web Development Services",
  "serviceType": "White-Label Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Comprehensive white-label web development services designed for marketing and creative agencies to outsource their technical production."
}

const faqs = [
  {
    question: "What is white-label web development?",
    answer: "White-label web development is when a technical team builds websites and applications for your agency clients, but all work, communications, and deliveries are branded under your agency's name. The end client never knows that a third party was involved."
  },
  {
    question: "How does the revenue-split / pricing model work?",
    answer: "We offer flexible fixed-price quotes per project or revenue-split models based on your margins. This allows you to markup our pricing as much as you want, capturing the maximum margin with zero local payroll liability."
  },
  {
    question: "Do you sign NDAs to protect our clients?",
    answer: "Yes, we enforce strict NDAs before any project details or client names are shared. We operate as an invisible extension of your team and have zero direct contact with your clients."
  },
  {
    question: "What technology stacks do you support?",
    answer: "We specialize in modern web stacks including React, Next.js, Node.js, Express, MongoDB (MERN Stack), Tailwind CSS, Docker, and secure AWS/GCP DevOps pipelines."
  },
  {
    question: "How do we communicate during a project?",
    answer: "We integrate directly into your Slack, Teams, or base camp setups. Our project managers and developers coordinate in real-time, matching your agency's working hours."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'White-Label Web Development', path: '/white-label-web-development' },
]);

export default function WhiteLabelPillarPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link> → <span className="text-gray-400">Services</span> → White-Label Web Development
        </div>

        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tight leading-tight">
          Deliver Enterprise-Grade Engineering Under Your Brand.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
          Scale your agency MERN stack offerings and protect your client retainers. We act as your invisible web development partner, building custom client portals, SaaS dashboards, and web applications without the liability of local hiring.
        </p>
        <a 
          href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20White-Label%20Web%20Development%20partnership%20with%20Build%20Beyond%20Studio." 
          className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" 
          style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
        >
          Discuss a Partnership
        </a>

        <div className="space-y-16 text-gray-700">
          
          {/* Section 1: Definition */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wide text-sm text-[#C8860A]">What is White Label Web Development?</h2>
            <p className="leading-relaxed mb-4 text-base font-light">
              As a modern marketing agency or creative studio, your core strength is client acquisition, brand strategy, and creative execution. But when clients ask for complex custom software, databases, or cloud infrastructure, building an in-house development team is a massive liability.
            </p>
            <p className="leading-relaxed mb-4 text-base font-light">
              <strong>White-label web development</strong> lets you outsource the engineering entirely to an invisible partner. We write the code, manage the DevOps, and test the software. You pitch and sell it to the client as your own proprietary work—keeping all direct client communication and brand equity.
            </p>
          </div>

          {/* Section 2: Revenue Split Model */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wide text-sm text-[#C8860A]">Our Agency-First Revenue Model</h2>
            <p className="leading-relaxed mb-4 text-base font-light">
              Traditional website outsourcing companies charge high markup rates that eat into your profit. At Build Beyond Studio, we operate on a flexible revenue-split or predictable flat-rate per project framework.
            </p>
            <p className="leading-relaxed mb-4 text-base font-light">
              You get predictable, wholesale engineering pricing, and you decide the final retail markup. Many of our partner agencies enjoy 50% to 70% gross margins on development retainers without paying full-time developer salaries.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-[rgba(200,134,10,0.12)] mt-6" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}>
              <h3 className="font-bold text-black mb-2 text-lg">BBS Leverage Advantage:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">✓ <span className="font-semibold text-black">Zero Payroll Liabilities:</span> Scale up development resources for dynamic client launches and scale down during quiet quarters.</li>
                <li className="flex gap-2">✓ <span className="font-semibold text-black">Total Brand Isolation:</span> All commits, emails, and staging areas are branded under your domain or white-labeled.</li>
                <li className="flex gap-2">✓ <span className="font-semibold text-black">Direct Integration:</span> We coordinate via your Slack channels, behaving like your internal tech division.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Handoff Process */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide text-sm text-[#C8860A]">Our Development & Integration Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Scope & NDAs', desc: 'You share the project brief. We sign a strict NDA before reviewing code or system databases, ensuring complete protection of your business relations.' },
                { step: '02', title: 'Architecture Planning', desc: 'We map out technical requirements, design server diagrams, and provide a transparent, fixed-price quote with clear milestone schedules.' },
                { step: '03', title: 'Sprint Development', desc: 'Our white-label team starts coding. We integrate directly into your communication workspace (Slack/Teams) to update you daily in real-time.' },
                { step: '04', title: 'QA & Handoff', desc: 'After rigorous testing, we launch the application, handle DevOps, and hand over 100% intellectual property (IP) rights directly to you.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-5 rounded-2xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-lg font-bold pt-0.5">{item.step}</span>
                  <div>
                    <div className="font-bold text-black mb-1 text-base">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Outsource FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide text-sm text-[#C8860A]">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-black text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic CTA Banner */}
        <div className="bg-[#0A0A0A] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden mt-20 shadow-2xl border border-white/5">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.10] pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tight relative z-10">
            Scale Your Agency's Services Today
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed font-light relative z-10">
            Let's discuss how we can integrate as your agency's white-label development partner. Reach out to our founder Ankush Kumar Gupta directly on WhatsApp to coordinate a strategic call.
          </p>
          <a 
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20White-Label%20Web%20Development%20partnership%20with%20Build%20Beyond Studio."
            className="inline-block bg-[#C8860A] text-white px-8 py-3 rounded-lg hover:bg-[#A06A00] transition-all font-semibold relative z-10"
            style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.25)' }}
          >
            Start Invisible Partnership
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

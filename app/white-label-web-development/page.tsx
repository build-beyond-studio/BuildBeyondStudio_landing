import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = buildMetadata(
  '/white-label-web-development',
  'White Label Web Development Services | BBS',
  'White label web development for agencies that need websites, stores, portals, and web apps delivered under their own brand.'
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
    question: "How does the white label delivery model work?",
    answer: "Your agency shares the approved requirement and remains the client lead. BBS confirms the delivery scope, builds the agreed solution, provides progress updates, completes testing, and hands over the finished work under your brand."
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
  "mainEntity": [
    { "@type": "Question", "name": "What kind of websites can you outsource to BBS?", "acceptedAnswer": { "@type": "Answer", "text": "We can help with business websites, service websites, landing pages, corporate websites, portals, and custom web experiences. The exact approach depends on the client's goals, design, and technical requirements." } },
    { "@type": "Question", "name": "Can you develop a website from our design?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can send us a Figma file, design document, wireframe, or even a clear brief. We turn the approved design into a responsive, working website under your agency's brand." } },
    { "@type": "Question", "name": "Which technologies do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Our web development work can include React, Next.js, Node.js, and other suitable technologies. We recommend the stack based on the project rather than forcing every client into the same setup." } },
    { "@type": "Question", "name": "Can you handle testing and website launch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Development, responsive testing, basic quality checks, deployment support, and launch assistance can be included in the project scope." } },
    { "@type": "Question", "name": "Will the client know that BBS built the website?", "acceptedAnswer": { "@type": "Answer", "text": "The project is delivered as a white-label service. We do not promote ourselves to your client or add our branding to the website unless you request otherwise." } },
    { "@type": "Question", "name": "Can you fix or improve a website that another developer built?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can review an existing website, identify technical issues, and help with improvements, redesigns, performance work, or new functionality. First, we need access to the codebase and a clear understanding of the current setup." } }
  ]
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'White-Label Web Development', path: '/white-label-web-development' },
]);


const pageSpecificFaqs = [
  {
    "question": "What kind of websites can you outsource to BBS?",
    "answer": "We can help with business websites, service websites, landing pages, corporate websites, portals, and custom web experiences. The exact approach depends on the client's goals, design, and technical requirements."
  },
  {
    "question": "Can you develop a website from our design?",
    "answer": "Yes. You can send us a Figma file, design document, wireframe, or even a clear brief. We turn the approved design into a responsive, working website under your agency's brand."
  },
  {
    "question": "Which technologies do you use?",
    "answer": "Our web development work can include React, Next.js, Node.js, and other suitable technologies. We recommend the stack based on the project rather than forcing every client into the same setup."
  },
  {
    "question": "Can you handle testing and website launch?",
    "answer": "Yes. Development, responsive testing, basic quality checks, deployment support, and launch assistance can be included in the project scope."
  },
  {
    "question": "Will the client know that BBS built the website?",
    "answer": "The project is delivered as a white-label service. We do not promote ourselves to your client or add our branding to the website unless you request otherwise."
  },
  {
    "question": "Can you fix or improve a website that another developer built?",
    "answer": "Yes. We can review an existing website, identify technical issues, and help with improvements, redesigns, performance work, or new functionality. First, we need access to the codebase and a clear understanding of the current setup."
  }
];

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
          White Label Web Development for Marketing Agencies
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
          Add web development capacity when your agency needs it. BBS builds websites, stores, portals, and web applications under your brand while your team keeps the client relationship and project direction.
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
              Marketing agencies often need technical delivery for client projects without maintaining a large internal development team. White label development gives the agency an experienced build team while preserving its existing client process.
            </p>
            <p className="leading-relaxed mb-4 text-base font-light">
              BBS scopes, develops, tests, launches, and hands over the agreed work under your agency brand. Your agency leads client communication and approvals. We join client conversations only when your team requests it.
            </p>
          </div>

          {/* Section 2: Revenue Split Model */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wide text-sm text-[#C8860A]">HOW THE WHITE LABEL DELIVERY MODEL WORKS</h2>
            <p className="leading-relaxed mb-4 text-base font-light">
              Start by sharing an approved client requirement. BBS reviews the scope, confirms responsibilities, and prepares a delivery plan covering milestones, review points, testing, launch, and handover.
            </p>
            <p className="leading-relaxed mb-4 text-base font-light">
              Your agency keeps control of client communication and commercial decisions. BBS focuses on technical delivery, progress updates, quality checks, documentation, and post launch support within the agreed scope.
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

      <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
    </main>
  )
}

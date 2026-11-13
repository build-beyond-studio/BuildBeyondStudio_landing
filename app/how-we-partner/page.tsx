import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title: "How White Label Delivery Works for Agencies | BBS",
  description: "See how BBS works behind your agency brand: brief, fixed quote, sprint delivery, QA, handover and support, with NDA before any project details.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/how-we-partner",
  },
  openGraph: {
    title: "How White Label Delivery Works for Agencies | BBS",
    description: "See how BBS works behind your agency brand: brief, fixed quote, sprint delivery, QA, handover and support, with NDA before any project details.",
    url: "https://buildbeyondstudio.com/how-we-partner",
    type: "website",
  },
}

const pageSpecificFaqs = [
  {
    question: "What happens after we send a project brief?",
    answer: "We review the brief and respond within 24 hours. We clarify technical requirements, execute a mutual NDA, and prepare a detailed fixed quote and milestone timeline for your review."
  },
  {
    question: "Who communicates with the end client during development?",
    answer: "Your agency remains the sole point of contact. We work entirely behind your brand—we communicate with your project manager, attend calls only under your brand if requested, and never contact your clients directly."
  },
  {
    question: "When is the NDA signed?",
    answer: "We execute a bilateral Non-Disclosure Agreement (NDA) before you share sensitive client details, designs, access credentials, or project documentation."
  },
  {
    question: "How is QA and testing handled before handover?",
    answer: "Every build is tested by our QA testers before delivery. Every deliverable undergoes multi-device responsive testing, cross-browser validation, Lighthouse performance checks, and staging review before you present it to your client."
  },
  {
    question: "How are change requests and revisions handled?",
    answer: "Any adjustments outside the agreed scope are scoped separately, priced upfront, and require your written approval before implementation. There are zero surprise invoices."
  },
  {
    question: "What are your payment terms for agency projects?",
    answer: "Your first project: no upfront payment. You pay after delivery, once you are satisfied. After that, projects are billed 50% in advance and 50% on completion."
  },
  {
    question: "What do we receive at final handover?",
    answer: "You receive 100% intellectual property ownership, complete source code, repository transfers, documentation, and staging credentials. Post-launch support is available under a separate maintenance agreement."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": pageSpecificFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://buildbeyondstudio.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "How We Partner",
      "item": "https://buildbeyondstudio.com/how-we-partner"
    }
  ]
};

export default function HowWePartnerPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            Delivery Process & Partnership Model
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.08]">
            How White-Label Delivery Works
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            How BBS operates as the invisible engineering team behind your marketing agency. Clear milestones, fixed quotes, NDA-backed security, and complete agency ownership at every stage.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['NDA Before Briefing', 'Fixed-Scope Quotation', 'Sprint-Based Delivery', 'Multi-Device QA', '100% IP Transfer'].map((badge) => (
              <span 
                key={badge} 
                className="px-4 py-1.5 rounded-full bg-white border border-[rgba(200,134,10,0.2)] text-[12px] font-bold text-[#C8860A] shadow-sm uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="space-y-20 text-gray-700">

          {/* Intro Block: Partnership & Agency Control */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4">
              Your Client Relationship. Our Engineering Execution.
            </h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-600 font-light">
              <p>
                A white-label engineering partnership means your agency remains in full control. You manage the client relationship, set the commercial pricing, and maintain client communication. Build Beyond Studio works entirely in the background as your dedicated technical delivery team.
              </p>
              <p>
                We do not solicit, reach out to, or market to your clients. From initial brief to final repository handover, everything is delivered under your agency’s name, backed by bilateral non-disclosure agreements and explicit intellectual property assignments.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Agency controls pricing & client communications
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> BBS handles code, QA, integrations & deployment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Read our full commitments in the <Link href="/trust" className="text-[#C8860A] font-semibold underline">Trust Centre</Link>
              </span>
            </div>
          </div>

          {/* Section 1: 5-Step Delivery Process */}
          <div>
            <div className="text-center mb-14">
              <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">End-to-End Delivery</span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mt-2 mb-3">
                The 5-Step White-Label Delivery Process
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-sm sm:text-base">
                Each step defines clear responsibilities, deliverables, and requirements so expectations remain transparent throughout the project lifecycle.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  name: 'Brief & NDA',
                  summary: 'Establishing legal confidentiality and reviewing project goals.',
                  happens: 'We sign a bilateral Non-Disclosure Agreement before receiving sensitive project assets, client identity, or design files. We then conduct an initial review of your project requirements, target deadline, and technical preferences.',
                  receives: 'Signed NDA document and an initial technical requirement confirmation checklist.',
                  needs: 'Figma / design files, brief document, technical requirements, target deadline, and existing environment credentials if applicable.'
                },
                {
                  step: '02',
                  name: 'Scope & Fixed Quote',
                  summary: 'Architecture audit, technical specification, and transparent pricing.',
                  happens: 'We map out the architecture, database schema, required third-party integrations, and milestone schedule. We provide a firm, itemised quotation with clear scope boundaries.',
                  receives: 'Detailed technical specification, milestone breakdown, fixed commercial quote, and staging delivery dates.',
                  needs: 'Clarification on third-party APIs, authentication requirements, and written sign-off on the scope boundary.'
                },
                {
                  step: '03',
                  name: 'Build in Sprints',
                  summary: 'Clean modular code built in structured 1-to-2 week development sprints.',
                  happens: 'Our developers build components, integrate APIs, set up databases, and configure server environments. You get a weekly progress update with a staging link and async video walkthroughs.',
                  receives: 'Private staging URL access, weekly progress summary, and async screen recordings highlighting completed features.',
                  needs: 'Feedback on completed milestone modules within 48 hours to keep development velocity steady.'
                },
                {
                  step: '04',
                  name: 'QA & Staging Review',
                  summary: 'Rigorous multi-device responsive testing and agency approval.',
                  happens: 'Every build is tested by our QA testers before delivery. Our team performs cross-browser checks (Chrome, Safari, Firefox, Edge), responsive layout testing across mobile/tablet/desktop, Core Web Vitals checks, and tracking tag validation.',
                  receives: 'Comprehensive QA punch-list, test results summary, and a feature-complete staging environment ready for client presentation.',
                  needs: 'Agency review and written sign-off, or consolidated revision requests based on client feedback.'
                },
                {
                  step: '05',
                  name: 'Launch, Handover & Support',
                  summary: 'Production deployment, repository transfer, and handover documentation.',
                  happens: 'We manage domain configuration, SSL setup, CDN caching, and production rollout. We transfer full git repository rights, documentation, and credentials to your agency. Post-launch support is available under a separate maintenance agreement.',
                  receives: 'Live production URL, 100% source code repository access, environment credentials, and handover documentation.',
                  needs: 'Production DNS access or hosting panel credentials, and final milestone sign-off.'
                }
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-mono font-bold flex items-center justify-center text-sm shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-black tracking-tight">{item.name}</h3>
                        <p className="text-xs text-gray-500 font-light">{item.summary}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-black/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#C8860A] mb-1.5">What Happens</div>
                      <p className="text-gray-600 leading-relaxed font-light">{item.happens}</p>
                    </div>

                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-black/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">What Agency Receives</div>
                      <p className="text-gray-600 leading-relaxed font-light">{item.receives}</p>
                    </div>

                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-black/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">What BBS Needs</div>
                      <p className="text-gray-600 leading-relaxed font-light">{item.needs}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Communication & Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Communication Cadence */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Async & Transparent</span>
                <h3 className="text-2xl font-black text-black tracking-tight mt-1 mb-4">Communication Cadence</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                  Clear, consistent communication prevents misunderstandings and keeps projects moving without meeting fatigue.
                </p>
                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600 font-light">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C8860A] font-bold text-base leading-none">✓</span>
                    <span><strong>Dedicated Slack / Teams / WhatsApp:</strong> Direct private channel with your technical point of contact.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C8860A] font-bold text-base leading-none">✓</span>
                    <span><strong>Weekly Video Demos:</strong> Screen recordings walking through newly completed features on staging.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C8860A] font-bold text-base leading-none">✓</span>
                    <span><strong>Transparent Task Tracking:</strong> Real-time visibility into active sprint backlog, progress, and QA items.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C8860A] font-bold text-base leading-none">✓</span>
                    <span><strong>24-Hour SLA for Inquiries:</strong> Technical questions and staging queries answered within one business day.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Delivery Roles */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Accountability</span>
                <h3 className="text-2xl font-black text-black tracking-tight mt-1 mb-4">Key Delivery Roles</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                  Every project is backed by verified responsibilities so code quality and timelines stay strictly managed.
                </p>
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-black/5">
                    <div className="text-xs font-bold text-black">Project Manager / Technical Lead</div>
                    <div className="text-xs text-gray-500 font-light mt-0.5">
                      Your single primary liaison. Translates agency briefs into technical sprint tickets, tracks velocity, and manages milestones.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-black/5">
                    <div className="text-xs font-bold text-black">Senior Code Reviewer</div>
                    <div className="text-xs text-gray-500 font-light mt-0.5">
                      Reviews every pull request for architecture cleanliness, security, SEO semantic markup, and performance best practices.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-black/5">
                    <div className="text-xs font-bold text-black">QA & Deployment Engineer</div>
                    <div className="text-xs text-gray-500 font-light mt-0.5">
                      Executes cross-device responsive validation, Core Web Vitals profiling, DNS mapping, and production deployment scripts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Change Requests & Revisions */}
          <div className="bg-[#FAF9F5] border border-[rgba(200,134,10,0.15)] rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Budget & Scope Integrity</span>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-2 mb-3">
                How Change Requests & Revisions Work
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                Scope creep is one of the biggest risks to agency profitability. We keep project boundaries crystal clear so you never face surprise costs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="font-bold text-black mb-1">1. Scope Evaluation</div>
                  <div className="text-gray-500 font-light">When your client requests new features, we assess impact on architecture, timeline, and dependencies.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="font-bold text-black mb-1">2. Written Estimate</div>
                  <div className="text-gray-500 font-light">We provide an itemised change order with transparent hours/costs and timeline adjustments before writing any code.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="font-bold text-black mb-1">3. Agency Sign-Off</div>
                  <div className="text-gray-500 font-light">You review, apply your agency margin, obtain client approval, and give written go-ahead before implementation begins.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Handover Checklist */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
            <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Complete Agency Ownership</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-2 mb-3">
              Final Handover Checklist
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl">
              Upon final project approval, we transfer 100% of project assets directly to your agency. You own the code, repositories, and documentation outright.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              {[
                { title: 'Source Code Repository', desc: 'Full GitHub / GitLab / Bitbucket repository ownership transfer or zip package.' },
                { title: 'Technical Documentation', desc: 'Architecture overview, environment variables setup guide, and third-party API configurations.' },
                { title: 'Production Credentials', desc: 'All database, CMS admin, domain DNS, and cloud hosting accounts safely handed over.' },
                { title: 'Hosting & Deployment Scripts', desc: 'Vercel, AWS, or VPS deployment setup instructions with zero vendor lock-in.' },
                { title: 'Intellectual Property Transfer', desc: 'Explicit IP assignment confirming all custom work belongs exclusively to your agency / client.' },
                { title: 'Post-Launch Maintenance Support', desc: 'Post-launch support is available under a separate maintenance agreement covering updates and ongoing care.' }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAF9F5] border border-black/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <h4 className="font-bold text-black">{item.title}</h4>
                    </div>
                    <p className="text-gray-500 font-light text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Engagement Models */}
          <div>
            <div className="text-center mb-12">
              <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Flexible Partnership</span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mt-2 mb-3">
                Three Flexible Engagement Models
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-sm sm:text-base">
                Choose the model that fits your agency's pipeline—scale capacity on demand without long-term payroll overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  model: 'Per-Project Fixed Quote',
                  badge: 'Most Popular for Single Builds',
                  desc: 'Ideal for agency client projects with well-defined scopes like websites, e-commerce stores, or conversion tracking.',
                  features: ['Itemised fixed quotation', 'Strict milestone delivery dates', 'Zero overtime or overrun charges', 'Ongoing maintenance retainers available'],
                  ctaLink: '/contact',
                  ctaText: 'Get a Project Quote'
                },
                {
                  model: 'Dedicated Development Pod',
                  badge: 'For Continuous Pipeline',
                  desc: 'A dedicated team of senior developers and a QA engineer allocated exclusively to your agency pipeline month-to-month.',
                  features: ['Dedicated engineering capacity', 'Direct Slack / sprint integration', 'Seamless scaling as workload grows', 'Monthly rolling agreement'],
                  ctaLink: '/services/dedicated-development-pod',
                  ctaText: 'Explore Dedicated Pods'
                },
                {
                  model: 'Maintenance Retainer',
                  badge: 'Recurring Agency Revenue',
                  desc: 'Ongoing technical maintenance, security patches, plugin updates, uptime monitoring, and minor content revisions.',
                  features: ['Automated regular backups', 'Core & security updates', 'Lighthouse performance audits', 'White-label monthly client reports'],
                  ctaLink: '/services/website-app-maintenance',
                  ctaText: 'See Maintenance Plans'
                }
              ].map((plan, i) => (
                <div key={i} className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[10px] font-bold text-[#C8860A] uppercase tracking-wider mb-4">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-black text-black tracking-tight mb-2">{plan.model}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-6">{plan.desc}</p>
                    <ul className="space-y-2.5 text-xs text-gray-600 font-light mb-8">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-[#C8860A] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={plan.ctaLink} 
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-[#FAF9F5] hover:bg-[#FDF8F0] border border-black/10 hover:border-[#C8860A]/40 text-xs font-bold text-black transition-all"
                  >
                    {plan.ctaText} →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
              Want to see how agency profit margins work on these models? Read our <Link href="/pricing-model" className="text-[#C8860A] font-semibold underline">Partner Pricing Model</Link> or review our <Link href="/trust" className="text-[#C8860A] font-semibold underline">Trust Centre</Link>.
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Ready to partner?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Send a Project Brief. We Respond Within 24 Hours.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            We sign your NDA before reviewing client details. Zero hiring overhead, transparent milestone delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg text-sm"
              style={{ 
                background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', 
                boxShadow: '0 4px 16px rgba(200,134,10,0.30)' 
              }}
            >
              Send a Project Brief →
            </Link>
            <Link 
              href="/success-stories" 
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              See Partner Case Studies
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
    </main>
  )
}

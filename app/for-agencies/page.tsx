import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import RevenueMath from '@/components/revenue-math';
import Workflow from '@/components/Workflow';

import FAQ from '@/components/faq';
import Link from 'next/link';
import RevenueScrollBtn from '@/components/revenue-scroll-btn';

export const metadata: Metadata = {
  title: 'White-Label Web Development for Marketing Agencies | Build Beyond Studio',
  description:
    'BBS is your invisible web development team. We build under your brand — NDA-first, full IP ownership, 50/50 revenue split. Web development partner for agencies across India.',
  keywords: [
    'white label web development for marketing agencies',
    'web development partner for agencies India',
    'outsource web development agency India',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/for-agencies',
  },
  openGraph: {
    title: 'White-Label Web Development for Marketing Agencies | Build Beyond Studio',
    description:
      'BBS is your invisible web development team. We build under your brand — NDA-first, full IP ownership, 50/50 revenue split. Web development partner for agencies across India.',
    url: 'https://buildbeyondstudio.com/for-agencies',
    siteName: 'Build Beyond Studio',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ForAgenciesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "White-Label Web Development for Marketing Agencies",
    "description": "BBS builds websites and web applications fully under your agency brand. NDA-first, full IP ownership, 50/50 revenue split, zero fixed overhead.",
    "provider": {
      "@type": "Organization",
      "name": "Build Beyond Studio",
      "url": "https://buildbeyondstudio.com"
    },
    "areaServed": "India",
    "audience": {
      "@type": "Audience",
      "audienceType": "Marketing Agencies"
    },
    "offers": {
      "@type": "Offer",
      "description": "50/50 revenue split. Zero fixed overhead. Start with one pilot project.",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(200,134,10,0.08)',
              border: '1px solid rgba(200,134,10,0.25)',
              color: '#C8860A',
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#C8860A',
                boxShadow: '0 0 0 3px rgba(200,134,10,0.25)',
                display: 'inline-block',
                animation: 'heroDotPulse 2s ease-in-out infinite',
              }}
            />
            Built Exclusively for Marketing Agencies
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
          White-Label Web Development for<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8860A] to-[#E8A020]">
            Marketing Agencies
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-semibold text-gray-500 mb-5 tracking-wide">
          The invisible web team for marketing agencies.
        </p>

        <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join 10+ marketing agencies across India who use Build Beyond Studio as their white-label web development partner. You bring the clients — we handle 100% of the technical work. As the leading outsource web development agency India has to offer, we act as the invisible web team marketing agency owners trust to scale effortlessly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/#contact"
            className="inline-block text-white px-8 py-4 rounded-lg transition-all font-semibold text-base"
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
              boxShadow: '0 4px 16px rgba(200,134,10,0.30)',
            }}
          >
            Start your first pilot project →
          </Link>

          <RevenueScrollBtn label="Revenue Model" />
        </div>

        <p className="text-gray-400 text-sm">No commitment. Share a client requirement. Get an estimate within 24 hours.</p>

        <style>{`
          @keyframes heroDotPulse {
            0%,100% { box-shadow: 0 0 0 3px rgba(200,134,10,0.25); }
            50%      { box-shadow: 0 0 0 7px rgba(200,134,10,0); }
          }
        `}</style>
      </section>

      {/* Problem Cards Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">The Problem</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          You're a marketing agency. You close deals. But building websites requires a technical team you don't have.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Problem 1 */}
          <div
            className="p-8 rounded-xl border border-[rgba(200,134,10,0.12)] bg-white"
            style={{ boxShadow: '0 2px 12px rgba(200,134,10,0.08)' }}
          >
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Losing clients to full-service agencies</h3>
            <p className="text-gray-600 leading-relaxed">
              When clients ask for websites, you either decline or refer them to competitors. Pure margin loss.
            </p>
          </div>

          {/* Problem 2 */}
          <div
            className="p-8 rounded-xl border border-[rgba(200,134,10,0.12)] bg-white"
            style={{ boxShadow: '0 2px 12px rgba(200,134,10,0.08)' }}
          >
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Developer costs eating your margins</h3>
            <p className="text-gray-600 leading-relaxed">
              Hiring developers is expensive. Freelancers are unreliable. Both leave you with zero tech control.
            </p>
          </div>

          {/* Problem 3 */}
          <div
            className="p-8 rounded-xl border border-[rgba(200,134,10,0.12)] bg-white"
            style={{ boxShadow: '0 2px 12px rgba(200,134,10,0.08)' }}
          >
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Freelancers missing deadlines</h3>
            <p className="text-gray-600 leading-relaxed">
              No accountability. Scope creep. Hidden costs. You end up managing everything while your client loses patience.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Math Section */}
      <section id="revenue" className="bg-white border-y border-[rgba(200,134,10,0.12)]">
        <RevenueMath />
      </section>

      {/* Workflow Section */}
      <Workflow />

      {/* Trust Block Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">How Our White-Label Web Development Model Works</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Confidentiality is non-negotiable. As a trusted web development partner for agencies India relies on, your partnership with BBS stays between us and you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <polyline points="9 15 11 17 15 13"/>
                </svg>
              ),
              title: 'NDA Signed',
              desc: 'Every project starts with a signed NDA. Full legal protection.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <line x1="9" y1="10" x2="15" y2="10"/>
                  <line x1="12" y1="7" x2="12" y2="13"/>
                </svg>
              ),
              title: 'No Direct Client Contact',
              desc: 'We never contact your clients. Ever. You remain the sole point of contact.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              ),
              title: 'Zero BBS Branding',
              desc: 'No Build Beyond Studio branding on code, delivery, or any deliverables.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              ),
              title: 'No Data Retained',
              desc: 'After project completion, we retain zero client data. Everything stays with you.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              ),
              title: 'Full IP Rights',
              desc: 'You own 100% of the source code, IP, and all deliverables. Completely.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              ),
              title: 'Pricing Confidential',
              desc: 'Your pricing to clients stays private. No visibility into your margins.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-[rgba(200,134,10,0.12)] bg-white text-center"
              style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(200,134,10,0.08)] border border-[rgba(200,134,10,0.14)] flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* FAQ Section */}
      <section className="bg-white border-t border-black/5 py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about working with BBS</p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Start with one pilot project — zero risk
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Share one live client requirement. We'll send you a firm estimate within 24 hours. No strings attached. No long-term commitment.
        </p>
        <Link
          href="/#contact"
          className="inline-block text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg"
          style={{
            background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
            boxShadow: '0 4px 16px rgba(200,134,10,0.30)',
          }}
        >
          Get Started →
        </Link>
      </section>

      <Footer />
    </main>
  );
}

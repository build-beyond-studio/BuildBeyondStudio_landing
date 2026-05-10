import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import RevenueMath from '@/components/revenue-math';
import Workflow from '@/components/Workflow';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'White-Label Web Dev for Marketing Agencies | Build Beyond Studio',
  description:
    'Marketing agencies: offer web development without hiring a single developer. BBS is your invisible tech team — NDA-first, full IP yours, zero overhead.',
  keywords: [
    'white label web development for marketing agencies',
    'web development partner for agencies',
    'invisible web team for agencies',
    'agency web dev outsourcing',
    'web development without hiring developers',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/for-agencies',
  },
  openGraph: {
    title: 'White-Label Web Dev for Marketing Agencies | Build Beyond Studio',
    description:
      'Marketing agencies: offer web development without hiring a single developer. BBS is your invisible tech team — NDA-first, full IP yours, zero overhead.',
    url: 'https://buildbeyondstudio.com/for-agencies',
    siteName: 'Build Beyond Studio',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ForAgenciesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Your clients need websites.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8860A] to-[#E8A020]">
            We build them.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join 10+ marketing agencies across India who use Build Beyond Studio as their invisible tech team. You bring the clients — we handle 100% of the technical work.
        </p>
        <Link
          href="/#contact"
          className="inline-block text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg mb-8"
          style={{
            background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
            boxShadow: '0 4px 16px rgba(200,134,10,0.30)',
          }}
        >
          Start your first pilot project →
        </Link>
        <p className="text-gray-500 text-sm">No commitment. Share a client requirement. Get an estimate within 24 hours.</p>
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
              <span className="text-2xl">📉</span>
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
              <span className="text-2xl">💸</span>
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
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Freelancers missing deadlines</h3>
            <p className="text-gray-600 leading-relaxed">
              No accountability. Scope creep. Hidden costs. You end up managing everything while your client loses patience.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Math Section */}
      <section className="bg-white border-y border-[rgba(200,134,10,0.12)]">
        <RevenueMath />
      </section>

      {/* Workflow Section */}
      <Workflow />

      {/* Trust Block Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">How We Keep Your Partnership Invisible</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Confidentiality is non-negotiable. Your partnership with BBS stays between us and you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🤝', title: 'NDA Signed', desc: 'Every project starts with a signed NDA. Full legal protection.' },
            { icon: '🚫', title: 'No Direct Client Contact', desc: 'We never contact your clients. Ever. You remain the sole point of contact.' },
            { icon: '🎨', title: 'Zero BBS Branding', desc: 'No Build Beyond Studio branding on code, delivery, or any deliverables.' },
            { icon: '🔒', title: 'No Data Retained', desc: 'After project completion, we retain zero client data. Everything stays with you.' },
            { icon: '📜', title: 'Full IP Rights', desc: 'You own 100% of the source code, IP, and all deliverables. Completely.' },
            { icon: '💰', title: 'Pricing Confidential', desc: 'Your pricing to clients stays private. No visibility into your margins.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-[rgba(200,134,10,0.12)] bg-white text-center"
              style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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

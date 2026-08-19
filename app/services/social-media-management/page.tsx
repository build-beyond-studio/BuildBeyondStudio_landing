import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/social-media-management',
  'Social Media Management Services | Build Beyond Studio',
  'Full social media management — content calendars, posting, community management, and growth strategy for Instagram, LinkedIn & Facebook.',
  {
    keywords: [
      'social media management services',
      'Instagram management agency',
      'LinkedIn content management',
      'social media marketing India',
      'content calendar management',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Management Services",
  "serviceType": "Social Media Management",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Build Beyond Studio manages end-to-end social media presence across Instagram, LinkedIn, and Facebook — content calendar planning, post design, captions, scheduled publishing, and community/DM management — so businesses stay consistently active without needing an in-house social team."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which platforms do you manage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Primarily Instagram, LinkedIn, and Facebook; other platforms can be added based on where the target audience is most active."
      }
    },
    {
      "@type": "Question",
      "name": "How many posts per month are typical?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Posting frequency is set based on platform and goals during the content calendar planning stage, typically ranging from a few posts a week to daily."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle community management (comments and DMs)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, comment and DM responses are part of the service to keep engagement consistent."
      }
    },
    {
      "@type": "Question",
      "name": "Who approves content before it goes live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do — every monthly content calendar is shared for approval before any posting begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can social media be combined with ads management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pairing organic social media management with Google & Meta Ads gives a more complete funnel — organic builds trust, ads drive conversion."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Social Media Management', path: '/services/social-media-management' },
])

const included = [
  "Monthly content calendar planning (aligned to business goals)",
  "Post design (static, carousel, Reels/short-form video)",
  "Caption writing with platform-specific tone",
  "Scheduled publishing across Instagram, LinkedIn, Facebook",
  "Community management: comments & DM responses",
  "Hashtag & trend research",
  "Monthly growth report (reach, engagement, follower growth)",
]

const process = [
  { step: "01", title: "Brand Voice & Audience Discovery", desc: "We define your tone of voice, content pillars, and target audience before creating anything." },
  { step: "02", title: "Monthly Content Calendar Drafted for Approval", desc: "A complete month of content planned and sent to you for sign-off before any posting begins." },
  { step: "03", title: "Content Production (Design + Copy)", desc: "Designed posts, captions, hashtag sets — all produced to your brand standards." },
  { step: "04", title: "Scheduled Posting + Community Management", desc: "Consistent publishing and daily monitoring of comments and DMs." },
  { step: "05", title: "Monthly Performance Review & Strategy Adjustment", desc: "Review reach, engagement, follower growth, and refine the next month's strategy." },
]

const whyBBS = [
  "Content ties back into your broader SEO/GEO strategy — not managed in a silo",
  "Same production pipeline as our AI Content & Video service, so turnaround is faster",
  "Clear monthly calendar approval — no surprise posts",
]

const faqs = [
  { q: "Which platforms do you manage?", a: "Primarily Instagram, LinkedIn, and Facebook; other platforms can be added based on where the target audience is most active." },
  { q: "How many posts per month are typical?", a: "Posting frequency is set based on platform and goals during the content calendar planning stage, typically ranging from a few posts a week to daily." },
  { q: "Do you handle community management (comments/DMs)?", a: "Yes, comment and DM responses are part of the service to keep engagement consistent." },
  { q: "Who approves content before it goes live?", a: "You do — every monthly content calendar is shared for approval before any posting begins." },
  { q: "Can social media be combined with ads management?", a: "Yes, pairing organic social media management with Google & Meta Ads gives a more complete funnel — organic builds trust, ads drive conversion." },
]

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section className="max-w-4xl mx-auto pt-28 pb-8 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          {" → "}
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          {" → "}Social Media Management
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">Social Media Management Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          Social Media Management That Builds an Audience, Not Just a Feed
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">Strategy, content, posting, and community — fully managed.</p>

        {/* Answer-first intro */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Build Beyond Studio manages end-to-end social media presence across Instagram, LinkedIn, and Facebook — content calendar planning, post design, captions, scheduled publishing, and community/DM management — so businesses stay consistently active without needing an in-house social team.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20Social%20Media%20Management%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_social_media_management' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Get Social Media Managed →
            </TrackedLink>
          </div>

          {/* What's included */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">What's Included</h2>
            <ul className="space-y-2">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#C8860A] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Our Process</h2>
            <div className="space-y-3">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-0.5 shrink-0">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why BBS */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Why Build Beyond Studio</h2>
            <ul className="space-y-2">
              {whyBBS.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#C8860A] shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3">
            <Link href="/services/seo-aeo-geo" className="text-[13px] text-[#C8860A] hover:underline">SEO, AEO & GEO →</Link>
            <Link href="/services/google-meta-ads" className="text-[13px] text-[#C8860A] hover:underline">Google & Meta Ads →</Link>
            <Link href="/services/ai-content-video-production" className="text-[13px] text-[#C8860A] hover:underline">AI Content & Video Production →</Link>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

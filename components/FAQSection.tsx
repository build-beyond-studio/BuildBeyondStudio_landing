import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-20 px-4 sm:px-6 bg-[#F5F2EC] border-t border-black/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 cursor-pointer hover:border-[rgba(200,134,10,0.35)] transition-all duration-200"
                style={{ boxShadow: '0 2px 10px rgba(200,134,10,0.07)' }}
              >
                <summary className="flex items-center justify-between list-none">
                  <h3 className="text-black font-semibold text-base sm:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[#C8860A] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: FAQItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F5F2EC] border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-btn-${index}`;
            const contentId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl transition-all duration-200 overflow-hidden"
                style={{ boxShadow: '0 2px 10px rgba(200,134,10,0.07)' }}
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:border-[rgba(200,134,10,0.35)] transition-colors focus:outline-none"
                >
                  <span className="text-black font-semibold text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[#C8860A] text-xl font-bold flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-black/5 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

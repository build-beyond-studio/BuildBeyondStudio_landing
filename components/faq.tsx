"use client";

import React, { useState } from "react";
import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 px-5 sm:px-8 bg-[#F5F2EC] border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C8860A] bg-[#FDF8F0] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.2)] inline-block mb-3">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black tracking-[-0.03em] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about partnering with Build Beyond Studio.
          </p>
        </div>

        <div className="space-y-3.5">
          {HOMEPAGE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const btnId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-white border border-[rgba(200,134,10,0.14)] rounded-xl transition-all duration-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                >
                  <span className="text-black font-semibold text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[#C8860A] text-xl font-bold flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-black/5 pt-3.5"
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

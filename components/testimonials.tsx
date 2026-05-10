'use client';

import React from 'react';

const testimonials = [
  {
    quote: 'Our client had no idea BBS was involved. They thought we built it ourselves.',
    client: 'Digital agency, Mumbai',
  },
  {
    quote: 'I went from turning down web projects to closing 3 additional clients in a month.',
    client: 'Marketing agency, Delhi',
  },
  {
    quote: 'The 50/50 model means I net more than I would with my own developer — with zero management overhead.',
    client: 'Agency owner, Bangalore',
  },
  {
    quote: '3 projects delivered, ₹1.5L earned in 60 days',
    client: 'Growth agency, Pune',
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F2EC] py-16 md:py-24 px-4 sm:px-6 border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Trusted by Agencies Across India</h2>
          <p className="text-gray-600 text-base md:text-lg">Real feedback from agencies delivering web projects with Build Beyond Studio</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-8 flex flex-col justify-between"
              style={{ boxShadow: '0 2px 12px rgba(200,134,10,0.08)' }}
            >
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-600 font-medium text-sm">{testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
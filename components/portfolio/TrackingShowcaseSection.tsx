'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BarChart3, ShieldCheck } from 'lucide-react';
import { TrackingShowcaseCard } from './TrackingShowcaseCard';

export default function TrackingShowcaseSection({
  compactLayout = false
}: {
  compactLayout?: boolean;
} = {}) {
  const cards = [
    {
      title: 'Funnel Audit Walkthrough',
      description: 'Traffic → Product View → Add to Cart → Checkout → Purchase with clear drop-off detection and recovery opportunities.',
      imageSrc: 'https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/Screenshot%202026-09-06%20010127.png',
      icon: <BarChart3 className="w-5 h-5 text-gray-700" />,
      delay: 0,
    },
    {
      title: 'Conversion Tracking Setup',
      description: 'GA4, Meta Pixel, server-side CAPI, deduplication, and attribution health checks configured for reliable reporting and performance optimization.',
      imageSrc: 'https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/Screenshot%202026-09-06%20010326.png',
      icon: <ShieldCheck className="w-5 h-5 text-gray-700" />,
      delay: 0.12,
    }
  ];

  const pills = [
    {
      text: 'GA4 Event Mapping',
      bgClass: 'bg-[#FEF3C7]',
      textClass: 'text-[#B45309]',
    },
    {
      text: 'Meta Pixel + CAPI',
      bgClass: 'bg-[#EEF2FF]',
      textClass: 'text-[#4338CA]',
    },
    {
      text: 'Checkout Drop-Off Recovery',
      bgClass: 'bg-[#ECFDF5]',
      textClass: 'text-[#15803D]',
    }
  ];

  return (
    <section className={`py-24 px-4 mx-auto ${compactLayout ? 'max-w-4xl' : 'max-w-[82rem]'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Funnels That Stop Leaking Revenue
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
          End-to-end GA4 event mapping, Meta Pixel server-side API setups, and funnel audits that isolate exactly where customers drop off and recover lost revenue.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: card.delay }}
          >
            <TrackingShowcaseCard
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
      >
        {pills.map((pill, index) => (
          <span
            key={index}
            className={`px-4 md:px-[18px] py-2 md:py-[12px] rounded-full text-sm font-semibold tracking-wide ${pill.bgClass} ${pill.textClass}`}
          >
            {pill.text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

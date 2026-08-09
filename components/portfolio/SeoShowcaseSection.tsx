import React from 'react';
import { SeoShowcaseCard } from './SeoShowcaseCard';

export default function SeoShowcaseSection({
  hideHeader = false,
  compactLayout = false,
  className = ""
}: {
  hideHeader?: boolean;
  compactLayout?: boolean;
  className?: string;
}) {
  const cards = [
    {
      title: 'AI-Era Search Visibility',
      subtitle: 'SEO, AEO, GEO & AI search optimization strategies for modern brands.',
      videoSrc: 'https://res.cloudinary.com/duokr6znr/video/upload/v1786251469/Screen_Recording_2026-08-08_155519_vkgrh0.mp4',
    },
    {
      title: 'Answer Engine & GEO Optimization',
      subtitle: 'Structured visibility systems designed for answer engines, generative search, and discovery platforms.',
      videoSrc: 'https://res.cloudinary.com/duokr6znr/video/upload/v1786251484/Screen_Recording_2026-08-08_155856_ftvsmz.mp4',
    },
  ];

  return (
    <section className={`pt-[120px] pb-[120px] px-4 mx-auto ${compactLayout ? 'max-w-[64rem]' : 'max-w-[82rem]'} ${className}`}>
      {!hideHeader && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            SEO, AEO & GEO Optimization
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
            Search visibility engineered for AI-powered discovery, answer engines, and next-generation search experiences.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <SeoShowcaseCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            videoSrc={card.videoSrc}
          />
        ))}
      </div>
    </section>
  );
}

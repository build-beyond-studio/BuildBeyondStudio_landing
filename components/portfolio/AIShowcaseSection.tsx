import React from 'react';
import AIShowcaseCarousel from './AIShowcaseCarousel';

export default function AIShowcaseSection({ 
  hideHeader = false,
  className = "" 
}: { 
  hideHeader?: boolean;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-[#FAF9F6] ${className || 'py-24 md:py-32'}`}>
      <div className="mx-auto max-w-[82rem] px-4 relative z-10">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI visuals that feel crafted, not generated.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl">
              Cinematic AI photography, branded compositions, and production-ready visual assets created for modern digital brands.
            </p>
          </div>
        )}

        {/* Cinematic Overlapping Carousel */}
        <AIShowcaseCarousel />
        
      </div>
    </section>
  );
}

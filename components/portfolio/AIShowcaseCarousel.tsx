'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MEDIA_ITEMS = [
  'https://res.cloudinary.com/duokr6znr/image/upload/v1786250556/ai_one_fuz1vl.webp',
  'https://res.cloudinary.com/duokr6znr/video/upload/v1786250737/WhatsApp_Video_2026-08-06_at_1.25.12_PM_xdcjb7.mp4',
  'https://res.cloudinary.com/duokr6znr/image/upload/v1786250556/ai_three_qyeoji.jpg',
  'https://res.cloudinary.com/duokr6znr/image/upload/v1786250555/ai_four_cess7p.webp',
  'https://res.cloudinary.com/duokr6znr/image/upload/v1786250556/ai_five_v6wbwp.jpg',
];

export default function AIShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(true); // default true for safe SSR
  const [isTablet, setIsTablet] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Handlers for navigation
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % MEDIA_ITEMS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + MEDIA_ITEMS.length) % MEDIA_ITEMS.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isHovered, nextSlide]);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardStyles = (index: number) => {
    // Calculate shortest circular distance
    let offset = (index - activeIndex + MEDIA_ITEMS.length) % MEDIA_ITEMS.length;
    if (offset > 2) offset -= MEDIA_ITEMS.length;

    // Default Mobile Styles (1 card visible, others swiped out)
    if (isMobile) {
      return {
        x: offset === 0 ? '0%' : offset > 0 ? '120%' : '-120%',
        scale: offset === 0 ? 1 : 0.85,
        opacity: offset === 0 ? 1 : 0,
        zIndex: 50 - Math.abs(offset),
        pointerEvents: offset === 0 ? 'auto' : 'none' as any,
      };
    }

    // Tablet Styles (3 cards visible)
    if (isTablet) {
      if (Math.abs(offset) > 1) {
        // Hide outer edge cards on tablet
        return {
          x: offset > 0 ? '100%' : '-100%',
          scale: 0.6,
          opacity: 0,
          zIndex: 30,
          pointerEvents: 'none' as any,
        };
      }
      return {
        x: offset === 0 ? '0%' : offset === 1 ? '55%' : '-55%',
        scale: offset === 0 ? 1 : 0.85,
        opacity: offset === 0 ? 1 : 0.9,
        zIndex: 50 - Math.abs(offset),
        pointerEvents: offset === 0 ? 'auto' : 'auto' as any,
      };
    }

    // Desktop Styles (5 cards overlapping)
    const xOffsets = {
      0: '0%',
      1: '40%',
      '-1': '-40%',
      2: '75%',
      '-2': '-75%'
    };

    const scales = {
      0: 1,
      1: 0.82,
      '-1': 0.82,
      2: 0.68,
      '-2': 0.68
    };

    const opacities = {
      0: 1,
      1: 0.95,
      '-1': 0.95,
      2: 0.75,
      '-2': 0.75
    };

    return {
      x: xOffsets[offset as keyof typeof xOffsets],
      scale: scales[offset as keyof typeof scales],
      opacity: opacities[offset as keyof typeof opacities],
      zIndex: 50 - Math.abs(offset),
      pointerEvents: offset === 0 ? 'auto' : 'auto' as any,
    };
  };

  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards Container */}
      <div className="relative w-[85%] sm:w-[400px] md:w-[450px] h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {MEDIA_ITEMS.map((src, index) => {
            const styles = getCardStyles(index);
            const isCenter = activeIndex === index;
            const isVideo = src.endsWith('.mp4');

            return (
              <motion.div
                key={index}
                className={`absolute w-full h-full rounded-[28px] overflow-hidden cursor-pointer ${isCenter ? 'shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[4px] border-white' : 'shadow-lg border-2 border-white/50'
                  }`}
                initial={false}
                animate={{
                  x: styles.x,
                  scale: styles.scale,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                drag={isMobile && isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
              >
                <div className="relative w-full h-full bg-[#F7F5F2] flex items-center justify-center p-3 sm:p-4 rounded-[28px]">
                  <div className="relative w-full h-full overflow-hidden rounded-[20px] bg-[#F7F5F2]">
                    {isVideo ? (
                      <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
                      />
                    ) : (
                      <Image
                        src={src}
                        alt={`AI Visual Showcase ${index + 1}`}
                        fill
                        className="object-contain pointer-events-none drop-shadow-sm"
                        sizes="(max-width: 768px) 85vw, 450px"
                        priority={index === 0 || index === 1 || index === 2}
                      />
                    )}
                  </div>
                  {/* Subtle dark gradient overlay for non-active cards to enhance depth */}
                  <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    animate={{ opacity: isCenter ? 0 : 0.08 }}
                    transition={{ duration: 0.65 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 z-[60] w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-white shadow-lg text-gray-800 hover:text-[#C8860A] hover:scale-110 transition-all duration-300"
        aria-label="Previous Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 z-[60] w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-white shadow-lg text-gray-800 hover:text-[#C8860A] hover:scale-110 transition-all duration-300"
        aria-label="Next Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-[60]">
        {MEDIA_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index
              ? 'w-8 bg-[#C8860A]'
              : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

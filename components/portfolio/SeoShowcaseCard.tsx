'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SeoShowcaseCardProps {
  title: string;
  subtitle: string;
  videoSrc: string;
}

export function SeoShowcaseCard({
  title,
  subtitle,
  videoSrc,
}: SeoShowcaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  return (
    <div
      className={`group block relative w-full h-full rounded-[28px] bg-[#FDFDFD] border border-gray-200/60 shadow-sm ${isHovered ? 'z-[101]' : 'z-10'}`}
    >
      {/* 
        Fullscreen dark overlay. 
        Only mounts when isHovered is true.
        Uses pointer-events-none so it doesn't interfere with mouse leave.
      */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="fixed inset-0 bg-black/35 backdrop-blur-[4px] z-[100] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <div className="p-4 sm:p-5 flex flex-col h-full rounded-[28px] bg-[#FDFDFD]">
          {/* Video Area Container */}
          <div className="relative w-full aspect-video mb-6">

            {/* The single persistent video container with layout animation */}
            <motion.div
              layout
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsHovered(!isHovered)}
              transition={{ duration: isHovered ? 0.55 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={isHovered ? 
                "fixed inset-0 m-auto w-[96vw] md:w-[80vw] lg:w-[70vw] max-w-[1150px] aspect-video z-[110] rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] bg-gray-100 flex flex-col border border-white/10 will-change-transform pointer-events-auto" : 
                "absolute inset-0 rounded-[24px] overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] bg-gray-100 flex flex-col border border-gray-100 will-change-transform pointer-events-auto"
              }
              style={{
                // Required to prevent click-through issues when fixed
                transform: 'translateZ(0)'
              }}
            >
              <div className="relative w-full h-full overflow-hidden bg-gray-50">
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Invisible placeholder to keep card height intact when video is fixed */}
            <div className="absolute inset-0 rounded-[24px] bg-transparent pointer-events-none" />
          </div>

          {/* Content Area */}
          <div className="mt-auto px-1 pb-1 flex flex-col pointer-events-auto">
            <h3 className="text-[22px] leading-tight font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-[15px] font-medium text-gray-500 leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </div>
  );
}

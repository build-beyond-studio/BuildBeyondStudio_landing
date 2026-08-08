'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsitePortfolioCardProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  posterSrc?: string;
  link?: string;
}

export function WebsitePortfolioCard({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  link,
}: WebsitePortfolioCardProps) {
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
    <>
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

      <div
        className="group block relative w-full h-full rounded-[28px] bg-[#FDFDFD] border border-gray-200/60 shadow-sm"
      >
        <div className="p-4 sm:p-5 flex flex-col h-full rounded-[28px] bg-[#FDFDFD]">
          {/* Video Area Container */}
          <div className="relative w-full aspect-[16/10] mb-6">

            {/* The single persistent video container with layout animation */}
            <motion.div
              layout
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              transition={{ duration: isHovered ? 0.55 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={isHovered ? 
                "fixed inset-0 m-auto w-[90vw] md:w-[85vw] h-[70vh] md:h-[80vh] rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] bg-gray-100 flex flex-col border border-white/10 will-change-transform pointer-events-auto" : 
                "absolute inset-0 rounded-[24px] overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] bg-gray-100 flex flex-col border border-gray-100 will-change-transform pointer-events-auto"
              }
              style={{
                zIndex: isHovered ? 99999 : 1,
                // Required to prevent click-through issues when fixed
                transform: 'translateZ(0)'
              }}
            >

              <div className="relative w-full h-full overflow-hidden bg-gray-50">
                <video
                  src={videoSrc || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"}
                  poster={posterSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain bg-[#111]"
                />
                {/* Ambient Glow behind the expanded video */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-[32px] -z-10 blur-3xl scale-105 pointer-events-none"
                  style={{ backgroundColor: 'rgba(232, 168, 32, 0.15)' }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Invisible placeholder to keep card height intact when video is fixed */}
            <div className="absolute inset-0 rounded-[24px] bg-transparent pointer-events-none" />
          </div>

          {/* Content Area */}
          <div className="mt-auto px-1 pb-1 flex justify-between items-end pointer-events-auto">
            <div>
              <h3 className="text-[22px] leading-tight font-bold text-gray-900 mb-1.5">{title}</h3>
              <p className="text-[15px] font-medium text-gray-500">{subtitle}</p>
            </div>

            {link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 text-gray-600 transition-colors duration-300 group-hover:bg-[#E8A020] group-hover:text-white group-hover:border-[#E8A020] shrink-0"
                aria-label={`Visit ${title} website`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

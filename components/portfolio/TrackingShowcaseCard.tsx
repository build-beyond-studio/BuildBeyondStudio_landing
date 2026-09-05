'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TrackingShowcaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
}

export function TrackingShowcaseCard({
  title,
  description,
  imageSrc,
  icon,
}: TrackingShowcaseCardProps) {
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
        className="group block relative w-full h-full rounded-none bg-[#FDFDFD] border border-gray-200/60 shadow-sm"
      >
        <div className="flex flex-col h-full rounded-none bg-[#FDFDFD]">
          {/* Image Area Container */}
          <div className="relative w-full aspect-video mb-6">
            <motion.div
              layout
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              transition={{ duration: isHovered ? 0.55 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={isHovered ?
                "fixed inset-0 m-auto w-[95vw] md:w-[90vw] lg:w-[85vw] aspect-video rounded-none overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] bg-gray-100 flex flex-col border border-white/10 will-change-transform pointer-events-auto" :
                "absolute inset-0 rounded-none overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] bg-gray-100 flex flex-col border border-gray-100 will-change-transform pointer-events-auto"
              }
              style={{
                zIndex: isHovered ? 99999 : 1,
                transform: 'translateZ(0)'
              }}
            >
              <div className="relative w-full h-full overflow-hidden bg-gray-900">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className={isHovered ? "object-contain bg-black" : "object-contain bg-gray-50"}
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-none -z-10 blur-3xl scale-105 pointer-events-none"
                  style={{ backgroundColor: 'rgba(232, 168, 32, 0.15)' }}
                ></motion.div>
              </div>
            </motion.div>
            <div className="absolute inset-0 rounded-none bg-transparent pointer-events-none" />
          </div>

          {/* Content Area */}
          <div className="mt-auto px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col pointer-events-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-gray-50 border border-gray-100">
                {icon}
              </div>
              <h3 className="text-[22px] leading-tight font-bold text-gray-900">
                {title}
              </h3>
            </div>
            <p className="text-[15px] font-medium text-gray-500 leading-relaxed pl-[52px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

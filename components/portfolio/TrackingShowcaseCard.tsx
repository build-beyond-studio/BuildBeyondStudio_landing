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
    <div className={`group relative top-0 bg-white border border-[#E7E2D8] rounded-[28px] p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-top-[6px] hover:border-[#D4A017] shadow-[0_12px_40px_rgba(17,24,39,0.08)] flex flex-col h-full ${isHovered ? 'z-[101]' : 'z-10'}`}>
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

      {/* Image Area Container */}
      <div className="relative w-full aspect-video mb-6">
        <motion.div
          layout
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsHovered(!isHovered)}
          transition={{ duration: isHovered ? 0.55 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={isHovered ?
            "fixed inset-0 m-auto w-[96vw] md:w-[80vw] lg:w-[70vw] max-w-[1150px] aspect-video z-[110] rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] bg-gray-100 flex flex-col border border-white/10 will-change-transform pointer-events-auto cursor-pointer" :
            "absolute inset-0 rounded-[20px] overflow-hidden bg-gray-100 flex flex-col border border-gray-100 will-change-transform pointer-events-auto cursor-pointer"
          }
          style={{
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative w-full h-full overflow-hidden bg-gray-50">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className={`object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${!isHovered ? 'scale-[1.4]' : 'scale-100'}`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Invisible placeholder to maintain card height */}
        <div className="absolute inset-0 rounded-[20px] bg-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 pointer-events-auto mt-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-100">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed font-medium pl-[52px] text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}

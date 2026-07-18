"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Custom Web & Portal Development",
  "Auto-Scaling Cloud & DevOps",
  "Fractional CTO & Tech Roadmap",
  "AI-Era Search Visibility (SEO / AEO / GEO)",
  "Meta & Google Performance Ads",
  "E-Commerce Funnel Audits & Tracking",
  "AI-Powered Visual Production",
];

export default function FloatingAIAssistant() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlagHovered, setIsFlagHovered] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Rotate services every 3 seconds, pause if flag is hovered
  useEffect(() => {
    if (isFlagHovered) return;

    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isFlagHovered]);

  return (
    <div className="fixed bottom-[136px] right-6 z-[998] flex flex-col items-end pointer-events-none">

      {/* Floating Container (The whole mascot floats infinitely) */}
      <motion.div
        animate={{ y: [-24, 24, -24] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-end justify-end pointer-events-auto scale-[0.75] sm:scale-[0.85] md:scale-100 origin-bottom-right transition-transform"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Service Flag */}
        <motion.div
          className="absolute -top-16 -left-[184px] w-[220px] pointer-events-auto z-0"
          onMouseEnter={() => setIsFlagHovered(true)}
          onMouseLeave={() => setIsFlagHovered(false)}
        >
          <div className="bg-white/90 backdrop-blur-xl border border-[rgba(200,134,10,0.15)] shadow-[0_12px_32px_rgba(200,134,10,0.15)] rounded-2xl p-4 relative overflow-hidden">
            {/* Glossy accent */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

            <p className="text-[10px] font-bold text-[#C8860A] uppercase tracking-widest mb-1 relative z-10">
              Our Services
            </p>

            <div className="h-10 relative overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute w-full"
                >
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    {SERVICES[currentServiceIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Flag Pole */}
          <div className="absolute -bottom-16 right-4 w-1.5 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-inner z-0" />
        </motion.div>

        {/* Mascot SVG Character */}
        <div className="relative w-24 h-24 mt-8 z-10 filter drop-shadow-xl cursor-pointer">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Background Glow */}
            <circle cx="50" cy="50" r="40" fill="url(#tealGlow)" opacity={isHovered ? "0.4" : "0.1"} className="transition-opacity duration-500" />

            {/* Body / Suit (White & Teal) */}
            <path d="M20 90C20 70 35 60 50 60C65 60 80 70 80 90H20Z" fill="white" stroke="#00B4D8" strokeWidth="2" />
            <path d="M35 90V75L50 85L65 75V90" fill="#E0F7FA" />

            {/* Collar/Tie accent */}
            <path d="M45 60L50 70L55 60" fill="#00B4D8" />

            {/* Head */}
            <circle cx="50" cy="40" r="22" fill="white" stroke="#00B4D8" strokeWidth="2" />

            {/* Hair (Sleek futuristic visor / hair styling) */}
            <path d="M28 40C28 25 38 18 50 18C62 18 72 25 72 40C72 30 65 24 50 24C35 24 28 30 28 40Z" fill="#00B4D8" />

            {/* Eyes */}
            {/* Left Eye */}
            <circle
              cx="40"
              cy="38"
              r="4"
              fill={isHovered ? "#00E5FF" : "#00B4D8"}
              className="transition-colors duration-300"
              filter={isHovered ? "url(#glow)" : "none"}
            />
            {/* Right Eye */}
            <circle
              cx="60"
              cy="38"
              r="4"
              fill={isHovered ? "#00E5FF" : "#00B4D8"}
              className="transition-colors duration-300"
              filter={isHovered ? "url(#glow)" : "none"}
            />

            {/* Mouth */}
            <motion.path
              d={isHovered ? "M42 48 Q50 54 58 48" : "M44 48 Q50 49 56 48"}
              stroke="#00B4D8"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ d: isHovered ? "M42 48 Q50 54 58 48" : "M44 48 Q50 49 56 48" }}
              transition={{ duration: 0.3 }}
            />

            {/* Waving Arm (Right arm) */}
            <motion.g
              style={{ transformOrigin: "75px 65px" }}
              animate={{ rotate: isHovered ? [0, -30, 10, -20, 0] : 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1
              }}
            >
              <path d="M75 65C85 65 92 75 90 85" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M75 65C85 65 92 75 90 85" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="90" cy="85" r="4" fill="white" stroke="#00B4D8" strokeWidth="1.5" />
            </motion.g>

            {/* Hand holding pole (Left arm) */}
            <g>
              <path d="M25 65C15 65 15 55 20 45" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Hand wrapping pole */}
              <rect x="17" y="42" width="6" height="8" rx="3" fill="white" stroke="#00B4D8" strokeWidth="1.5" />
            </g>

            <defs>
              <radialGradient id="tealGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
              </radialGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </svg>
        </div>

      </motion.div>
    </div>
  );
}

'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsitePortfolioCardProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  posterSrc?: string;
  link?: string;
}

/**
 * Converts a raw Cloudinary video URL into an optimized streaming URL
 * with quality auto, format auto, and reduced bitrate for faster loading.
 */
function getOptimizedVideoUrl(url: string): string {
  // Transform: .../upload/v123/file.mp4 → .../upload/q_auto,f_auto,br_2m/v123/file.mp4
  return url.replace(
    '/upload/',
    '/upload/q_auto,f_auto,br_2m/'
  );
}

/**
 * Generates a poster thumbnail from a Cloudinary video URL.
 * Extracts the first frame as a low-quality JPEG for instant preview.
 */
function getPosterFromVideo(url: string): string {
  // Transform video URL to image thumbnail:
  // .../video/upload/v123/file.mp4 → .../video/upload/so_0,w_600,q_auto,f_auto/v123/file.jpg
  return url
    .replace('/upload/', '/upload/so_0,w_600,q_auto,f_auto/')
    .replace(/\.mp4$/, '.jpg');
}

export function WebsitePortfolioCard({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  link,
}: WebsitePortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lazy load: only start loading the video when the card enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // When in view, set the video source and play
  useEffect(() => {
    if (isInView && videoRef.current && videoSrc && !hasStartedLoading) {
      const optimizedUrl = getOptimizedVideoUrl(videoSrc);
      videoRef.current.src = optimizedUrl;
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked — that's fine, the poster is showing
      });
      setHasStartedLoading(true);
    }
  }, [isInView, videoSrc, hasStartedLoading]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  // Auto-generate poster from Cloudinary video if no posterSrc provided
  const poster = posterSrc || (videoSrc ? getPosterFromVideo(videoSrc) : undefined);

  return (
    <>
      {/* Background dark overlay for expanded state */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-[4px] z-[90] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      {/* The placeholder element that keeps the grid structure intact */}
      <div
        ref={containerRef}
        className="group block relative w-full aspect-video"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* The animating card element */}
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={
            isHovered
              ? "fixed inset-0 m-auto w-[92vw] md:w-[75vw] max-w-[1000px] h-fit bg-white rounded-none border border-[#E8EAEE] p-[20px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col pointer-events-auto"
              : "absolute inset-0 w-full h-full bg-gray-100 rounded-none border border-gray-200/50 shadow-sm overflow-hidden pointer-events-auto"
          }
          style={{
            zIndex: isHovered ? 100 : 1,
            transform: 'translateZ(0)'
          }}
        >
          {/* Header (Only visible on hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-start flex-shrink-0 overflow-hidden"
              >
                <div className="flex flex-col pr-4">
                  <h3 className="text-[24px] font-bold text-gray-900 leading-tight mb-1">{title}</h3>
                  <p className="text-[15px] text-gray-500 font-medium">{subtitle}</p>
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[44px] h-[44px] rounded-full bg-white border border-[#D7DCE2] flex flex-shrink-0 items-center justify-center text-gray-900 transition-colors hover:bg-gray-50"
                    aria-label={`Visit ${title} website`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Video Area */}
          <motion.div
            layout
            className={`relative w-full flex-grow overflow-hidden bg-black flex flex-col rounded-none ${isHovered ? '' : 'h-full'
              }`}
            style={{
              aspectRatio: isHovered ? '16/9' : 'auto'
            }}
          >
            {/* Browser Top Bar (Only visible on hover) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: '2rem' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-[#18181B] flex items-center px-4 gap-2 shrink-0 z-10"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Container */}
            <div className="relative w-full flex-grow overflow-hidden">
              <video
                ref={videoRef}
                poster={poster}
                preload="none"
                autoPlay
                muted
                playsInline
                loop
                className={`w-full h-full object-contain block transition-transform duration-[450ms] ease-out origin-center ${isHovered ? 'scale-[1.03]' : 'scale-100'
                  }`}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

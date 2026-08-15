"use client";

import { useState, useEffect } from "react";

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenVideoPopup");
    if (hasSeenPopup) return;

    // Show popup shortly after entering the website
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenVideoPopup", "true");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Gift Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-[999] flex items-center justify-center hover:scale-110 transition-transform animate-[bounce_3s_infinite] w-[80px] h-[80px] md:w-[90px] md:h-[90px] bottom-[65px] left-1/2 -translate-x-1/2 md:bottom-[110px] md:left-auto md:right-6 md:translate-x-0"
      >
        <img
          src="/wWcLeiYQ61220DMagm-removebg-preview.png"
          alt="Gift"
          className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,200,0,0.7)]"
        />
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-auto max-w-[90vw] sm:max-w-[400px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center bg-transparent">
            {/* Close (Cut) Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors border border-white/30 backdrop-blur-sm"
              aria-label="Close Video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <video
              className="w-full max-h-[85vh] object-cover"
              src="https://res.cloudinary.com/davycvtnr/video/upload/v1786797584/WhatsApp_Video_2026-08-15_at_4.09.12_PM.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}

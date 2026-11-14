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

            {/* Image Content */}
            <img
              className="w-full max-h-[85vh] object-cover"
              src="/popup.png"
              alt="Marketing Agency? You Chill, We’ll Build. More Projects. Zero Tech Hassle."
            />
          </div>
        </div>
      )}
    </>
  );
}

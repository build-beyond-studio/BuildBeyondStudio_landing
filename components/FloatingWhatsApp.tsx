import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center">

      {/* Message Card */}
      <div className="relative mr-3 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 animate-[bounce_2s_infinite]">

        {/* Notification Ripple */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        Chat with us

        {/* Arrow Pointer */}
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rotate-45"></span>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-green-600 hover:scale-110"
      >
        {/* Ripple effect */}
        <span className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30"></span>

        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </a>

    </div>
  );
};

export default FloatingWhatsApp;
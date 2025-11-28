"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;

      // Show after scrolling past 50% of hero
      setIsVisible(scrolled > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 lg:hidden
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="https://wa.me/971523005493?text=Hello,%20I%20would%20like%20to%20book%20the%20Free%20Consultation."
        className="
          flex items-center justify-center gap-2
          w-full bg-cta text-white font-semibold
          px-8 py-4 shadow-2xl
          hover:bg-cta-hover transition-colors duration-300
        "
      >
        Book My Signature Smile Consultation
      </Link>
    </div>
  );
};

export default StickyCTA;

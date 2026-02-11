"use client";

import { useEffect, useRef } from "react";

export default function CircularProgressBar() {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Circumference of circle with r=28: 2 * π * 28 ≈ 175.93
  const circumference = 2 * Math.PI * 30;

  useEffect(() => {
    const circle = circleRef.current;
    const text = textRef.current;
    if (!circle || !text) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        scrollHeight > 0
          ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1)
          : 0;

      // Direct DOM manipulation - no re-renders
      const offset = circumference - progress * circumference;
      circle.style.strokeDashoffset = String(offset);
      text.textContent = `${Math.round(progress * 100)}%`;
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [circumference]);

  return (
    <div
      className="fixed bottom-20 right-8 shadow-2xl w-12 h-12 rounded-full bg-[#f3d9e7] flex items-center justify-center z-50 group"
      style={{
        background:
          "radial-gradient(circle,rgba(255, 209, 246, 1) 0%, rgba(227, 191, 218, 1) 100%)",
      }}
    >
      {/* SVG Progress Ring */}
      <svg
        className="absolute w-full h-full -rotate-90"
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        {/* Background track */}
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#f0d5e9"
          strokeWidth="4"
          opacity="0.5"
        />
        {/* Progress circle */}
        <circle
          ref={circleRef}
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#c01dbd"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="transition-all duration-100 ease-out"
        />
      </svg>

      {/* Inner content */}
      <div className="relative w-10 h-10 rounded-full flex items-center justify-center shadow-inner">
        <svg
          className="w-4 h-4 text-[#c01dbd] group-hover:translate-y-0.5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Percentage tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#c01dbd] text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span ref={textRef}>0%</span>
      </div>
    </div>
  );
}

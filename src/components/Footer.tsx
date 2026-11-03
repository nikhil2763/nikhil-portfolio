"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, ArrowUp } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
    </svg>
  );
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed scroll-to-top button — bottom-right, arrow only */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
        className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
        style={{
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
          pointerEvents: showScrollTop ? "auto" : "none",
          background: "rgba(74,222,128,0.12)",
          border: "1px solid rgba(74,222,128,0.35)",
          color: "#4ade80",
          boxShadow: showScrollTop ? "0 0 18px rgba(74,222,128,0.25)" : "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(74,222,128,0.25)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 28px rgba(74,222,128,0.45)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(74,222,128,0.12)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 18px rgba(74,222,128,0.25)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
        }}
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <footer className="border-t border-[#ffffff12] py-8 bg-[#0c0f17]">
        <div className="max-w-[1152px] mx-auto px-5 flex flex-wrap items-center justify-between gap-5 font-mono-code text-[11px] text-[#94a3b8]">

          {/* Left: Monogram & Brand Attribution */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-[3px] border border-[#4ade80] bg-[#4ade8015] font-bold text-[#4ade80] flex items-center justify-center text-[10px]">
              NJ
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#4ade80] font-bold">© 2026</span>
              <span className="text-[#f8fafc] font-semibold">NIKHIL JAISWAL</span>
              <span className="text-[#ffffff20]">•</span>
              <span className="text-[#64748b]">FULL-STACK DEVELOPER</span>
            </div>
          </div>

          {/* Right: Direct Icon Redirects */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] bg-[#131826] border border-[#ffffff14] text-[#94a3b8] hover:text-[#4ade80] hover:border-[#4ade8050] hover:bg-[#182032] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] bg-[#131826] border border-[#ffffff14] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf850] hover:bg-[#182032] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] bg-[#131826] border border-[#ffffff14] text-[#94a3b8] hover:text-[#22c55e] hover:border-[#22c55e50] hover:bg-[#182032] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-[4px] bg-[#131826] border border-[#ffffff14] text-[#94a3b8] hover:text-[#c084fc] hover:border-[#c084fc50] hover:bg-[#182032] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="p-2 rounded-[4px] bg-[#131826] border border-[#ffffff14] text-[#94a3b8] hover:text-[#4ade80] hover:border-[#4ade8050] hover:bg-[#182032] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              aria-label="Call Direct"
              title="Call Direct"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}

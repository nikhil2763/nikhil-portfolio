"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-14 transition-colors duration-300 backdrop-blur-md border-b ${
          isScrolled
            ? "bg-[#0c0f17]/95 border-[#ffffff14] shadow-lg shadow-black/50"
            : "bg-[#0c0f17]/85 border-[#ffffff0f]"
        }`}
      >
        <div className="max-w-[1152px] h-full mx-auto px-5 flex items-center justify-between">
          
          {/* Logo Brand / Monogram */}
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded-[2px] border border-[#4ade80] bg-[#4ade800f] font-mono-code text-[11px] font-bold text-[#4ade80] flex items-center justify-center transition-colors group-hover:bg-[#4ade8026]">
              NJ
            </div>
            <span className="font-mono-code text-[11.5px] uppercase tracking-[0.16em] text-[#f1f5f9] font-medium">
              NIKHIL JAISWAL
            </span>
          </Link>

          {/* Desktop Navigation Links (with <tag> brackets) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-mono-code text-[12px] tracking-wide transition-colors cursor-pointer ${
                    isActive ? "text-[#f1f5f9]" : "text-[#64748b] hover:text-[#f1f5f9]"
                  }`}
                >
                  <span className={isActive ? "text-[#4ade80]" : "text-[#6ee7b7]"}>&lt;</span>
                  {link.name}
                  <span className={isActive ? "text-[#4ade80]" : "text-[#6ee7b7]"}>/&gt;</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Resume & Hire Me CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="border border-[#ffffff18] bg-[#ffffff06] font-mono-code text-[11px] tracking-[0.14em] uppercase text-[#cbd5e1] hover:text-white hover:border-[#ffffff30] hover:bg-[#ffffff10] rounded-[3px] px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="border border-[#4ade80] bg-[#4ade801f] font-mono-code text-[11px] tracking-[0.14em] uppercase text-[#4ade80] rounded-[3px] px-3.5 py-1.5 transition-all hover:bg-[#4ade8038] hover:text-white hover:shadow-[0_0_16px_#4ade8035] flex items-center gap-1.5 cursor-pointer font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
              <span>Hire Me</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-300 hover:text-white ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#4ade80]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-[#0c0f17]/98 backdrop-blur-xl border-t border-[#ffffff12] flex flex-col justify-center items-center gap-5 p-6 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="font-mono-code text-base tracking-widest text-[#f8fafc] hover:text-[#4ade80] transition-colors"
            >
              <span className="text-[#6ee7b7]">&lt;</span>
              {link.name}
              <span className="text-[#6ee7b7]">/&gt;</span>
            </button>
          ))}

          <div className="flex flex-col gap-3 w-full max-w-xs pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick("contact");
              }}
              className="w-full border border-[#4ade80] bg-[#4ade8020] font-mono-code text-xs uppercase tracking-[0.16em] text-[#4ade80] font-bold py-3 rounded-[3px] flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
              <span>Hire Me / Contact</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full border border-white/20 bg-white/5 font-mono-code text-xs uppercase tracking-[0.16em] text-[#cbd5e1] py-2.5 rounded-[3px]"
            >
              View Verified Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
}

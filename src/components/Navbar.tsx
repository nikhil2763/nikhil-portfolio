"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { 
  Menu, 
  X, 
  FileText, 
  Mail, 
  Phone, 
  Sparkles, 
  ChevronRight
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

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

      const sections = ["hero", "experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 160;

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
    { name: "About", href: "hero" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-[#080c14]/80 backdrop-blur-sm sm:bg-transparent py-4 sm:py-5 border-b border-white/5 sm:border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20 shrink-0">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold text-lg text-white">
                NJ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Nikhil Jaiswal
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-wider">
                Full Stack Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="flex items-center gap-2 text-xs lg:text-sm font-medium px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 hover:shadow-md hover:shadow-cyan-500/10 cursor-pointer active:scale-95"
              title="View & Download Nikhil's CV"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 text-xs lg:text-sm font-medium px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex md:hidden items-center gap-2 relative z-50">
            <button
              type="button"
              onClick={onOpenResume}
              className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>CV</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-slate-100 hover:text-white active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-white/10 px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-left font-medium text-sm transition-colors cursor-pointer ${
                  activeSection === link.href
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center gap-2 font-medium text-sm active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full CV / Resume</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get in Touch / Hire Me</span>
              </button>

              <div className="flex items-center justify-center gap-5 pt-2">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white border border-white/10"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2.5 rounded-full bg-white/5 text-cyan-400 hover:text-cyan-300 border border-white/10"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="p-2.5 rounded-full bg-white/5 text-emerald-400 hover:text-emerald-300 border border-white/10"
                  aria-label="Call Nikhil"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

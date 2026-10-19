"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Heart,
  Code2,
  Sparkles
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080e] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
                NJ
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Nikhil Jaiswal
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full Stack Developer specializing in the MERN stack, Next.js, and PostgreSQL. Experienced with live ERP systems, enterprise HRMS payroll engines, and high-performance REST APIs.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-emerald-400 border border-white/10 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#hero" className="hover:text-cyan-400 transition-colors">
                  Home / Overview
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-cyan-400 transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-cyan-400 transition-colors">
                  Education & Honors
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Credentials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Quick Details
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-slate-500 font-mono">Location:</span>
                <span className="text-slate-300">{portfolioData.personal.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500 font-mono">Phone:</span>
                <a href={`tel:${portfolioData.personal.phone}`} className="text-cyan-300 hover:underline">
                  {portfolioData.personal.formattedPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500 font-mono">Email:</span>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-cyan-300 hover:underline">
                  {portfolioData.personal.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500 font-mono">Education:</span>
                <span className="text-amber-300 font-medium">B.Tech IT (9.5 CGPA)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Nikhil Jaiswal. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Built with Next.js, React & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/10 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

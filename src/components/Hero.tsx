"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Phone, 
  Sparkles, 
  Copy, 
  Check, 
  Terminal, 
  Code2, 
  Database, 
  Server,
  Award,
  Layers
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const developerJson = `// Nikhil Jaiswal — Full Stack Developer
const developerProfile = {
  name: "Nikhil Jaiswal",
  degree: "B.Tech in Information Technology",
  cgpa: 9.5, // Silver Oak University
  currentRole: "Full Stack Developer @ Airwix Technologies",
  primaryStack: {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express.js", "REST APIs", "RBAC"],
    database: ["PostgreSQL", "MongoDB", "SQL Optimization"]
  },
  enterpriseExperience: [
    "Enterprise HRMS (Payroll, Attendance, RBAC)",
    "Live Multi-Tenant ERP (Inventory, CRM, Finance)",
    "Full-Stack E-Commerce & Rental Platforms"
  ],
  status: "Open to High-Impact Full-Time Engineering Roles"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(developerJson);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Glows & Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute"></span>
              <span>Available for Full-Time Roles • 9.5 CGPA</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Full Stack Developer & Engineer</span>
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Enterprise Web Solutions</span> & Scalable Systems.
              </h1>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-semibold">{portfolioData.personal.name}</span>. 
              I engineer robust production web applications, specialized in the{" "}
              <span className="text-cyan-300 font-medium">MERN stack</span> and{" "}
              <span className="text-sky-300 font-medium">PostgreSQL</span>. 
              Proven background building mission-critical HRMS payroll systems, live multi-tenant ERP suites, and high-performance RESTful APIs.
            </p>

            {/* Quick Contact & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github.com/nikhil2763</span>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 text-xs font-mono transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{portfolioData.personal.email}</span>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-emerald-400 border border-white/10 text-xs font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{portfolioData.personal.formattedPhone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <Link
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-white font-semibold text-sm border border-white/15 hover:border-cyan-400/40 shadow-sm transition-all duration-200 cursor-pointer touch-manipulation"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full CV & Highlights</span>
              </button>

              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Avatar + Interactive Code Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative space-y-6">
            
            {/* Visual Avatar Card with Glowing Frame */}
            <div className="relative group w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse-glow"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl p-3">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-800">
                  <Image
                    src={portfolioData.personal.avatar}
                    alt="Nikhil Jaiswal - Full Stack Developer"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80"></div>

                  {/* Overlaid Info Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-sm">Nikhil Jaiswal</h3>
                      <p className="text-xs text-cyan-400 font-mono">B.Tech IT • 9.5 CGPA</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                      Airwix Tech
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips around avatar */}

                <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d1424] border border-indigo-500/40 text-indigo-300 text-xs font-medium shadow-lg shadow-indigo-500/20 animate-float-delayed">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  <span>PostgreSQL & APIs</span>
                </div>
              </div>
            </div>

            {/* Interactive Terminal / Code Snippet */}
            <div className="w-full max-w-sm sm:max-w-md rounded-xl bg-[#0b101c]/90 border border-white/10 shadow-xl overflow-hidden text-xs font-mono">
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 ml-2 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    developer.config.ts
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-400 transition-colors px-2 py-0.5 rounded hover:bg-white/5 cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-sans">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="font-sans">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <pre>
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">stack</span> = [
                    <span className="text-emerald-300">&quot;React.js&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;MongoDB&quot;</span>];
                    {"\n"}
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">focus</span> ={" "}
                    <span className="text-amber-300">&quot;Enterprise HRMS & ERP Scalability&quot;</span>;
                    {"\n"}
                    <span className="text-slate-500">&#47;&#47; 9.5 CGPA • Silver Oak Univ</span>
                  </code>
                </pre>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col items-center sm:items-start text-center sm:text-left group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
                <span className="text-xl sm:text-2xl text-cyan-300 font-bold">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.caption}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

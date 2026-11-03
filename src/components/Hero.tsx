"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight, MapPin, Star, Briefcase, GraduationCap,
  CheckCircle2, Zap, Rocket, Users, Phone, MessageCircle, Mail,
  TrendingUp, Award, Clock
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

interface HeroProps {
  onOpenResume: () => void;
}

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

// Tab types for recruiter card
type RecruiterTab = "snapshot" | "strengths" | "contact";

export default function Hero({ onOpenResume }: HeroProps) {
  const roles = [
    "Full-Stack Developer",
    "React & Next.js Engineer",
    "Node.js & PostgreSQL Expert",
    "Enterprise HRMS & ERP Architect",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<RecruiterTab>("snapshot");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 35 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const quickStats = [
    { icon: Briefcase,     label: "2+ Years",    sub: "Production Exp." },
    { icon: Star,          label: "9.5 CGPA",    sub: "B.Tech IT" },
    { icon: GraduationCap, label: "12+ Modules", sub: "HRMS & ERP" },
  ];

  const socialLinks = [
    { href: portfolioData.personal.githubUrl,   icon: GithubIcon,   label: "GitHub",    color: "hover:text-[#f1f5f9] hover:border-[#f1f5f930]" },
    { href: portfolioData.personal.linkedinUrl, icon: LinkedInIcon, label: "LinkedIn",  color: "hover:text-[#38bdf8] hover:border-[#38bdf840]" },
    { href: portfolioData.personal.whatsappUrl, icon: WhatsAppIcon, label: "WhatsApp", color: "hover:text-[#4ade80] hover:border-[#4ade8040]" },
  ];

  // Recruiter card data — all UNIQUE, none repeated from left
  const tabs: { id: RecruiterTab; label: string; icon: React.ReactNode }[] = [
    { id: "snapshot",  label: "Snapshot",  icon: <TrendingUp className="w-3 h-3" /> },
    { id: "strengths", label: "Strengths", icon: <Award className="w-3 h-3" /> },
    { id: "contact",   label: "Contact",   icon: <Phone className="w-3 h-3" /> },
  ];

  const snapshotItems = [
    { icon: CheckCircle2, color: "#4ade80", label: "Status",          value: "Open to Work · Immediate Join" },
    { icon: Briefcase,    color: "#38bdf8", label: "Current Role",    value: "Full-Stack Dev @ Airwix Technologies" },
    { icon: MapPin,       color: "#c084fc", label: "Location",        value: "Ahmedabad · Remote & On-site" },
    { icon: Clock,        color: "#f59e0b", label: "Role Type",       value: "Full-Time · Contract · Freelance" },
    { icon: Rocket,       color: "#4ade80", label: "Domain Focus",    value: "Enterprise HRMS · ERP · SaaS" },
    { icon: Star,         color: "#38bdf8", label: "Top Skill",       value: "React · Node.js · PostgreSQL" },
  ];

  const strengthItems = [
    { icon: Zap,    color: "#4ade80", title: "Live Production",     desc: "2+ yrs shipping to real enterprise environments daily" },
    { icon: Users,  color: "#38bdf8", title: "Team Collaborator",   desc: "Agile sprints, git workflows, cross-functional delivery" },
    { icon: Rocket, color: "#c084fc", title: "Fast Learner",        desc: "Adapts to new stacks & domain logic quickly" },
    { icon: Award,  color: "#f59e0b", title: "Academic Excellence", desc: "9.5 CGPA — top-ranked B.Tech IT graduate" },
  ];

  const contactItems = [
    { icon: Phone,         color: "#4ade80", label: "Call / WhatsApp", value: portfolioData.personal.formattedPhone, href: `tel:${portfolioData.personal.phone}` },
    { icon: Mail,          color: "#38bdf8", label: "Email",           value: portfolioData.personal.email,          href: `mailto:${portfolioData.personal.email}` },
    { icon: MessageCircle, color: "#22c55e", label: "WhatsApp Chat",   value: "Message me instantly",                href: portfolioData.personal.whatsappUrl },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-20 pb-12 overflow-hidden bg-[#0c0f17]"
    >
      {/* Background Grid */}
      <div className="hero-bg-grid absolute inset-0 pointer-events-none" />
      <div className="hero-glow" />

      <div className="max-w-[1152px] mx-auto px-5 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Identity & CTA ── */}
          <div
            className={`flex flex-col items-start transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="flex items-center gap-1.5 font-mono-code text-[11px] text-[#4ade80] bg-[#4ade8015] border border-[#4ade8035] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                Available for Hire
              </span>
              <span className="font-mono-code text-[10px] text-[#64748b] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Ahmedabad, India
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#f1f5f9] tracking-tight leading-[1.05]">
              Nikhil
              <br />
              <span className="text-[#4ade80]">Jaiswal</span>
            </h1>

            {/* Typewriter Role */}
            <div className="font-mono-code text-sm sm:text-base text-[#94a3b8] font-medium flex items-center gap-1.5 mt-4 min-h-[1.6em]">
              <span className="text-[#4ade80]">{">"}</span>
              <span className="text-[#f1f5f9]">{currentText}</span>
              <span className="cursor-blink" />
            </div>

            {/* One-liner */}
            <p className="text-[#94a3b8] text-[0.925rem] leading-[1.75] max-w-[44ch] mt-5">
              Full-Stack Developer with{" "}
              <span className="text-[#f1f5f9] font-medium">2+ years of production experience</span>{" "}
              building enterprise HRMS & ERP platforms on React, Node.js, and PostgreSQL.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3.5 mt-7 max-w-[480px]">
              {quickStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 p-2.5 sm:px-3 sm:py-2.5 rounded-lg bg-[#131826]/80 border border-[#ffffff12] hover:border-[#4ade8035] hover:bg-[#1a2234] transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-md bg-[#4ade8015] border border-[#4ade8030] flex items-center justify-center text-[#4ade80] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] sm:text-[14px] font-bold text-[#f1f5f9] leading-tight truncate">
                        {stat.label}
                      </div>
                      <div className="font-mono-code text-[10px] text-[#64748b] truncate mt-0.5">
                        {stat.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary-accent"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={onOpenResume} className="btn-secondary-edge cursor-pointer">
                <span>View Resume</span>
              </button>
              <a
                href="#projects"
                className="font-mono-code text-[11px] uppercase tracking-widest text-[#64748b] hover:text-[#f1f5f9] transition-colors px-1 py-1.5"
              >
                See Work ↓
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className={`p-2.5 rounded-[5px] bg-[#131826] border border-[#ffffff14] text-[#64748b] ${link.color} transition-all duration-200 hover:-translate-y-0.5`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-[5px] bg-[#131826] border border-[#ffffff14] text-[#64748b] hover:text-[#c084fc] hover:border-[#c084fc40] transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Interactive Recruiter Dashboard Card ── */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* "Open to Work" floating badge */}
              <div className="absolute -top-3 -right-3 z-10 bg-[#4ade80] text-[#09090b] font-mono-code text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-[#4ade8040] animate-bounce-slow">
                Open to Work
              </div>

              {/* Main Card */}
              <div className="border border-[#ffffff14] bg-[#131826] rounded-[12px] shadow-2xl relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#4ade8008] rounded-full blur-3xl pointer-events-none" />

                {/* Card Chrome Bar */}
                <div className="flex items-center justify-between px-5 pt-4 pb-0">
                  <div className="flex items-center gap-1.5 font-mono-code text-[10px] text-[#64748b]">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                    <span className="ml-2">recruiter.dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono-code text-[9px] text-[#4ade80] bg-[#4ade8015] border border-[#4ade8030] px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 px-5 pt-4 pb-0">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 font-mono-code text-[10.5px] px-3 py-1.5 rounded-t-[5px] border-t border-l border-r transition-all duration-200 cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[#10141f] border-[#4ade8030] text-[#4ade80]"
                          : "bg-transparent border-transparent text-[#64748b] hover:text-[#94a3b8]"
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-[#10141f] border-t border-[#4ade8020] mx-0 rounded-b-[0px]">

                  {/* ── SNAPSHOT TAB ── */}
                  {activeTab === "snapshot" && (
                    <div className="p-5 space-y-2.5">
                      <div className="font-mono-code text-[10px] text-[#64748b] mb-3 uppercase tracking-widest">
                        // Quick Info for HR & Recruiters
                      </div>
                      {snapshotItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className="flex items-center gap-3 p-2.5 rounded-[6px] bg-[#131826] border border-[#ffffff08] hover:border-[#ffffff14] transition-colors group"
                          >
                            <div
                              className="w-6 h-6 rounded-[4px] flex items-center justify-center shrink-0"
                              style={{ background: `${item.color}18`, color: item.color }}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex items-center justify-between flex-1 min-w-0">
                              <span className="font-mono-code text-[10px] text-[#64748b] w-24 shrink-0">{item.label}</span>
                              <span className="text-[12.5px] font-semibold text-[#f1f5f9] group-hover:text-white transition-colors text-right truncate" style={{ color: item.color }}>
                                {item.value}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ── STRENGTHS TAB ── */}
                  {activeTab === "strengths" && (
                    <div className="p-5 space-y-3">
                      <div className="font-mono-code text-[10px] text-[#64748b] mb-3 uppercase tracking-widest">
                        // Why Nikhil?
                      </div>
                      {strengthItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="flex items-start gap-3 p-3 rounded-[6px] bg-[#131826] border border-[#ffffff08] hover:border-[#ffffff14] transition-colors group"
                          >
                            <div
                              className="w-7 h-7 rounded-[4px] flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: `${item.color}18`, border: `1px solid ${item.color}30`, color: item.color }}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-[#f1f5f9] group-hover:text-white transition-colors leading-tight">
                                {item.title}
                              </div>
                              <div className="font-mono-code text-[11px] text-[#64748b] mt-0.5 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ── CONTACT TAB ── */}
                  {activeTab === "contact" && (
                    <div className="p-5 space-y-3">
                      <div className="font-mono-code text-[10px] text-[#64748b] mb-3 uppercase tracking-widest">
                        // Reach out directly
                      </div>
                      {contactItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="flex items-center gap-3 p-3 rounded-[6px] bg-[#131826] border border-[#ffffff08] hover:border-[#4ade8040] hover:bg-[#182032] transition-all duration-200 group block"
                          >
                            <div
                              className="w-8 h-8 rounded-[5px] flex items-center justify-center shrink-0"
                              style={{ background: `${item.color}18`, border: `1px solid ${item.color}30`, color: item.color }}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-mono-code text-[10px] text-[#64748b]">{item.label}</div>
                              <div className="text-[12.5px] font-semibold text-[#f1f5f9] group-hover:text-[#4ade80] transition-colors truncate mt-0.5">
                                {item.value}
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#4ade80] transition-colors shrink-0" />
                          </a>
                        );
                      })}

                      {/* LinkedIn quick link */}
                      <a
                        href={portfolioData.personal.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-[6px] bg-[#131826] border border-[#ffffff08] hover:border-[#38bdf840] hover:bg-[#182032] transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-[5px] flex items-center justify-center shrink-0 bg-[#38bdf818] border border-[#38bdf830] text-[#38bdf8]">
                          <LinkedInIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-mono-code text-[10px] text-[#64748b]">LinkedIn</div>
                          <div className="text-[12.5px] font-semibold text-[#f1f5f9] group-hover:text-[#38bdf8] transition-colors mt-0.5">
                            View Full Profile
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#38bdf8] transition-colors shrink-0" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-[#131826] border-t border-[#ffffff08] flex items-center justify-between font-mono-code text-[10px]">
                  <span className="text-[#64748b]">Last updated · Oct 2026</span>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-1.5 text-[#4ade80] hover:text-white transition-colors cursor-pointer font-semibold"
                  >
                    <span>Full Resume</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { portfolioData, Experience } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Zap,
  Building2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function ExperienceSection() {
  const [selectedExpId, setSelectedExpId] = useState<string>(portfolioData.experiences[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string>(portfolioData.experiences[0].id);

  const activeExp = portfolioData.experiences.find((e) => e.id === selectedExpId) || portfolioData.experiences[0];

  const handleMobileToggle = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? "" : id);
  };

  return (
    <section id="experience" className="py-20 sm:py-24 relative overflow-hidden bg-[#070b12]">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey & Production Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Work Experience</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Hands-on software engineering on live enterprise HRMS platforms and ERP suites, designing resilient database architectures, RESTful APIs, and role-based client interfaces.
          </p>
        </div>

        {/* ================= MOBILE ACCORDION VIEW (< lg) ================= */}
        <div className="block lg:hidden space-y-4">
          {portfolioData.experiences.map((exp) => {
            const isExpanded = expandedMobileId === exp.id;
            return (
              <div
                key={exp.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isExpanded
                    ? "bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                    : "bg-slate-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accordion Header / Tap Card */}
                <button
                  type="button"
                  onClick={() => handleMobileToggle(exp.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full border font-semibold ${
                          exp.id === "airwix"
                            ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                            : exp.id === "itecharathi"
                            ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                            : "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
                        }`}
                      >
                        {exp.periodBadge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-slate-300 text-xs leading-relaxed">
                      <span className="font-semibold text-white">Project Scope: </span>
                      {exp.overview}
                    </div>

                    <div className="space-y-2.5">
                      <h5 className="text-[11px] uppercase tracking-wider font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Key Responsibilities & Deliverables</span>
                      </h5>

                      <ul className="space-y-2">
                        {exp.highlights.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-slate-400" />
                        <span>Technologies Utilized</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-cyan-300 text-[11px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP TAB VIEW (>= lg) ================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Company Selector List */}
          <div className="col-span-4 flex flex-col gap-3">
            {portfolioData.experiences.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-slate-800/90 border-cyan-500/50 shadow-lg shadow-cyan-500/15"
                      : "bg-slate-900/50 border-white/5 hover:border-white/15 hover:bg-slate-900/80"
                  }`}
                >
                  {/* Active Indicator Accent Line */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-indigo-500"></div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border font-medium ${
                        exp.id === "airwix"
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : exp.id === "itecharathi"
                          ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                          : "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
                      }`}
                    >
                      {exp.periodBadge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {exp.duration.split(" ")[0]} {exp.duration.split(" ")[1]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-cyan-300/90 font-medium flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                  </p>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {exp.overview}
                  </p>
                </button>
              );
            })}

            {/* Quick Experience Stat Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/60 border border-cyan-500/20 text-xs text-slate-300 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Production Reliability</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Experience managing real-time business data: automated payroll disbursement, tax deductions, multi-tenant inventory ledgers, and zero-downtime database migrations.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Experience View */}
          <div className="col-span-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-2xl font-bold text-white">
                      {activeExp.role}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                        activeExp.id === "airwix"
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : activeExp.id === "itecharathi"
                          ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                          : "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
                      }`}
                    >
                      {activeExp.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{activeExp.company}</span>
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{activeExp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeExp.location}</span>
                  </div>
                </div>
              </div>

              {/* High-Level Overview */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300 text-sm leading-relaxed">
                <span className="font-semibold text-white">Project Scope: </span>
                {activeExp.overview}
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3">
                <h5 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Responsibilities & Deliverables</span>
                </h5>

                <ul className="space-y-3">
                  {activeExp.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0 group-hover:text-cyan-300 transition-colors" />
                      <span className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>Technologies & Frameworks Utilized</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeExp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-cyan-300 text-xs font-mono font-medium hover:border-cyan-400/40 hover:bg-slate-800 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

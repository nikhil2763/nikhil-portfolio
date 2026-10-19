"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Zap, 
  Users, 
  Rocket, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "databases" | "tools">("all");

  const skillGroups = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: portfolioData.skills.frontend
    },
    {
      id: "backend",
      title: "Backend & System APIs",
      icon: Server,
      color: "from-indigo-500 to-purple-500",
      skills: portfolioData.skills.backend
    },
    {
      id: "databases",
      title: "Databases & Data Modeling",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: portfolioData.skills.databases
    },
    {
      id: "tools",
      title: "Languages & DevOps Tools",
      icon: Terminal,
      color: "from-amber-500 to-orange-500",
      skills: portfolioData.skills.languagesAndTools
    }
  ];

  const displayedGroups = activeTab === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Core Expertise</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, frontend frameworks, backend runtimes, database management systems, and enterprise design patterns.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 border border-cyan-400/40"
                : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/5"
            }`}
          >
            All Categories
          </button>
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeTab === group.id
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 border border-cyan-400/40"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{group.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {displayedGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${group.color} p-[1px]`}>
                      <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {group.skills.length} Core Technologies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Bars & Badges */}
                <div className="space-y-4">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 flex items-center gap-1.5">
                          {skill.name}
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          )}
                        </span>
                        <span className="text-slate-400 font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Meter Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden border border-white/5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${group.color} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Key Strengths Spotlight */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Key Strengths & Engineering Attributes
            </h3>
            <p className="text-sm text-slate-400">
              Personal and professional capabilities brought to high-performing software development teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.strengths.map((strength, index) => {
              const icons = [Cpu, Zap, Users, Rocket];
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

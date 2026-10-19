"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, BookOpen, Star, CheckCircle } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#080d16]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-400">Academic Excellence</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistently maintained top percentile honors throughout undergraduate and polytechnic studies with an exceptional 9.5 and 9.17 CGPA.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group flex flex-col justify-between space-y-6"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-amber-400 to-indigo-500"></div>

              <div>
                {/* Badge & Period Header */}
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{edu.badge}</span>
                  </span>

                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                
                <h4 className="text-sm font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>{edu.institution}</span>
                </h4>

                {/* Score Pill Banner */}
                <div className="my-5 p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                      Academic Score
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300">
                      {edu.score}{" "}
                      <span className="text-sm text-slate-300 font-normal">{edu.scoreType}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300 font-bold text-lg">
                    ★
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Bottom Distinction Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified Credential • Information Technology</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

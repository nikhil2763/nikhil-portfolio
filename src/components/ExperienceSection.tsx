"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Calendar, Building2, ChevronRight } from "lucide-react";

function useBiRevealList(count: number, threshold = 0.1) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [vis, setVis] = useState<Set<number>>(new Set());
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = Number(e.target.getAttribute("data-ri"));
          setVis((prev) => {
            const next = new Set(prev);
            e.isIntersecting ? next.add(i) : next.delete(i);
            return next;
          });
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [count, threshold]);
  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
    if (el) el.setAttribute("data-ri", String(i));
  };
  return { setRef, isVis: (i: number) => vis.has(i) };
}

function useBiReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ExperienceSection() {
  const header = useBiReveal(0.1);
  const [expandedId, setExpandedId] = useState<string | null>("airwix");
  const { setRef, isVis } = useBiRevealList(portfolioData.experiences.length);

  const badgeColors: Record<string, string> = {
    emerald: "#4ade80",
    cyan:    "#38bdf8",
    indigo:  "#818cf8",
  };

  return (
    <section id="experience" className="py-16 border-t border-[#ffffff12] relative bg-[#0c0f17]">
      <div className="max-w-[1152px] mx-auto px-5">

        {/* Header — slide from right */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-right space-y-1.5 ${header.visible ? "in" : ""}`}
        >
          <div className="eyebrow">&lt;experience /&gt;</div>
          <h2 className="section-title">
            Career journey & <span>production impact</span>.
          </h2>
        </div>

        {/* Experience Accordion */}
        <div className="flex flex-col gap-3 mt-10">
          {portfolioData.experiences.map((exp, index) => {
            const visible = isVis(index);
            const isExpanded = expandedId === exp.id;
            const accentColor = badgeColors[exp.badgeColor || "emerald"] || "#4ade80";
            const delayMs = index * 100;

            return (
              <div
                key={exp.id}
                ref={setRef(index) as unknown as React.RefObject<HTMLDivElement>}
                style={{
                  transitionDelay: `${delayMs}ms`,
                  borderColor: isExpanded ? `${accentColor}40` : "rgba(255,255,255,0.08)",
                }}
                className={`border bg-[#131826] rounded-[8px] overflow-hidden reveal reveal-up ${visible ? "in" : ""}`}
              >
                {/* Accent left bar — visible when expanded */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r transition-all duration-500"
                  style={{
                    background: accentColor,
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                  }}
                />

                {/* Clickable Row */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-[#182032] transition-colors cursor-pointer group"
                  style={{ borderBottom: isExpanded ? `1px solid ${accentColor}25` : "none" }}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div
                      className="w-10 h-10 rounded-[6px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                    >
                      <Building2 className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[15px] font-bold text-[#f8fafc] group-hover:text-white transition-colors">
                          {exp.role}
                        </h3>
                        <span
                          className="font-mono-code text-[10px] px-2 py-0.5 rounded-[3px] font-semibold"
                          style={{ color: accentColor, background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                        >
                          {exp.periodBadge}
                        </span>
                      </div>
                      <div className="font-mono-code text-[12px] text-[#94a3b8] mt-0.5">
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="font-mono-code text-[11px] text-[#c084fc] hidden sm:flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-[#64748b] transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-4 space-y-4 animate-fade-up">
                    <p className="text-[#cbd5e1] text-[0.9rem] leading-[1.7]">{exp.overview}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-[12px] text-[#94a3b8]">
                          <span style={{ color: accentColor }} className="shrink-0 font-bold mt-0.5">↳</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#ffffff0e]">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="font-mono-code text-[10.5px] text-[#94a3b8] border border-[#ffffff12] px-2.5 py-0.5 rounded-[3px] bg-[#10141f]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

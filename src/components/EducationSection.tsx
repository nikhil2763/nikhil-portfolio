"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Calendar, CheckCircle2 } from "lucide-react";

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
      { threshold, rootMargin: "0px 0px -30px 0px" }
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

export default function EducationSection() {
  const header = useBiReveal(0.1);
  const { setRef, isVis } = useBiRevealList(portfolioData.education.length);

  return (
    <section id="education" className="py-16 border-t border-[#ffffff12] relative bg-[#0c0f17]">
      <div className="max-w-[1152px] mx-auto px-5">

        {/* Header — blur fade */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-blur space-y-1.5 ${header.visible ? "in" : ""}`}
        >
          <div className="eyebrow">&lt;education /&gt;</div>
          <h2 className="section-title">
            Academic credentials & <span>honors</span>.
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {portfolioData.education.map((edu, idx) => {
            const visible = isVis(idx);
            const dir = idx % 2 === 0 ? "reveal-left" : "reveal-right";
            return (
              <div
                key={idx}
                ref={setRef(idx) as unknown as React.RefObject<HTMLDivElement>}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`border border-[#ffffff14] bg-[#131826] rounded-[8px] overflow-hidden reveal ${dir} ${visible ? "in" : ""} hover:border-[#4ade8040] hover:bg-[#182032] group transition-[border-color,background] duration-300`}
              >
                {/* Glowing score banner */}
                <div className={`bg-gradient-to-r from-[#4ade8018] to-transparent border-b border-[#4ade8020] px-5 py-3 flex items-center justify-between`}>
                  <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#6ee7b7]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{edu.badge}</span>
                  </div>
                  <div
                    className={`font-mono-code text-sm font-black text-[#4ade80] transition-all duration-700 ${visible ? "animate-glow-pulse" : ""}`}
                    style={{ animationDelay: `${idx * 120 + 400}ms` }}
                  >
                    {edu.score} {edu.scoreType}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-[16px] font-bold text-[#f8fafc] group-hover:text-white transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="font-mono-code text-[12px] text-[#4ade80] mt-1">{edu.degree}</div>
                  <div className="flex items-center gap-1.5 font-mono-code text-[11px] text-[#64748b] mt-2">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                  <p className="text-[#94a3b8] text-[12.5px] leading-[1.65] mt-3 line-clamp-3 group-hover:text-[#cbd5e1] transition-colors">
                    {edu.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

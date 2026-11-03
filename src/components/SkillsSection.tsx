"use client";

import { useEffect, useRef, useState } from "react";
import { TechIcon } from "@/components/icons/TechIcon";

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

export default function SkillsSection() {
  const header = useBiReveal(0.1);
  const { setRef, isVis } = useBiRevealList(4);

  const stackGroups = [
    {
      label: "FRONTEND", color: "#4ade80",
      skills: [
        { name: "React.js", iconKey: "react" }, { name: "Next.js 15", iconKey: "next" },
        { name: "TypeScript", iconKey: "typescript" }, { name: "JavaScript", iconKey: "javascript" },
        { name: "Tailwind CSS", iconKey: "tailwind" }, { name: "HTML5", iconKey: "html" },
      ],
    },
    {
      label: "BACKEND", color: "#38bdf8",
      skills: [
        { name: "Node.js", iconKey: "node" }, { name: "Express.js", iconKey: "express" },
        { name: "REST APIs", iconKey: "api" }, { name: "JWT Auth", iconKey: "jwt" },
        { name: "RBAC", iconKey: "security" },
      ],
    },
    {
      label: "DATABASES", color: "#c084fc",
      skills: [
        { name: "PostgreSQL", iconKey: "postgres" }, { name: "MongoDB", iconKey: "mongo" },
        { name: "SQL Indexing", iconKey: "postgres" }, { name: "Mongoose ODM", iconKey: "database" },
      ],
    },
    {
      label: "TOOLS", color: "#f59e0b",
      skills: [
        { name: "Git & GitHub", iconKey: "git" }, { name: "Docker", iconKey: "docker" },
        { name: "Postman", iconKey: "api" }, { name: "Vercel", iconKey: "next" },
        { name: "Linux CLI", iconKey: "linux" },
      ],
    },
  ];

  // Alternate reveal direction per card: left, right, left, right
  const revealDirs = ["reveal-left", "reveal-right", "reveal-left", "reveal-right"];
  const delayClasses = ["delay-0", "delay-100", "delay-50", "delay-150"];

  return (
    <section id="skills" className="py-16 border-t border-[#ffffff12] relative bg-[#0c0f17]">
      <div className="max-w-[1152px] mx-auto px-5">

        {/* Header — blur fade */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-blur ${header.visible ? "in" : ""} space-y-1.5`}
        >
          <div className="eyebrow">&lt;skills /&gt;</div>
          <h2 className="section-title">
            Technologies & <span>production stack</span>.
          </h2>
        </div>

        {/* 2x2 Grid — alternating left/right slide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {stackGroups.map((group, index) => (
            <div
              key={group.label}
              ref={setRef(index) as unknown as React.RefObject<HTMLDivElement>}
              style={{ borderColor: isVis(index) ? `${group.color}20` : "rgba(255,255,255,0.08)" }}
              className={`border bg-[#131826] rounded-[8px] p-5 reveal ${revealDirs[index]} ${delayClasses[index]} ${isVis(index) ? "in" : ""} hover:bg-[#182032] transition-colors duration-300`}
            >
              {/* Shimmer top bar when visible */}
              {isVis(index) && (
                <div
                  className="h-0.5 rounded-full mb-4 animate-shimmer"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.color}40, transparent)` }}
                />
              )}

              <div className="font-mono-code text-[10.5px] font-bold tracking-widest mb-4" style={{ color: group.color }}>
                {group.label}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    className="skill-badge-chip"
                    style={{ transitionDelay: isVis(index) ? `${si * 40}ms` : "0ms" }}
                  >
                    <div className="w-4 h-4 flex items-center justify-center shrink-0">
                      <TechIcon name={skill.iconKey} className="w-4 h-4" />
                    </div>
                    <span className="text-[#f8fafc] text-[12.5px] font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

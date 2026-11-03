"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

function useBiRevealList(count: number, threshold = 0.08) {
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

export default function ProjectsSection() {
  const header = useBiReveal(0.1);
  const { setRef, isVis } = useBiRevealList(portfolioData.projects.length);

  const getCatStyle = (category: string) => {
    const map: Record<string, [string, string, string]> = {
      "Full Stack": ["#4ade80", "#4ade8015", "#4ade8030"],
      Enterprise:  ["#38bdf8", "#38bdf815", "#38bdf830"],
      "MERN Stack": ["#c084fc", "#c084fc15", "#c084fc30"],
    };
    const [color, bg, border] = map[category] ?? ["#4ade80", "#4ade8015", "#4ade8030"];
    return { color, background: bg, border: `1px solid ${border}` };
  };

  return (
    <section id="projects" className="py-16 border-t border-[#ffffff12] relative bg-[#0c0f17]">
      <div className="max-w-[1152px] mx-auto px-5">

        {/* Header — slide down from above */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-down space-y-1.5 ${header.visible ? "in" : ""}`}
        >
          <div className="eyebrow">&lt;projects /&gt;</div>
          <h2 className="section-title">
            Production & <span>engineered projects</span>.
          </h2>
        </div>

        {/* Projects Grid — alternating left/right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {portfolioData.projects.map((project, index) => {
            const visible = isVis(index);
            const catStyle = getCatStyle(project.category);
            const dir = index % 2 === 0 ? "reveal-left" : "reveal-right";

            return (
              <div
                key={project.id}
                ref={setRef(index) as unknown as React.RefObject<HTMLDivElement>}
                className={`border border-[#ffffff14] bg-[#131826] rounded-[8px] overflow-hidden group reveal ${dir} ${visible ? "in" : ""} hover:border-[#4ade8040] hover:bg-[#182032] hover:-translate-y-1 hover:shadow-[0_16px_35px_-8px_rgba(74,222,128,0.2)] transition-[border-color,background,box-shadow,transform] duration-300`}
                style={{ transitionDelay: `${(index % 2) * 80}ms` }}
              >
                {/* Accent top bar */}
                <div
                  className={`h-0.5 w-full transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
                  style={{
                    background: `linear-gradient(90deg, ${catStyle.color}50, transparent)`,
                    transitionDelay: `${(index % 2) * 80 + 300}ms`,
                  }}
                />

                {/* Card Header */}
                <div className="border-b border-[#ffffff0e] bg-[#10141f] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                    <span className="font-mono-code text-[11px] text-[#64748b]">{project.subtitle}</span>
                  </div>
                  <span className="font-mono-code text-[9.5px] px-2 py-0.5 rounded-[3px] font-semibold" style={catStyle}>
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-[16px] font-bold text-[#f8fafc] group-hover:text-[#4ade80] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-[13px] leading-[1.65] mt-2 line-clamp-2">
                    {project.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {project.keyPoints.slice(0, 2).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[12px] text-[#64748b]">
                        <span className="text-[#4ade80] font-bold shrink-0">›</span>
                        <span className="line-clamp-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="font-mono-code text-[10.5px] text-[#6ee7b7] border border-[#ffffff10] px-2.5 py-0.5 rounded-[3px] bg-[#10141f]">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="font-mono-code text-[10.5px] text-[#64748b] px-1">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="px-5 pb-4 border-t border-[#ffffff08] pt-3 flex items-center gap-4 font-mono-code text-[11px] text-[#64748b]">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3" />
                      <span>Live</span>
                    </a>
                  )}
                  {project.badge && (
                    <span className="ml-auto text-[9.5px] text-[#c084fc] border border-[#c084fc25] bg-[#c084fc0d] px-2 py-0.5 rounded-[3px]">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

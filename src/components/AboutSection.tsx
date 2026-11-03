"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Zap, Shield, Database, Code2 } from "lucide-react";

function useBiReveal(threshold = 0.12, rootMargin = "0px 0px -40px 0px") {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, visible };
}

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

export default function AboutSection() {
  const header = useBiReveal(0.1);
  const bioCard = useBiReveal(0.1);
  const { setRef, isVis } = useBiRevealList(4);

  const strengths = [
    { icon: Code2,    title: "Full-Stack Web",      desc: "React, Next.js, Node.js, TypeScript — end-to-end.",                   color: "#4ade80" },
    { icon: Zap,      title: "Enterprise Systems",  desc: "HRMS payroll, ERP modules, multi-tenant architectures.",             color: "#38bdf8" },
    { icon: Database, title: "Database Expert",     desc: "PostgreSQL, MongoDB, schema design, query optimization.",            color: "#c084fc" },
    { icon: Shield,   title: "Secure APIs",         desc: "JWT, RBAC, RESTful microservices, audit workflows.",                 color: "#f59e0b" },
  ];

  return (
    <section id="about" className="py-16 border-t border-[#ffffff12] relative bg-[#0c0f17]">
      <div className="max-w-[1152px] mx-auto px-5">

        {/* Section Header — slides from LEFT */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-left ${header.visible ? "in" : ""}`}
        >
          <div className="eyebrow">&lt;about /&gt;</div>
          <h2 className="section-title mt-1">
            Full-Stack Developer with <span>enterprise impact</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10 items-start">

          {/* Left: Bio Card — slides from RIGHT */}
          <div
            ref={bioCard.ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-2 terminal-card overflow-hidden reveal reveal-right delay-100 ${bioCard.visible ? "in" : ""}`}
          >
            <div className="border-b border-[#ffffff10] bg-[#10141f] px-4 py-2.5 flex items-center gap-2 font-mono-code text-[11px] text-[#94a3b8]">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
              <span className="text-[#f8fafc] font-semibold">nikhil@portfolio:~$</span>
            </div>

            <div className="p-5 bg-[#131826] space-y-3">
              <p className="text-[#cbd5e1] text-[0.9rem] leading-[1.75]">
                Results-driven Full-Stack Developer with{" "}
                <span className="text-[#4ade80] font-semibold">9.5 CGPA (B.Tech IT)</span> from Silver Oak University.
                Currently building enterprise HRMS at{" "}
                <span className="text-[#f8fafc] font-semibold">Airwix Technologies</span>.
              </p>
              <p className="text-[#94a3b8] text-[0.875rem] leading-[1.7]">
                Previously at <span className="text-[#f8fafc]">iTechsarathi</span> building live multi-tenant ERP modules —
                Inventory, Finance, CRM, and Purchase Orders.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Full-Stack", "Next.js 15", "PostgreSQL", "REST APIs", "RBAC", "Node.js"].map((tag) => (
                  <span key={tag} className="font-mono-code text-[10.5px] text-[#6ee7b7] border border-[#4ade8030] px-2.5 py-0.5 rounded-[3px] bg-[#4ade800d]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-[#ffffff10] font-mono-code text-[10.5px]">
              {[
                { k: "ROLE", v: "Full-Stack Dev" },
                { k: "SCORE", v: "9.5 CGPA" },
                { k: "BASE", v: "Ahmedabad" },
              ].map((item, i) => (
                <div key={item.k} className={`p-3 ${i !== 2 ? "border-r border-[#ffffff10]" : ""}`}>
                  <div className="text-[#6ee7b7]">{item.k}</div>
                  <div className="text-[#f8fafc] font-semibold mt-0.5">{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Expertise Grid — scale + up with stagger */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              const delays = ["delay-150", "delay-200", "delay-250", "delay-300"];
              return (
                <div
                  key={item.title}
                  ref={setRef(idx) as unknown as React.RefObject<HTMLDivElement>}
                  className={`p-5 border border-[#ffffff14] bg-[#131826] rounded-[8px] hover:border-[#4ade8040] hover:bg-[#182032] transition-colors duration-300 reveal reveal-scale ${delays[idx]} ${isVis(idx) ? "in" : ""} group`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-[4px] flex items-center justify-center"
                      style={{ background: `${item.color}18`, border: `1px solid ${item.color}35`, color: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[14px] font-bold text-[#f8fafc]">{item.title}</h3>
                  </div>
                  <p className="text-[#94a3b8] text-[13px] leading-[1.6] group-hover:text-[#cbd5e1] transition-colors">
                    {item.desc}
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

"use client";

import { useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, Mail, Phone, MapPin } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-0.5 mb-3">
      {children}
    </h2>
  );
}

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function buildPrintHTML(): string {
  const p = portfolioData.personal;
  const expHTML = portfolioData.experiences.map(e => `
    <div class="job">
      <div class="job-header">
        <span class="job-title">${e.role} <span class="company">-- ${e.company}</span></span>
        <span class="date">${e.duration}</span>
      </div>
      <ul>${e.highlights.slice(0, 4).map(h => `<li>${h}</li>`).join("")}</ul>
      <div class="tags">${e.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`).join("");

  const eduHTML = portfolioData.education.map(d => `
    <div class="edu-row">
      <div><strong>${d.institution}</strong><span class="light"> -- ${d.degree}</span></div>
      <div class="edu-right"><span class="date">${d.period}</span> <strong>${d.score} ${d.scoreType}</strong></div>
    </div>`).join("");

  const projHTML = portfolioData.projects.slice(0, 3).map(pr => `
    <div class="job">
      <div class="job-header">
        <span class="job-title">${pr.title}</span>
        <span class="date">${pr.techStack.join(", ")}</span>
      </div>
      <ul>${pr.keyPoints.slice(0, 2).map(k => `<li>${k}</li>`).join("")}</ul>
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Nikhil Jaiswal CV</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',Arial,sans-serif;font-size:10.5pt;color:#1a1a1a;background:#fff;padding:14mm 16mm 12mm;line-height:1.45}
.cv-header{text-align:center;border-bottom:2px solid #1a1a1a;padding-bottom:10px;margin-bottom:14px}
.cv-header h1{font-size:22pt;font-weight:800}
.cv-header .subtitle{font-size:10.5pt;color:#444;margin-top:3px;font-weight:600}
.cv-header .contacts{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 16px;margin-top:6px;font-size:9.5pt;color:#333}
.cv-header .contacts a{color:#003399;text-decoration:none}
.section-title{font-size:9pt;font-weight:800;text-transform:uppercase;letter-spacing:.1em;border-bottom:1.5px solid #333;padding-bottom:2px;margin:14px 0 8px;color:#111}
.edu-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px}
.edu-right{text-align:right;white-space:nowrap}
.light{color:#555;font-weight:normal}
.job{margin-bottom:12px;page-break-inside:avoid}
.job-header{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:4px}
.job-title{font-weight:700;font-size:10.5pt}
.company{font-weight:400;color:#444}
.date{font-size:9pt;color:#555;font-family:monospace;white-space:nowrap}
ul{padding-left:16px;margin-top:5px}
li{font-size:9.5pt;color:#333;margin-bottom:2px}
.tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px}
.tag{font-size:8.5pt;padding:1px 6px;border:1px solid #bbb;border-radius:3px;background:#f5f5f5;color:#444;font-family:monospace}
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px 20px}
.skill-row{font-size:9.5pt;color:#333}
.skill-label{font-weight:700;color:#111}
.strength-tags{display:flex;flex-wrap:wrap;gap:5px}
.strength-tag{font-size:9pt;padding:2px 8px;border:1px solid #aaa;border-radius:3px;background:#fafafa;color:#333}
@page{size:A4 portrait;margin:0}
</style>
</head>
<body>
<div class="cv-header">
  <h1>${p.name}</h1>
  <div class="subtitle">Full Stack Developer | B.Tech Information Technology (9.5 CGPA)</div>
  <div class="contacts">
    <a href="tel:${p.phone}">${p.formattedPhone}</a>|
    <a href="mailto:${p.email}">${p.email}</a>|
    <a href="${p.githubUrl}">github.com/${p.github}</a>|
    <span>${p.location}</span>
  </div>
</div>
<div class="section-title">Education</div>${eduHTML}
<div class="section-title">Work Experience</div>${expHTML}
<div class="section-title">Projects</div>${projHTML}
<div class="section-title">Technical Skills</div>
<div class="skills-grid">
  <div class="skill-row"><span class="skill-label">Languages:</span> Java, C, JavaScript (ES6+), TypeScript</div>
  <div class="skill-row"><span class="skill-label">Databases:</span> PostgreSQL, MongoDB, SQL, Query Optimization</div>
  <div class="skill-row"><span class="skill-label">Frontend:</span> React.js, Next.js, HTML5, CSS3, Tailwind CSS, MUI</div>
  <div class="skill-row"><span class="skill-label">Tools:</span> Git and GitHub, JWT Auth, RBAC, Postman, Vercel</div>
  <div class="skill-row"><span class="skill-label">Backend:</span> Node.js, Express.js, RESTful APIs, MVC Architecture</div>
</div>
<div class="section-title">Key Strengths</div>
<div class="strength-tags">
  <span class="strength-tag">Problem-Solving and Algorithms</span>
  <span class="strength-tag">Live Production Experience (ERP and HRMS)</span>
  <span class="strength-tag">Team Collaboration and Code Review</span>
  <span class="strength-tag">Quick Learner and Adaptable</span>
</div>
</body>
</html>`;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const html = buildPrintHTML();
    const printWin = window.open("", "_blank", "width=900,height=700");
    if (!printWin) {
      alert("Popup blocked! Please allow popups for localhost and try again.");
      return;
    }
    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    printWin.onload = () => { printWin.focus(); printWin.print(); };
    setTimeout(() => { try { printWin.focus(); printWin.print(); } catch (_) { /* ok */ } }, 700);
  };

  const p = portfolioData.personal;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-white/10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-white text-sm">Curriculum Vitae</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">Nikhil Jaiswal</span>
            <span className="text-xs text-slate-400 hidden sm:inline">-- A4 PDF ready</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer">
              <Printer className="w-3.5 h-3.5" /><span>Print / Save PDF</span>
            </button>
            <button type="button" onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer" aria-label="Close CV">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Preview */}
        <div className="bg-white text-gray-900 px-8 py-7 text-sm font-sans">
          {/* Header */}
          <div className="text-center border-b-2 border-gray-800 pb-4 mb-5">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{p.name}</h1>
            <p className="text-sm font-semibold text-gray-700 mt-1">Full Stack Developer | B.Tech Information Technology (9.5 CGPA)</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600 mt-2">
              <a href={`tel:${p.phone}`} className="flex items-center gap-1 text-blue-700"><Phone className="w-3 h-3" />{p.formattedPhone}</a>
              <span className="text-gray-400">|</span>
              <a href={`mailto:${p.email}`} className="flex items-center gap-1 text-blue-700"><Mail className="w-3 h-3" />{p.email}</a>
              <span className="text-gray-400">|</span>
              <a href={p.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-700">
                <GithubIcon className="w-3 h-3" />github.com/{p.github}
              </a>
              <span className="text-gray-400">|</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</span>
            </div>
          </div>

          {/* Education */}
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-2 mb-5">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="flex justify-between items-baseline flex-wrap gap-1">
                <div>
                  <span className="font-bold text-gray-900">{edu.institution}</span>
                  <span className="text-gray-500 text-xs ml-1">-- {edu.degree}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-gray-500 font-mono">{edu.period}</span>
                  <span className="ml-2 font-bold text-gray-800 text-xs">{edu.score} {edu.scoreType}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <SectionTitle>Work Experience</SectionTitle>
          <div className="space-y-4 mb-5">
            {portfolioData.experiences.map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <span className="font-bold text-gray-900 text-sm">{exp.role}</span>
                    <span className="text-gray-500 text-xs ml-1">-- {exp.company}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono shrink-0">{exp.duration}</span>
                </div>
                <ul className="mt-1.5 pl-4 space-y-0.5 list-disc">
                  {exp.highlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="text-xs text-gray-700 leading-relaxed">{h}</li>
                  ))}
                </ul>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {exp.technologies.map((t, i) => (
                    <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-600 font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-3 mb-5">
            {portfolioData.projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="break-inside-avoid">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-bold text-gray-900 text-sm">{proj.title}</span>
                  <span className="text-[10px] text-gray-500 font-mono">| {proj.techStack.join(", ")}</span>
                </div>
                <ul className="mt-1 pl-4 space-y-0.5 list-disc">
                  {proj.keyPoints.slice(0, 2).map((pt, i) => (
                    <li key={i} className="text-xs text-gray-700 leading-relaxed">{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-5 text-xs">
            <div><span className="font-bold text-gray-900">Languages:</span> <span className="text-gray-700">Java, C, JavaScript (ES6+), TypeScript</span></div>
            <div><span className="font-bold text-gray-900">Databases:</span> <span className="text-gray-700">PostgreSQL, MongoDB, SQL, Query Optimization</span></div>
            <div><span className="font-bold text-gray-900">Frontend:</span> <span className="text-gray-700">React.js, Next.js, HTML5, CSS3, Tailwind CSS, MUI</span></div>
            <div><span className="font-bold text-gray-900">Tools:</span> <span className="text-gray-700">Git and GitHub, JWT Auth, RBAC, Postman, Vercel</span></div>
            <div><span className="font-bold text-gray-900">Backend:</span> <span className="text-gray-700">Node.js, Express.js, RESTful APIs, MVC Architecture</span></div>
          </div>

          {/* Strengths */}
          <SectionTitle>Key Strengths</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {["Problem-Solving and Algorithms", "Live Production Experience (ERP and HRMS)", "Team Collaboration and Code Review", "Quick Learner and Adaptable"].map((s, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded border border-gray-300 bg-gray-50 text-gray-700">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

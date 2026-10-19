"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  X, 
  Sparkles, 
  ArrowRight,
  Database,
  Cpu,
  ShieldCheck
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "MERN Stack", "Full Stack", "Enterprise"];

  const filteredProjects = activeCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080d17]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Full Stack Projects</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world applications built with the MERN stack, PostgreSQL, and modern full-stack architectures — emphasizing scalable database design, clean REST APIs, and role-based security.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/30 scale-105"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Project Image Preview */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-black/40 to-transparent"></div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/90 text-slate-950 text-xs font-bold tracking-wide shadow-md backdrop-blur-md">
                    {project.badge || project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Subtitle bottom banner on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Points from CV */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {project.keyPoints.slice(0, 3).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Architecture & Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeModalProject.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-cyan-400 font-medium">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Modal Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                Overview & System Impact
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Complete Highlights from CV */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Full Feature Specifications & Modules</span>
              </h4>
              <ul className="space-y-2">
                {activeModalProject.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                Technology Stack & Protocols
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono font-medium border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium cursor-pointer"
              >
                Close Window
              </button>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit Nikhil&apos;s GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

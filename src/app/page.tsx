"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import { portfolioData } from "@/data/portfolioData";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0c0f17] text-[#f8fafc] flex flex-col relative selection:bg-[#4ade80]/30 selection:text-[#4ade80] transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Mobile Floating Quick Connect Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="bg-[#111113]/95 backdrop-blur-md rounded-[4px] p-2 border border-[#4ade8040] shadow-2xl flex items-center justify-around font-mono-code text-[11px]">
          <a
            href={`tel:${portfolioData.personal.phone}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-emerald-500/20 text-emerald-300 font-semibold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>

          <a
            href={portfolioData.personal.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-green-500/20 text-green-300 font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-cyan-500/20 text-cyan-300 font-semibold"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

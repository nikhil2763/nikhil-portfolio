"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";

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
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  MessageCircle,
  Loader2,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ContactSection() {
  const headerReveal = useBiReveal(0.1);
  const leftColReveal = useBiReveal(0.08);
  const formReveal = useBiReveal(0.05);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Send message to local API route to save in messages.json
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to save message");
      }

      // Celebratory confetti safely
      try {
        if (typeof window !== "undefined") {
          const confettiModule = await import("canvas-confetti");
          const confetti = confettiModule.default || confettiModule;
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      } catch (err) {
        // ignore
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessageUrl = `https://wa.me/919327391838?text=${encodeURIComponent(
    `Hi Nikhil, I saw your portfolio and would like to discuss an opportunity!\nName: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\nMessage: ${formState.message}`
  )}`;

  const mailtoUri = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    formState.subject || `Inquiry from ${formState.name}`
  )}&body=${encodeURIComponent(
    `Hello Nikhil,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#ffffff12] relative overflow-hidden bg-[#0c0f17]">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#4ade800d] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#a78bfa10] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1152px] mx-auto px-5 relative z-10">
        
        {/* Section Header — blur fade */}
        <div
          ref={headerReveal.ref as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-blur space-y-2 mb-12 ${headerReveal.visible ? "in" : ""}`}
        >
          <div className="eyebrow">&lt;hire-me /&gt;</div>
          <h2 className="section-title">
            Let&apos;s build something <span>exceptional</span>.
          </h2>
          <p className="section-desc">
            Open for high-impact full-time engineering roles, enterprise consulting, and scalable web solutions. Connect directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Fast Reach — slide from left */}
          <div
            ref={leftColReveal.ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-5 space-y-4 reveal reveal-left delay-100 ${leftColReveal.visible ? "in" : ""}`}
          >
            
            {/* Phone Card with Call & WhatsApp */}
            <div className="border border-[#ffffff12] bg-[#111113] rounded-[6px] p-5 sm:p-6 space-y-4 group hover:border-[#4ade8040] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[4px] bg-[#4ade8015] border border-[#4ade8030] flex items-center justify-center text-[#4ade80]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono-code text-[#64748b] uppercase tracking-wider">Direct Phone & WhatsApp</h4>
                    <p className="text-sm sm:text-base font-bold text-[#f1f5f9] group-hover:text-[#4ade80] transition-colors font-mono-code">
                      {portfolioData.personal.formattedPhone}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                  className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-[#4ade80]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#ffffff0a]">
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex-1 py-2 px-3 rounded-[3px] bg-[#4ade8018] hover:bg-[#4ade8030] border border-[#4ade8040] text-[#4ade80] text-xs font-mono-code font-semibold text-center transition-all"
                >
                  Call Directly
                </a>
                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-[3px] bg-[#22c55e18] hover:bg-[#22c55e30] border border-[#22c55e40] text-[#4ade80] text-xs font-mono-code font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-[#4ade80]" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="border border-[#ffffff12] bg-[#111113] rounded-[6px] p-5 sm:p-6 space-y-4 group hover:border-[#4ade8040] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-[4px] bg-[#38bdf815] border border-[#38bdf830] flex items-center justify-center text-[#38bdf8] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-mono-code text-[#64748b] uppercase tracking-wider">Email Address</h4>
                    <p className="text-xs sm:text-sm font-bold text-[#f1f5f9] group-hover:text-[#38bdf8] transition-colors font-mono-code truncate">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.personal.email, "email")}
                  className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-[#4ade80]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-[#ffffff0a]">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-full py-2 px-3 rounded-[3px] bg-[#38bdf818] hover:bg-[#38bdf830] border border-[#38bdf840] text-[#38bdf8] text-xs font-mono-code font-semibold text-center block transition-all"
                >
                  Send Email via Client
                </a>
              </div>
            </div>

            {/* GitHub & Networks Card */}
            <div className="border border-[#ffffff14] bg-[#131826] rounded-[8px] p-5 sm:p-6 space-y-3 group hover:border-[#4ade8040] hover:bg-[#182032] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[4px] bg-[#a78bfa15] border border-[#a78bfa30] flex items-center justify-center text-[#a78bfa]">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono-code text-[#94a3b8] uppercase tracking-wider">GitHub Profile</h4>
                    <p className="text-sm font-bold text-[#f8fafc] group-hover:text-[#a78bfa] transition-colors font-mono-code">
                      github.com/{portfolioData.personal.github}
                    </p>
                  </div>
                </div>

                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#a78bfa] transition-colors"
                  title="Open GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="border border-[#ffffff14] bg-[#131826] rounded-[8px] p-5 sm:p-6 space-y-3 group hover:border-[#38bdf840] hover:bg-[#182032] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[4px] bg-[#38bdf815] border border-[#38bdf830] flex items-center justify-center text-[#38bdf8]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono-code text-[#94a3b8] uppercase tracking-wider">LinkedIn Profile</h4>
                    <p className="text-sm font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors font-mono-code">
                      linkedin.com/in/nikhil-jaiswal
                    </p>
                  </div>
                </div>

                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#38bdf8] transition-colors"
                  title="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-[6px] bg-[#131826] border border-[#ffffff0f] flex items-center gap-3 text-xs text-[#94a3b8] font-mono-code">
              <MapPin className="w-4 h-4 text-[#4ade80] shrink-0" />
              <span>Based in <span className="text-[#f8fafc] font-medium">{portfolioData.personal.location}</span> • Open to Remote &amp; Onsite Roles</span>
            </div>

          </div>

          {/* Right Column: Interactive Hire Me & Message Form — slide from right */}
          <div
            ref={formReveal.ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-7 reveal reveal-right delay-200 ${formReveal.visible ? "in" : ""}`}
          >
            <div className="border border-[#ffffff12] bg-[#111113] rounded-[6px] p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#f1f5f9]">
                  Send a Direct Transmission
                </h3>
                <span className="font-mono-code text-[10px] text-[#4ade80] bg-[#4ade8015] border border-[#4ade8030] px-2 py-0.5 rounded-[2px]">
                  HIRE ME
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] mb-6">
                Messages submitted here are saved to your portfolio and can also be forwarded directly via WhatsApp or email.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-[4px] bg-[#4ade8012] border border-[#4ade8040] space-y-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4ade8020] flex items-center justify-center text-[#4ade80] shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#f1f5f9]">Message Stored Successfully!</h4>
                      <p className="text-xs text-[#6ee7b7] font-mono-code">
                        Your message has been saved into <code className="bg-black/60 px-1.5 py-0.5 rounded text-[#4ade80]">messages.json</code>.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    You can also forward this message to Nikhil immediately via:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <a
                      href={whatsappMessageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-[3px] bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#22c55e30]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward via WhatsApp</span>
                    </a>

                    <a
                      href={mailtoUri}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-[3px] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all border border-white/15"
                    >
                      <Mail className="w-4 h-4 text-[#38bdf8]" />
                      <span>Open in Email App</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs text-[#4ade80] hover:underline pt-2 block text-center sm:text-left cursor-pointer font-mono-code"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#94a3b8] font-mono-code">
                        Your Name <span className="text-[#4ade80]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Hiring Manager"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-[3px] bg-[#00000060] border border-[#ffffff14] focus:border-[#4ade80] focus:shadow-[0_0_12px_#4ade8026] focus:outline-none text-sm text-[#f1f5f9] placeholder-[#4b5563] transition-all font-mono-code"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#94a3b8] font-mono-code">
                        Your Email <span className="text-[#4ade80]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-[3px] bg-[#00000060] border border-[#ffffff14] focus:border-[#4ade80] focus:shadow-[0_0_12px_#4ade8026] focus:outline-none text-sm text-[#f1f5f9] placeholder-[#4b5563] transition-all font-mono-code"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#94a3b8] font-mono-code">
                      Subject / Opportunity
                    </label>
                    <input
                      type="text"
                      placeholder="Full Stack Developer Opportunity / Project Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-[3px] bg-[#00000060] border border-[#ffffff14] focus:border-[#4ade80] focus:shadow-[0_0_12px_#4ade8026] focus:outline-none text-sm text-[#f1f5f9] placeholder-[#4b5563] transition-all font-mono-code"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#94a3b8] font-mono-code">
                      Message <span className="text-[#4ade80]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Nikhil about your team, tech stack, or upcoming engineering goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[3px] bg-[#00000060] border border-[#ffffff14] focus:border-[#4ade80] focus:shadow-[0_0_12px_#4ade8026] focus:outline-none text-sm text-[#f1f5f9] placeholder-[#4b5563] transition-all resize-none font-mono-code"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-[3px] bg-[#4ade80] hover:bg-[#3ec470] text-[#09090b] font-mono-code font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#4ade8020] transition-all duration-200 hover:shadow-[0_0_24px_#4ade8040] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message &amp; Connect</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

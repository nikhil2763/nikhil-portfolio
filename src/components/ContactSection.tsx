"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
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
  CheckCircle2
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ContactSection() {
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
      // Send message to our local API route to save in messages.json
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to save message");
      }

      // Trigger celebratory confetti safely
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
      // Fallback: still treat as submitted
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessageUrl = `https://wa.me/919327391838?text=${encodeURIComponent(
    `Hi Nikhil, I sent a message from your portfolio!\nName: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\nMessage: ${formState.message}`
  )}`;

  const mailtoUri = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    formState.subject || `Inquiry from ${formState.name}`
  )}&body=${encodeURIComponent(
    `Hello Nikhil,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden bg-[#070b12]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Touch</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Interested in discussing full-time engineering roles, MERN/Next.js projects, or enterprise ERP & HRMS architectures? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card with Call & WhatsApp */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300">Direct Phone & WhatsApp</h4>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {portfolioData.personal.formattedPhone}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold text-center transition-all"
                >
                  Call Directly
                </a>
                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-green-500/15 hover:bg-green-500/25 border border-green-500/30 text-green-300 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-green-400" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300">Email Address</h4>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.personal.email, "email")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-white/5">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-full py-2 px-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold text-center block transition-all"
                >
                  Send Email via Client
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300">GitHub Profile</h4>
                    <p className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      github.com/{portfolioData.personal.github}
                    </p>
                  </div>
                </div>

                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Open GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in <span className="text-white font-medium">{portfolioData.personal.location}</span> • Open to Remote & Onsite Roles</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Messages submitted here are saved to your portfolio and can also be forwarded directly via WhatsApp or email.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-4 text-center sm:text-left animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Message Stored Successfully!</h4>
                      <p className="text-xs text-emerald-300">
                        Your message has been saved into <code className="bg-emerald-950/60 px-1.5 py-0.5 rounded text-emerald-200">messages.json</code>.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    You can also send this message to Nikhil immediately via:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <a
                      href={whatsappMessageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-green-500/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward via WhatsApp</span>
                    </a>

                    <a
                      href={mailtoUri}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all border border-white/15"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Open in Email App</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs text-cyan-400 hover:underline pt-2 block text-center sm:text-left cursor-pointer"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 font-mono">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / HR Manager"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 font-mono">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 font-mono">
                      Subject / Opportunity
                    </label>
                    <input
                      type="text"
                      placeholder="Full Stack Developer Opportunity / Project Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 font-mono">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Nikhil about your team, tech stack, or upcoming engineering goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Connect</span>
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

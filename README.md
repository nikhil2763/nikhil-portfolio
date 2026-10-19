# Nikhil Jaiswal — Portfolio Website

A professional, aesthetic, and responsive developer portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

---

## 🚀 How to Run the Project

Open your terminal (PowerShell, Command Prompt, or Git Bash) inside this project folder:

### 1. Start the Development Server
Run this command:
```bash
npm run dev
```

Once started, open your web browser and go to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### 2. View on Your Mobile Phone (Same Wi-Fi)
When `npm run dev` starts, it displays your local network address in the terminal (for example: `http://192.168.1.X:3000`).
Open that URL in your phone's browser while connected to the same Wi-Fi network to test the mobile experience live!

---

### 3. Build for Production
To test or build an optimized production bundle:
```bash
npm run build
```

To run the production build locally:
```bash
npm run start
```

---

## 📁 Key File Locations

- **Main Page:** `src/app/page.tsx`
- **Data & CV Info:** `src/data/portfolioData.ts` (Easily edit your contact info, projects, or experience anytime here!)
- **Global Styles & Aesthetics:** `src/app/globals.css`
- **Components:** `src/components/`
  - `Navbar.tsx` — Glassmorphism navigation & mobile drawer
  - `Hero.tsx` — Hero banner, 3D avatar & interactive code snippet
  - `ExperienceSection.tsx` — Interactive career timeline (Airwix, iTechsarathi, Tiny Script)
  - `ProjectsSection.tsx` — Filterable projects & Architecture deep-dive modal
  - `SkillsSection.tsx` — Technical skills meters & core strengths
  - `EducationSection.tsx` — Silver Oak University & GP Ahmedabad
  - `ContactSection.tsx` — Interactive contact form, WhatsApp link, and 1-click copy
  - `ResumeModal.tsx` — Full-page interactive CV viewer with Print / Save PDF
  - `Footer.tsx` — Quick navigation & back-to-top button
- **Public Assets & Images:** `public/images/`

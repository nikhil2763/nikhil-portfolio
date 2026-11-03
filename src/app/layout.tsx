import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c0f17",
};

export const metadata: Metadata = {
  title: "Nikhil Jaiswal | Full-Stack Developer & Software Engineer",
  description:
    "Nikhil Jaiswal is a Full-Stack Developer based in Ahmedabad, India building scalable full-stack web applications, ERP systems, enterprise HRMS platforms, and high-performance modern web experiences.",
  keywords: [
    "Nikhil Jaiswal",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "Web Developer Ahmedabad",
    "Gujarat",
    "India"
  ],
  authors: [{ name: "Nikhil Jaiswal" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0f17] text-[#f8fafc] font-sans selection:bg-[#4ade80]/30 selection:text-[#4ade80]">
        {children}
      </body>
    </html>
  );
}

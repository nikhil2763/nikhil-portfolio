import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080c14",
};

export const metadata: Metadata = {
  title: "Nikhil Jaiswal | Full Stack Developer • MERN & Next.js",
  description:
    "Professional portfolio of Nikhil Jaiswal — Full Stack Developer with 9.5 CGPA in Information Technology. Production experience in enterprise HRMS and ERP platforms, React.js, Node.js, and PostgreSQL.",
  keywords: [
    "Nikhil Jaiswal",
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Software Engineer",
    "Ahmedabad"
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

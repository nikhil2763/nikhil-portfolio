import React from "react";

// SVG Tech Icons for Skills Section
export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const n = name.toLowerCase();

  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path d="M149.508 157.438L69.147 54H54V125.97h12.113V69.377l72.496 93.37a90.344 90.344 0 0010.899-5.309z" fill="url(#nextG)" />
        <path d="M115 54h12v72h-12z" fill="url(#nextG2)" />
        <defs>
          <linearGradient id="nextG" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextG2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (n.includes("typescript") || n.includes("ts")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 8H6V9.6h2v6.4h1.7V9.6h1.8V8zm3.2 4.1c0-.9.7-1.4 1.8-1.4.9 0 1.6.4 1.8.8l1-.9c-.5-.7-1.6-1.3-2.8-1.3-2 0-3.3 1.2-3.3 2.8 0 1.7 1.1 2.3 2.4 2.7 1.2.4 1.6.8 1.6 1.4 0 .7-.7 1.2-1.8 1.2-1.1 0-2-.5-2.3-1.2l-1.1.8c.6 1.1 1.8 1.8 3.4 1.8 2.2 0 3.5-1.2 3.5-2.8 0-1.7-1.1-2.4-2.5-2.8-1.2-.4-1.7-.7-1.7-1.3z" fill="#fff" />
      </svg>
    );
  }

  if (n.includes("javascript") || n.includes("js")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 9h1.7v7.5c0 1.2-.7 1.8-1.8 1.8-.7 0-1.4-.4-1.7-.8l.9-1.1c.2.3.5.5.8.5.3 0 .4-.1.4-.6V9zm6.2 4.1c0-.9.7-1.4 1.8-1.4.9 0 1.6.4 1.8.8l1-.9c-.5-.7-1.6-1.3-2.8-1.3-2 0-3.3 1.2-3.3 2.8 0 1.7 1.1 2.3 2.4 2.7 1.2.4 1.6.8 1.6 1.4 0 .7-.7 1.2-1.8 1.2-1.1 0-2-.5-2.3-1.2l-1.1.8c.6 1.1 1.8 1.8 3.4 1.8 2.2 0 3.5-1.2 3.5-2.8 0-1.7-1.1-2.4-2.5-2.8-1.2-.4-1.7-.7-1.7-1.3z" fill="#000" />
      </svg>
    );
  }

  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
      </svg>
    );
  }

  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l10 5.75v11.5L12 25l-10-5.75V7.75L12 2z" fill="#339933" />
        <path d="M12 4.5l7.5 4.3v8.6L12 21.7 4.5 17.4V8.8L12 4.5z" fill="#68A063" opacity="0.8" />
        <path d="M12 7l5 2.9v5.8L12 18.6l-5-2.9V9.9L12 7z" fill="#339933" />
      </svg>
    );
  }

  if (n.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-4h-2v-2h4v6z" />
      </svg>
    );
  }

  if (n.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791" />
        <path d="M15.5 8c-.6-.6-1.5-.9-2.5-.9h-3v9.8h2V13h1c1 0 1.9-.3 2.5-.9.7-.7 1-1.6 1-2.6 0-1-.3-1.8-1-2.5zm-1.5 3.3c-.3.3-.7.4-1.2.4h-.8V8.9h.8c.5 0 .9.1 1.2.4.3.3.4.7.4 1.1 0 .4-.1.8-.4.9z" fill="#fff" />
      </svg>
    );
  }

  if (n.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2s-6 5.5-6 11.5c0 4.5 3.5 8.5 6 8.5s6-4 6-8.5C18 7.5 12 2 12 2z" fill="#47A248" />
        <path d="M12 2.5v19c2.5 0 5.5-3.8 5.5-8 0-5.5-5.5-11-5.5-11z" fill="#499D4A" opacity="0.6" />
      </svg>
    );
  }

  if (n.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M22.5 10.5c-.3-.2-1.3-.3-2.1.2-.2-.8-.8-1.5-1.6-1.9l-.6-.3-.3.5c-.5.8-.6 1.7-.3 2.5-.8.5-2.2.4-3 .2l-.4-.1-.1.4c-.4 1.8-1.7 2.7-3.8 2.7H2.8l-.3.3C2 15.6 2.4 18 3.7 19.3c1.7 1.7 4.7 2.2 7.7 2.2 6.4 0 11.6-3.8 12.3-9.8.1-.4 0-.8-.2-1.2h-1z" fill="#2496ED" />
        <rect x="5" y="11" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="11" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="11" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="8" width="2" height="2" fill="#2496ED" />
      </svg>
    );
  }

  if (n.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.7 10.8l-8.5-8.5c-.8-.8-2.1-.8-2.9 0l-1.9 1.9 2.4 2.4c.6-.2 1.3-.1 1.7.4.5.5.6 1.2.4 1.7l2.3 2.3c.6-.2 1.3-.1 1.7.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.3-1.9l-2.2-2.2v5.1c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.5-.4.8-.5V9.4c-.3-.1-.5-.3-.7-.5-.6-.6-.6-1.5-.1-2.1L7.8 4.5l-5.5 5.5c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l8-8c.8-.8.8-2.1 0-2.9z" fill="#F05032" />
      </svg>
    );
  }

  if (n.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3zm14.8 5.7h-7v2.3h6.8l-.7 7.5-4.9 1.4-4.9-1.4-.3-3.6h2.3l.2 1.8 2.7.7 2.7-.7.3-3.4H7.3L6.9 5.3h11.2l-.3 2.4z" fill="#E34F26" />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

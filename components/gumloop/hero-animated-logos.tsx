"use client";

import { useEffect, useState } from "react";

const logos = [
  { name: "Perplexity", icon: "🔍" },
  { name: "Gong", icon: "📊" },
  { name: "Google Slides", icon: "📊" },
  { name: "Cal", icon: "📅" },
  { name: "Semrush", icon: "📈" },
  { name: "Webflow", icon: "🌐" },
  { name: "Typeform", icon: "📝" },
  { name: "RSS", icon: "📡" },
  { name: "TikTok", icon: "🎵" },
  { name: "Twilio", icon: "💬" },
  { name: "Notion", icon: "📓" },
  { name: "PhantomBuster", icon: "👻" },
  { name: "PostHog", icon: "🦔" },
];

export default function HeroAnimatedLogos() {
  const [visibleLogos, setVisibleLogos] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((prev) => {
        // Rotate through logos
        const next = prev.map(i => (i + 5) % logos.length);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 items-center justify-center mb-8">
      {visibleLogos.map((logoIndex, position) => {
        const logo = logos[logoIndex];
        return (
          <div
            key={`${position}-${logoIndex}`}
            className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
            style={{
              animationDelay: `${position * 100}ms`,
            }}
          >
            {logo.icon}
          </div>
        );
      })}
    </div>
  );
}

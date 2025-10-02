"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Professional icon component with gradient backgrounds
interface LogoIconProps {
  name: string;
  gradient: string;
  initials: string;
}

const LogoIcon = ({ name, gradient, initials }: LogoIconProps) => (
  <motion.div
    className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm`}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: -20 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
    }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2 },
    }}
  >
    <span className="text-white font-bold text-sm select-none">
      {initials}
    </span>
  </motion.div>
);

const logos: LogoIconProps[] = [
  { name: "Perplexity", gradient: "bg-gradient-to-br from-blue-500 to-cyan-500", initials: "P" },
  { name: "Gong", gradient: "bg-gradient-to-br from-purple-500 to-pink-500", initials: "G" },
  { name: "Google Slides", gradient: "bg-gradient-to-br from-yellow-500 to-orange-500", initials: "GS" },
  { name: "Cal", gradient: "bg-gradient-to-br from-blue-600 to-indigo-600", initials: "C" },
  { name: "Semrush", gradient: "bg-gradient-to-br from-orange-500 to-red-500", initials: "S" },
  { name: "Webflow", gradient: "bg-gradient-to-br from-blue-500 to-purple-600", initials: "W" },
  { name: "Typeform", gradient: "bg-gradient-to-br from-gray-700 to-gray-900", initials: "T" },
  { name: "RSS", gradient: "bg-gradient-to-br from-orange-400 to-orange-600", initials: "R" },
  { name: "TikTok", gradient: "bg-gradient-to-br from-cyan-400 to-pink-500", initials: "TT" },
  { name: "Twilio", gradient: "bg-gradient-to-br from-red-500 to-red-700", initials: "TW" },
  { name: "Notion", gradient: "bg-gradient-to-br from-gray-800 to-black", initials: "N" },
  { name: "PhantomBuster", gradient: "bg-gradient-to-br from-purple-600 to-indigo-700", initials: "PB" },
  { name: "PostHog", gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600", initials: "PH" },
];

export default function HeroAnimatedLogos() {
  const [currentSet, setCurrentSet] = useState(0);
  const logosPerSet = 5;

  // Calculate which logos to show
  const visibleLogos = Array.from({ length: logosPerSet }, (_, i) => {
    const index = (currentSet * logosPerSet + i) % logos.length;
    return logos[index];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % Math.ceil(logos.length / logosPerSet));
    }, 3500); // 3.5 second intervals for smooth viewing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 items-center justify-center mb-8 px-4">
      <AnimatePresence mode="wait">
        {visibleLogos.map((logo, index) => (
          <motion.div
            key={`${currentSet}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <LogoIcon {...logo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

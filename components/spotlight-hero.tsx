"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightHeroProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export default function SpotlightHero({
  children,
  className,
  spotlightColor = "rgba(99, 102, 241, 0.3)",
  spotlightSize = 400,
}: SpotlightHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(${spotlightSize}px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 80%)`,
          // @ts-ignore
          "--mouse-x": smoothMouseX,
          "--mouse-y": smoothMouseY,
        }}
      />

      {/* Secondary larger glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(${spotlightSize * 2}px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 70%)`,
          // @ts-ignore
          "--mouse-x": smoothMouseX,
          "--mouse-y": smoothMouseY,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

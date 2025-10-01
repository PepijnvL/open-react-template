"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GumloopGradientBgProps {
  className?: string;
  variant?: "indigo" | "purple" | "pink" | "multi";
}

export default function GumloopGradientBg({
  className,
  variant = "indigo",
}: GumloopGradientBgProps) {
  const gradients = {
    indigo: {
      primary: "rgba(99, 102, 241, 0.4)",
      secondary: "rgba(99, 102, 241, 0.2)",
      accent: "rgba(99, 102, 241, 0.1)",
    },
    purple: {
      primary: "rgba(168, 85, 247, 0.4)",
      secondary: "rgba(168, 85, 247, 0.2)",
      accent: "rgba(236, 72, 153, 0.1)",
    },
    pink: {
      primary: "rgba(236, 72, 153, 0.4)",
      secondary: "rgba(236, 72, 153, 0.2)",
      accent: "rgba(168, 85, 247, 0.1)",
    },
    multi: {
      primary: "rgba(99, 102, 241, 0.4)",
      secondary: "rgba(236, 72, 153, 0.3)",
      accent: "rgba(168, 85, 247, 0.2)",
    },
  };

  const colors = gradients[variant];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Large blurred shape - top left */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium blurred shape - top right */}
      <motion.div
        className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small accent shape - bottom center */}
      <motion.div
        className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Angular gradient shape - similar to Gumloop's triangular shapes */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-[400px] h-[400px]"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="blur-[60px] opacity-60">
          <defs>
            <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="50%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M100 50 L300 150 L200 350 Z"
            fill={`url(#gradient-${variant})`}
          />
        </svg>
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}

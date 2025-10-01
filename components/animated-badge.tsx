"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "success" | "warning" | "info" | "gradient";
  pulse?: boolean;
  className?: string;
}

export default function AnimatedBadge({
  children,
  icon,
  variant = "default",
  pulse = false,
  className,
}: AnimatedBadgeProps) {
  const variants = {
    default: "bg-slate-800/80 text-gray-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-500/20",
    info: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/20",
    gradient: "bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-rose-600/20 text-purple-300 border-purple-500/30 hover:border-purple-500/50 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-rose-600/30"
  };

  return (
    <div
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105",
        variants[variant],
        pulse && "animate-pulse",
        className
      )}
    >
      {/* Glow effect */}
      {variant === "gradient" && (
        <div className="absolute -inset-px rounded-full bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-rose-600/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {icon && (
          <span className="inline-flex h-2 w-2 items-center justify-center">
            {icon}
          </span>
        )}
        {children}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full rounded-full opacity-30 transition-transform duration-500 group-hover:translate-x-full">
        <div className="h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </div>
    </div>
  );
}

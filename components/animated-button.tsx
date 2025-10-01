"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "shine" | "gradient" | "glow" | "border" | "hoverBorder";
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-500 overflow-hidden";

    const variantStyles = {
      default: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-600/60 hover:scale-[1.02] active:scale-[0.98]",
      shine: "group bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-600/70 hover:-translate-y-0.5 active:translate-y-0",
      gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:300%_100%] text-white shadow-xl shadow-purple-500/40 animate-gradient hover:shadow-2xl hover:shadow-purple-600/60 hover:scale-[1.02]",
      glow: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
      border: "group bg-transparent border-2 border-purple-500/50 text-purple-400 hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:shadow-xl hover:shadow-purple-500/50",
      hoverBorder: "group bg-slate-900 border border-slate-700 text-white hover:border-purple-500/50 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-purple-500/30"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {variant === "shine" && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out">
            <div className="h-full w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </div>
        )}
        {variant === "border" && (
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 animate-pulse" />
          </div>
        )}
        {variant === "hoverBorder" && (
          <>
            <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-xl bg-slate-900" />
          </>
        )}
        <span className="relative z-10 font-medium">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;

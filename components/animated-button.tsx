"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "shine" | "gradient" | "glow";
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 overflow-hidden";

    const variantStyles = {
      default: "bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105",
      shine: "group bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50",
      gradient: "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-[length:200%_auto] text-white animate-gradient hover:shadow-lg hover:shadow-purple-500/50",
      glow: "bg-indigo-600 text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:scale-105"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {variant === "shine" && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
            <div className="h-full w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </div>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;

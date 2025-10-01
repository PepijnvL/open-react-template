"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { motion } from "framer-motion";

interface InteractiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "rainbow" | "ripple" | "magnetic";
}

const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = { x, y, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
    };

    const baseStyles = "relative inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 overflow-hidden";

    const variants = {
      default: "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.02]",
      rainbow: "bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 animate-gradient bg-[length:200%_auto] shadow-lg hover:shadow-2xl hover:scale-[1.02]",
      ripple: "bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60",
      magnetic: "bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-600/60"
    };

    if (variant === "magnetic") {
      return (
        <motion.button
          ref={ref}
          className={cn(baseStyles, variants[variant], className)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          {...props}
        >
          <span className="relative z-10 font-medium">{children}</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], "group", className)}
        onClick={variant === "ripple" ? handleRipple : props.onClick}
        {...props}
      >
        {/* Rainbow shimmer effect */}
        {variant === "rainbow" && (
          <div className="absolute inset-0 rounded-xl">
            <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70 animate-spin-slow" />
          </div>
        )}

        {/* Ripple effects */}
        {variant === "ripple" && ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
            }}
          />
        ))}

        {/* Shine effect for default */}
        {variant === "default" && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
            <div className="h-full w-40 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
          </div>
        )}

        <span className="relative z-10 font-medium drop-shadow-sm">{children}</span>

        {/* Inner glow */}
        <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-t from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    );
  }
);

InteractiveButton.displayName = "InteractiveButton";

export default InteractiveButton;

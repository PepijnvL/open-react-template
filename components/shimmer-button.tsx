"use client";

import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  background?: string;
  onClick?: () => void;
}

export default function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "0.75rem",
  background = "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  onClick,
}: ShimmerButtonProps) {
  return (
    <button
      onClick={onClick}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": "2.5s",
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-8 py-3.5 text-sm text-white font-semibold transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]",
        "rounded-[--radius] bg-[image:--bg]",
        "[background-size:200%_200%] [background-position:0%_0%]",
        "shadow-xl shadow-purple-500/50",
        "hover:shadow-2xl hover:shadow-purple-600/70 hover:[background-position:100%_100%]",
        className
      )}
    >
      {/* Shimmer effect */}
      <div
        className={cn(
          "absolute inset-0 overflow-visible [container-type:size]",
          "before:absolute before:inset-0 before:h-[calc(100cqh+var(--cut)*2)] before:w-[calc(100cqw+var(--cut)*2)] before:-translate-x-[calc(100%+var(--cut))] before:-translate-y-[var(--cut)]",
          "before:animate-[shimmer_var(--speed)_infinite]",
          "before:[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]",
          "before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
        )}
      />

      {/* Content */}
      <span className="relative z-10 font-medium drop-shadow-md">{children}</span>

      {/* Enhanced glow effect on hover */}
      <div className="absolute inset-0 rounded-[--radius] bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Inner glow */}
      <div className="absolute inset-[1px] rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  );
}

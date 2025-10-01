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
  borderRadius = "0.5rem",
  background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
          "--speed": "2s",
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105",
        "rounded-[--radius] bg-[image:--bg]",
        "[background-size:300%] [background-position:0%_0%]",
        "shadow-[0_0_20px_rgba(102,126,234,0.5)]",
        "hover:shadow-[0_0_30px_rgba(102,126,234,0.7)]",
        className
      )}
    >
      {/* Shimmer effect */}
      <div
        className={cn(
          "absolute inset-0 overflow-visible [container-type:size]",
          "before:absolute before:inset-0 before:h-[calc(100cqh+var(--cut)*2)] before:w-[calc(100cqw+var(--cut)*2)] before:-translate-x-[calc(100%+var(--cut))] before:-translate-y-[var(--cut)]",
          "before:animate-[shimmer_var(--speed)_infinite]",
          "before:[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
        )}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-[--radius] bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}

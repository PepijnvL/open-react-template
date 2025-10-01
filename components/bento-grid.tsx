"use client";

import { cn } from "@/lib/utils";
import GlassCard from "./glass-card";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(200px,auto)] gap-4",
        "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  /** Span columns: 1, 2, or 3 */
  colSpan?: 1 | 2 | 3;
  /** Span rows: 1, 2, or 3 */
  rowSpan?: 1 | 2 | 3;
  /** Glass card variant */
  variant?: "default" | "vibrant" | "subtle";
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  variant = "default",
}: BentoCardProps) {
  return (
    <GlassCard
      variant={variant}
      className={cn(
        "group relative overflow-hidden p-6",
        "transition-all duration-300 hover:scale-[1.02]",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "lg:col-span-3",
        rowSpan === 2 && "md:row-span-2",
        rowSpan === 3 && "lg:row-span-3",
        className
      )}
    >
      {children}
    </GlassCard>
  );
}

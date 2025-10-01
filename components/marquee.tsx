"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  /** Array of items to display */
  children: React.ReactNode;
  /** Animation direction */
  reverse?: boolean;
  /** Pause animation on hover */
  pauseOnHover?: boolean;
  /** Custom className */
  className?: string;
  /** Number of times to repeat the content (default: 2 for seamless loop) */
  repeat?: number;
  /** Animation duration in seconds (default: 40) */
  duration?: number;
  /** Vertical orientation */
  vertical?: boolean;
}

export default function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
  repeat = 2,
  duration = 40,
  vertical = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex shrink-0 justify-around gap-4",
            vertical ? "flex-col animate-marquee-vertical" : "animate-marquee",
            reverse && (vertical ? "[animation-direction:reverse]" : "[animation-direction:reverse]"),
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

interface MarqueeItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MarqueeItem({ children, className }: MarqueeItemProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
    </div>
  );
}

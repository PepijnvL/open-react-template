"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  /** Card content */
  children: ReactNode;
  /** Card variant style */
  variant?: "default" | "gradient" | "subtle" | "vibrant" | "dark";
  /** Blur intensity (default: "md") */
  blur?: "none" | "sm" | "md" | "lg" | "xl";
  /** Border style */
  border?: "none" | "subtle" | "bright" | "gradient";
  /** Whether to show hover effect (default: false) */
  hover?: boolean;
  /** Custom className */
  className?: string;
  /** Whether card is interactive/clickable */
  interactive?: boolean;
  /** Padding size */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Corner radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /** Background opacity (0-100) */
  opacity?: number;
  /** onClick handler */
  onClick?: () => void;
}

export default function GlassCard({
  children,
  variant = "default",
  blur = "md",
  border = "subtle",
  hover = false,
  className,
  interactive = false,
  padding = "lg",
  rounded = "2xl",
  opacity = 10,
  onClick,
}: GlassCardProps) {
  const blurClasses = {
    none: "",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  };

  const roundedClasses = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const variantClasses = {
    default: `bg-white/${opacity}`,
    gradient: "bg-gradient-to-br from-white/20 to-white/5",
    subtle: `bg-gray-900/${opacity}`,
    vibrant: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20",
    dark: `bg-black/${opacity}`,
  };

  const borderClasses = {
    none: "",
    subtle: "border border-white/10",
    bright: "border border-white/20",
    gradient: "border border-transparent bg-gradient-to-br from-white/20 via-white/10 to-transparent",
  };

  const hoverClasses = hover
    ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
    : "";

  const interactiveClasses = interactive || onClick ? "cursor-pointer" : "";

  return (
    <div
      className={cn(
        "relative overflow-hidden shadow-xl",
        blurClasses[blur],
        paddingClasses[padding],
        roundedClasses[rounded],
        variantClasses[variant],
        borderClasses[border],
        hoverClasses,
        interactiveClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface GlassCardWithGlowProps extends GlassCardProps {
  /** Glow color (default: "purple") */
  glowColor?: "purple" | "blue" | "pink" | "green" | "orange" | "red";
  /** Glow intensity (default: "medium") */
  glowIntensity?: "low" | "medium" | "high";
}

/**
 * Glass card with animated glow effect
 */
export function GlassCardWithGlow({
  children,
  glowColor = "purple",
  glowIntensity = "medium",
  ...props
}: GlassCardWithGlowProps) {
  const glowColors = {
    purple: "from-purple-500 to-pink-500",
    blue: "from-blue-500 to-cyan-500",
    pink: "from-pink-500 to-rose-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-yellow-500",
    red: "from-red-500 to-pink-500",
  };

  const glowIntensities = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60",
  };

  return (
    <div className="group relative">
      {/* Animated glow */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-3xl bg-gradient-to-r blur-lg transition-all duration-500 group-hover:opacity-75",
          glowColors[glowColor],
          glowIntensities[glowIntensity],
          "animate-pulse"
        )}
      />

      {/* Card */}
      <div className="relative">
        <GlassCard {...props}>{children}</GlassCard>
      </div>
    </div>
  );
}

interface GlassCardStackProps {
  /** Array of card contents */
  cards: ReactNode[];
  /** Stack direction */
  direction?: "vertical" | "horizontal";
  /** Offset between cards in pixels (default: 20) */
  offset?: number;
  /** Custom className */
  className?: string;
}

/**
 * Stacked glass cards with depth effect
 */
export function GlassCardStack({
  cards,
  direction = "vertical",
  offset = 20,
  className,
}: GlassCardStackProps) {
  return (
    <div className={cn("relative", className)}>
      {cards.map((card, index) => {
        const isVertical = direction === "vertical";
        const translateX = isVertical ? 0 : index * offset;
        const translateY = isVertical ? index * offset : 0;
        const zIndex = cards.length - index;
        const scale = 1 - index * 0.05;

        return (
          <div
            key={index}
            className="absolute left-0 top-0 transition-all duration-300 hover:z-50 hover:scale-105"
            style={{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
              zIndex,
            }}
          >
            <GlassCard hover>{card}</GlassCard>
          </div>
        );
      })}
    </div>
  );
}

interface AnimatedGlassCardProps extends GlassCardProps {
  /** Animation type */
  animation?: "fade" | "slide-up" | "slide-down" | "scale" | "none";
  /** Animation delay in milliseconds (default: 0) */
  delay?: number;
  /** Animation duration in milliseconds (default: 500) */
  duration?: number;
}

/**
 * Glass card with entrance animation
 */
export function AnimatedGlassCard({
  children,
  animation = "fade",
  delay = 0,
  duration = 500,
  ...props
}: AnimatedGlassCardProps) {
  const animationClasses = {
    fade: "animate-in fade-in",
    "slide-up": "animate-in slide-in-from-bottom-4",
    "slide-down": "animate-in slide-in-from-top-4",
    scale: "animate-in zoom-in-95",
    none: "",
  };

  return (
    <GlassCard
      {...props}
      className={cn(
        animationClasses[animation],
        props.className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </GlassCard>
  );
}

interface GradientGlassCardProps extends GlassCardProps {
  /** Gradient direction */
  gradientDirection?: "to-br" | "to-tr" | "to-bl" | "to-tl" | "to-r" | "to-l" | "to-t" | "to-b";
  /** Gradient colors */
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
}

/**
 * Glass card with customizable gradient background
 */
export function GradientGlassCard({
  children,
  gradientDirection = "to-br",
  fromColor = "from-purple-500/20",
  viaColor = "via-pink-500/10",
  toColor = "to-transparent",
  ...props
}: GradientGlassCardProps) {
  return (
    <GlassCard
      {...props}
      className={cn(
        `bg-gradient-${gradientDirection}`,
        fromColor,
        viaColor,
        toColor,
        props.className
      )}
      variant="gradient"
    >
      {children}
    </GlassCard>
  );
}

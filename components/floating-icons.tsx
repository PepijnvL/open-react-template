"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FloatingIcon {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

interface FloatingIconsProps {
  /** Array of icon objects with src and alt */
  icons: Array<{ src: string; alt: string }>;
  /** Container height (default: "400px") */
  height?: string;
  /** Container width (default: "100%") */
  width?: string;
  /** Icon size in pixels (default: 48) */
  iconSize?: number;
  /** Animation duration range [min, max] in seconds (default: [15, 25]) */
  durationRange?: [number, number];
  /** Whether icons should have subtle hover effect (default: true) */
  interactive?: boolean;
  /** Custom className for container */
  className?: string;
  /** Custom className for icons */
  iconClassName?: string;
}

export default function FloatingIcons({
  icons,
  height = "400px",
  width = "100%",
  iconSize = 48,
  durationRange = [15, 25],
  interactive = true,
  className,
  iconClassName,
}: FloatingIconsProps) {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    // Generate random positions for icons
    const generatedIcons: FloatingIcon[] = icons.map((icon, index) => ({
      id: `icon-${index}`,
      ...icon,
      x: Math.random() * 80 + 10, // 10-90% of width
      y: Math.random() * 80 + 10, // 10-90% of height
      delay: Math.random() * 5, // 0-5s delay
      duration: Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0],
      size: iconSize + Math.random() * 16 - 8, // Vary size slightly
    }));

    setFloatingIcons(generatedIcons);
  }, [icons, iconSize, durationRange]);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ height, width }}
    >
      {floatingIcons.map((icon) => (
        <FloatingIconItem
          key={icon.id}
          icon={icon}
          interactive={interactive}
          iconClassName={iconClassName}
        />
      ))}
    </div>
  );
}

interface FloatingIconItemProps {
  icon: FloatingIcon;
  interactive: boolean;
  iconClassName?: string;
}

function FloatingIconItem({ icon, interactive, iconClassName }: FloatingIconItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "absolute transition-transform duration-300",
        interactive && "cursor-pointer",
        isHovered && interactive && "scale-110 z-10"
      )}
      style={{
        left: `${icon.x}%`,
        top: `${icon.y}%`,
        animation: `float-${icon.id} ${icon.duration}s ease-in-out infinite`,
        animationDelay: `${icon.delay}s`,
        width: icon.size,
        height: icon.size,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx>{`
        @keyframes float-${icon.id} {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(-5px, 5px) rotate(-3deg);
          }
          75% {
            transform: translate(-10px, -5px) rotate(3deg);
          }
        }
      `}</style>
      <Image
        src={icon.src}
        alt={icon.alt}
        width={icon.size}
        height={icon.size}
        className={cn(
          "drop-shadow-lg transition-all duration-300",
          interactive && "hover:drop-shadow-2xl",
          iconClassName
        )}
      />
    </div>
  );
}

interface OrbitingIconsProps {
  /** Array of icon objects with src and alt */
  icons: Array<{ src: string; alt: string }>;
  /** Center element (optional) */
  centerElement?: React.ReactNode;
  /** Orbit radius in pixels (default: 120) */
  radius?: number;
  /** Icon size in pixels (default: 48) */
  iconSize?: number;
  /** Orbit duration in seconds (default: 20) */
  duration?: number;
  /** Direction of orbit (default: "clockwise") */
  direction?: "clockwise" | "counterclockwise";
  /** Custom className for container */
  className?: string;
  /** Custom className for icons */
  iconClassName?: string;
}

/**
 * Orbiting icons component - icons rotate around a center point
 * Alternative animation style to floating
 */
export function OrbitingIcons({
  icons,
  centerElement,
  radius = 120,
  iconSize = 48,
  duration = 20,
  direction = "clockwise",
  className,
  iconClassName,
}: OrbitingIconsProps) {
  const containerSize = radius * 2 + iconSize + 40;

  return (
    <div
      className={cn("relative", className)}
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Center element */}
      {centerElement && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {centerElement}
        </div>
      )}

      {/* Orbiting icons */}
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index;
        const animationDirection = direction === "clockwise" ? "normal" : "reverse";

        return (
          <div
            key={`orbit-${index}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: radius * 2,
              height: radius * 2,
              animation: `orbit ${duration}s linear infinite`,
              animationDirection,
              animationDelay: `${-(duration / icons.length) * index}s`,
            }}
          >
            <div
              className="absolute"
              style={{
                left: "50%",
                top: "0",
                transform: `translateX(-50%) rotate(-${angle}deg)`,
              }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={iconSize}
                height={iconSize}
                className={cn("drop-shadow-lg", iconClassName)}
              />
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translate(${radius}px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translate(${radius}px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}

interface FloatingIconGridProps {
  /** Array of icon objects with src and alt */
  icons: Array<{ src: string; alt: string }>;
  /** Number of columns (default: 4) */
  columns?: number;
  /** Gap between icons in pixels (default: 32) */
  gap?: number;
  /** Icon size in pixels (default: 56) */
  iconSize?: number;
  /** Whether to stagger animation delays (default: true) */
  staggered?: boolean;
  /** Custom className for container */
  className?: string;
  /** Custom className for icons */
  iconClassName?: string;
}

/**
 * Floating icon grid - organized grid layout with floating animation
 * Good for hero sections showcasing integrations
 */
export function FloatingIconGrid({
  icons,
  columns = 4,
  gap = 32,
  iconSize = 56,
  staggered = true,
  className,
  iconClassName,
}: FloatingIconGridProps) {
  return (
    <div
      className={cn("grid w-fit", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={`grid-icon-${index}`}
          className="group relative"
          style={{
            animation: "float-gentle 3s ease-in-out infinite",
            animationDelay: staggered ? `${index * 0.1}s` : "0s",
          }}
        >
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative rounded-xl bg-gray-800/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-800/80">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={iconSize}
              height={iconSize}
              className={cn("drop-shadow-md", iconClassName)}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

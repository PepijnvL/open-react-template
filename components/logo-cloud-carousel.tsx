"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  src: string;
  width?: number;
  height?: number;
}

interface LogoCloudCarouselProps {
  logos: Logo[];
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function LogoCloudCarousel({
  logos,
  className,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: LogoCloudCarouselProps) {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/12 bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/12 bg-gradient-to-l from-gray-950 to-transparent" />

      {/* Scrolling logos */}
      <motion.div
        className="flex gap-8 py-8"
        animate={{
          x: direction === "left" ? [0, -50 + "%"] : [-50 + "%", 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {duplicatedLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width || 120}
              height={logo.height || 40}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

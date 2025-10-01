"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
  children?: React.ReactNode;
  beamCount?: number;
}

export default function BackgroundBeams({
  className,
  children,
  beamCount = 8,
}: BackgroundBeamsProps) {
  const beams = Array.from({ length: beamCount }, (_, i) => ({
    id: i,
    left: `${(i * 100) / beamCount + Math.random() * 10}%`,
    animationDelay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 10 + 15}s`,
    width: `${Math.random() * 100 + 50}px`,
  }));

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Beams */}
      <div className="absolute inset-0">
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute top-0 h-full"
            style={{
              left: beam.left,
              width: beam.width,
            }}
            initial={{ y: "-100%" }}
            animate={{
              y: "100%",
            }}
            transition={{
              duration: parseFloat(beam.duration),
              repeat: Infinity,
              ease: "linear",
              delay: parseFloat(beam.animationDelay),
            }}
          >
            <div
              className="h-[200px] w-full"
              style={{
                background: `linear-gradient(to bottom,
                  transparent,
                  rgba(139, 92, 246, 0.1),
                  rgba(139, 92, 246, 0.5),
                  rgba(236, 72, 153, 0.5),
                  rgba(236, 72, 153, 0.1),
                  transparent
                )`,
                filter: "blur(10px)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Radial gradient overlay for better depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

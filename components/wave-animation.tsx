"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveAnimationProps {
  className?: string;
  children?: React.ReactNode;
  waveColor?: string;
  waveOpacity?: number;
  waveCount?: number;
}

export default function WaveAnimation({
  className,
  children,
  waveColor = "rgba(139, 92, 246, 0.5)",
  waveOpacity = 0.3,
  waveCount = 3,
}: WaveAnimationProps) {
  const waves = Array.from({ length: waveCount }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 8 + i * 2,
  }));

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Wave layers */}
      <div className="absolute inset-0">
        {waves.map((wave) => (
          <motion.div
            key={wave.id}
            className="absolute inset-0"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: wave.duration,
              repeat: Infinity,
              ease: "linear",
              delay: wave.delay,
            }}
          >
            <svg
              className="absolute bottom-0 w-[200%] h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
              style={{ opacity: waveOpacity }}
            >
              <defs>
                <linearGradient
                  id={`waveGradient${wave.id}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={waveColor} stopOpacity="0" />
                  <stop offset="100%" stopColor={waveColor} stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z"
                fill={`url(#waveGradient${wave.id})`}
                animate={{
                  d: [
                    "M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z",
                    "M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z",
                    "M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Additional decorative wave patterns */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${waveColor}, transparent)`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${waveColor}, transparent)`,
          }}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

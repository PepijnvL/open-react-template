"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface SparkleEffectProps {
  children?: React.ReactNode;
  className?: string;
  density?: number;
  color?: string;
}

export default function SparkleEffect({
  children,
  className = "",
  density = 30,
  color = "rgba(139, 92, 246, 0.8)",
}: SparkleEffectProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < density; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
          duration: Math.random() * 2 + 1,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, [density]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: color,
              boxShadow: `0 0 ${sparkle.size * 2}px ${color}`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

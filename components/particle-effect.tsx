"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  delay: number;
}

interface ParticleEffectProps {
  children?: React.ReactNode;
  className?: string;
  particleCount?: number;
  particleColor?: string;
}

export default function ParticleEffect({
  children,
  className,
  particleCount = 50,
  particleColor = "rgba(139, 92, 246, 0.6)",
}: ParticleEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          delay: Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [particleCount]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particleColor,
              boxShadow: `0 0 ${particle.size * 2}px ${particleColor}`,
            }}
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            animate={{
              x: [
                `${particle.x}%`,
                `${particle.x + particle.speedX * 20}%`,
                `${particle.x}%`,
              ],
              y: [
                `${particle.y}%`,
                `${particle.y + particle.speedY * 20}%`,
                `${particle.y}%`,
              ],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Connecting lines (optional enhancement) */}
      <svg
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="particleLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={particleColor} stopOpacity="0" />
            <stop offset="50%" stopColor={particleColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={particleColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        {particles.map((particle, i) => {
          if (i === 0) return null;
          const prev = particles[i - 1];
          return (
            <motion.line
              key={`line-${particle.id}`}
              x1={`${prev.x}%`}
              y1={`${prev.y}%`}
              x2={`${particle.x}%`}
              y2={`${particle.y}%`}
              stroke="url(#particleLine)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: particle.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

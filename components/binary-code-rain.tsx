"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BinaryStream {
  id: number;
  x: number;
  chars: string[];
  speed: number;
  delay: number;
}

interface BinaryCodeRainProps {
  className?: string;
  streamCount?: number;
  color?: string;
}

export default function BinaryCodeRain({
  className,
  streamCount = 20,
  color = "rgba(99, 102, 241, 0.8)",
}: BinaryCodeRainProps) {
  const [streams, setStreams] = useState<BinaryStream[]>([]);

  useEffect(() => {
    const generateStreams = () => {
      const newStreams: BinaryStream[] = [];
      for (let i = 0; i < streamCount; i++) {
        const charCount = Math.floor(Math.random() * 5) + 3;
        const chars: string[] = [];
        for (let j = 0; j < charCount; j++) {
          chars.push(Math.random() > 0.5 ? "1" : "0");
        }
        newStreams.push({
          id: i,
          x: (i / streamCount) * 100,
          chars,
          speed: Math.random() * 2 + 2,
          delay: Math.random() * 2,
        });
      }
      setStreams(newStreams);
    };

    generateStreams();
  }, [streamCount]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Binary streams */}
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 flex flex-col gap-2"
          style={{
            left: `${stream.x}%`,
          }}
          animate={{
            y: ["0%", "120%"],
          }}
          transition={{
            duration: stream.speed,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {stream.chars.map((char, index) => (
            <motion.div
              key={index}
              className="text-2xl font-mono font-bold"
              style={{
                color: color,
                textShadow: `0 0 10px ${color}`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />
    </div>
  );
}

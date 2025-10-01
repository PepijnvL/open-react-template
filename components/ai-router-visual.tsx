"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AIModel {
  name: string;
  logo: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

interface AIRouterVisualProps {
  className?: string;
}

const aiModels: AIModel[] = [
  { name: "Anthropic", logo: "/icons/ai-models/anthropic.svg", position: "top-left" },
  { name: "ChatGPT", logo: "/icons/ai-models/openai.svg", position: "top-right" },
  { name: "Gemini", logo: "/icons/ai-models/gemini.svg", position: "bottom-left" },
  { name: "Copilot", logo: "/icons/ai-models/copilot.svg", position: "bottom-right" },
];

export default function AIRouterVisual({ className }: AIRouterVisualProps) {
  const positions = {
    "top-left": "top-8 left-8",
    "top-right": "top-8 right-8",
    "bottom-left": "bottom-8 left-8",
    "bottom-right": "bottom-8 right-8",
  };

  return (
    <div className={cn("relative w-full h-[400px] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 overflow-hidden", className)}>
      {/* Center router node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="relative"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-indigo-500/30"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Inner core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                  "0 0 40px rgba(99, 102, 241, 0.8)",
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Pulsing rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-indigo-500"
            animate={{
              scale: [1, 2, 2.5],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* AI Model nodes */}
      {aiModels.map((model, index) => (
        <div
          key={model.name}
          className={cn("absolute", positions[model.position])}
        >
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
            }}
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Logo container */}
            <div className="relative bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-xl">
              {model.logo.startsWith('/') ? (
                <Image
                  src={model.logo}
                  alt={model.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
              )}
            </div>

            {/* Label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-400">
              {model.name}
            </div>
          </motion.div>

          {/* Connection line to center */}
          <svg className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none">
            <motion.line
              x1="0"
              y1="0"
              x2={model.position.includes("left") ? "200" : "-200"}
              y2={model.position.includes("top") ? "100" : "-100"}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

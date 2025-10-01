"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InterfaceCard {
  emoji: string;
  title: string;
  color: string;
}

interface InterfaceCardGridProps {
  className?: string;
}

const interfaces: InterfaceCard[] = [
  { emoji: "💼", title: "Business", color: "from-blue-500 to-indigo-500" },
  { emoji: "🎥", title: "Video", color: "from-red-500 to-pink-500" },
  { emoji: "📈", title: "Analytics", color: "from-green-500 to-emerald-500" },
  { emoji: "📝", title: "Notes", color: "from-yellow-500 to-orange-500" },
];

export default function InterfaceCardGrid({ className }: InterfaceCardGridProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {interfaces.map((item, index) => (
          <motion.div
            key={item.title}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
            }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            {/* Glow effect */}
            <motion.div
              className={cn(
                "absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-70",
                `bg-gradient-to-br ${item.color}`
              )}
              transition={{ duration: 0.3 }}
            />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 aspect-square flex flex-col items-center justify-center gap-3">
              {/* Header image placeholder */}
              <div className={cn(
                "w-full h-16 rounded-lg bg-gradient-to-br",
                item.color,
                "opacity-20"
              )} />

              {/* Emoji */}
              <div className="text-4xl">{item.emoji}</div>

              {/* Title */}
              <div className="text-white font-medium text-sm">{item.title}</div>
            </div>

            {/* Shine effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Section title */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white">Interfaces & Templates</h3>
        <p className="text-gray-400">Put your work in everyone's hands</p>
      </motion.div>
    </div>
  );
}

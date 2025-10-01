"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative rounded-2xl p-8 transition-all duration-500",
        "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
        "backdrop-blur-xl border border-white/10",
        "hover:border-purple-500/50 hover:-translate-y-2",
        "hover:shadow-2xl hover:shadow-purple-500/20",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-purple-600/10 before:via-transparent before:to-pink-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-3 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-purple-500/50">
            <div className="text-purple-400 transition-colors duration-500 group-hover:text-purple-300">
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>
      </div>

      {/* Corner gradient accent */}
      <div className="absolute top-0 right-0 h-32 w-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

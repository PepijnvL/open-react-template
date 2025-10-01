"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  icon?: ReactNode;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function AnimatedTimeline({ items, className }: AnimatedTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-transparent" />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-16"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 ring-4 ring-slate-900 shadow-lg shadow-purple-500/50"
            >
              {item.icon || (
                <div className="h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm" />
              )}
            </motion.div>

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Date badge */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                {item.date}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {item.description}
              </p>

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

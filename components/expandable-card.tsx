"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  description: string;
  expandedContent: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function ExpandableCard({
  title,
  description,
  expandedContent,
  icon,
  className,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer",
        "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
        "backdrop-blur-xl border border-white/10",
        "transition-all duration-300",
        isExpanded ? "col-span-2 row-span-2" : "",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Collapsed View */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white"
              layout
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1">
            <motion.h3 layout className="text-xl font-bold text-white mb-2">
              {title}
            </motion.h3>
            <motion.p layout className="text-gray-400 text-sm">
              {description}
            </motion.p>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-white/10"
            >
              {expandedContent}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand indicator */}
        <motion.div
          className="absolute bottom-4 right-4 text-purple-400"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

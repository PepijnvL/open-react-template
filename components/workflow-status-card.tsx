"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkflowStatusCardProps {
  title: string;
  status: "completed" | "running" | "pending";
  timestamp: string;
  icon?: string;
  className?: string;
  delay?: number;
}

export default function WorkflowStatusCard({
  title,
  status,
  timestamp,
  icon = "⚡",
  className,
  delay = 0,
}: WorkflowStatusCardProps) {
  const statusConfig = {
    completed: {
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
      icon: "✓",
    },
    running: {
      color: "from-blue-500 to-indigo-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-400",
      icon: "⟳",
    },
    pending: {
      color: "from-gray-500 to-slate-500",
      bg: "bg-gray-500/10",
      border: "border-gray-500/30",
      text: "text-gray-400",
      icon: "○",
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      className={cn(
        "relative rounded-xl p-4 backdrop-blur-xl border",
        "bg-gradient-to-br from-slate-800/40 to-slate-900/40",
        config.border,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {/* Glow effect */}
      <motion.div
        className={cn(
          "absolute -inset-0.5 rounded-xl blur-lg opacity-0",
          `bg-gradient-to-r ${config.color}`
        )}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative flex items-start gap-3">
        {/* Icon */}
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0",
          config.bg
        )}>
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium mb-1">{title}</h4>
          <p className={cn("text-sm", config.text)}>{timestamp}</p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <motion.div
            className={cn("w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold", config.bg, config.text)}
            animate={
              status === "running"
                ? { rotate: 360 }
                : {}
            }
            transition={
              status === "running"
                ? { duration: 2, repeat: Infinity, ease: "linear" }
                : {}
            }
          >
            {config.icon}
          </motion.div>
        </div>
      </div>

      {/* Animated progress bar for running status */}
      {status === "running" && (
        <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className={cn("h-full bg-gradient-to-r", config.color)}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "50%" }}
          />
        </div>
      )}
    </motion.div>
  );
}

// Workflow cards group component
interface WorkflowCardsGroupProps {
  className?: string;
}

export function WorkflowCardsGroup({ className }: WorkflowCardsGroupProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <WorkflowStatusCard
        title="Channel analyzer"
        status="completed"
        timestamp="Completed at 11:23 AM"
        icon="📊"
        delay={0}
      />
      <WorkflowStatusCard
        title="Enrich Company Information"
        status="running"
        timestamp="Started at 10:44 AM"
        icon="🏢"
        delay={0.1}
      />
      <WorkflowStatusCard
        title="Workspace analyzer"
        status="completed"
        timestamp="Completed at 12:15 PM"
        icon="💼"
        delay={0.2}
      />
    </div>
  );
}

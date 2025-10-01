"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Trigger {
  id: string;
  label: string;
  icon: string;
}

interface TriggerFlowProps {
  className?: string;
}

const triggers: Trigger[] = [
  { id: "contact", label: "Contact Added", icon: "👤" },
  { id: "spreadsheet", label: "Spreadsheet Row", icon: "📊" },
  { id: "email", label: "Email Received", icon: "📧" },
  { id: "calendar", label: "Calendar Event", icon: "📅" },
];

export default function TriggerFlow({ className }: TriggerFlowProps) {
  return (
    <div className={cn("relative w-full h-[300px]", className)}>
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
          </linearGradient>
          <filter id="flowGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines from triggers to center */}
        {triggers.map((trigger, index) => {
          const angle = (index / triggers.length) * Math.PI * 2 - Math.PI / 2;
          const startX = 200 + Math.cos(angle) * 120;
          const startY = 150 + Math.sin(angle) * 100;
          const controlX = 200;
          const controlY = 150;

          return (
            <motion.path
              key={trigger.id}
              d={`M ${startX} ${startY} Q ${controlX} ${controlY} 200 150`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#flowGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Animated particles along paths */}
        {triggers.map((trigger, index) => {
          const angle = (index / triggers.length) * Math.PI * 2 - Math.PI / 2;
          const startX = 200 + Math.cos(angle) * 120;
          const startY = 150 + Math.sin(angle) * 100;
          const pathId = `trigger-path-${index}`;

          return (
            <g key={`particle-${trigger.id}`}>
              <path
                id={pathId}
                d={`M ${startX} ${startY} Q 200 150 200 150`}
                fill="none"
              />
              <motion.circle
                r="4"
                fill="#6366F1"
                filter="url(#flowGlow)"
              >
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.5}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </motion.circle>
            </g>
          );
        })}
      </svg>

      {/* Trigger nodes */}
      {triggers.map((trigger, index) => {
        const angle = (index / triggers.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 30; // percentage
        const y = 50 + Math.sin(angle) * 33; // percentage

        return (
          <motion.div
            key={trigger.id}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
            >
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity" />

              {/* Card */}
              <div className="relative bg-slate-800 border border-indigo-500/30 rounded-xl px-4 py-2 flex items-center gap-2 shadow-xl">
                <span className="text-2xl">{trigger.icon}</span>
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {trigger.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        >
          {/* Pulsing rings */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-indigo-500"
              animate={{
                scale: [1, 1.5],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 1,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Center icon */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/50">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m6-12v6m-12 0v6m0-12v6" />
              <path d="M12 5l3.5 2m-7 0L12 5m3.5 12l-3.5 2m-3.5-2l3.5 2" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

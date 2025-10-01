"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkflowNode {
  id: string;
  label: string;
  icon?: string;
  x: number;
  y: number;
}

interface WorkflowConnection {
  from: string;
  to: string;
}

interface WorkflowDiagramProps {
  className?: string;
  nodes?: WorkflowNode[];
  connections?: WorkflowConnection[];
}

const defaultNodes: WorkflowNode[] = [
  { id: "trigger", label: "Trigger", icon: "⚡", x: 10, y: 50 },
  { id: "ai-process", label: "AI Processing", icon: "🤖", x: 35, y: 30 },
  { id: "data", label: "Data Source", icon: "📊", x: 35, y: 70 },
  { id: "transform", label: "Transform", icon: "⚙️", x: 60, y: 50 },
  { id: "output", label: "Output", icon: "✅", x: 85, y: 50 },
];

const defaultConnections: WorkflowConnection[] = [
  { from: "trigger", to: "ai-process" },
  { from: "trigger", to: "data" },
  { from: "ai-process", to: "transform" },
  { from: "data", to: "transform" },
  { from: "transform", to: "output" },
];

export default function WorkflowDiagram({
  className,
  nodes = defaultNodes,
  connections = defaultConnections,
}: WorkflowDiagramProps) {
  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className={cn("relative w-full h-[400px] rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8", className)}>
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.6)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          const pathId = `path-${index}`;

          // Convert percentages to actual pixel coordinates for SVG viewBox
          const viewBoxWidth = 800;
          const viewBoxHeight = 400;
          const fromX = (from.x / 100) * viewBoxWidth;
          const fromY = (from.y / 100) * viewBoxHeight;
          const toX = (to.x / 100) * viewBoxWidth;
          const toY = (to.y / 100) * viewBoxHeight;
          const controlX = (fromX + toX) / 2;
          const controlY = Math.min(fromY, toY) - 40;

          return (
            <g key={index}>
              <motion.path
                id={pathId}
                d={`M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
              {/* Animated dot traveling along path */}
              <motion.circle
                r="4"
                fill="#6366F1"
                filter="url(#glow)"
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${index * 0.3}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </motion.circle>
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute z-10 flex flex-col items-center gap-2"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
            type: "spring",
            stiffness: 200,
          }}
        >
          {/* Node icon/circle */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Node content */}
            <div className="relative bg-slate-800 border-2 border-indigo-500/50 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
              {node.icon}
            </div>

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 border-2 border-indigo-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </motion.div>

          {/* Label */}
          <motion.span
            className="text-sm font-medium text-white bg-slate-800/80 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            {node.label}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

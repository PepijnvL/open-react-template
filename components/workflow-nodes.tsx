"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface WorkflowNode {
  id: string;
  label: string;
  icon?: string;
  description?: string;
  color?: string;
  status?: "idle" | "active" | "complete" | "error";
}

interface WorkflowConnection {
  from: string;
  to: string;
  animated?: boolean;
  color?: string;
}

interface WorkflowNodesProps {
  /** Array of workflow nodes */
  nodes: WorkflowNode[];
  /** Array of connections between nodes */
  connections?: WorkflowConnection[];
  /** Layout direction */
  direction?: "horizontal" | "vertical";
  /** Custom className */
  className?: string;
  /** Spacing between nodes in pixels (default: 60) */
  spacing?: number;
  /** Show connection animations (default: true) */
  animateConnections?: boolean;
  /** Connection line style */
  connectionStyle?: "straight" | "curved";
}

export default function WorkflowNodes({
  nodes,
  connections = [],
  direction = "vertical",
  className,
  spacing = 60,
  animateConnections = true,
  connectionStyle = "curved",
}: WorkflowNodesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodePositions, setNodePositions] = useState<Map<string, { x: number; y: number }>>(
    new Map()
  );

  useEffect(() => {
    // Calculate node positions
    const container = containerRef.current;
    if (!container) return;

    const positions = new Map<string, { x: number; y: number }>();
    const nodeElements = container.querySelectorAll("[data-node-id]");

    nodeElements.forEach((element) => {
      const nodeId = element.getAttribute("data-node-id");
      if (!nodeId) return;

      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      positions.set(nodeId, {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      });
    });

    setNodePositions(positions);
  }, [nodes]);

  const layoutClasses = direction === "horizontal" ? "flex-row" : "flex-col";

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Connection lines */}
      {connections.length > 0 && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ zIndex: 0 }}
        >
          {connections.map((connection, index) => {
            const fromPos = nodePositions.get(connection.from);
            const toPos = nodePositions.get(connection.to);

            if (!fromPos || !toPos) return null;

            return (
              <ConnectionLine
                key={`${connection.from}-${connection.to}-${index}`}
                from={fromPos}
                to={toPos}
                animated={animateConnections && (connection.animated ?? true)}
                color={connection.color}
                style={connectionStyle}
              />
            );
          })}
        </svg>
      )}

      {/* Nodes */}
      <div className={cn("relative z-10 flex items-center", layoutClasses)} style={{ gap: spacing }}>
        {nodes.map((node, index) => (
          <>
            <WorkflowNodeItem key={node.id} node={node} />
            {index < nodes.length - 1 && direction === "vertical" && (
              <div className="flex h-12 items-center justify-center">
                <div className="h-full w-0.5 bg-gradient-to-b from-purple-500/50 to-pink-500/50" />
              </div>
            )}
            {index < nodes.length - 1 && direction === "horizontal" && (
              <div className="flex w-12 items-center justify-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 to-pink-500/50" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

interface WorkflowNodeItemProps {
  node: WorkflowNode;
}

function WorkflowNodeItem({ node }: WorkflowNodeItemProps) {
  const statusColors = {
    idle: "border-gray-600 bg-gray-800/50",
    active: "border-blue-500 bg-blue-900/30 shadow-lg shadow-blue-500/30",
    complete: "border-green-500 bg-green-900/30 shadow-lg shadow-green-500/30",
    error: "border-red-500 bg-red-900/30 shadow-lg shadow-red-500/30",
  };

  const status = node.status || "idle";
  const accentColor = node.color || "#8b5cf6";

  return (
    <div
      data-node-id={node.id}
      className={cn(
        "group relative rounded-xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105",
        statusColors[status],
        status === "active" && "animate-pulse"
      )}
    >
      <div className="flex items-center gap-3 p-4">
        {/* Icon */}
        {node.icon && (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            <Image src={node.icon} alt={node.label} width={24} height={24} />
          </div>
        )}

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-white">{node.label}</div>
          {node.description && (
            <div className="mt-1 text-xs text-gray-400">{node.description}</div>
          )}
        </div>

        {/* Status indicator */}
        {status !== "idle" && (
          <div
            className={cn(
              "h-2 w-2 shrink-0 rounded-full",
              status === "active" && "bg-blue-500 animate-ping",
              status === "complete" && "bg-green-500",
              status === "error" && "bg-red-500"
            )}
          />
        )}
      </div>
    </div>
  );
}

interface ConnectionLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  animated: boolean;
  color?: string;
  style: "straight" | "curved";
}

function ConnectionLine({ from, to, animated, color = "#8b5cf6", style }: ConnectionLineProps) {
  const strokeDasharray = "5,5";
  const strokeWidth = 2;

  if (style === "straight") {
    return (
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={animated ? strokeDasharray : undefined}
        className={animated ? "animate-dash" : ""}
      />
    );
  }

  // Curved line using cubic bezier
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const curvature = Math.min(distance * 0.3, 50);

  const path = `M ${from.x} ${from.y} Q ${midX} ${midY - curvature} ${to.x} ${to.y}`;

  return (
    <>
      <defs>
        <linearGradient id={`gradient-${from.x}-${from.y}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d={path}
        stroke={`url(#gradient-${from.x}-${from.y})`}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={animated ? "8,4" : undefined}
        className={animated ? "animate-dash" : ""}
      />
    </>
  );
}

interface CompactWorkflowProps {
  /** Array of step labels */
  steps: string[];
  /** Current active step (0-indexed) */
  activeStep?: number;
  /** Custom className */
  className?: string;
}

/**
 * Compact workflow component - horizontal step indicator
 */
export function CompactWorkflow({ steps, activeStep = 0, className }: CompactWorkflowProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isComplete = index < activeStep;

        return (
          <>
            <div
              key={`step-${index}`}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                isActive && "border-purple-500 bg-purple-500/20 text-purple-300",
                isComplete && "border-green-500 bg-green-500/20 text-green-300",
                !isActive && !isComplete && "border-gray-600 bg-gray-800/50 text-gray-400"
              )}
            >
              {isComplete && (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="h-0.5 w-8 bg-gray-700">
                <div
                  className={cn(
                    "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
                    isComplete ? "w-full" : "w-0"
                  )}
                />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

// Global styles for animations
const styles = `
  @keyframes dash {
    to {
      stroke-dashoffset: -20;
    }
  }

  .animate-dash {
    animation: dash 1s linear infinite;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GridNode {
  id: string;
  x: number;
  y: number;
}

interface AnimatedGridPatternProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  gridSize?: number;
  maxConnections?: number;
}

export default function AnimatedGridPattern({
  className,
  dotColor = "rgba(139, 92, 246, 0.4)",
  lineColor = "rgba(139, 92, 246, 0.2)",
  gridSize = 50,
  maxConnections = 3,
}: AnimatedGridPatternProps) {
  const [nodes, setNodes] = useState<GridNode[]>([]);
  const [connections, setConnections] = useState<[string, string][]>([]);

  useEffect(() => {
    const generateGrid = () => {
      const newNodes: GridNode[] = [];
      const cols = Math.ceil(100 / gridSize);
      const rows = Math.ceil(100 / gridSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          newNodes.push({
            id: `${row}-${col}`,
            x: (col * gridSize) + (gridSize / 2),
            y: (row * gridSize) + (gridSize / 2),
          });
        }
      }

      setNodes(newNodes);

      // Create random connections
      const newConnections: [string, string][] = [];
      newNodes.forEach((node) => {
        const nearbyNodes = newNodes.filter(
          (n) =>
            n.id !== node.id &&
            Math.abs(n.x - node.x) <= gridSize * 1.5 &&
            Math.abs(n.y - node.y) <= gridSize * 1.5
        );

        const randomConnections = nearbyNodes
          .sort(() => Math.random() - 0.5)
          .slice(0, Math.floor(Math.random() * maxConnections));

        randomConnections.forEach((target) => {
          const connectionId = [node.id, target.id].sort().join("-");
          if (
            !newConnections.some(
              ([a, b]) => [a, b].sort().join("-") === connectionId
            )
          ) {
            newConnections.push([node.id, target.id]);
          }
        });
      });

      setConnections(newConnections);
    };

    generateGrid();
  }, [gridSize, maxConnections]);

  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="gridLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated connections */}
        {connections.map(([start, end], i) => {
          const startPos = getNodePosition(start);
          const endPos = getNodePosition(end);

          return (
            <motion.line
              key={`${start}-${end}`}
              x1={`${startPos.x}%`}
              y1={`${startPos.y}%`}
              x2={`${endPos.x}%`}
              y2={`${endPos.y}%`}
              stroke="url(#gridLine)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 2,
                  delay: i * 0.05,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.5,
                  delay: i * 0.05,
                },
              }}
            />
          );
        })}

        {/* Grid dots */}
        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill={dotColor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.01,
              ease: "easeOut",
            }}
          >
            <animate
              attributeName="r"
              values="2;3;2"
              dur={`${3 + Math.random() * 2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur={`${3 + Math.random() * 2}s`}
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}

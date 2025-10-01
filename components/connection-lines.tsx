"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Point {
  id: number;
  x: number;
  y: number;
}

interface Connection {
  from: Point;
  to: Point;
  distance: number;
}

interface ConnectionLinesProps {
  className?: string;
  pointCount?: number;
  maxDistance?: number;
  lineColor?: string;
  pointColor?: string;
}

export default function ConnectionLines({
  className,
  pointCount = 30,
  maxDistance = 150,
  lineColor = "rgba(99, 102, 241, 0.3)",
  pointColor = "rgba(99, 102, 241, 0.6)",
}: ConnectionLinesProps) {
  const [points, setPoints] = useState<Point[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Generate random points
    const newPoints: Point[] = Array.from({ length: pointCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setPoints(newPoints);

    // Calculate connections between nearby points
    const newConnections: Connection[] = [];
    for (let i = 0; i < newPoints.length; i++) {
      for (let j = i + 1; j < newPoints.length; j++) {
        const distance = Math.sqrt(
          Math.pow(newPoints[i].x - newPoints[j].x, 2) +
          Math.pow(newPoints[i].y - newPoints[j].y, 2)
        );

        if (distance < maxDistance / 5) { // Scale to percentage
          newConnections.push({
            from: newPoints[i],
            to: newPoints[j],
            distance,
          });
        }
      }
    }
    setConnections(newConnections);
  }, [pointCount, maxDistance]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.2" />
          </linearGradient>
          <filter id="connectionGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, index) => (
          <motion.line
            key={index}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            filter="url(#connectionGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.02,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Animated points */}
        {points.map((point, index) => (
          <motion.circle
            key={point.id}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="3"
            fill={pointColor}
            filter="url(#connectionGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: index * 0.05,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

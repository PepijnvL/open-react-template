"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BinaryMatrixProps {
  /** Height of the matrix container (default: "300px") */
  height?: string;
  /** Width of the matrix container (default: "100%") */
  width?: string;
  /** Font size of binary digits (default: 14) */
  fontSize?: number;
  /** Animation speed in milliseconds (lower = faster, default: 50) */
  speed?: number;
  /** Text color (default: "rgb(34, 197, 94)") - green */
  color?: string;
  /** Background opacity (0-1, default: 0) */
  backgroundOpacity?: number;
  /** Custom className */
  className?: string;
  /** Density of digits (0-1, higher = more dense, default: 0.95) */
  density?: number;
}

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
}

export default function BinaryMatrix({
  height = "300px",
  width = "100%",
  fontSize = 14,
  speed = 50,
  color = "rgb(34, 197, 94)",
  backgroundOpacity = 0,
  className,
  density = 0.95,
}: BinaryMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [columns, setColumns] = useState<Column[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      // Initialize columns
      const columnCount = Math.floor(rect.width / fontSize);
      const newColumns: Column[] = [];

      for (let i = 0; i < columnCount; i++) {
        newColumns.push({
          x: i * fontSize,
          y: Math.random() * -rect.height,
          speed: 0.5 + Math.random() * 1.5,
          chars: Array.from({ length: Math.floor(rect.height / fontSize) + 1 }, () =>
            Math.random() > 0.5 ? "0" : "1"
          ),
        });
      }

      setColumns(newColumns);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (!canvas) return;

      const deltaTime = currentTime - lastTime;

      if (deltaTime > speed) {
        const rect = canvas.getBoundingClientRect();

        // Semi-transparent background for trail effect
        ctx.fillStyle = `rgba(0, 0, 0, ${backgroundOpacity === 0 ? 0.05 : backgroundOpacity})`;
        ctx.fillRect(0, 0, rect.width, rect.height);

        // Draw binary digits
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = color;

        setColumns((prevColumns) =>
          prevColumns.map((column) => {
            // Draw each character in the column
            column.chars.forEach((char, index) => {
              const y = column.y + index * fontSize;

              // Only draw if in viewport
              if (y > 0 && y < rect.height) {
                // Fade effect - brighter at the head
                const opacity = 1 - (index / column.chars.length) * 0.7;
                ctx.fillStyle = color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
                ctx.fillText(char, column.x, y);
              }
            });

            // Update column position
            const newY = column.y + column.speed;

            // Reset when column reaches bottom
            if (newY > rect.height) {
              return {
                ...column,
                y: -fontSize * column.chars.length,
                speed: 0.5 + Math.random() * 1.5,
                chars: Array.from({ length: column.chars.length }, () =>
                  Math.random() > 0.5 ? "0" : "1"
                ),
              };
            }

            // Randomly change characters
            if (Math.random() > density) {
              const randomIndex = Math.floor(Math.random() * column.chars.length);
              column.chars[randomIndex] = Math.random() > 0.5 ? "0" : "1";
            }

            return { ...column, y: newY };
          })
        );

        lastTime = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [fontSize, speed, color, backgroundOpacity, density]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("block", className)}
      style={{ height, width }}
    />
  );
}

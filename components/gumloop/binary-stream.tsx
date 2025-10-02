"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BinaryCell {
  value: string;
  isChanging: boolean;
}

export default function BinaryStream() {
  const [grid, setGrid] = useState<BinaryCell[][]>([]);
  const rows = 12;
  const cols = 10;

  useEffect(() => {
    // Initialize grid with changing states
    const initialGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        value: Math.random() > 0.5 ? "1" : "0",
        isChanging: false,
      }))
    );
    setGrid(initialGrid);

    // Animate changes with smooth spring transitions
    const interval = setInterval(() => {
      setGrid((prev) => {
        const newGrid = prev.map(row => row.map(cell => ({ ...cell, isChanging: false })));

        // Change 3-5 random cells
        const changes = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < changes; i++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * cols);
          newGrid[row][col] = {
            value: newGrid[row][col].value === "1" ? "0" : "1",
            isChanging: true,
          };
        }
        return newGrid;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div
        className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 shadow-2xl overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 bg-blue-400/20 blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Binary Grid with spring animations */}
        <div className="relative font-mono text-sm leading-relaxed space-y-1 select-none">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2 justify-center">
              {row.map((cell, colIndex) => (
                <motion.span
                  key={`${rowIndex}-${colIndex}`}
                  className="inline-block"
                  animate={{
                    color: cell.value === "1"
                      ? "rgba(255, 255, 255, 0.95)"
                      : "rgba(255, 255, 255, 0.3)",
                    textShadow: cell.value === "1"
                      ? "0 0 12px rgba(255, 255, 255, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)"
                      : "none",
                    scale: cell.isChanging ? [1, 1.3, 1] : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    scale: { duration: 0.3 },
                  }}
                >
                  {cell.value}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* MCP Label with pulse animation */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255, 255, 255, 0.2)",
                "0 0 20px rgba(255, 255, 255, 0.4)",
                "0 0 10px rgba(255, 255, 255, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-white text-sm font-bold">AI</span>
          </motion.div>
          <span className="text-white/90 text-sm font-semibold tracking-wide">AI Powered</span>
        </motion.div>

        {/* Enhanced floating particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
              initial={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                y: [-100, 100],
                x: [0, (Math.random() - 0.5) * 40],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Corner highlights for depth */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl" />
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function BinaryStream() {
  const [grid, setGrid] = useState<string[][]>([]);
  const rows = 12;
  const cols = 10;

  useEffect(() => {
    // Initialize grid
    const initialGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random() > 0.5 ? "1" : "0")
    );
    setGrid(initialGrid);

    // Animate changes
    const interval = setInterval(() => {
      setGrid((prev) => {
        const newGrid = prev.map(row => [...row]);
        // Change 3-5 random cells
        const changes = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < changes; i++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * cols);
          newGrid[row][col] = newGrid[row][col] === "1" ? "0" : "1";
        }
        return newGrid;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 shadow-2xl overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl"></div>

        {/* Binary Grid */}
        <div className="relative font-mono text-sm leading-relaxed space-y-1">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2 justify-center">
              {row.map((bit, colIndex) => (
                <span
                  key={`${rowIndex}-${colIndex}`}
                  className="transition-all duration-200"
                  style={{
                    color: bit === "1" ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.3)",
                    textShadow: bit === "1" ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
                  }}
                >
                  {bit}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* MCP Label */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
          <span className="text-white/90 text-sm font-medium">AI Powered</span>
        </div>

        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

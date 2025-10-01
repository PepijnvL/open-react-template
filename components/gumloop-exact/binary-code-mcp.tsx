"use client";

import { useEffect, useState } from "react";

export default function BinaryCodeMCP() {
  const [binaryGrid, setBinaryGrid] = useState<string[][]>([]);

  useEffect(() => {
    // Generate initial binary grid
    const rows = 20;
    const cols = 8;
    const grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => (Math.random() > 0.5 ? "1" : "0"))
    );
    setBinaryGrid(grid);

    // Animate random changes
    const interval = setInterval(() => {
      setBinaryGrid((prev) => {
        const newGrid = prev.map((row) => [...row]);
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);
        newGrid[randomRow][randomCol] = newGrid[randomRow][randomCol] === "1" ? "0" : "1";
        return newGrid;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 shadow-xl">
        {/* MCP Badge */}
        <div className="flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 w-fit border border-white/20">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          <span className="text-white font-medium text-sm">MCP</span>
        </div>

        {/* Binary Grid */}
        <div className="font-mono text-white/80 text-sm leading-relaxed space-y-1">
          {binaryGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {row.map((bit, colIndex) => (
                <span
                  key={`${rowIndex}-${colIndex}`}
                  className="transition-all duration-200 hover:text-white"
                  style={{
                    opacity: bit === "1" ? 1 : 0.4,
                  }}
                >
                  {bit}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* AI Powered Badge */}
        <div className="flex items-center gap-2 mt-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 w-fit border border-white/20">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-white font-medium text-sm">AI Powered</span>
        </div>
      </div>
    </div>
  );
}

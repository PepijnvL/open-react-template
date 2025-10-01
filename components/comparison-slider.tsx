"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ComparisonSliderProps {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  initialPosition?: number;
}

export default function ComparisonSlider({
  beforeContent,
  afterContent,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  initialPosition = 50,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div
      className={cn(
        "group relative h-[400px] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
    >
      {/* Before content (full width) */}
      <div className="absolute inset-0">{beforeContent}</div>

      {/* After content (clipped) */}
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        {afterContent}
      </motion.div>

      {/* Slider line and handle */}
      <motion.div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Vertical line */}
        <div className="absolute h-full w-1 bg-white shadow-lg" />

        {/* Handle */}
        <motion.div
          className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-indigo-600 shadow-xl"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Left arrow */}
          <svg
            className="absolute left-2 h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>

          {/* Right arrow */}
          <svg
            className="absolute right-2 h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Labels */}
      <div className="pointer-events-none absolute top-4 left-4 z-20 rounded-lg bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute top-4 right-4 z-20 rounded-lg bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
        {afterLabel}
      </div>
    </div>
  );
}

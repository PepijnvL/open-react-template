"use client";

import { useState } from "react";

interface CardData {
  emoji: string;
  color: "blue" | "yellow" | "purple" | "green";
  headerImage: string;
  left: number;
  top: number;
  zIndex: number;
}

const cards: CardData[] = [
  { emoji: "💼", color: "blue", headerImage: "/images/header-workspace.jpg", left: 0, top: 0, zIndex: 1 },
  { emoji: "🎥", color: "yellow", headerImage: "/images/header-gradient.jpg", left: 60, top: 8, zIndex: 2 },
  { emoji: "📈", color: "purple", headerImage: "/images/header-skyline.jpg", left: 120, top: 16, zIndex: 3 },
  { emoji: "📝", color: "green", headerImage: "/images/header-desk.jpg", left: 180, top: 24, zIndex: 4 },
];

const colorClasses = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", skeleton: "bg-blue-100", button: "bg-blue-200" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-200", skeleton: "bg-yellow-100", button: "bg-yellow-200" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", skeleton: "bg-purple-100", button: "bg-purple-200" },
  green: { bg: "bg-green-50", border: "border-green-200", skeleton: "bg-green-100", button: "bg-green-200" },
};

export default function IntegrationGridAnimated() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative" style={{ width: "280px", height: "136px" }}>
      {cards.map((card, index) => {
        const colors = colorClasses[card.color];
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className={`h-[112px] w-[96px] overflow-hidden rounded-sm border hover:scale-105 hover:shadow-lg ${colors.bg} ${colors.border} absolute transition-all duration-500 hover:z-20`}
            style={{
              left: `${card.left}px`,
              top: `${card.top}px`,
              zIndex: isHovered ? 20 : card.zIndex,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Header Image */}
            <div className="h-6 w-full overflow-hidden rounded-t-sm bg-gradient-to-r from-gray-100 to-gray-200">
              {/* Placeholder gradient until real images are added */}
            </div>

            {/* Emoji Circle */}
            <div className="absolute top-3 left-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 bg-white">
              <div className="scale-75">{card.emoji}</div>
            </div>

            {/* Skeleton Content */}
            <div className="space-y-0.5 p-1.5 pt-3">
              {/* Title skeleton */}
              <div className={`h-1 w-4/5 rounded-full ${colors.skeleton} animate-pulse`}></div>
              <div className={`h-1 w-3/5 rounded-full ${colors.skeleton} animate-pulse`} style={{ animationDelay: "100ms" }}></div>

              <div className="h-0.5"></div>

              {/* Content skeletons */}
              {[100, 86, 80, 75, 66].map((width, i) => (
                <div
                  key={i}
                  className={`h-0.5 rounded-full ${colors.skeleton} animate-pulse`}
                  style={{ width: `${width}%`, animationDelay: `${(i + 2) * 100}ms` }}
                ></div>
              ))}

              <div className="h-0.5"></div>

              {/* More content */}
              <div className={`h-0.5 w-full rounded-full ${colors.skeleton} animate-pulse`} style={{ animationDelay: "700ms" }}></div>
              <div className={`h-0.5 w-4/5 rounded-full ${colors.skeleton} animate-pulse`} style={{ animationDelay: "800ms" }}></div>
              <div className={`h-0.5 w-3/5 rounded-full ${colors.skeleton} animate-pulse`} style={{ animationDelay: "900ms" }}></div>

              <div className="h-0.5"></div>

              {/* Button skeleton */}
              <div className={`h-2 w-2/3 rounded ${colors.button} animate-pulse`} style={{ animationDelay: "1000ms" }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

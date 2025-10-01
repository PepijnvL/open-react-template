"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function AnimatedTabs({
  tabs,
  className,
  orientation = "horizontal",
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <div
      className={cn(
        "flex gap-8",
        orientation === "vertical" ? "flex-row" : "flex-col",
        className
      )}
    >
      {/* Tab buttons */}
      <div
        className={cn(
          "relative flex gap-2 p-2 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10",
          orientation === "vertical" ? "flex-col w-48" : "flex-row"
        )}
      >
        {/* Animated indicator */}
        <motion.div
          className="absolute bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-xl"
          initial={false}
          animate={{
            [orientation === "vertical" ? "top" : "left"]:
              orientation === "vertical"
                ? `${activeIndex * (100 / tabs.length)}%`
                : `${activeIndex * (100 / tabs.length)}%`,
            [orientation === "vertical" ? "height" : "width"]: `${100 / tabs.length}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            position: "absolute",
            [orientation === "vertical" ? "left" : "top"]: "0.5rem",
            [orientation === "vertical" ? "right" : "bottom"]: "0.5rem",
            [orientation === "vertical" ? "width" : "height"]: "calc(100% - 1rem)",
          }}
        />

        {/* Tab buttons */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative z-10 px-6 py-3 rounded-xl transition-all duration-300",
              "text-sm font-medium whitespace-nowrap",
              "flex items-center gap-2",
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-gray-300"
            )}
          >
            {tab.icon && <span className="text-lg">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={false}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8",
              activeTab === tab.id ? "block" : "hidden"
            )}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

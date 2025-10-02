"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Powerful Visual Builder",
    description: "Automate workflows in minutes with ready-made building blocks",
    icon: "🔧",
    gradient: "from-blue-500 to-cyan-500",
    preview: {
      type: "nodes",
      count: "105+",
      label: "Native nodes to choose from",
    },
  },
  {
    title: "AI-Enhanced Decision Making",
    description: "Let AI route and choose the next best step",
    icon: "🧠",
    gradient: "from-purple-500 to-pink-500",
    preview: {
      type: "router",
      label: "AI Router",
    },
  },
  {
    title: "Built For All Departments",
    description: "Consolidate your tools, empower your team",
    icon: "👥",
    gradient: "from-green-500 to-emerald-500",
    preview: {
      type: "workflows",
      items: [
        { name: "Channel analyzer", status: "completed", time: "11:23 AM" },
        { name: "Enrich Company Info", status: "running", time: "10:44 AM" },
        { name: "Workspace analyzer", status: "completed", time: "12:15 PM" },
      ],
    },
  },
  {
    title: "Run Background Workflows",
    description: "Triggers flows from all of the apps you use",
    icon: "⚡",
    gradient: "from-orange-500 to-red-500",
    preview: {
      type: "triggers",
      items: ["Contact Added", "Spreadsheet Row", "Email Received", "Calendar Event"],
    },
  },
  {
    title: "Interfaces & Templates",
    description: "Put your work in everyone's hands",
    icon: "📱",
    gradient: "from-indigo-500 to-blue-500",
    preview: {
      type: "templates",
      emojis: ["💼", "🎥", "📈", "📝"],
    },
  },
  {
    title: "Prompt To Create",
    description: "Build as fast as you can imagine",
    icon: "✨",
    gradient: "from-pink-500 to-purple-500",
    preview: {
      type: "ai-prompt",
      label: "AI Powered",
    },
  },
];

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-4 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Everything you need to build any automation
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: index * 0.1,
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow effect on hover */}
            <motion.div
              className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              initial={false}
              animate={{
                opacity: hoveredCard === index ? 0.3 : 0,
              }}
            />

            <motion.div
              className="relative bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg overflow-hidden"
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                borderColor: "rgba(209, 213, 219, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === index ? 0.05 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon with rotation and scale on hover */}
              <div className="relative mb-4">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl shadow-lg`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {feature.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {feature.description}
                </p>

                {/* Preview Section with animations */}
                <motion.div
                  className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.preview.type === "nodes" && (
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-gray-900 mb-1"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {feature.preview.count}
                      </motion.div>
                      <div className="text-xs text-gray-600">
                        {feature.preview.label}
                      </div>
                    </div>
                  )}

                  {feature.preview.type === "router" && (
                    <div className="flex items-center gap-2 justify-center">
                      <motion.div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        AI
                      </motion.div>
                      <span className="text-sm font-semibold text-gray-700">
                        {feature.preview.label}
                      </span>
                    </div>
                  )}

                  {feature.preview.type === "workflows" && (
                    <div className="space-y-2">
                      {feature.preview.items?.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between text-xs p-2 bg-white rounded-lg border border-gray-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <span className="text-gray-700 font-medium truncate flex-1">
                            {item.name}
                          </span>
                          <motion.span
                            className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
                              item.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                            animate={
                              item.status === "running"
                                ? {
                                    opacity: [1, 0.5, 1],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          >
                            {item.status === "completed" ? "✓" : "..."}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {feature.preview.type === "triggers" && (
                    <div className="flex flex-wrap gap-2">
                      {feature.preview.items?.map((item, i) => (
                        <motion.div
                          key={i}
                          className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{
                            scale: 1.05,
                            borderColor: "rgba(156, 163, 175, 0.5)",
                          }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {feature.preview.type === "templates" && (
                    <div className="flex gap-2 justify-center">
                      {feature.preview.emojis?.map((emoji, i) => (
                        <motion.div
                          key={i}
                          className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm"
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 300,
                          }}
                          whileHover={{
                            scale: 1.2,
                            rotate: 10,
                          }}
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {feature.preview.type === "ai-prompt" && (
                    <div className="flex items-center gap-3 justify-center">
                      <motion.div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} shadow-lg`}
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            "0 4px 6px rgba(0, 0, 0, 0.1)",
                            "0 10px 15px rgba(236, 72, 153, 0.3)",
                            "0 4px 6px rgba(0, 0, 0, 0.1)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        {feature.preview.label}
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

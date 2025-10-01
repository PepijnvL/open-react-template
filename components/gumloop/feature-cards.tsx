"use client";

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
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Everything you need to build any automation
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`relative bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                hoveredCard === index ? "scale-105 border-gray-300" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div className="relative mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {feature.description}
                </p>

                {/* Preview Section */}
                <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  {feature.preview.type === "nodes" && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {feature.preview.count}
                      </div>
                      <div className="text-xs text-gray-600">
                        {feature.preview.label}
                      </div>
                    </div>
                  )}

                  {feature.preview.type === "router" && (
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center text-sm">
                        AI
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {feature.preview.label}
                      </span>
                    </div>
                  )}

                  {feature.preview.type === "workflows" && (
                    <div className="space-y-2">
                      {feature.preview.items?.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-gray-700 font-medium truncate flex-1">
                            {item.name}
                          </span>
                          <span
                            className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                              item.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {item.status === "completed" ? "✓" : "..."}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.preview.type === "triggers" && (
                    <div className="flex flex-wrap gap-2">
                      {feature.preview.items?.map((item, i) => (
                        <div
                          key={i}
                          className="px-2 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.preview.type === "templates" && (
                    <div className="flex gap-2 justify-center">
                      {feature.preview.emojis?.map((emoji, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-lg"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.preview.type === "ai-prompt" && (
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">
                        {feature.preview.label}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

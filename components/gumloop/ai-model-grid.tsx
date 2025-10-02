"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AIModel {
  name: string;
  gradient: string;
  initials: string;
}

const aiModels: AIModel[] = [
  { name: "Anthropic", gradient: "bg-gradient-to-br from-orange-400 to-orange-600", initials: "A" },
  { name: "OpenAI", gradient: "bg-gradient-to-br from-green-400 to-green-600", initials: "O" },
  { name: "ChatGPT", gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600", initials: "GPT" },
  { name: "Gemini", gradient: "bg-gradient-to-br from-blue-400 to-blue-600", initials: "G" },
  { name: "Copilot", gradient: "bg-gradient-to-br from-purple-400 to-purple-600", initials: "CP" },
  { name: "Perplexity", gradient: "bg-gradient-to-br from-indigo-400 to-indigo-600", initials: "P" },
  { name: "Meta", gradient: "bg-gradient-to-br from-pink-400 to-pink-600", initials: "M" },
];

export default function AIModelGrid() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Center glow with animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Layout */}
        <div className="relative grid grid-cols-2 gap-6 p-4">
          {/* Top Row */}
          <div className="flex gap-6">
            {aiModels.slice(0, 2).map((model, index) => (
              <motion.button
                key={model.name}
                className={`flex-1 aspect-square rounded-2xl ${model.gradient} border border-white/20 shadow-xl flex flex-col items-center justify-center gap-3 backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  rotate: 5,
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setSelectedModel(index)}
                onClick={() => setSelectedModel(index)}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-lg">{model.initials}</span>
                </motion.div>
                <span className="text-sm font-bold text-white">{model.name}</span>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Center Logo with pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="w-28 h-28 rounded-2xl bg-gradient-to-br from-white to-gray-100 border-4 border-white shadow-2xl flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 10px 40px rgba(0, 0, 0, 0.2)",
                  "0 15px 50px rgba(59, 130, 246, 0.3)",
                  "0 10px 40px rgba(0, 0, 0, 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 180,
              }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl mb-1"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  🔄
                </motion.div>
                <div className="text-xs font-bold text-gray-600">AI Router</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-6">
            {aiModels.slice(2, 4).map((model, index) => (
              <motion.button
                key={model.name}
                className={`flex-1 aspect-square rounded-2xl ${model.gradient} border border-white/20 shadow-xl flex flex-col items-center justify-center gap-3 backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: (index + 2) * 0.1,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  rotate: -5,
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setSelectedModel(index + 2)}
                onClick={() => setSelectedModel(index + 2)}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-lg">{model.initials}</span>
                </motion.div>
                <span className="text-sm font-bold text-white">{model.name}</span>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom Row - Additional Models */}
        <div className="grid grid-cols-3 gap-4 mt-6 px-4">
          {aiModels.slice(4).map((model, index) => (
            <motion.button
              key={model.name}
              className={`aspect-square rounded-xl ${model.gradient} border border-white/20 shadow-lg flex flex-col items-center justify-center gap-2 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: (index + 4) * 0.1,
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setSelectedModel(index + 4)}
              onClick={() => setSelectedModel(index + 4)}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-xs">{model.initials}</span>
              </motion.div>
              <span className="text-xs font-bold text-white">{model.name}</span>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-white/20"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Description */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">One Subscription For All</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          No add-ons, data subscriptions or per-model fees
        </p>
      </motion.div>
    </div>
  );
}

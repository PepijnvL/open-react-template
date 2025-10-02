"use client";

import { motion } from "framer-motion";
import { IntegrationIcon } from "./icon-component";

export default function AIRouterFlowV2() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
      {/* N8N-style workflow visualization: Input → Tools → Output */}
      <div className="flex items-center justify-between gap-6">
        {/* LEFT: Input */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Input</div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl border-2 border-white">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-700">
              User Query
            </div>
          </motion.div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.div>

        {/* MIDDLE: AI Router + Tools */}
        <div className="flex-1 flex flex-col items-center gap-6">
          {/* AI Router */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl border-2 border-white relative z-10"
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(168, 85, 247, 0.4)",
                  "0 15px 50px rgba(236, 72, 153, 0.5)",
                  "0 10px 40px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-white font-bold text-lg">AI</span>
            </motion.div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-700">
              AI Router
            </div>

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Connector lines to tools */}
          <div className="relative w-full h-20 flex items-center justify-center">
            <svg className="absolute w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="xMidYMid meet">
              {/* Line to left tool (Gmail) */}
              <motion.path
                d="M 150 0 Q 100 40 60 80"
                stroke="#94A3B8"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              />
              {/* Line to middle tool (Sheets) */}
              <motion.path
                d="M 150 0 L 150 80"
                stroke="#94A3B8"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              />
              {/* Line to right tool (Slack) */}
              <motion.path
                d="M 150 0 Q 200 40 240 80"
                stroke="#94A3B8"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              />
              {/* Animated dots flowing through lines */}
              <motion.circle
                r="4"
                fill="#8B5CF6"
                initial={{ cx: 150, cy: 0, opacity: 0 }}
                animate={{
                  cx: [150, 100, 60],
                  cy: [0, 40, 80],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                r="4"
                fill="#8B5CF6"
                initial={{ cx: 150, cy: 0, opacity: 0 }}
                animate={{
                  cx: [150, 150, 150],
                  cy: [0, 40, 80],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.3,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                r="4"
                fill="#8B5CF6"
                initial={{ cx: 150, cy: 0, opacity: 0 }}
                animate={{
                  cx: [150, 200, 240],
                  cy: [0, 40, 80],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.6,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          {/* BOTTOM: Tools Row */}
          <div className="flex items-center gap-4">
            {[
              { name: "Gmail", key: "gmail" },
              { name: "Sheets", key: "google-sheets" },
              { name: "Slack", key: "slack" },
            ].map((tool, index) => (
              <motion.div
                key={tool.key}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring" }}>
                  <IntegrationIcon name={tool.key} size={48} />
                </motion.div>
                <div className="text-xs font-medium text-gray-600">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.div>

        {/* RIGHT: Output */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Output</div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl border-2 border-white">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-700">
              Result
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Enhanced Decision Making</h3>
        <p className="text-sm text-gray-600">Let AI route and choose the next best step</p>
      </motion.div>
    </div>
  );
}

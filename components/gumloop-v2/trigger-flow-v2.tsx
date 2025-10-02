"use client";

import { motion } from "framer-motion";
import { IntegrationIcon } from "./icon-component";

const triggers = [
  { name: "Contact Added", icon: "salesforce", color: "from-blue-500 to-blue-600" },
  { name: "Spreadsheet Row", icon: "google-sheets", color: "from-green-500 to-green-600" },
  { name: "Email Received", icon: "gmail", color: "from-red-500 to-red-600" },
  { name: "Calendar Event", icon: "google-docs", color: "from-blue-400 to-blue-500" },
];

export default function TriggerFlowV2() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Improved flow visualization with proper alignment */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl">
        {/* Central workflow node */}
        <div className="flex items-center justify-center mb-12">
          <motion.div
            className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center shadow-2xl border-2 border-white"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg className="w-12 h-12 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-white text-sm font-bold">Workflow</span>
          </motion.div>
        </div>

        {/* Trigger cards with proper spacing and alignment */}
        <div className="grid grid-cols-2 gap-4">
          {triggers.map((trigger, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0.3 + index * 0.1,
              }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              {/* Properly aligned icon */}
              <div className="flex-shrink-0">
                <IntegrationIcon name={trigger.icon} size={48} />
              </div>

              {/* Text content with proper alignment */}
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-sm font-semibold text-gray-900 truncate">{trigger.name}</span>
                <span className="text-xs text-gray-500">Trigger</span>
              </div>

              {/* Connection indicator */}
              <div className="ml-auto flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting lines from triggers to central node */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
          {[...Array(4)].map((_, i) => {
            const angle = (i * 90 - 45) * (Math.PI / 180);
            const startX = 50;
            const startY = i < 2 ? 85 : 15;
            return (
              <motion.line
                key={i}
                x1={`${startX + (i % 2) * 50}%`}
                y1={`${startY}%`}
                x2="50%"
                y2="15%"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              />
            );
          })}
        </svg>
      </div>

      {/* Description */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">Run Background Workflows</h3>
        <p className="text-sm text-gray-600">Triggers flows from all of the apps you use</p>
      </motion.div>
    </div>
  );
}

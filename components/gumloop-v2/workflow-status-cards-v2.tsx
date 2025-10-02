"use client";

import { motion } from "framer-motion";
import { StatusIcon } from "./icon-component";

interface WorkflowStatus {
  name: string;
  status: "completed" | "running" | "error";
  time: string;
}

const workflows: WorkflowStatus[] = [
  { name: "Channel analyzer", status: "completed", time: "11:23 AM" },
  { name: "Enrich Company Info", status: "running", time: "10:44 AM" },
  { name: "Workspace analyzer", status: "completed", time: "12:15 PM" },
];

export default function WorkflowStatusCardsV2() {
  return (
    <div className="w-full max-w-md mx-auto space-y-3">
      {workflows.map((workflow, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: index * 0.1,
          }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Left: Icon + Name */}
          <div className="flex items-center gap-4">
            {/* FIX: Larger icon with proper centering */}
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <StatusIcon type={workflow.status} size={28} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">{workflow.name}</span>
              <span className="text-xs text-gray-500">
                {workflow.status === "completed"
                  ? `Completed at ${workflow.time}`
                  : workflow.status === "running"
                  ? `Started at ${workflow.time}`
                  : `Failed at ${workflow.time}`}
              </span>
            </div>
          </div>

          {/* Right: Status badge */}
          <motion.div
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              workflow.status === "completed"
                ? "bg-green-100 text-green-700"
                : workflow.status === "running"
                ? "bg-blue-100 text-blue-700"
                : "bg-red-100 text-red-700"
            }`}
            animate={
              workflow.status === "running"
                ? {
                    opacity: [1, 0.6, 1],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            {workflow.status === "completed" ? "✓ Done" : workflow.status === "running" ? "Running..." : "Error"}
          </motion.div>
        </motion.div>
      ))}

      {/* Description */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">Built For All Departments</h3>
        <p className="text-sm text-gray-600">Consolidate your tools, empower your team</p>
      </motion.div>
    </div>
  );
}

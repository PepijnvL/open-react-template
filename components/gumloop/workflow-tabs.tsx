"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Workflow {
  id: string;
  name: string;
  subtitle: string;
  gradient: string;
  apps: Array<{ name: string; initials: string; gradient: string }>;
  steps: string[];
}

const workflows: Workflow[] = [
  {
    id: "marketing",
    name: "Marketing",
    subtitle: "An AI copilot for your marketing team",
    gradient: "from-pink-500 to-pink-600",
    apps: [
      { name: "X", initials: "X", gradient: "bg-gradient-to-br from-gray-800 to-black" },
      { name: "Instagram", initials: "IG", gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500" },
      { name: "Perplexity", initials: "P", gradient: "bg-gradient-to-br from-blue-500 to-cyan-500" },
      { name: "Apollo", initials: "AP", gradient: "bg-gradient-to-br from-indigo-500 to-purple-600" },
      { name: "Reddit", initials: "R", gradient: "bg-gradient-to-br from-orange-500 to-red-600" },
      { name: "Semrush", initials: "SR", gradient: "bg-gradient-to-br from-orange-400 to-orange-600" },
    ],
    steps: [
      "Categorize recent comments based on urgency",
      "Generate AI Report",
      "Identify users",
      "Create a Slack canvas and send to management",
    ],
  },
  {
    id: "sales",
    name: "Sales",
    subtitle: "Automate your entire sales pipeline",
    gradient: "from-blue-500 to-blue-600",
    apps: [
      { name: "Salesforce", initials: "SF", gradient: "bg-gradient-to-br from-blue-400 to-blue-600" },
      { name: "Apollo", initials: "AP", gradient: "bg-gradient-to-br from-indigo-500 to-purple-600" },
      { name: "LinkedIn", initials: "LI", gradient: "bg-gradient-to-br from-blue-600 to-blue-800" },
      { name: "Gmail", initials: "GM", gradient: "bg-gradient-to-br from-red-400 to-red-600" },
      { name: "HubSpot", initials: "HS", gradient: "bg-gradient-to-br from-orange-500 to-orange-700" },
      { name: "Calendar", initials: "C", gradient: "bg-gradient-to-br from-blue-500 to-blue-700" },
    ],
    steps: [
      "Read my Salesforce book of business",
      "Generate an AI analysis of the account",
      "Update each Salesforce book of business entry",
    ],
  },
  {
    id: "operations",
    name: "Operations",
    subtitle: "Streamline operational workflows",
    gradient: "from-purple-500 to-purple-600",
    apps: [
      { name: "Stripe", initials: "S", gradient: "bg-gradient-to-br from-purple-500 to-indigo-600" },
      { name: "Google Sheets", initials: "GS", gradient: "bg-gradient-to-br from-green-400 to-green-600" },
      { name: "Calendar", initials: "C", gradient: "bg-gradient-to-br from-blue-500 to-blue-700" },
      { name: "Gmail", initials: "GM", gradient: "bg-gradient-to-br from-red-400 to-red-600" },
      { name: "Slack", initials: "SL", gradient: "bg-gradient-to-br from-purple-400 to-pink-500" },
      { name: "Notion", initials: "N", gradient: "bg-gradient-to-br from-gray-700 to-gray-900" },
    ],
    steps: [
      "Read my Stripe payments database",
      "AI score each lead",
      "Check Calendar",
      "Draft an email to set-up a demo with leadership",
    ],
  },
  {
    id: "engineering",
    name: "Engineering",
    subtitle: "Build powerful automation workflows",
    gradient: "from-green-500 to-green-600",
    apps: [
      { name: "GitHub", initials: "GH", gradient: "bg-gradient-to-br from-gray-700 to-gray-900" },
      { name: "Linear", initials: "LN", gradient: "bg-gradient-to-br from-purple-600 to-indigo-700" },
      { name: "Slack", initials: "SL", gradient: "bg-gradient-to-br from-purple-400 to-pink-500" },
      { name: "Google Sheets", initials: "GS", gradient: "bg-gradient-to-br from-green-400 to-green-600" },
      { name: "HubSpot", initials: "HS", gradient: "bg-gradient-to-br from-orange-500 to-orange-700" },
      { name: "AWS", initials: "AWS", gradient: "bg-gradient-to-br from-orange-400 to-yellow-500" },
    ],
    steps: [
      "Listen to webhook events",
      "Parse and format webhook data into desired structure",
      "Write to your database of choice via a custom node",
    ],
  },
  {
    id: "support",
    name: "Support",
    subtitle: "Enhance customer support operations",
    gradient: "from-orange-500 to-orange-600",
    apps: [
      { name: "Zendesk", initials: "Z", gradient: "bg-gradient-to-br from-green-500 to-green-700" },
      { name: "Intercom", initials: "IC", gradient: "bg-gradient-to-br from-blue-500 to-blue-700" },
      { name: "Slack", initials: "SL", gradient: "bg-gradient-to-br from-purple-400 to-pink-500" },
      { name: "Gmail", initials: "GM", gradient: "bg-gradient-to-br from-red-400 to-red-600" },
      { name: "Notion", initials: "N", gradient: "bg-gradient-to-br from-gray-700 to-gray-900" },
      { name: "Google Docs", initials: "GD", gradient: "bg-gradient-to-br from-blue-500 to-blue-700" },
    ],
    steps: [
      "Read all Zendesk support tickets for this week",
      "Use AI to categorize which tickets are highest priority",
      "Generate an AI report summarizing important tickets",
      "Email management with customer insights",
    ],
  },
];

export default function WorkflowTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const workflow = workflows[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {workflows.map((wf, index) => (
          <motion.button
            key={wf.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap relative ${
              activeTab === index
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {activeTab === index && (
              <motion.div
                className="absolute inset-0 bg-gray-900 rounded-full"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{wf.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left: Apps + Steps */}
          <div className="space-y-6">
            {/* Apps Row */}
            <div className="flex gap-3 flex-wrap">
              {workflow.apps.map((app, index) => (
                <motion.div
                  key={app.name}
                  className={`w-14 h-14 rounded-xl ${app.gradient} flex items-center justify-center text-white text-xs font-bold shadow-lg border border-white/20`}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {app.initials}
                </motion.div>
              ))}
            </div>

            <motion.div
              className={`text-sm font-medium text-white px-4 py-2 rounded-lg bg-gradient-to-r ${workflow.gradient} inline-block shadow-lg`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {workflow.subtitle}
            </motion.div>

            {/* Workflow Steps */}
            <div className="space-y-3">
              {workflow.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: 0.35 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-7 h-7 rounded-full bg-gradient-to-r ${workflow.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Preview Card */}
          <motion.div
            className={`rounded-2xl bg-gradient-to-br ${workflow.gradient} p-1 shadow-2xl`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gray-200"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="flex-1">
                  <motion.div
                    className="h-3 bg-gray-200 rounded w-3/4 mb-2"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="h-2 bg-gray-100 rounded w-1/2"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 bg-gray-100 rounded ${
                      index === 0 ? "w-full" : index === 1 ? "w-5/6" : "w-4/6"
                    }`}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.3 + index * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                <motion.div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${workflow.gradient}`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Processing workflow...
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AppIcon {
  name: string;
  gradient: string;
  initials: string;
}

interface Integration {
  name: string;
  gradient: string;
  initials: string;
  description: string;
  fields: Array<{ label: string; value: string }>;
}

const appIcons: AppIcon[] = [
  { name: "Airtable", gradient: "bg-gradient-to-br from-yellow-400 to-orange-500", initials: "AT" },
  { name: "Salesforce", gradient: "bg-gradient-to-br from-blue-400 to-blue-600", initials: "SF" },
  { name: "Gmail", gradient: "bg-gradient-to-br from-red-400 to-red-600", initials: "GM" },
  { name: "Slack", gradient: "bg-gradient-to-br from-purple-400 to-pink-500", initials: "SL" },
  { name: "Apollo", gradient: "bg-gradient-to-br from-indigo-500 to-purple-600", initials: "AP" },
  { name: "Google Sheets", gradient: "bg-gradient-to-br from-green-400 to-green-600", initials: "GS" },
  { name: "Google Meet", gradient: "bg-gradient-to-br from-blue-500 to-green-500", initials: "GM" },
  { name: "Google Docs", gradient: "bg-gradient-to-br from-blue-500 to-blue-700", initials: "GD" },
  { name: "HubSpot", gradient: "bg-gradient-to-br from-orange-500 to-orange-700", initials: "HS" },
  { name: "Google Drive", gradient: "bg-gradient-to-br from-blue-400 to-yellow-400", initials: "GD" },
  { name: "Google Calendar", gradient: "bg-gradient-to-br from-blue-500 to-blue-700", initials: "GC" },
  { name: "Semrush", gradient: "bg-gradient-to-br from-orange-400 to-orange-600", initials: "SR" },
  { name: "Ahrefs", gradient: "bg-gradient-to-br from-blue-600 to-blue-800", initials: "AH" },
  { name: "Linear", gradient: "bg-gradient-to-br from-purple-600 to-indigo-700", initials: "LN" },
  { name: "Outlook", gradient: "bg-gradient-to-br from-blue-500 to-blue-700", initials: "OL" },
  { name: "Instagram", gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500", initials: "IG" },
  { name: "YouTube", gradient: "bg-gradient-to-br from-red-500 to-red-700", initials: "YT" },
  { name: "Notion", gradient: "bg-gradient-to-br from-gray-700 to-gray-900", initials: "N" },
  { name: "Microsoft Teams", gradient: "bg-gradient-to-br from-purple-600 to-blue-600", initials: "MT" },
  { name: "LinkedIn", gradient: "bg-gradient-to-br from-blue-600 to-blue-800", initials: "LI" },
  { name: "TikTok", gradient: "bg-gradient-to-br from-cyan-400 to-pink-500", initials: "TT" },
];

const integrations: Integration[] = [
  {
    name: "Salesforce",
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    initials: "SF",
    description: "Access and modify Salesforce CRM data",
    fields: [
      { label: "Name", value: "Jane Smith" },
      { label: "Company", value: "Gumloop" },
    ],
  },
  {
    name: "Apollo",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    initials: "AP",
    description: "Sales intelligence and prospecting",
    fields: [
      { label: "Query", value: "AI startups" },
      { label: "Location", value: "San Francisco" },
    ],
  },
  {
    name: "Gmail",
    gradient: "bg-gradient-to-br from-red-400 to-red-600",
    initials: "GM",
    description: "Read and send Gmail messages",
    fields: [
      { label: "To", value: "jane@gumloop.com" },
      { label: "Subject", value: "Welcome!" },
    ],
  },
  {
    name: "Slack",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-500",
    initials: "SL",
    description: "Send and receive Slack messages",
    fields: [
      { label: "Channel", value: "#general" },
      { label: "Message", value: "New lead generated!" },
    ],
  },
  {
    name: "Google Sheets",
    gradient: "bg-gradient-to-br from-green-400 to-green-600",
    initials: "GS",
    description: "Read and write Google Sheets data",
    fields: [
      { label: "Spreadsheet", value: "Lead Tracker" },
      { label: "Sheet", value: "Q4 2024" },
    ],
  },
  {
    name: "LinkedIn",
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    initials: "LI",
    description: "Interact with LinkedIn",
    fields: [
      { label: "Post Type", value: "Article" },
      { label: "Title", value: "The Future of AI" },
    ],
  },
];

export default function IntegrationCarousel() {
  const [selectedApp, setSelectedApp] = useState<number>(0);

  const selectedIntegration = integrations[selectedApp % integrations.length];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* App Icons Grid */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 px-4">
        {appIcons.map((app, index) => (
          <motion.button
            key={index}
            className={`w-14 h-14 rounded-xl ${app.gradient} flex items-center justify-center shadow-md border border-white/20 backdrop-blur-sm cursor-pointer relative overflow-hidden group`}
            onClick={() => setSelectedApp(index)}
            onMouseEnter={() => setSelectedApp(index)}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-white/30 rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <span className="text-white font-bold text-xs relative z-10 select-none">
              {app.initials}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Integration Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedApp}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-2xl"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="flex items-start gap-5 mb-8">
            {/* App icon with bounce animation */}
            <motion.div
              className={`w-16 h-16 rounded-2xl ${selectedIntegration.gradient} flex items-center justify-center shadow-lg border border-white/20`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.1,
              }}
            >
              <span className="text-white font-bold text-lg">
                {selectedIntegration.initials}
              </span>
            </motion.div>

            <div className="flex-1">
              <motion.h4
                className="text-2xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                {selectedIntegration.name}
              </motion.h4>
              <motion.p
                className="text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedIntegration.description}
              </motion.p>
            </div>
          </div>

          {/* Form fields with staggered animation */}
          <div className="space-y-4">
            {selectedIntegration.fields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: 0.25 + index * 0.1,
                }}
              >
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                  {field.label}
                </label>
                <motion.input
                  type="text"
                  value={field.value}
                  readOnly
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.1)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

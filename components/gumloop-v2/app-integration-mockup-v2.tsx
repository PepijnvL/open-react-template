"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IntegrationIcon } from "./icon-component";

interface Integration {
  name: string;
  key: string;
  description: string;
  fields: Array<{ label: string; value: string }>;
}

const integrations: Integration[] = [
  {
    name: "Gmail",
    key: "gmail",
    description: "Read and send Gmail messages",
    fields: [
      { label: "To", value: "jane@gumloop.com" },
      { label: "Subject", value: "Welcome!" },
      { label: "Body", value: "Hello and welcome to Gumloop!" },
      { label: "Priority", value: "High" },
    ],
  },
  {
    name: "Google Docs",
    key: "google-docs",
    description: "Create and edit Google Docs",
    fields: [
      { label: "Document", value: "Q4 Report.docx" },
      { label: "Template", value: "Business Template" },
      { label: "Folder", value: "Reports 2024" },
      { label: "Share", value: "team@gumloop.com" },
    ],
  },
  {
    name: "Ahrefs",
    key: "ahrefs",
    description: "Access SEO and backlink data",
    fields: [
      { label: "Target", value: "gumloop.com" },
      { label: "Analysis", value: "Backlink Profile" },
      { label: "Metrics", value: "DR, UR, Backlinks" },
      { label: "Export", value: "CSV Format" },
    ],
  },
];

export default function AppIntegrationMockupV2() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = integrations[selectedIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pick Any App</h3>
        <p className="text-sm text-gray-600">Visual representations of app connections</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {integrations.map((integration, index) => (
          <motion.button
            key={integration.key}
            onClick={() => setSelectedIndex(index)}
            className={`p-6 rounded-2xl border-2 transition-all ${
              selectedIndex === index
                ? "border-blue-500 bg-blue-50 shadow-lg"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
            }`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Properly sized and centered icon */}
            <div className="flex justify-center mb-4">
              <IntegrationIcon name={integration.key} size={64} />
            </div>

            {/* Aligned text content */}
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-1">{integration.name}</h4>
              <p className="text-xs text-gray-600">{integration.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Integration detail card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Header with icon and title */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
            <IntegrationIcon name={selected.key} size={72} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{selected.name}</h3>
              <p className="text-sm text-gray-600">{selected.description}</p>
            </div>
          </div>

          {/* Form fields in 2-column grid for better alignment */}
          <div className="grid md:grid-cols-2 gap-6">
            {selected.fields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: index * 0.1,
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

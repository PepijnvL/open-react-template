"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Inbox, Search, Upload, FolderPlus, Share2, MessageSquare, Hash, Paperclip } from "lucide-react";

// Define apps with their available actions - using Lucide icons
const apps = [
  {
    name: "Gmail",
    iconPath: "/icons/Gmail.svg",
    color: "from-red-500 to-red-600",
    actions: [
      { name: "Send Email", icon: Mail },
      { name: "Read Inbox", icon: Inbox },
      { name: "Search Messages", icon: Search },
    ],
  },
  {
    name: "Google Drive",
    iconPath: "/icons/Google Drive.svg",
    color: "from-blue-500 to-blue-600",
    actions: [
      { name: "Upload File", icon: Upload },
      { name: "Create Folder", icon: FolderPlus },
      { name: "Share Document", icon: Share2 },
    ],
  },
  {
    name: "Slack",
    iconPath: "/icons/Slack.svg",
    color: "from-purple-500 to-purple-600",
    actions: [
      { name: "Send Message", icon: MessageSquare },
      { name: "Create Channel", icon: Hash },
      { name: "Upload File", icon: Paperclip },
    ],
  },
];

export default function AppActionsFlowV3() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {apps.map((app, appIndex) => (
          <motion.div
            key={appIndex}
            className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-2xl p-6 shadow-xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: appIndex * 0.15,
            }}
          >
            {/* App Header - Icon on Top */}
            <div className="flex flex-col items-center mb-6">
              <motion.div
                className="mb-3 w-16 h-16 relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: appIndex * 0.15 + 0.2,
                }}
              >
                <Image
                  src={app.iconPath}
                  alt={app.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-white">{app.name}</h3>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-3"></div>
            </div>

            {/* Downward Arrow Indicator */}
            <div className="flex justify-center mb-4">
              <motion.svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: appIndex * 0.15 + 0.4,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>

            {/* Actions Section */}
            <div className="space-y-3">
              <div className="text-center mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Available Actions
                </span>
              </div>
              {app.actions.map((action, actionIndex) => (
                <motion.div
                  key={actionIndex}
                  className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-white/10 shadow-sm hover:bg-slate-800/80 hover:border-white/20 transition-all cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: appIndex * 0.15 + 0.5 + actionIndex * 0.1,
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                    <action.icon className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 flex-1">
                    {action.name}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

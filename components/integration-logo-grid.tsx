"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Integration {
  name: string;
  logo: string;
  color?: string;
}

interface IntegrationLogoGridProps {
  className?: string;
  integrations?: Integration[];
  showCount?: boolean;
  totalCount?: number;
}

const defaultIntegrations: Integration[] = [
  { name: "Apollo", logo: "/icons/integrations/apollo.svg", color: "#6C5CE7" },
  { name: "Outlook", logo: "/icons/integrations/outlook.svg", color: "#0078D4" },
  { name: "Slack", logo: "/icons/integrations/slack.svg", color: "#E01E5A" },
  { name: "Gmail", logo: "/icons/integrations/gmail.svg", color: "#EA4335" },
  { name: "Google Sheets", logo: "/icons/integrations/google-sheets.svg", color: "#0F9D58" },
  { name: "Notion", logo: "/icons/integrations/notion.svg", color: "#000000" },
  { name: "HubSpot", logo: "/icons/integrations/hubspot.svg", color: "#FF7A59" },
  { name: "LinkedIn", logo: "/icons/integrations/linkedin.svg", color: "#0A66C2" },
];

export default function IntegrationLogoGrid({
  className,
  integrations = defaultIntegrations,
  showCount = true,
  totalCount = 105,
}: IntegrationLogoGridProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Logo Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.name}
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
              style={{
                background: integration.color || "rgba(99, 102, 241, 0.4)",
              }}
            />

            {/* Logo card */}
            <div className="relative bg-white rounded-xl p-4 shadow-lg border border-gray-200 aspect-square flex items-center justify-center">
              {integration.logo.startsWith('/') ? (
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: integration.color }} />
              )}
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {integration.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Count Badge */}
      {showCount && (
        <motion.div
          className="text-center space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            {totalCount}+
          </div>
          <div className="text-gray-600 font-medium">
            Native nodes to choose from
          </div>
        </motion.div>
      )}
    </div>
  );
}

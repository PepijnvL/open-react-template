"use client";

import React from "react";

interface IntegrationIconProps {
  name: string;
  size?: number;
  className?: string;
}

// Professional SVG-based icon component
export const IntegrationIcon: React.FC<IntegrationIconProps> = ({
  name,
  size = 40,
  className = "",
}) => {
  const iconStyles: Record<string, { gradient: string; path?: string; text?: string }> = {
    salesforce: {
      gradient: "from-[#00A1E0] to-[#0070D2]",
      text: "SF",
    },
    apollo: {
      gradient: "from-[#6B46C1] to-[#9F7AEA]",
      text: "AP",
    },
    gmail: {
      gradient: "from-[#EA4335] to-[#D93025]",
      text: "GM",
    },
    slack: {
      gradient: "from-[#E01E5A] to-[#ECB22E]",
      text: "SL",
    },
    "google-sheets": {
      gradient: "from-[#0F9D58] to-[#0D7D47]",
      text: "GS",
    },
    "google-docs": {
      gradient: "from-[#4285F4] to-[#1967D2]",
      text: "GD",
    },
    outlook: {
      gradient: "from-[#0078D4] to-[#106EBE]",
      text: "OL",
    },
    notion: {
      gradient: "from-[#000000] to-[#333333]",
      text: "N",
    },
    linkedin: {
      gradient: "from-[#0077B5] to-[#00669C]",
      text: "LI",
    },
    hubspot: {
      gradient: "from-[#FF7A59] to-[#FF5C35]",
      text: "HS",
    },
    airtable: {
      gradient: "from-[#FCB400] to-[#E09900]",
      text: "AT",
    },
    ahrefs: {
      gradient: "from-[#FF6A00] to-[#E05C00]",
      text: "AH",
    },
    // AI Models
    openai: {
      gradient: "from-[#10A37F] to-[#0D8A6A]",
      text: "AI",
    },
    anthropic: {
      gradient: "from-[#D97757] to-[#C85A3A]",
      text: "A",
    },
    gemini: {
      gradient: "from-[#4285F4] to-[#1967D2]",
      text: "G",
    },
    copilot: {
      gradient: "from-[#8B5CF6] to-[#7C3AED]",
      text: "CP",
    },
    perplexity: {
      gradient: "from-[#20B8CD] to-[#1A9CB0]",
      text: "P",
    },
    meta: {
      gradient: "from-[#0668E1] to-[#0558CC]",
      text: "M",
    },
  };

  const iconData = iconStyles[name.toLowerCase()] || {
    gradient: "from-gray-400 to-gray-600",
    text: name.slice(0, 2).toUpperCase(),
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${iconData.gradient} shadow-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-white font-bold" style={{ fontSize: size * 0.3 }}>
        {iconData.text}
      </span>
    </div>
  );
};

// Status icon component for workflow status
export const StatusIcon: React.FC<{ type: "success" | "running" | "error"; size?: number }> = ({
  type,
  size = 20,
}) => {
  if (type === "success") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#10B981" />
        <path
          d="M9 12l2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "running") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="animate-spin">
        <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.25" />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#EF4444" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

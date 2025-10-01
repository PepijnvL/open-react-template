"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AppField {
  label: string;
  value: string;
}

interface AppIntegrationCardProps {
  appName: string;
  appLogo: string;
  description: string;
  fields: AppField[];
  accentColor?: string;
  className?: string;
  delay?: number;
}

export default function AppIntegrationCard({
  appName,
  appLogo,
  description,
  fields,
  accentColor = "#6366F1",
  className,
  delay = 0,
}: AppIntegrationCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-6 backdrop-blur-xl border border-white/10",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      {/* Glow on hover */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0"
        style={{
          background: `linear-gradient(135deg, ${accentColor}40, transparent)`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            {appLogo.startsWith('/') ? (
              <Image
                src={appLogo}
                alt={appName}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            ) : (
              <div
                className="w-8 h-8 rounded-lg"
                style={{ backgroundColor: accentColor }}
              />
            )}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold">{appName}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>

        {/* Fields */}
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={index} className="space-y-1">
              <label className="text-xs text-gray-500 uppercase tracking-wide">
                {field.label}
              </label>
              <div className="bg-slate-800/50 rounded-lg px-3 py-2 border border-slate-700">
                <input
                  type="text"
                  value={field.value}
                  readOnly
                  className="w-full bg-transparent text-white text-sm outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
}

// Pre-configured integration cards
export function GmailIntegrationCard({ className, delay }: { className?: string; delay?: number }) {
  return (
    <AppIntegrationCard
      appName="Gmail"
      appLogo="/icons/integrations/gmail.svg"
      description="Read and send Gmail messages"
      accentColor="#EA4335"
      fields={[
        { label: "To", value: "jane@gumloop.com" },
        { label: "Subject", value: "Welcome to Gumloop!" },
        { label: "Body", value: "Thanks for signing up..." },
        { label: "Priority", value: "High" },
      ]}
      className={className}
      delay={delay}
    />
  );
}

export function GoogleDocsIntegrationCard({ className, delay }: { className?: string; delay?: number }) {
  return (
    <AppIntegrationCard
      appName="Google Docs"
      appLogo="/icons/integrations/google-docs.svg"
      description="Create and edit Google Docs"
      accentColor="#4285F4"
      fields={[
        { label: "Document", value: "Meeting Notes" },
        { label: "Template", value: "Sales Call" },
        { label: "Folder", value: "Client Meetings" },
        { label: "Share", value: "team@gumloop.com" },
      ]}
      className={className}
      delay={delay}
    />
  );
}

export function AhrefsIntegrationCard({ className, delay }: { className?: string; delay?: number }) {
  return (
    <AppIntegrationCard
      appName="Ahrefs"
      appLogo="/icons/integrations/ahrefs.svg"
      description="Access SEO and backlink data"
      accentColor="#FF6B00"
      fields={[
        { label: "Target", value: "competitor.com" },
        { label: "Analysis", value: "Backlink profile" },
        { label: "Metrics", value: "DR, UR, Backlinks" },
        { label: "Export", value: "CSV format" },
      ]}
      className={className}
      delay={delay}
    />
  );
}

export function AirtableIntegrationCard({ className, delay }: { className?: string; delay?: number }) {
  return (
    <AppIntegrationCard
      appName="Airtable"
      appLogo="/icons/integrations/airtable.svg"
      description="Manage data in Airtable bases"
      accentColor="#FFC107"
      fields={[
        { label: "Base", value: "CRM" },
        { label: "Table", value: "Contacts" },
        { label: "Record", value: "New prospect" },
        { label: "View", value: "All contacts" },
      ]}
      className={className}
      delay={delay}
    />
  );
}

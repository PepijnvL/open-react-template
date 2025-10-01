"use client";

import { useState } from "react";

const integrations = [
  {
    name: "Salesforce",
    icon: "☁️",
    description: "Access and modify Salesforce CRM data",
    fields: [
      { label: "Name", value: "Jane Smith" },
      { label: "Company", value: "Gumloop" },
    ],
  },
  {
    name: "Apollo",
    icon: "🚀",
    description: "Sales intelligence and prospecting",
    fields: [
      { label: "Query", value: "AI startups" },
      { label: "Location", value: "San Francisco" },
    ],
  },
  {
    name: "Gmail",
    icon: "📧",
    description: "Read and send Gmail messages",
    fields: [
      { label: "To", value: "jane@gumloop.com" },
      { label: "Subject", value: "Welcome!" },
    ],
  },
  {
    name: "Slack",
    icon: "💬",
    description: "Send and receive Slack messages",
    fields: [
      { label: "Channel", value: "#general" },
      { label: "Message", value: "New lead generated!" },
    ],
  },
  {
    name: "Google Sheets",
    icon: "📊",
    description: "Read and write Google Sheets data",
    fields: [
      { label: "Spreadsheet", value: "Lead Tracker" },
      { label: "Sheet", value: "Q4 2024" },
    ],
  },
  {
    name: "LinkedIn",
    icon: "💼",
    description: "Interact with LinkedIn",
    fields: [
      { label: "Post Type", value: "Article" },
      { label: "Title", value: "The Future of AI" },
    ],
  },
];

const appIcons = [
  { name: "Airtable", icon: "🗂️" },
  { name: "Salesforce", icon: "☁️" },
  { name: "Gmail", icon: "📧" },
  { name: "Slack", icon: "💬" },
  { name: "Apollo", icon: "🚀" },
  { name: "Google Sheets", icon: "📊" },
  { name: "Google Meet", icon: "📹" },
  { name: "Google Docs", icon: "📝" },
  { name: "HubSpot", icon: "🧡" },
  { name: "Google Drive", icon: "📁" },
  { name: "Google Calendar", icon: "📅" },
  { name: "Semrush", icon: "📈" },
  { name: "Ahrefs", icon: "🔗" },
  { name: "Linear", icon: "📐" },
  { name: "Outlook", icon: "📮" },
  { name: "Instagram", icon: "📷" },
  { name: "YouTube", icon: "▶️" },
  { name: "Notion", icon: "📓" },
  { name: "Microsoft Teams", icon: "👥" },
  { name: "LinkedIn", icon: "💼" },
  { name: "TikTok", icon: "🎵" },
];

export default function IntegrationCarousel() {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);

  const selectedIntegration = selectedApp !== null ? integrations[selectedApp % integrations.length] : integrations[0];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* App Icons Grid */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 px-4">
        {appIcons.map((app, index) => (
          <button
            key={index}
            className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-2xl shadow-sm hover:shadow-lg hover:scale-110 hover:border-blue-400 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedApp(index)}
            onMouseEnter={() => setSelectedApp(index)}
          >
            {app.icon}
          </button>
        ))}
      </div>

      {/* Integration Detail Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-xl transition-all duration-500 animate-fade-in">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-3xl shadow-sm">
            {selectedIntegration.icon}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              {selectedIntegration.name}
            </h4>
            <p className="text-sm text-gray-600">
              {selectedIntegration.description}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {selectedIntegration.fields.map((field, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <label className="block text-xs font-medium text-gray-500 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                value={field.value}
                readOnly
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

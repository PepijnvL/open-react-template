"use client";

import { useState } from "react";

const workflows = [
  {
    id: "marketing",
    name: "Marketing",
    subtitle: "An AI copilot for your marketing team",
    color: "from-pink-500 to-pink-600",
    apps: ["X", "Instagram", "Perplexity", "Apollo", "Reddit", "Semrush"],
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
    color: "from-blue-500 to-blue-600",
    apps: ["Salesforce", "Apollo", "LinkedIn", "Gmail", "HubSpot", "Calendar"],
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
    color: "from-purple-500 to-purple-600",
    apps: ["Stripe", "Google Sheets", "Calendar", "Gmail", "Slack", "Notion"],
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
    color: "from-green-500 to-green-600",
    apps: ["GitHub", "Linear", "Slack", "Google Sheets", "HubSpot", "AWS"],
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
    color: "from-orange-500 to-orange-600",
    apps: ["Zendesk", "Intercom", "Slack", "Gmail", "Notion", "Google Docs"],
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
          <button
            key={wf.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
              activeTab === index
                ? "bg-gray-900 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
          >
            {wf.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Apps + Steps */}
        <div className="space-y-6">
          {/* Apps Row */}
          <div className="flex gap-2 flex-wrap">
            {workflow.apps.map((app, index) => (
              <div
                key={app}
                className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xs font-medium shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {app.slice(0, 2).toUpperCase()}
              </div>
            ))}
          </div>

          <div className={`text-sm font-medium text-white px-4 py-2 rounded-lg bg-gradient-to-r ${workflow.color} inline-block`}>
            {workflow.subtitle}
          </div>

          {/* Workflow Steps */}
          <div className="space-y-3">
            {workflow.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${workflow.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}>
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Preview Card */}
        <div className={`rounded-2xl bg-gradient-to-br ${workflow.color} p-8 shadow-2xl animate-fade-in`}>
          <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="flex-1">
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-2 bg-gray-100 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-2 bg-gray-100 rounded w-full animate-pulse" style={{ animationDelay: "100ms" }}></div>
              <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse" style={{ animationDelay: "200ms" }}></div>
              <div className="h-2 bg-gray-100 rounded w-4/6 animate-pulse" style={{ animationDelay: "300ms" }}></div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${workflow.color} animate-pulse`}></div>
              <span className="animate-pulse">Processing workflow...</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

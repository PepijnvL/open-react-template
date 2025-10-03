"use client";

import Image from "next/image";

export default function IntegrationDashboardPreview() {
  const integrations = [
    { name: "Shopify", icon: "/icons/Shopify.svg", status: "Active", syncs: "2.4k", lastSync: "2 min ago" },
    { name: "Slack", icon: "/icons/Slack.svg", status: "Active", syncs: "1.8k", lastSync: "5 min ago" },
    { name: "Gmail", icon: "/icons/Gmail.svg", status: "Active", syncs: "3.1k", lastSync: "1 min ago" },
    { name: "Google Drive", icon: "/icons/Google Drive.svg", status: "Active", syncs: "892", lastSync: "3 min ago" },
    { name: "Notion", icon: "/icons/Notion.svg", status: "Active", syncs: "456", lastSync: "10 min ago" },
    { name: "Outlook", icon: "/icons/Outlook.svg", status: "Active", syncs: "2.2k", lastSync: "4 min ago" },
  ];

  return (
    <div className="relative mx-auto max-w-5xl" data-aos="fade-up">
      {/* Dashboard Container */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-2xl">
        {/* Dashboard Header */}
        <div className="border-b border-gray-800 bg-gray-900/50 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-nacelle text-lg font-semibold text-white">Integrations</h3>
                <p className="text-xs text-gray-400">6 apps connected</p>
              </div>
            </div>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
              + Add Integration
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Integrations Grid - Card Based Layout */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-5 transition-all hover:border-emerald-500/30"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />

                <div className="relative space-y-4">
                  {/* Icon and Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 transition-colors group-hover:border-emerald-500/30">
                      <Image
                        src={integration.icon}
                        alt={integration.name}
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {integration.status}
                    </div>
                  </div>

                  {/* App Name */}
                  <div>
                    <h4 className="font-nacelle text-lg font-semibold text-white">{integration.name}</h4>
                    <p className="mt-1 text-xs text-gray-500">Last sync: {integration.lastSync}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between border-t border-gray-800 pt-3">
                    <div>
                      <div className="text-xs text-gray-500">Syncs today</div>
                      <div className="mt-0.5 font-semibold text-white">{integration.syncs}</div>
                    </div>
                    <button className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-emerald-500/30 hover:bg-gray-800">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Available Integrations Preview */}
          <div className="mt-6 rounded-lg border border-gray-800 bg-gray-950/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-300">Available Integrations</h4>
              <span className="text-xs text-gray-500">50+ apps</span>
            </div>
            <div className="flex -space-x-2">
              {["/icons/GitHub-dark.svg", "/icons/Discord.svg", "/icons/LinkedIn.svg", "/icons/Twitter.svg", "/icons/YouTube.svg"].map((icon, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center">
                  <Image src={icon} alt="" width={16} height={16} className="h-4 w-4" />
                </div>
              ))}
              <div className="h-8 w-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-xs text-gray-400">
                +45
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effects */}
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
    </div>
  );
}

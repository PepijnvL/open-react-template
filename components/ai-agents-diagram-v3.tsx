"use client";

import Image from "next/image";

export default function AIAgentsDiagramV3() {
  // App logos to show in Built-in Apps card
  const appLogos = [
    { name: "Slack", logo: "/icons/Slack.svg" },
    { name: "Gmail", logo: "/icons/Gmail.svg" },
    { name: "Shopify", logo: "/icons/Shopify.svg" },
    { name: "Notion", logo: "/icons/Notion.svg" },
    { name: "GitHub", logo: "/icons/GitHub-dark.svg" },
    { name: "Discord", logo: "/icons/Discord.svg" },
  ];

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ zIndex: 0 }}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Line from AI Agent to Built-in Apps */}
        <path
          d="M 400 200 Q 250 300 200 400"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        {/* Line from AI Agent to Custom Connectors */}
        <path
          d="M 400 200 L 400 400"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        {/* Line from AI Agent to MCP Tools */}
        <path
          d="M 400 200 Q 550 300 600 400"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content container */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Top: AI Agent Card (now in a card!) */}
        <div className="mb-32 flex justify-center" data-aos="fade-up">
          <div className="group relative w-80 rounded-2xl border border-purple-500/50 bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-purple-400/70 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Sparkle/AI Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20">
                <svg
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 font-nacelle text-xl font-bold text-white">
                  AI Agent
                </h3>
                <p className="text-sm text-gray-400">
                  Claude, GPT-4, Gemini & more
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Three cards in a row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Built-in Apps Card */}
          <div
            className="group relative rounded-2xl border border-indigo-500/50 bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-indigo-400/70 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="flex flex-col items-center gap-4 text-center">
              {/* App logos grid */}
              <div className="grid grid-cols-3 gap-3">
                {appLogos.map((app) => (
                  <div
                    key={app.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900/50 p-2 transition-all group-hover:bg-gray-800/80"
                  >
                    <Image
                      src={app.logo}
                      alt={app.name}
                      width={20}
                      height={20}
                      className="opacity-70 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-bold text-white">
                  50+ Built-in Apps
                </h3>
                <p className="text-sm text-gray-400">
                  Pre-built integrations ready to use
                </p>
              </div>
            </div>
          </div>

          {/* Custom Connectors Card */}
          <div
            className="group relative rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-emerald-400/70 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Plug Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20">
                <svg
                  className="h-8 w-8 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-bold text-white">
                  Custom Connectors
                </h3>
                <p className="text-sm text-gray-400">
                  Build your own in minutes
                </p>
              </div>
            </div>
          </div>

          {/* MCP Tools Card */}
          <div
            className="group relative rounded-2xl border border-orange-500/50 bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-orange-400/70 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Tools/Wrench Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                <svg
                  className="h-8 w-8 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-bold text-white">
                  MCP Tools
                </h3>
                <p className="text-sm text-gray-400">
                  Add any MCP tool as an action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

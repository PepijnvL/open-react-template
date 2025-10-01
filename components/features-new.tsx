"use client";

import BentoGrid, { BentoCard } from "@/components/bento-grid";
import { RollingNumber } from "@/components/animated-counter";
import Image from "next/image";

export default function FeaturesNew() {
  const integrationLogos = [
    { name: "Slack", logo: "/icons/Slack.svg" },
    { name: "Gmail", logo: "/icons/Gmail.svg" },
    { name: "Google", logo: "/icons/Google.svg" },
    { name: "Shopify", logo: "/icons/Shopify.svg" },
    { name: "Notion", logo: "/icons/Notion.svg" },
    { name: "GitHub", logo: "/icons/GitHub-dark.svg" },
  ];

  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Everything you need to automate
            </h2>
            <p className="text-lg text-indigo-200/65">
              Build sophisticated AI workflows with our intuitive drag-and-drop interface.
              No coding required—just connect, configure, and automate.
            </p>
          </div>

          {/* Bento Grid Features */}
          <BentoGrid>
            {/* Large card - Workflow Builder */}
            <BentoCard colSpan={2} rowSpan={2} variant="vibrant">
              <div className="flex h-full flex-col">
                <div className="mb-4">
                  <div className="mb-3 inline-block rounded-lg bg-indigo-500/20 p-3">
                    <svg
                      className="h-6 w-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Drag & Drop Builder
                  </h3>
                  <p className="text-gray-400">
                    Create complex workflows visually with our intuitive interface.
                    No coding required—build automation flows in minutes.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="rounded-lg border border-gray-800/50 bg-gray-900/50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      Active Workflows
                    </div>
                    <div className="text-4xl font-bold text-white">
                      <RollingNumber value={1234} duration={2000} separator />
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* AI-Powered */}
            <BentoCard>
              <div className="mb-3 inline-block rounded-lg bg-purple-500/20 p-3">
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                AI-Powered
              </h3>
              <p className="text-sm text-gray-400">
                Leverage advanced AI models to automate complex tasks intelligently.
              </p>
            </BentoCard>

            {/* Real-time Monitoring */}
            <BentoCard>
              <div className="mb-3 inline-block rounded-lg bg-blue-500/20 p-3">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Real-time Monitoring
              </h3>
              <p className="text-sm text-gray-400">
                Track workflows with detailed analytics and logs.
              </p>
            </BentoCard>

            {/* Custom Connectors with logos */}
            <BentoCard colSpan={2}>
              <div className="mb-3 inline-block rounded-lg bg-emerald-500/20 p-3">
                <svg
                  className="h-6 w-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Custom Connectors
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                Build custom connectors in minutes. Connect to any API without coding.
              </p>
              <div className="grid grid-cols-6 gap-3">
                {integrationLogos.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center justify-center rounded-lg bg-gray-800/30 p-2 transition-all hover:bg-gray-800/50"
                  >
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={24}
                      height={24}
                      className="opacity-70"
                    />
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Performance stat */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-orange-500/20 p-2">
                    <svg
                      className="h-6 w-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-400">
                    5-10x Faster
                  </h3>
                </div>
                <p className="text-2xl font-bold text-white">than n8n</p>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

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
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-emerald-200/50">
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                Built for Developers
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.emerald.200),theme(colors.gray.50),theme(colors.emerald.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Ship integrations in minutes, not months
            </h2>
            <p className="text-lg text-emerald-200/65">
              Lightning-fast execution, custom connectors without code, and built-in user management.
              Everything you need to build production-ready integrations.
            </p>
          </div>

          {/* Bento Grid Features */}
          <BentoGrid>
            {/* Large card - Performance */}
            <BentoCard colSpan={2} rowSpan={2} variant="vibrant">
              <div className="flex h-full flex-col">
                <div className="mb-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Executions in &lt;0.1 Seconds
                  </h3>
                  <p className="text-gray-400">
                    10x faster than competitors like n8n and Zapier. Built for real-time workflows
                    where milliseconds matter. Production-grade infrastructure that scales instantly.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="rounded-lg border border-gray-800/50 bg-gray-900/50 p-4">
                    <div className="mb-4 text-sm text-gray-400">
                      Average execution time
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">n8n / Zapier</div>
                        <div className="text-2xl font-bold text-red-400">1-3s</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Kariz</div>
                        <div className="text-2xl font-bold text-green-400">&lt;0.1s</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-800">
                      <div className="text-xs text-emerald-400 font-semibold">→ 10x faster for production workflows</div>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Custom Connectors - Now spans only 1 row */}
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
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Custom Connectors in Minutes
              </h3>
              <p className="text-sm text-gray-400">
                Build API connectors to any service without writing code. What takes weeks takes minutes here.
              </p>
            </BentoCard>

            {/* Integration showcase with logos */}
            <BentoCard colSpan={2}>
              <h3 className="mb-2 text-lg font-bold text-white">
                50+ Integrations (and growing)
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                Connect to popular apps instantly. Or build custom connectors for any API in minutes.
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

            {/* User Management for Projects */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-3 inline-block rounded-lg bg-cyan-500/20 p-3">
                    <svg
                      className="h-6 w-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Built-in User Management
                  </h3>
                  <p className="text-sm text-gray-400">
                    Let your users connect their own accounts. No OAuth headaches, no credential management.
                    Just magic links that work.
                  </p>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

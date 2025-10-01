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
              Everything you need to automate at scale
            </h2>
            <p className="text-lg text-indigo-200/65">
              From drag-and-drop workflow building to enterprise-grade user management.
              Built for teams that need speed, reliability, and customer-facing capabilities.
            </p>
          </div>

          {/* Bento Grid Features */}
          <BentoGrid>
            {/* Large card - Performance */}
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    10x Faster Execution
                  </h3>
                  <p className="text-gray-400">
                    Built for production workloads. Process thousands of workflows simultaneously
                    with enterprise-grade infrastructure. What takes minutes elsewhere, takes seconds here.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="rounded-lg border border-gray-800/50 bg-gray-900/50 p-4">
                    <div className="mb-4 text-sm text-gray-400">
                      Average execution time
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Others</div>
                        <div className="text-2xl font-bold text-red-400">2.5s</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Kariz</div>
                        <div className="text-2xl font-bold text-green-400">0.25s</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-800">
                      <div className="text-xs text-indigo-400 font-semibold">→ 10x faster for production workflows</div>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Custom Connectors */}
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
                Custom Connectors
              </h3>
              <p className="text-sm text-gray-400">
                Build API connectors visually in minutes. No code, no deployment needed.
              </p>
            </BentoCard>

            {/* Free Tier */}
            <BentoCard>
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Generous Free Tier
              </h3>
              <p className="text-sm text-gray-400">
                500 executions/month free forever. No credit card required.
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

            {/* Guided Onboarding (USP #4) */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-cyan-500/20 px-3 py-1.5">
                    <svg className="h-4 w-4 fill-cyan-400" viewBox="0 0 16 16">
                      <path d="M8 0L0 6v4c0 5.5 3.5 7.5 8 8 4.5-.5 8-2.5 8-8V6L8 0zm0 2.3L14 6.5v3.4c0 4-2.5 5.5-6 6-3.5-.5-6-2-6-6V6.5l6-4.2z"/>
                    </svg>
                    <span className="text-sm font-medium text-cyan-300">USP #4</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Expert Onboarding
                  </h3>
                  <p className="text-sm text-gray-400">
                    $249/month for dedicated help. What agencies charge $10k for.
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

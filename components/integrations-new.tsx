"use client";

import Marquee, { MarqueeItem } from "@/components/marquee";
import Image from "next/image";

export default function IntegrationsNew() {
  const integrations = [
    { name: "Slack", logo: "/icons/Slack.svg" },
    { name: "Gmail", logo: "/icons/Gmail.svg" },
    { name: "Google", logo: "/icons/Google.svg" },
    { name: "Shopify", logo: "/icons/Shopify.svg" },
    { name: "Notion", logo: "/icons/Notion.svg" },
    { name: "GitHub", logo: "/icons/GitHub-dark.svg" },
    { name: "Discord", logo: "/icons/Discord.svg" },
    { name: "LinkedIn", logo: "/icons/LinkedIn.svg" },
    { name: "YouTube", logo: "/icons/YouTube.svg" },
    { name: "Twitter", logo: "/icons/Twitter.svg" },
    { name: "Meta", logo: "/icons/Meta.svg" },
    { name: "Spotify", logo: "/icons/Spotify.svg" },
    { name: "WhatsApp", logo: "/icons/WhatsApp.svg" },
    { name: "Telegram", logo: "/icons/Telegram.svg" },
    { name: "Reddit", logo: "/icons/Reddit.svg" },
    { name: "TikTok", logo: "/icons/TikTok.svg" },
  ];

  // Split integrations into two rows
  const firstRow = integrations.slice(0, 8);
  const secondRow = integrations.slice(8);

  return (
    <section id="integrations" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Integrations
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Connect your favorite tools
            </h2>
            <p className="text-lg text-indigo-200/65">
              Integrate with popular apps and services. Or build custom connectors in minutes with our
              visual connector builder—no coding required.
            </p>
          </div>

          {/* Marquee integrations - First row */}
          <Marquee className="mb-4 py-4" pauseOnHover duration={30}>
            {firstRow.map((integration) => (
              <MarqueeItem key={integration.name} className="mx-6">
                <div className="group flex items-center gap-3 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 px-6 py-4 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={32}
                    height={32}
                    className="opacity-60 transition-opacity group-hover:opacity-100"
                  />
                  <span className="text-sm font-medium text-gray-300">{integration.name}</span>
                </div>
              </MarqueeItem>
            ))}
          </Marquee>

          {/* Marquee integrations - Second row (reverse) */}
          <Marquee className="py-4" pauseOnHover reverse duration={30}>
            {secondRow.map((integration) => (
              <MarqueeItem key={integration.name} className="mx-6">
                <div className="group flex items-center gap-3 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 px-6 py-4 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={32}
                    height={32}
                    className="opacity-60 transition-opacity group-hover:opacity-100"
                  />
                  <span className="text-sm font-medium text-gray-300">{integration.name}</span>
                </div>
              </MarqueeItem>
            ))}
          </Marquee>

          {/* Custom connector CTA */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 text-center">
            <h3 className="mb-2 font-nacelle text-xl font-semibold text-white">
              Don't see your tool?
            </h3>
            <p className="mb-4 text-gray-400">
              Build custom connectors in minutes with our visual builder. No coding required.
            </p>
            <a
              href="https://app.trykariz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300"
            >
              <span className="text-sm font-medium">Start building custom connectors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
                viewBox="0 0 12 12"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="m6.92 8-.787-.763 2.733-2.68H0V3.443h8.866L6.133.767 6.92 0 11 4 6.92 8Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

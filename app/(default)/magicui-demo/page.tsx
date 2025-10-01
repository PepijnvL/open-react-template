"use client";

import Marquee, { MarqueeItem } from "@/components/marquee";
import PricingSection from "@/components/pricing-section";
import BentoGrid, { BentoCard } from "@/components/bento-grid";
import { RollingNumber } from "@/components/animated-counter";
import Image from "next/image";

export default function MagicUIDemoPage() {
  // Company logos for marquee
  const companies = [
    { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
    { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft/00A4EF" },
    { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon/FF9900" },
    { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix/E50914" },
    { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube/FF0000" },
    { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/E4405F" },
    { name: "Uber", logo: "https://cdn.simpleicons.org/uber/000000" },
    { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify/1DB954" },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Free",
      description: "Perfect for individual users",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "Custom domain", included: true },
        { text: "SEO-optimizations", included: true },
        { text: "Auto-generated API docs", included: true },
        { text: "Built-in components library", included: true },
        { text: "E-commerce integration", included: false },
        { text: "User authentication system", included: false },
      ],
      cta: "Start Free",
      ctaLink: "#",
    },
    {
      name: "Startup",
      description: "Ideal for professionals and small teams",
      monthlyPrice: 12,
      yearlyPrice: 10,
      popular: true,
      features: [
        { text: "Custom domain", included: true },
        { text: "SEO-optimizations", included: true },
        { text: "Auto-generated API docs", included: true },
        { text: "Built-in components library", included: true },
        { text: "E-commerce integration", included: true },
        { text: "User authentication system", included: true },
        { text: "Multi-language support", included: true },
        { text: "Real-time collaboration tools", included: true },
      ],
      cta: "Upgrade to Pro",
      ctaLink: "#",
    },
    {
      name: "Enterprise",
      description: "Best for large teams and organizations",
      monthlyPrice: 24,
      yearlyPrice: 19,
      features: [
        { text: "Custom domain", included: true },
        { text: "SEO-optimizations", included: true },
        { text: "Auto-generated API docs", included: true },
        { text: "Built-in components library", included: true },
        { text: "E-commerce integration", included: true },
        { text: "User authentication system", included: true },
        { text: "Multi-language support", included: true },
        { text: "Real-time collaboration tools", included: true },
        { text: "Priority support", included: true },
        { text: "Custom integrations", included: true },
      ],
      cta: "Contact Sales",
      ctaLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          MagicUI Components Demo
        </h1>

        {/* Marquee Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
            Trusted by Leading Teams
          </h2>

          <Marquee className="py-4" pauseOnHover>
            {companies.map((company) => (
              <MarqueeItem key={company.name} className="mx-8">
                <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 px-6 py-4 backdrop-blur-sm">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={32}
                    height={32}
                    className="opacity-70"
                  />
                  <span className="text-sm font-medium text-gray-300">{company.name}</span>
                </div>
              </MarqueeItem>
            ))}
          </Marquee>

          {/* Second row with reverse direction */}
          <Marquee className="py-4" reverse pauseOnHover>
            {companies.map((company) => (
              <MarqueeItem key={`reverse-${company.name}`} className="mx-8">
                <div className="rounded-lg bg-gray-800/30 p-4 backdrop-blur-sm transition-all hover:bg-gray-800/50">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={48}
                    height={48}
                    className="opacity-80"
                  />
                </div>
              </MarqueeItem>
            ))}
          </Marquee>
        </section>

        {/* Bento Grid Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Empower Your Workflow
            </h2>
            <p className="text-gray-400">
              Everything you need to automate and scale your business
            </p>
          </div>

          <BentoGrid>
            {/* Large card - Stats */}
            <BentoCard colSpan={2} rowSpan={2} variant="vibrant">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Instant Insights
                  </h3>
                  <p className="text-gray-400">
                    Real-time analytics and reporting at your fingertips
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <p className="mb-2 text-sm text-gray-400">Total Automations</p>
                  <div className="text-7xl font-bold text-white">
                    <RollingNumber value={1234567} duration={2000} separator />
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Integration icons */}
            <BentoCard>
              <h3 className="mb-4 text-lg font-bold text-white">Integrations</h3>
              <div className="grid grid-cols-3 gap-4">
                {companies.slice(0, 6).map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center rounded-lg bg-gray-800/30 p-3 transition-all hover:bg-gray-800/50"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={32}
                      height={32}
                      className="opacity-70"
                    />
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Quick stat card 1 */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-green-500/20 p-2">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-400">Growth Rate</h3>
                </div>
                <p className="text-3xl font-bold text-white">+245%</p>
              </div>
            </BentoCard>

            {/* Quick stat card 2 */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-purple-500/20 p-2">
                    <svg
                      className="h-6 w-6 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-400">Time Saved</h3>
                </div>
                <p className="text-3xl font-bold text-white">2,400hrs</p>
              </div>
            </BentoCard>

            {/* Wide card */}
            <BentoCard colSpan={2}>
              <h3 className="mb-4 text-lg font-bold text-white">
                Built for Developers
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                Powerful APIs and SDKs to integrate with your existing tools
              </p>
              <div className="rounded-lg bg-gray-900/50 p-4 font-mono text-sm text-green-400">
                <code>
                  npm install @gumloop/sdk
                  <br />
                  <span className="text-gray-500">// Get started in seconds</span>
                </code>
              </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Pricing that scales with you
            </h2>
            <p className="text-gray-400">
              Whichever plan you pick, it's free until you love your docs. That's our promise.
            </p>
          </div>

          <PricingSection tiers={pricingTiers} />
        </section>

        {/* Status */}
        <section className="rounded-2xl border border-green-500/30 bg-green-900/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">✅ Components Ready</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <StatusItem label="Marquee / Infinite Scroll" status="working" />
              <StatusItem label="Pricing Section with Toggle" status="working" />
              <StatusItem label="Bento Grid Layout" status="working" />
              <StatusItem label="Glass Card Variants" status="working" />
            </div>
            <div className="space-y-2">
              <StatusItem label="Animated Counter" status="working" />
              <StatusItem label="Orbiting Icons" status="working" />
              <StatusItem label="Workflow Nodes" status="working" />
              <StatusItem label="Binary Matrix" status="working" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusItem({ label, status }: { label: string; status: "working" | "pending" }) {
  return (
    <div className="flex items-center gap-2">
      {status === "working" && (
        <div className="h-2 w-2 rounded-full bg-green-500" />
      )}
      {status === "pending" && (
        <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
      )}
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./glass-card";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  users?: string;
  features: PricingFeature[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
}

interface PricingSectionProps {
  tiers: PricingTier[];
  className?: string;
}

export default function PricingSection({ tiers, className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className={cn("w-full", className)}>
      {/* Billing Toggle */}
      <div className="mb-8 flex items-center justify-center gap-4">
        <span className={cn(
          "text-sm font-medium transition-colors",
          !isYearly ? "text-white" : "text-gray-400"
        )}>
          Monthly
        </span>

        <button
          onClick={() => setIsYearly(!isYearly)}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
            isYearly ? "bg-purple-600" : "bg-gray-600"
          )}
          role="switch"
          aria-checked={isYearly}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              isYearly ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>

        <span className={cn(
          "text-sm font-medium transition-colors",
          isYearly ? "text-white" : "text-gray-400"
        )}>
          Yearly
          <span className="ml-2 rounded-full bg-purple-600/20 px-2 py-0.5 text-xs text-purple-400">
            -20%
          </span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, index) => (
          <PricingCard
            key={index}
            tier={tier}
            isYearly={isYearly}
          />
        ))}
      </div>
    </div>
  );
}

function PricingCard({ tier, isYearly }: { tier: PricingTier; isYearly: boolean }) {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  const period = isYearly ? "year" : "month";

  return (
    <GlassCard
      variant={tier.popular ? "vibrant" : "default"}
      className={cn(
        "relative flex flex-col p-6",
        tier.popular && "border-purple-500/50 ring-2 ring-purple-500/20"
      )}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
            Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">{tier.name}</h3>
        <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
      </div>

      {/* Users */}
      {tier.users && (
        <div className="mb-3">
          <p className="text-sm font-medium text-purple-400">{tier.users}</p>
        </div>
      )}

      {/* Price */}
      <div className="mb-6">
        {price === null ? (
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-white">Custom pricing</span>
          </div>
        ) : (
          <>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-white">${price}</span>
              <span className="ml-2 text-gray-400">/{period}</span>
            </div>
            {isYearly && (
              <p className="mt-1 text-xs text-gray-500">
                billed annually
              </p>
            )}
          </>
        )}
      </div>

      {/* CTA Button */}
      <a
        href={tier.ctaLink}
        className={cn(
          "mb-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-all",
          tier.popular
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
            : "border border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700/50"
        )}
      >
        {tier.cta}
      </a>

      {/* Features List */}
      <div className="flex-1 space-y-3">
        {tier.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-gray-300">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

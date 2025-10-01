"use client";

import PricingSection from "@/components/pricing-section";
import { useCurrency } from "@/hooks/useCurrency";

export default function PricingNew() {
  const { formatPrice } = useCurrency();

  // Convert existing pricing data to new format
  const pricingTiers = [
    {
      name: "Free",
      description: "Perfect for developers and side projects",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "500 executions/month", included: true },
        { text: "Unlimited workflows", included: true },
        { text: "All integrations", included: true },
        { text: "Community support", included: true },
        { text: "User management", included: true },
        { text: "Custom connectors", included: true },
        { text: "Priority support", included: false },
        { text: "Advanced analytics", included: false },
      ],
      cta: "Get Started Free",
      ctaLink: "https://app.trykariz.com",
      popular: false,
    },
    {
      name: "Pro",
      description: "For growing businesses and teams",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        { text: "10,000 executions/month", included: true },
        { text: "Unlimited workflows", included: true },
        { text: "All integrations", included: true },
        { text: "Priority support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Team collaboration", included: true },
        { text: "99.9% uptime SLA", included: true },
        { text: "Dedicated integration expert", included: false },
      ],
      cta: "Get Started Free",
      ctaLink: "https://app.trykariz.com",
      popular: true,
    },
    {
      name: "Business",
      description: "Hands-on expert support for your integrations",
      monthlyPrice: 249,
      yearlyPrice: 199,
      features: [
        { text: "50,000 executions/month", included: true },
        { text: "Everything in Pro", included: true },
        { text: "Dedicated integration expert", included: true },
        { text: "Weekly strategy calls", included: true },
        { text: "Custom workflow building", included: true },
        { text: "Priority feature requests", included: true },
        { text: "On-premise deployment", included: false },
        { text: "Unlimited executions", included: false },
      ],
      cta: "Book Consultation",
      ctaLink: "https://cal.com/kariz-pepijn/meeting",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        { text: "Unlimited executions", included: true },
        { text: "Everything in Business", included: true },
        { text: "Custom integrations", included: true },
        { text: "On-premise deployment", included: true },
        { text: "99.99% uptime SLA", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom SLA agreements", included: true },
        { text: "White-label options", included: true },
      ],
      cta: "Book Consultation",
      ctaLink: "https://cal.com/kariz-pepijn/meeting",
      popular: false,
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t border-gray-800/50 py-12 md:py-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Pricing
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200 bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-400">
              Choose the plan that fits your needs. Start free, upgrade as you grow.
            </p>
          </div>

          {/* Pricing Section */}
          <PricingSection tiers={pricingTiers} />
        </div>
      </div>
    </section>
  );
}

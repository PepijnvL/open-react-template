"use client";

import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks/useCurrency";
import { Check } from "lucide-react";

export default function Pricing() {
  const { formatPrice } = useCurrency();
  const plans = [
    {
      name: "Free",
      description: "Perfect for developers and side projects",
      price: "0",
      period: "forever",
      features: [
        { text: "500 executions/month", highlight: true },
        { text: "Unlimited workflows", highlight: false },
        { text: "All integrations", highlight: false },
        { text: "Community support", highlight: false },
        { text: "User management", highlight: false },
        { text: "Custom connectors", highlight: false },
      ],
      cta: "Get Started Free",
      ctaLink: "https://app.trykariz.com",
      popular: false,
    },
    {
      name: "Pro",
      description: "For growing businesses and teams",
      price: "49",
      period: "per month",
      features: [
        { text: "10,000 executions/month", highlight: true },
        { text: "Everything in Free", highlight: false },
        { text: "Priority support", highlight: false },
        { text: "Advanced analytics", highlight: false },
        { text: "Team collaboration", highlight: false },
        { text: "99.9% uptime SLA", highlight: false },
      ],
      cta: "Get Started Free",
      ctaLink: "https://app.trykariz.com",
      popular: true,
    },
    {
      name: "Guided",
      description: "Hands-on expert support for your integrations",
      price: "249",
      period: "per month",
      features: [
        { text: "50,000 executions/month", highlight: true },
        { text: "Everything in Pro", highlight: false },
        { text: "Dedicated integration expert", highlight: false },
        { text: "Weekly strategy calls", highlight: false },
        { text: "Custom workflow building", highlight: false },
        { text: "Priority feature requests", highlight: false },
      ],
      cta: "Book Consultation",
      ctaLink: "https://cal.com/kariz-pepijn/meeting",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      period: "contact us",
      features: [
        { text: "Unlimited executions", highlight: true },
        { text: "Everything in Guided", highlight: false },
        { text: "Custom integrations", highlight: false },
        { text: "On-premise deployment", highlight: false },
        { text: "99.99% uptime SLA", highlight: false },
        { text: "Dedicated account manager", highlight: false },
      ],
      cta: "Contact Sales",
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

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-sm gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border ${
                  plan.popular
                    ? "border-indigo-500/50 bg-gray-900 shadow-lg shadow-indigo-500/10"
                    : "border-gray-800 bg-gray-900/50"
                } px-6 py-8`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Badge inside card */}
                {plan.popular && (
                  <div className="mb-4">
                    <div className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan name & description */}
                <div className={`${plan.popular ? "" : "mb-4 pt-9"}`}>
                  <h3 className="mb-2 font-nacelle text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 mt-6">
                  {plan.price === "Custom" ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-nacelle text-4xl font-bold text-white">
                        Custom pricing
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-gray-400">
                        {formatPrice(plan.price).replace(/\d+/, "")}
                      </span>
                      <span className="font-nacelle text-6xl font-bold text-white">
                        {formatPrice(plan.price).replace(/[^\d]/g, "")}
                      </span>
                      <span className="ml-1 text-sm text-gray-400">
                        /{plan.period.replace("per ", "")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="mb-8 flex-grow space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-5 w-5 shrink-0 ${
                        plan.popular ? "text-indigo-400" : "text-emerald-500"
                      }`} />
                      <span className={`text-base ${
                        feature.highlight ? "font-semibold text-gray-200" : "text-gray-300"
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  {plan.popular ? (
                    <Button
                      size="lg"
                      className="w-full bg-indigo-600 text-white hover:bg-indigo-500"
                    >
                      {plan.cta}
                    </Button>
                  ) : plan.name === "Free" ? (
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full border border-gray-700 bg-transparent text-gray-200 hover:border-gray-600 hover:bg-gray-800/50 hover:text-white"
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-gray-700 bg-transparent text-gray-200 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white"
                    >
                      {plan.cta}
                    </Button>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

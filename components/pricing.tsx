"use client";

import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks/useCurrency";

export default function Pricing() {
  const { formatPrice } = useCurrency();
  const plans = [
    {
      name: "Free",
      description: "Perfect for developers and side projects",
      price: "0",
      period: "forever",
      features: [
        "500 executions/month",
        "Unlimited workflows",
        "All integrations",
        "Community support",
        "User management",
        "Custom connectors",
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
        "10,000 executions/month",
        "Everything in Free",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "99.9% uptime SLA",
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
        "50,000 executions/month",
        "Everything in Pro",
        "Dedicated integration expert",
        "Weekly strategy calls",
        "Custom workflow building",
        "Priority feature requests",
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
        "Unlimited executions",
        "Everything in Guided",
        "Custom integrations",
        "On-premise deployment",
        "99.99% uptime SLA",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      ctaLink: "https://cal.com/kariz-pepijn/meeting",
      popular: false,
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-indigo-200/65">
              Choose the plan that fits your needs. Start free, upgrade as you grow.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl border border-gray-800/50 bg-gradient-to-b from-gray-900/50 to-gray-950/50 p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 font-nacelle text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-nacelle text-5xl font-bold text-white">
                      {formatPrice(plan.price)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">{plan.period}</p>
                </div>

                <ul className="mb-8 flex-grow space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M7.629 13.121l-3.75-3.75-1.758 1.758 5.508 5.508 11.25-11.25-1.758-1.758z" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button
                    size="lg"
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

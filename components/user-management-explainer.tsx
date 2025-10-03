"use client";

import { Check, X } from "lucide-react";

export default function UserManagementExplainer() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
              <svg className="h-4 w-4 fill-indigo-400" viewBox="0 0 16 16">
                <path d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              User Management
            </div>
            <h2 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl" data-aos="fade-up">
              The feature that changes everything
            </h2>
            <p className="text-lg text-gray-400">
              Traditional platforms are built for internal workflows. We're built for customer-facing integrations.
            </p>
          </div>

          {/* Comparison: Before vs After */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Without User Management */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-red-500/30"
              data-aos="fade-up"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-red-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="font-nacelle text-xl font-semibold text-white">
                    Without User Management
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>Customer requests integration → Your team builds it manually</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>Customer needs to update credentials → Support ticket</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>20 customers need same integration → Build 20 times</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>Customer wants to see their data → You send screenshots</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>Integration breaks → Customer emails support</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                  <p className="text-sm font-semibold text-red-300">Result:</p>
                  <p className="mt-1 text-sm text-gray-400">Your team becomes the integration middleman. Doesn't scale.</p>
                </div>
              </div>
            </div>

            {/* With User Management */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-emerald-500/30"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="font-nacelle text-xl font-semibold text-white">
                    With User Management (Us)
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>Customer clicks "Connect" → Sets up their own integration</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>Customer updates credentials → They do it themselves</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>20 customers need integration → Build once, deploy to all</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>Customer wants to see data → They have their own dashboard</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>Integration breaks → Customer sees error and can fix it</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <p className="text-sm font-semibold text-emerald-300">Result:</p>
                  <p className="mt-1 text-sm text-gray-400">Self-service integrations. Your team focuses on building features.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              How User Management Works
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "1", title: "You Build Once", desc: "Create integration workflow in your account" },
                { num: "2", title: "Enable for Customers", desc: 'Mark workflow as "customer-facing"' },
                { num: "3", title: "Customers Connect", desc: "They log in and set up their credentials" },
                { num: "4", title: "It Just Works", desc: "Each customer has their own isolated instance" }
              ].map((step, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-6 text-center transition-all hover:border-indigo-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 font-nacelle text-2xl font-bold text-indigo-400">
                      {step.num}
                    </div>
                    <h4 className="mb-2 font-nacelle font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mt-16">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              Common Use Cases
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-6 transition-all hover:border-purple-500/30" data-aos="fade-up">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 text-4xl">🏢</div>
                  <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">SaaS Products</h4>
                  <p className="mb-3 text-sm text-indigo-300">
                    "Connect your CRM" button in your app
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    Each customer connects their Salesforce, HubSpot, or Pipedrive. They manage their own connection.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-6 transition-all hover:border-purple-500/30" data-aos="fade-up" data-aos-delay={100}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 text-4xl">🎨</div>
                  <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">Agency Platforms</h4>
                  <p className="mb-3 text-sm text-indigo-300">
                    Separate workspace per client
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    Build automation once. Deploy to 50 clients. Each has isolated data and credentials.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-6 transition-all hover:border-purple-500/30" data-aos="fade-up" data-aos-delay={200}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 text-4xl">🏪</div>
                  <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">Multi-Store E-commerce</h4>
                  <p className="mb-3 text-sm text-indigo-300">
                    Each store = separate user
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    Sync inventory across 10 Shopify stores. Each store has its own credentials but shares workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

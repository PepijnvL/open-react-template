"use client";

import Image from "next/image";
import { ArrowRight, Check, Users, Zap, Shield, Clock } from "lucide-react";

export default function UserManagementExplainer() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
              <Users className="h-4 w-4" />
              User Management
            </div>
            <h2 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl" data-aos="fade-up">
              The feature that changes everything
            </h2>
            <p className="text-lg text-gray-400">
              Traditional platforms are built for internal workflows. We're built for customer-facing integrations.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
            {/* Large card - Magic Link showcase (spans 7 columns) */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-indigo-950/50 via-gray-900 to-gray-950 p-8 lg:col-span-7"
              data-aos="fade-up"
            >
              <div className="absolute right-0 top-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative">
                <div className="mb-6">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <Check className="h-3 w-3" />
                    With User Management
                  </div>
                  <h3 className="mb-2 font-nacelle text-2xl font-bold text-white">
                    Your customers connect their own apps
                  </h3>
                  <p className="text-gray-400">
                    Build once, deploy to unlimited customers. Each gets their own isolated workspace.
                  </p>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-950/50 shadow-2xl">
                  <Image
                    src="/images/how-it-works/step-2-magic-link.png"
                    alt="Customer-facing integration dashboard"
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>

                {/* Stats Row */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
                    <div className="font-nacelle text-2xl font-bold text-emerald-400">1x</div>
                    <div className="text-xs text-gray-400">Build</div>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
                    <div className="font-nacelle text-2xl font-bold text-emerald-400">∞</div>
                    <div className="text-xs text-gray-400">Customers</div>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
                    <div className="font-nacelle text-2xl font-bold text-emerald-400">0</div>
                    <div className="text-xs text-gray-400">Support Tickets</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - 2 stacked cards (spans 5 columns) */}
            <div className="grid gap-4 md:gap-6 lg:col-span-5">
              {/* Without User Management - condensed */}
              <div
                className="relative overflow-hidden rounded-2xl border border-red-900/50 bg-gradient-to-br from-red-950/30 to-gray-950 p-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-16 translate-y-16 rounded-full bg-red-500/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-4">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                      Without
                    </div>
                    <h3 className="mb-3 font-nacelle text-xl font-bold text-white">
                      The old way doesn't scale
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                      <span>Build integration 20x for 20 customers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                      <span>Credential updates = support tickets</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                      <span>Your team is the integration middleman</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                      <span>Customers email for data/screenshots</span>
                    </li>
                  </ul>

                  <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                    <p className="text-xs font-semibold text-red-300">Result: Doesn't scale</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits - 2x2 grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-4 transition-all hover:border-indigo-500/30" data-aos="fade-up" data-aos-delay={200}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <Zap className="mb-2 h-6 w-6 text-indigo-400" />
                    <div className="font-nacelle text-sm font-semibold text-white">Self-Service</div>
                    <p className="mt-1 text-xs text-gray-500">Customers connect instantly</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-4 transition-all hover:border-purple-500/30" data-aos="fade-up" data-aos-delay={250}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <Shield className="mb-2 h-6 w-6 text-purple-400" />
                    <div className="font-nacelle text-sm font-semibold text-white">Isolated</div>
                    <p className="mt-1 text-xs text-gray-500">Each customer separate</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-4 transition-all hover:border-pink-500/30" data-aos="fade-up" data-aos-delay={300}>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <Clock className="mb-2 h-6 w-6 text-pink-400" />
                    <div className="font-nacelle text-sm font-semibold text-white">Instant</div>
                    <p className="mt-1 text-xs text-gray-500">No dev time per customer</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950/50 p-4 transition-all hover:border-emerald-500/30" data-aos="fade-up" data-aos-delay={350}>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <Users className="mb-2 h-6 w-6 text-emerald-400" />
                    <div className="font-nacelle text-sm font-semibold text-white">Scalable</div>
                    <p className="mt-1 text-xs text-gray-500">Build once, ∞ users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works - Visual Flow */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              How User Management Works
            </h3>

            <div className="relative">
              {/* Connection lines for desktop */}
              <div className="absolute left-0 top-24 hidden h-0.5 w-full lg:block">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Step 1 */}
                <div className="group relative" data-aos="fade-up">
                  <div className="absolute -right-3 top-24 z-10 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-indigo-400" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all hover:border-indigo-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                        <span className="font-nacelle text-2xl font-bold text-indigo-400">1</span>
                      </div>

                      <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">You Build Once</h4>
                      <p className="mb-4 text-sm text-gray-400">Create integration workflow in your account</p>

                      <div className="overflow-hidden rounded-lg border border-gray-800/50">
                        <Image
                          src="/images/how-it-works/step-1-create-user.png"
                          alt="Create user interface"
                          width={400}
                          height={300}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group relative" data-aos="fade-up" data-aos-delay={100}>
                  <div className="absolute -right-3 top-24 z-10 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-indigo-400" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all hover:border-indigo-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                        <span className="font-nacelle text-2xl font-bold text-indigo-400">2</span>
                      </div>

                      <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">Customers Connect</h4>
                      <p className="mb-4 text-sm text-gray-400">They choose apps and set up their credentials</p>

                      <div className="overflow-hidden rounded-lg border border-gray-800/50">
                        <Image
                          src="/images/how-it-works/step-2-magic-link.png"
                          alt="Magic link interface"
                          width={400}
                          height={300}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group relative" data-aos="fade-up" data-aos-delay={200}>
                  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all hover:border-emerald-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                        <Check className="h-6 w-6 text-emerald-400" />
                      </div>

                      <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">It Just Works</h4>
                      <p className="mb-4 text-sm text-gray-400">Each customer has isolated instance & dashboard</p>

                      <div className="overflow-hidden rounded-lg border border-gray-800/50">
                        <Image
                          src="/images/how-it-works/step-3-authorize.png"
                          alt="Authorization interface"
                          width={400}
                          height={300}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases - Visual Cards */}
          <div className="mt-16">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              Common Use Cases
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {/* SaaS Products */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-purple-950/30 to-gray-950 p-6 transition-all hover:border-purple-500/30" data-aos="fade-up">
                <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-16 translate-y-16 rounded-full bg-purple-500/20 blur-3xl" />

                <div className="relative">
                  {/* Mini UI Mockup */}
                  <div className="mb-4 overflow-hidden rounded-lg border border-purple-500/20 bg-gray-950/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-400" />
                      <div className="h-1.5 flex-1 rounded bg-gray-800" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-purple-500/30 bg-purple-500/10 p-3">
                      <div className="flex items-center gap-2">
                        <Image src="/icons/Shopify.svg" alt="App" width={16} height={16} />
                        <span className="text-xs font-medium text-white">Connect your CRM</span>
                      </div>
                      <ArrowRight className="h-3 w-3 text-purple-400" />
                    </div>
                  </div>

                  <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">SaaS Products</h4>
                  <p className="mb-3 text-sm text-purple-300">
                    "Connect your CRM" button in your app
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    Each customer connects their Salesforce, HubSpot, or Pipedrive. They manage their own connection.
                  </p>
                </div>
              </div>

              {/* Agency Platforms */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-indigo-950/30 to-gray-950 p-6 transition-all hover:border-indigo-500/30" data-aos="fade-up" data-aos-delay={100}>
                <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-16 translate-y-16 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative">
                  {/* Mini UI Mockup - Multiple workspaces */}
                  <div className="mb-4 overflow-hidden rounded-lg border border-indigo-500/20 bg-gray-950/50 p-4">
                    <div className="space-y-2">
                      {['Client A', 'Client B', 'Client C'].map((client, i) => (
                        <div key={i} className="flex items-center gap-2 rounded border border-gray-800 bg-gray-900/50 p-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500/20 text-[8px] font-bold text-indigo-400">
                            {client.slice(-1)}
                          </div>
                          <div className="h-1 flex-1 rounded bg-gray-800" />
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">Agency Platforms</h4>
                  <p className="mb-3 text-sm text-indigo-300">
                    Separate workspace per client
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    Build automation once. Deploy to 50 clients. Each has isolated data and credentials.
                  </p>
                </div>
              </div>

              {/* Multi-Store E-commerce */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-pink-950/30 to-gray-950 p-6 transition-all hover:border-pink-500/30" data-aos="fade-up" data-aos-delay={200}>
                <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-16 translate-y-16 rounded-full bg-pink-500/20 blur-3xl" />

                <div className="relative">
                  {/* Mini UI Mockup - Store grid */}
                  <div className="mb-4 overflow-hidden rounded-lg border border-pink-500/20 bg-gray-950/50 p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((store) => (
                        <div key={store} className="rounded border border-gray-800 bg-gray-900/50 p-2 text-center">
                          <Image src="/icons/Shopify.svg" alt="Store" width={12} height={12} className="mx-auto mb-1" />
                          <div className="h-1 rounded bg-gray-800" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <h4 className="mb-2 font-nacelle text-lg font-semibold text-white">Multi-Store E-commerce</h4>
                  <p className="mb-3 text-sm text-pink-300">
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

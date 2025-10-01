"use client";

export default function UserManagementFeature() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-purple-200/50">
              <span className="bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                Built-in User Management
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.purple.200),theme(colors.gray.50),theme(colors.purple.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Let your customers manage their own integrations
            </h2>
            <p className="text-lg text-purple-200/65">
              The only automation platform with built-in user management. Give each customer their own
              workspace with isolated credentials and data. Perfect for SaaS products, agencies, and multi-tenant platforms.
            </p>
          </div>

          {/* Visual comparison */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Without User Management */}
            <div
              className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-6"
              data-aos="fade-up"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-xl font-semibold text-red-300">
                  Traditional Platforms
                </h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>You're the middleman for every integration request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Customers email support to update credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Build the same integration 50 times for 50 customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Support tickets for every integration issue</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-red-500/10 p-4">
                <p className="text-sm font-semibold text-red-300">The bottleneck:</p>
                <p className="text-sm text-gray-400">Your team can't scale. Every customer needs your help.</p>
              </div>
            </div>

            {/* With User Management */}
            <div
              className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-xl font-semibold text-green-300">
                  With Kariz
                </h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Customers click "Connect" and set up integrations themselves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>They manage their own credentials—no support needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Build once, deploy to unlimited customers instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Customers troubleshoot and fix issues in their dashboard</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-green-500/10 p-4">
                <p className="text-sm font-semibold text-green-300">The result:</p>
                <p className="text-sm text-gray-400">Self-service integrations. Your team builds features instead.</p>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-16" data-aos="fade-up">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              How It Works
            </h3>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  1
                </div>
                <h4 className="mb-2 font-semibold text-white">Build Once</h4>
                <p className="text-sm text-gray-400">Create your integration workflow in the visual builder</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  2
                </div>
                <h4 className="mb-2 font-semibold text-white">Enable for Customers</h4>
                <p className="text-sm text-gray-400">Mark the workflow as customer-facing with one click</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  3
                </div>
                <h4 className="mb-2 font-semibold text-white">Customers Connect</h4>
                <p className="text-sm text-gray-400">They log in and connect their apps themselves</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  4
                </div>
                <h4 className="mb-2 font-semibold text-white">It Just Works</h4>
                <p className="text-sm text-gray-400">Each customer has isolated credentials and data</p>
              </div>
            </div>
          </div>

          {/* Use cases */}
          <div data-aos="fade-up">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              Perfect For
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-purple-500/20 bg-gray-950/50 p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">SaaS Products</h4>
                <p className="mb-3 text-sm text-gray-400">
                  Add "Connect your CRM" buttons to your app
                </p>
                <p className="text-xs text-gray-500">
                  Each customer connects their Salesforce, HubSpot, or Pipedrive and manages it themselves.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-gray-950/50 p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">Digital Agencies</h4>
                <p className="mb-3 text-sm text-gray-400">
                  Separate workspace per client
                </p>
                <p className="text-xs text-gray-500">
                  Build automation once. Deploy to 50 clients. Each has isolated data and credentials.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-gray-950/50 p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">E-commerce Platforms</h4>
                <p className="mb-3 text-sm text-gray-400">
                  Each store = separate user
                </p>
                <p className="text-xs text-gray-500">
                  Manage 10 Shopify stores. Each store has its own credentials but shares workflows.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <a
              href="/for-startups"
              className="inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
            >
              <span>Learn more about user management</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

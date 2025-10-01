"use client";

import Image from "next/image";

export default function UserManagementFeature() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Built-in User Management
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Stop being the integration middleman
            </h2>
            <p className="text-lg text-indigo-200/65">
              The only automation platform with built-in user management. Give each customer their own
              workspace. They connect their apps, you build features.
            </p>
          </div>

          {/* Before/After Comparison - Side by side */}
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Before - Traditional */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-gray-950/90 p-8 backdrop-blur-sm transition-all hover:border-gray-700/50">
              <div className="absolute right-4 top-4 rounded-full bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-500">
                Without Kariz
              </div>

              <div className="mb-6">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gray-800/50 p-3">
                  <svg className="h-8 w-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-nacelle text-xl font-bold text-gray-300">
                  The Integration Bottleneck
                </h3>
                <p className="text-sm text-gray-500">
                  Your team handles every integration request manually
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Support emails every time a customer needs credentials updated",
                  "Rebuild the same integration for every customer",
                  "Your team as the middleman for every connection issue",
                  "Integration work that never ends",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                <p className="text-xs font-medium text-gray-500">Result: Your team can't scale</p>
              </div>
            </div>

            {/* After - With Kariz */}
            <div className="group relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-gray-900/90 to-gray-950/90 p-8 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
              <div className="absolute right-4 top-4 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400">
                With Kariz
              </div>

              <div className="mb-6">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-indigo-500/20 p-3">
                  <svg className="h-8 w-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-nacelle text-xl font-bold text-white">
                  Self-Service Integrations
                </h3>
                <p className="text-sm text-indigo-200/70">
                  Customers manage everything themselves
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Customers click 'Connect' and authenticate their own apps",
                  "Build once, deploy to unlimited customers instantly",
                  "They manage credentials, you stay out of the loop",
                  "Your team builds features instead of handling tickets",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-indigo-100/80">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-4">
                <p className="text-xs font-medium text-indigo-300">Result: Zero integration support tickets</p>
              </div>
            </div>
          </div>

          {/* Visual showcase - Image placeholder for product screenshot */}
          <div className="mb-16" data-aos="fade-up">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-3 shadow-2xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
                {/*
                  TODO: Add screenshot of user management dashboard here

                  <Image
                    src="/images/user-management-dashboard.png"
                    alt="Kariz user management dashboard"
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover"
                  />
                */}

                {/* Placeholder */}
                <div className="flex h-full w-full items-center justify-center p-12">
                  <div className="text-center">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 p-6">
                      <svg className="h-16 w-16 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="mb-1 text-sm text-gray-400">User Management Dashboard Screenshot</p>
                    <p className="text-xs text-gray-600">Show customer workspaces, credential management, access control</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10" />
            </div>
          </div>

          {/* Use cases - Cleaner grid */}
          <div data-aos="fade-up">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              Perfect for
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  ),
                  title: "B2B SaaS",
                  subtitle: "Integration marketplace for your product",
                  description: "Each customer connects their CRM, accounting software, or data warehouse. They manage it, you don't.",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  title: "Agencies",
                  subtitle: "One workspace per client",
                  description: "Build automation once. Deploy to 50 clients. Each with isolated data and credentials.",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  ),
                  title: "E-commerce",
                  subtitle: "Multi-store management",
                  description: "Manage 10 Shopify stores with one workflow. Each store owner has their own workspace.",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-3 transition-colors group-hover:bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {useCase.icon}
                    </svg>
                  </div>
                  <h4 className="mb-1 font-nacelle text-lg font-semibold text-white">
                    {useCase.title}
                  </h4>
                  <p className="mb-3 text-sm font-medium text-indigo-300">
                    {useCase.subtitle}
                  </p>
                  <p className="text-sm text-gray-400">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

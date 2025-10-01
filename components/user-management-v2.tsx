"use client";

import ComparisonSlider from "@/components/comparison-slider";

export default function UserManagementV2() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                User Management
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Stop being the integration middleman
            </h2>
            <p className="text-lg text-indigo-200/65">
              Built-in user management means your customers connect their own accounts.
              You build the integration once, they manage their own credentials forever.
            </p>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="mx-auto max-w-5xl" data-aos="fade-up">
            <ComparisonSlider
              beforeLabel="Without User Management"
              afterLabel="With Kariz"
              beforeContent={
                <div className="flex h-full min-h-[500px] flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black p-12">
                  <div className="max-w-lg text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                      <svg className="h-12 w-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="mb-4 font-nacelle text-2xl font-bold text-white">
                      The Integration Bottleneck
                    </h3>
                    <ul className="space-y-3 text-left text-gray-300">
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>You store customer API keys and credentials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Support tickets every time credentials expire</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Manual OAuth flow setup for each customer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>You become the integration middleman</span>
                      </li>
                    </ul>
                  </div>
                </div>
              }
              afterContent={
                <div className="flex h-full min-h-[500px] flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 p-12">
                  <div className="max-w-lg text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4">
                      <svg className="h-12 w-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="mb-4 font-nacelle text-2xl font-bold text-white">
                      Self-Service Integrations
                    </h3>
                    <ul className="space-y-3 text-left text-indigo-100">
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Customers connect their own accounts securely</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Auto-refresh tokens, zero support burden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>White-labeled OAuth flows out of the box</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You focus on building features, not plumbing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              }
            />
          </div>

          {/* Key benefits */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-3">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">
                  Secure by Design
                </h4>
                <p className="text-sm text-gray-400">
                  Never store customer credentials. End-to-end encrypted connections.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-3">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">
                  Lightning Setup
                </h4>
                <p className="text-sm text-gray-400">
                  Pre-built UI components. Your customers connect in seconds.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-cyan-500/10 p-3">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">
                  Zero Overhead
                </h4>
                <p className="text-sm text-gray-400">
                  No more support tickets for expired tokens or broken connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

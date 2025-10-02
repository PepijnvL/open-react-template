"use client";

export default function UserManagementV3() {
  const problems = [
    {
      icon: (
        <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      text: "You store customer API keys",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      text: "Support tickets for expired tokens",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: "Manual OAuth setup per customer",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "You become the middleman",
    },
  ];

  const solutions = [
    {
      icon: (
        <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Customers own their credentials",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      text: "Auto-refresh tokens, zero support",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "White-labeled OAuth flows",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: "Focus on features, not plumbing",
    },
  ];

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

          {/* Side-by-side comparison */}
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Without Kariz */}
              <div
                className="group relative rounded-2xl border border-red-500/20 bg-gradient-to-br from-gray-900/50 via-gray-950/50 to-black p-8 backdrop-blur-sm transition-all hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.1)]"
                data-aos="fade-up"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                    <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-nacelle text-xl font-bold text-white">
                    Without User Management
                  </h3>
                </div>

                <ul className="space-y-4">
                  {problems.map((problem, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 transition-colors group-hover:text-gray-200"
                    >
                      <span className="mt-0.5 shrink-0">{problem.icon}</span>
                      <span>{problem.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Kariz */}
              <div
                className="group relative rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/50 via-indigo-900/30 to-purple-950/50 p-8 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-nacelle text-xl font-bold text-white">
                    With Kariz
                  </h3>
                </div>

                <ul className="space-y-4">
                  {solutions.map((solution, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-indigo-100 transition-colors group-hover:text-white"
                    >
                      <span className="mt-0.5 shrink-0">{solution.icon}</span>
                      <span>{solution.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key benefits */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div
                className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={200}
              >
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

              <div
                className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={300}
              >
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

              <div
                className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={400}
              >
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

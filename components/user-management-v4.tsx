"use client";

export default function UserManagementV4() {
  const problems = [
    {
      text: "You store customer API keys",
    },
    {
      text: "Support tickets for expired tokens",
    },
    {
      text: "Manual OAuth setup per customer",
    },
    {
      text: "You become the middleman",
    },
  ];

  const solutions = [
    {
      text: "Customers own their credentials",
    },
    {
      text: "Auto-refresh tokens, zero support",
    },
    {
      text: "White-labeled OAuth flows",
    },
    {
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                        <svg className="h-3.5 w-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20">
                        <svg className="h-3.5 w-3.5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
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

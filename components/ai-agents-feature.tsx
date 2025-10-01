"use client";

export default function AIAgentsFeature() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-purple-200/50">
              <span className="bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                AI Agents + MCP
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.purple.200),theme(colors.gray.50),theme(colors.purple.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Build AI agents that can use any app
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-indigo-200/80">
              Create workflows with AI agents that can access{" "}
              <span className="font-semibold text-white">any integration</span>—whether built by us, you, or added as an MCP tool.
            </p>
          </div>

          {/* Visual diagram - Agent connecting to multiple tools */}
          <div className="mb-16" data-aos="fade-up">
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-gray-900/90 to-gray-950/90 p-8 backdrop-blur-sm md:p-12">
              {/* Central Agent Node */}
              <div className="relative flex flex-col items-center">
                <div className="relative z-10 mb-8">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 -m-2 animate-pulse rounded-full bg-purple-500/20 blur-xl" />

                    {/* Agent icon */}
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-600/20 shadow-lg shadow-purple-500/50 backdrop-blur-sm">
                      <svg className="h-12 w-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="mb-1 font-nacelle text-xl font-bold text-white">AI Agent</div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                      Claude, GPT-4, or any LLM
                    </div>
                  </div>
                </div>

                {/* Connection lines and tool nodes */}
                <div className="grid w-full gap-6 md:grid-cols-3">
                  {/* Built-in Apps */}
                  <div className="group relative">
                    <div className="absolute bottom-full left-1/2 h-8 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
                    <div className="rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent p-6 text-center transition-all hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                      <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-gray-900/50 p-3">
                        <svg className="h-8 w-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
                        </svg>
                      </div>
                      <h3 className="mb-2 font-nacelle font-semibold text-white">
                        50+ Built-in Apps
                      </h3>
                      <p className="text-xs text-gray-400">
                        Slack, Gmail, Shopify, Notion...
                      </p>
                    </div>
                  </div>

                  {/* Custom Connectors */}
                  <div className="group relative">
                    <div className="absolute bottom-full left-1/2 h-8 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
                    <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent p-6 text-center transition-all hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]">
                      <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-gray-900/50 p-3">
                        <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="mb-2 font-nacelle font-semibold text-white">
                        Custom Connectors
                      </h3>
                      <p className="text-xs text-gray-400">
                        Build your own in minutes
                      </p>
                    </div>
                  </div>

                  {/* MCP Tools */}
                  <div className="group relative">
                    <div className="absolute bottom-full left-1/2 h-8 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
                    <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-6 text-center transition-all hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                      <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-gray-900/50 p-3">
                        <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="mb-2 font-nacelle font-semibold text-white">
                        MCP Tools
                      </h3>
                      <p className="text-xs text-gray-400">
                        Add any MCP tool as an action
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl">
                <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>
            </div>
          </div>

          {/* Example use cases */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Example 1: AI Research Agent */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-8 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(147,51,234,0.1)]"
              data-aos="fade-up"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-400">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Example Workflow
                  </div>
                  <h3 className="mt-3 font-nacelle text-2xl font-bold text-white">
                    AI Research Agent
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-indigo-200/70">
                Agent searches web, reads Notion docs, sends summary to Slack
              </p>

              <div className="space-y-3">
                {[
                  { icon: "🤖", text: "Agent receives research query" },
                  { icon: "🔍", text: "Searches web using custom MCP tool" },
                  { icon: "📖", text: "Reads related Notion pages" },
                  { icon: "✍️", text: "Generates summary with GPT-4" },
                  { icon: "💬", text: "Posts to Slack channel" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-3 text-sm text-gray-300 transition-colors hover:bg-gray-900/70">
                    <span className="text-lg">{step.icon}</span>
                    <span className="pt-0.5">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example 2: Customer Support Agent */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-8 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(147,51,234,0.1)]"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-400">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Example Workflow
                  </div>
                  <h3 className="mt-3 font-nacelle text-2xl font-bold text-white">
                    Customer Support Agent
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-indigo-200/70">
                Agent handles tickets, checks CRM, creates follow-ups automatically
              </p>

              <div className="space-y-3">
                {[
                  { icon: "📧", text: "New support email arrives" },
                  { icon: "🔍", text: "Agent checks customer in HubSpot" },
                  { icon: "🧠", text: "Analyzes issue with Claude" },
                  { icon: "✅", text: "Creates ticket in Linear" },
                  { icon: "📅", text: "Schedules follow-up reminder" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-3 text-sm text-gray-300 transition-colors hover:bg-gray-900/70">
                    <span className="text-lg">{step.icon}</span>
                    <span className="pt-0.5">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key benefits */}
          <div className="mt-12 grid gap-6 md:grid-cols-3" data-aos="fade-up">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: "Any LLM, Any Tool",
                description: "Use Claude, GPT-4, or any model. Connect to 50+ apps or add your own MCP tools.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                ),
                title: "Visual Builder",
                description: "Build complex agent workflows without code. Drag, drop, test, deploy.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: "Built for Production",
                description: "Monitoring, error handling, and user management built in. Deploy with confidence.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-3">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {benefit.icon}
                  </svg>
                </div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

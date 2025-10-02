"use client";

import AIAgentsDiagramV3 from "./ai-agents-diagram-v3";
import WorkflowExampleCardV3 from "./workflow-example-card-v3";

export default function AIAgentsFeatureV3() {
  return (
    <section id="ai-agents" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                AI Agents
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Connect AI agents to anything
            </h2>
            <p className="text-lg text-indigo-200/65">
              Give your AI agents access to 50+ built-in apps, custom connectors, and MCP tools.
              Build autonomous workflows that actually get things done.
            </p>
          </div>

          {/* AI Agents Diagram */}
          <div className="mb-16">
            <AIAgentsDiagramV3 />
          </div>

          {/* Example Workflows */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h3 className="mb-4 font-nacelle text-2xl font-semibold text-white">
              Real AI Workflows
            </h3>
            <p className="text-gray-400">
              See how teams use AI agents to automate complex processes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* AI Research Agent */}
            <WorkflowExampleCardV3
              title="AI Research Agent"
              description="Automated research and reporting pipeline"
              nodes={[
                { icon: "/icons/apps/webhook.svg", label: "Webhook", color: "#6366f1" },
                { icon: "ai", label: "Claude", color: "#8b5cf6" },
                { icon: "/icons/Notion.svg", label: "Notion", color: "#000000" },
                { icon: "/icons/Slack.svg", label: "Slack", color: "#611f69" },
              ]}
              delay={0}
            />

            {/* Customer Support Agent */}
            <WorkflowExampleCardV3
              title="Customer Support Agent"
              description="Automated ticket triage and follow-ups"
              nodes={[
                { icon: "/icons/apps/gmail.svg", label: "Gmail", color: "#EA4335" },
                { icon: "ai", label: "GPT-4", color: "#10a37f" },
                { icon: "/icons/apps/http.svg", label: "CRM", color: "#ff7a59" },
                { icon: "/icons/apps/slack.svg", label: "Slack", color: "#611f69" },
              ]}
              delay={100}
            />

            {/* E-commerce Automation */}
            <WorkflowExampleCardV3
              title="E-commerce Order Processor"
              description="Smart order routing and inventory management"
              nodes={[
                { icon: "/icons/apps/shopify.svg", label: "Shopify", color: "#96BF48" },
                { icon: "ai", label: "Claude", color: "#8b5cf6" },
                { icon: "/icons/apps/postgres.svg", label: "Database", color: "#18bfff" },
                { icon: "/icons/apps/slack.svg", label: "Slack", color: "#611f69" },
              ]}
              delay={200}
            />

            {/* Content Pipeline */}
            <WorkflowExampleCardV3
              title="Content Publishing Pipeline"
              description="Automated content creation and distribution"
              nodes={[
                { icon: "/icons/YouTube.svg", label: "YouTube", color: "#FF0000" },
                { icon: "ai", label: "GPT-4", color: "#10a37f" },
                { icon: "/icons/Google.svg", label: "Docs", color: "#4285F4" },
                { icon: "/icons/Twitter.svg", label: "Twitter", color: "#1DA1F2" },
              ]}
              delay={300}
            />
          </div>

          {/* CTA */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <a
              href="https://app.trykariz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300"
            >
              <span className="text-sm font-medium">Build your first AI agent workflow</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
                viewBox="0 0 12 12"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="m6.92 8-.787-.763 2.733-2.68H0V3.443h8.866L6.133.767 6.92 0 11 4 6.92 8Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

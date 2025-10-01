"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GlassCard from "./glass-card";
import BinaryMatrix from "./binary-matrix";
import { RollingNumber } from "./animated-counter";

type UseCase = "Marketing" | "Sales" | "Operations" | "Engineering" | "Support";

interface WorkflowStep {
  icon: string;
  label: string;
  description: string;
}

interface UseCaseWorkflow {
  title: string;
  subtitle: string;
  integrations: Array<{ icon: string; name: string }>;
  steps: WorkflowStep[];
  output: React.ReactNode;
}

const useCaseWorkflows: Record<UseCase, UseCaseWorkflow> = {
  Marketing: {
    title: "Marketing",
    subtitle: "An AI copilot for your marketing team",
    integrations: [
      { icon: "https://cdn.simpleicons.org/x/000000", name: "X" },
      { icon: "https://cdn.simpleicons.org/instagram/E4405F", name: "Instagram" },
      { icon: "https://cdn.simpleicons.org/reddit/FF4500", name: "Reddit" },
      { icon: "https://cdn.simpleicons.org/semrush/FF642D", name: "Semrush" },
    ],
    steps: [
      {
        icon: "https://cdn.simpleicons.org/reddit/FF4500",
        label: "Categorize recent comments",
        description: "based on urgency",
      },
      {
        icon: "https://cdn.simpleicons.org/openai/412991",
        label: "Generate AI Report",
        description: "",
      },
      {
        icon: "https://cdn.simpleicons.org/slack/4A154B",
        label: "Identify users",
        description: "",
      },
      {
        icon: "https://cdn.simpleicons.org/slack/4A154B",
        label: "Create a Slack canvas",
        description: "and send to management",
      },
    ],
    output: (
      <GlassCard className="w-full max-w-md" padding="lg">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://cdn.simpleicons.org/slack/4A154B"
              alt="Slack"
              width={32}
              height={32}
            />
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Weekly Social Media
              <br />
              Sentiment Report
            </h3>
            <div className="mt-3 rounded-lg bg-purple-500/10 p-3">
              <div className="text-xs font-semibold text-purple-300">Notable Mentions</div>
              <div className="mt-2 space-y-1 text-xs text-gray-300">
                <div>• Reddit post gained 2.5K upvotes</div>
                <div>• Instagram engagement up 34%</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-pink-500/10 p-3">
              <div className="text-xs font-semibold text-pink-300">Action Items</div>
              <div className="mt-2 space-y-1 text-xs text-gray-300">
                <div>• Address negative sentiment on X</div>
                <div>• Boost top-performing content</div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    ),
  },
  Sales: {
    title: "Sales",
    subtitle: "Automate your sales pipeline",
    integrations: [
      { icon: "https://cdn.simpleicons.org/salesforce/00A1E0", name: "Salesforce" },
      { icon: "https://cdn.simpleicons.org/hubspot/FF7A59", name: "HubSpot" },
      { icon: "https://cdn.simpleicons.org/google/4285F4", name: "Gmail" },
    ],
    steps: [
      {
        icon: "https://cdn.simpleicons.org/salesforce/00A1E0",
        label: "Read Salesforce",
        description: "book of business",
      },
      {
        icon: "https://cdn.simpleicons.org/openai/412991",
        label: "Generate AI analysis",
        description: "of the account",
      },
      {
        icon: "https://cdn.simpleicons.org/salesforce/00A1E0",
        label: "Update Salesforce",
        description: "entries",
      },
    ],
    output: (
      <GlassCard className="w-full max-w-md" padding="lg">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Salesforce Book of Business</div>
          <div className="space-y-2">
            {["Acme Corp", "TechStart Inc", "Global Solutions"].map((company, i) => (
              <div key={i} className="rounded-lg border border-gray-700 bg-gray-800/50 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white">{company}</div>
                  <div className="rounded bg-green-500/20 px-2 py-1 text-xs text-green-300">
                    High Priority
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
            Processing updates...
          </div>
        </div>
      </GlassCard>
    ),
  },
  Operations: {
    title: "Operations",
    subtitle: "Streamline operational workflows",
    integrations: [
      { icon: "https://cdn.simpleicons.org/stripe/008CDD", name: "Stripe" },
      { icon: "https://cdn.simpleicons.org/googlesheets/34A853", name: "Google Sheets" },
      { icon: "https://cdn.simpleicons.org/hubspot/FF7A59", name: "HubSpot" },
    ],
    steps: [
      {
        icon: "https://cdn.simpleicons.org/stripe/008CDD",
        label: "Read Stripe payments",
        description: "database",
      },
      {
        icon: "https://cdn.simpleicons.org/openai/412991",
        label: "AI score each lead",
        description: "",
      },
      {
        icon: "https://cdn.simpleicons.org/googlecalendar/4285F4",
        label: "Check Calendar",
        description: "",
      },
      {
        icon: "https://cdn.simpleicons.org/gmail/EA4335",
        label: "Draft an email",
        description: "to set-up a demo",
      },
    ],
    output: (
      <GlassCard className="w-full max-w-md" padding="lg">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Booking a Demo</div>
          <div className="space-y-2 text-xs">
            <div>
              <div className="text-gray-400">To</div>
              <div className="text-white">john@example.com</div>
            </div>
            <div>
              <div className="text-gray-400">Subject</div>
              <div className="text-white">Schedule Your Demo</div>
            </div>
            <div>
              <div className="text-gray-400">Content</div>
              <div className="mt-2 rounded border border-gray-700 bg-gray-800/50 p-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs">Reading calendar events...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    ),
  },
  Engineering: {
    title: "Engineering",
    subtitle: "Automate development workflows",
    integrations: [
      { icon: "https://cdn.simpleicons.org/github/181717", name: "GitHub" },
      { icon: "https://cdn.simpleicons.org/linear/5E6AD2", name: "Linear" },
      { icon: "https://cdn.simpleicons.org/slack/4A154B", name: "Slack" },
    ],
    steps: [
      {
        icon: "https://cdn.simpleicons.org/webhook/2088FF",
        label: "Listen to webhook",
        description: "events",
      },
      {
        icon: "https://cdn.simpleicons.org/openai/412991",
        label: "Parse and format",
        description: "webhook data",
      },
      {
        icon: "https://cdn.simpleicons.org/googlesheets/34A853",
        label: "Write to database",
        description: "via custom node",
      },
    ],
    output: (
      <GlassCard className="w-full max-w-md" padding="lg">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              src="https://cdn.simpleicons.org/amazonaws/FF9900"
              alt="AWS"
              width={24}
              height={24}
            />
            <div className="text-sm font-semibold text-white">Amazon RDS</div>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-3">
            <BinaryMatrix height="120px" fontSize={10} speed={30} />
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
            Verifying data with tool calls
          </div>
        </div>
      </GlassCard>
    ),
  },
  Support: {
    title: "Support",
    subtitle: "Enhance customer support operations",
    integrations: [
      { icon: "https://cdn.simpleicons.org/zendesk/03363D", name: "Zendesk" },
      { icon: "https://cdn.simpleicons.org/gmail/EA4335", name: "Gmail" },
      { icon: "https://cdn.simpleicons.org/slack/4A154B", name: "Slack" },
    ],
    steps: [
      {
        icon: "https://cdn.simpleicons.org/zendesk/03363D",
        label: "Read all Zendesk tickets",
        description: "for this week",
      },
      {
        icon: "https://cdn.simpleicons.org/openai/412991",
        label: "AI categorize",
        description: "highest priority",
      },
      {
        icon: "https://cdn.simpleicons.org/openai/412991",
        label: "Generate AI report",
        description: "summarizing tickets",
      },
      {
        icon: "https://cdn.simpleicons.org/gmail/EA4335",
        label: "Email management",
        description: "with customer insights",
      },
    ],
    output: (
      <GlassCard className="w-full max-w-md" padding="lg">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Weekly Support Insights</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg border border-red-900/50 bg-red-900/20 p-3">
              <div className="text-xs text-white">Critical Bugs</div>
              <div className="text-lg font-bold text-red-400">10</div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-blue-900/50 bg-blue-900/20 p-3">
              <div className="text-xs text-white">Feature Requests</div>
              <div className="text-lg font-bold text-blue-400">
                <RollingNumber value={23} duration={800} />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-purple-900/50 bg-purple-900/20 p-3">
              <div className="text-xs text-white">Enterprise Call-outs</div>
              <div className="text-lg font-bold text-purple-400">
                <RollingNumber value={5} duration={800} />
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    ),
  },
};

interface GumloopHeroProps {
  /** Custom className */
  className?: string;
  /** Auto-rotate use cases (default: true) */
  autoRotate?: boolean;
  /** Auto-rotate interval in milliseconds (default: 5000) */
  rotateInterval?: number;
}

export default function GumloopHero({
  className,
  autoRotate = true,
  rotateInterval = 5000,
}: GumloopHeroProps) {
  const [activeUseCase, setActiveUseCase] = useState<UseCase>("Marketing");
  const [animating, setAnimating] = useState(false);

  const useCases: UseCase[] = ["Marketing", "Sales", "Operations", "Engineering", "Support"];
  const workflow = useCaseWorkflows[activeUseCase];

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveUseCase((prev) => {
          const currentIndex = useCases.indexOf(prev);
          const nextIndex = (currentIndex + 1) % useCases.length;
          return useCases[nextIndex];
        });
        setAnimating(false);
      }, 300);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval]);

  const handleUseCaseChange = (useCase: UseCase) => {
    if (useCase === activeUseCase) return;

    setAnimating(true);
    setTimeout(() => {
      setActiveUseCase(useCase);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Use case selector */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {useCases.map((useCase) => (
          <button
            key={useCase}
            onClick={() => handleUseCaseChange(useCase)}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
              activeUseCase === useCase
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                : "border border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-gray-300"
            )}
          >
            {useCase}
          </button>
        ))}
      </div>

      {/* Workflow display */}
      <div
        className={cn(
          "transition-opacity duration-300",
          animating ? "opacity-0" : "opacity-100"
        )}
      >
        {/* Integration icons */}
        <div className="mb-6 flex items-center justify-center gap-4">
          {workflow.integrations.map((integration, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-700 bg-gray-800/50 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-gray-600"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={integration.icon}
                alt={integration.name}
                width={32}
                height={32}
                className="opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white">{workflow.title}</h2>
          <p className="text-gray-400">{workflow.subtitle}</p>
        </div>

        {/* Workflow visualization */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-4">
            {workflow.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                  <Image src={step.icon} alt={step.label} width={24} height={24} />
                </div>
                <div>
                  <div className="font-medium text-white">{step.label}</div>
                  {step.description && (
                    <div className="mt-1 text-sm text-gray-400">{step.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Output */}
          <div className="flex items-center justify-center">{workflow.output}</div>
        </div>
      </div>
    </div>
  );
}

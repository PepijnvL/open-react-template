"use client";

import { OrbitingIcons } from "@/components/orbiting-circles";
import GlassCard from "@/components/glass-card";
import { RollingNumber } from "@/components/animated-counter";
import BinaryMatrix from "@/components/binary-matrix";
import WorkflowNodes from "@/components/workflow-nodes";

export default function AnimationsTestPage() {
  // App icons for demonstrations
  const appIcons = [
    { src: "https://cdn.simpleicons.org/slack/4A154B", alt: "Slack" },
    { src: "https://cdn.simpleicons.org/google/4285F4", alt: "Google" },
    { src: "https://cdn.simpleicons.org/github/181717", alt: "GitHub" },
    { src: "https://cdn.simpleicons.org/notion/000000", alt: "Notion" },
    { src: "https://cdn.simpleicons.org/salesforce/00A1E0", alt: "Salesforce" },
    { src: "https://cdn.simpleicons.org/hubspot/FF7A59", alt: "HubSpot" },
  ];

  // Workflow nodes for demonstration
  const workflowNodes = [
    {
      id: "1",
      label: "Collect Data",
      icon: "https://cdn.simpleicons.org/googledrive/4285F4",
      description: "Gather information from sources",
      status: "complete" as const,
      color: "#4285F4",
    },
    {
      id: "2",
      label: "Process with AI",
      icon: "https://cdn.simpleicons.org/openai/412991",
      description: "Analyze and transform data",
      status: "active" as const,
      color: "#412991",
    },
    {
      id: "3",
      label: "Generate Output",
      icon: "https://cdn.simpleicons.org/googledocs/34A853",
      description: "Create final deliverables",
      status: "idle" as const,
      color: "#34A853",
    },
  ];

  const connections = [
    { from: "1", to: "2", animated: true },
    { from: "2", to: "3", animated: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Animation Components Test
        </h1>

        {/* Orbiting Icons Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Orbiting App Icons</h2>
          <GlassCard className="flex justify-center p-12">
            <OrbitingIcons
              icons={appIcons}
              radius={120}
              duration={20}
              centerElement={
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold text-white shadow-lg shadow-purple-500/50">
                  AI
                </div>
              }
            />
          </GlassCard>
        </section>

        {/* Floating Icons Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Floating App Icons</h2>
          <GlassCard className="relative h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {appIcons.map((icon, index) => (
                <div
                  key={index}
                  className="absolute animate-float"
                  style={{
                    left: `${15 + index * 12}%`,
                    top: `${30 + (index % 3) * 20}%`,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${3 + (index % 3)}s`,
                  }}
                >
                  <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-4 backdrop-blur-sm transition-transform hover:scale-110">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="h-12 w-12 opacity-80"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Animated Gradient Background */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Animated Gradient</h2>
          <GlassCard className="relative h-[300px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 animate-gradient bg-[length:200%_200%]" />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-2xl font-bold text-white">
                Animated Background Gradient
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Rolling Number Counter Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Rolling Number Counter</h2>
          <GlassCard className="text-center p-12">
            <p className="mb-4 text-sm text-gray-400">Tasks Automated to Date</p>
            <div className="text-6xl font-bold text-white">
              <RollingNumber
                value={1234567}
                duration={2000}
                separator
                className="tracking-tight"
              />
            </div>
          </GlassCard>
        </section>

        {/* Workflow Visualization Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Workflow Visualization</h2>
          <GlassCard className="p-8">
            <WorkflowNodes
              nodes={workflowNodes}
              connections={connections}
              direction="horizontal"
              animateConnections
            />
          </GlassCard>
        </section>

        {/* Binary Matrix Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Binary Matrix Effect</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Green Matrix</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-700">
                <BinaryMatrix height="300px" color="rgb(34, 197, 94)" />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Purple Matrix</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-700">
                <BinaryMatrix height="300px" color="rgb(168, 85, 247)" speed={40} />
              </div>
            </div>
          </div>
        </section>

        {/* Status Summary */}
        <section className="rounded-2xl border border-green-500/30 bg-green-900/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">✅ Animation Status</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <StatusItem label="Orbiting Icons" status="working" />
              <StatusItem label="Floating Icons" status="working" />
              <StatusItem label="Animated Gradient" status="working" />
              <StatusItem label="Glass Morphism" status="working" />
            </div>
            <div className="space-y-2">
              <StatusItem label="Rolling Number Counter" status="working" />
              <StatusItem label="Workflow Visualization" status="working" />
              <StatusItem label="Binary Matrix" status="working" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusItem({ label, status }: { label: string; status: "working" | "testing" }) {
  return (
    <div className="flex items-center gap-2">
      {status === "working" && (
        <div className="h-2 w-2 rounded-full bg-green-500" />
      )}
      {status === "testing" && (
        <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
      )}
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}

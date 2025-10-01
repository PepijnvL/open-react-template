"use client";

import BinaryMatrix from "@/components/binary-matrix";
import AnimatedCounter, { RollingNumber } from "@/components/animated-counter";
import FloatingIcons, { OrbitingIcons, FloatingIconGrid } from "@/components/floating-icons";
import GlassCard, { GlassCardWithGlow, AnimatedGlassCard } from "@/components/glass-card";
import WorkflowNodes, { CompactWorkflow } from "@/components/workflow-nodes";
import GumloopHero from "@/components/gumloop-hero";

export default function ComponentTestPage() {
  // Sample icons for testing
  const sampleIcons = [
    { src: "https://cdn.simpleicons.org/slack/4A154B", alt: "Slack" },
    { src: "https://cdn.simpleicons.org/google/4285F4", alt: "Google" },
    { src: "https://cdn.simpleicons.org/github/181717", alt: "GitHub" },
    { src: "https://cdn.simpleicons.org/notion/000000", alt: "Notion" },
    { src: "https://cdn.simpleicons.org/salesforce/00A1E0", alt: "Salesforce" },
    { src: "https://cdn.simpleicons.org/hubspot/FF7A59", alt: "HubSpot" },
  ];

  // Sample workflow nodes
  const workflowNodes = [
    {
      id: "1",
      label: "Get YouTube Transcript",
      icon: "https://cdn.simpleicons.org/youtube/FF0000",
      description: "Extract video transcript",
      status: "complete" as const,
      color: "#FF0000",
    },
    {
      id: "2",
      label: "Generate Blog Post",
      icon: "https://cdn.simpleicons.org/openai/412991",
      description: "AI-powered content creation",
      status: "active" as const,
      color: "#412991",
    },
    {
      id: "3",
      label: "Save to Google Docs",
      icon: "https://cdn.simpleicons.org/googledocs/4285F4",
      description: "Store drafted content",
      status: "idle" as const,
      color: "#4285F4",
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
          Gumloop Component Test Suite
        </h1>

        {/* Section: Binary Matrix */}
        <section className="mb-20" id="binary-matrix">
          <h2 className="mb-6 text-2xl font-bold text-white">1. Binary Matrix Animation</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Green Matrix (Classic)</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-700">
                <BinaryMatrix height="300px" color="rgb(34, 197, 94)" />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Purple Matrix (Branded)</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-700">
                <BinaryMatrix height="300px" color="rgb(168, 85, 247)" speed={40} />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Animated Counters */}
        <section className="mb-20" id="animated-counter">
          <h2 className="mb-6 text-2xl font-bold text-white">2. Animated Counters</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard padding="lg" className="text-center">
              <h3 className="mb-4 text-sm font-semibold text-gray-400">Smooth Counter</h3>
              <AnimatedCounter
                value={1234567}
                duration={2000}
                className="text-4xl font-bold text-white"
                prefix="$"
              />
            </GlassCard>

            <GlassCard padding="lg" className="text-center">
              <h3 className="mb-4 text-sm font-semibold text-gray-400">Rolling Number</h3>
              <RollingNumber
                value={987654}
                duration={1500}
                className="text-4xl font-bold text-white"
              />
            </GlassCard>

            <GlassCard padding="lg" className="text-center">
              <h3 className="mb-4 text-sm font-semibold text-gray-400">Tasks Automated</h3>
              <RollingNumber
                value={42350}
                duration={2000}
                suffix="+"
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              />
            </GlassCard>
          </div>
        </section>

        {/* Section: Floating Icons */}
        <section className="mb-20" id="floating-icons">
          <h2 className="mb-6 text-2xl font-bold text-white">3. Floating Icons</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Random Float</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50">
                <FloatingIcons icons={sampleIcons} height="400px" />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Orbiting Icons</h3>
              <div className="flex items-center justify-center rounded-2xl border border-gray-700 bg-gray-900/50 p-8">
                <OrbitingIcons
                  icons={sampleIcons.slice(0, 6)}
                  radius={100}
                  duration={15}
                  centerElement={
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold text-white">
                      AI
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-300">Icon Grid</h3>
            <div className="flex justify-center rounded-2xl border border-gray-700 bg-gray-900/50 p-8">
              <FloatingIconGrid icons={sampleIcons} columns={6} iconSize={48} />
            </div>
          </div>
        </section>

        {/* Section: Glass Cards */}
        <section className="mb-20" id="glass-cards">
          <h2 className="mb-6 text-2xl font-bold text-white">4. Glass Cards</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard variant="default" hover>
              <h3 className="mb-2 text-lg font-bold text-white">Default Card</h3>
              <p className="text-sm text-gray-400">
                Standard glass morphism with subtle backdrop blur and transparency.
              </p>
            </GlassCard>

            <GlassCardWithGlow glowColor="purple" glowIntensity="medium">
              <h3 className="mb-2 text-lg font-bold text-white">Glowing Card</h3>
              <p className="text-sm text-gray-400">
                Animated glow effect with customizable colors and intensity.
              </p>
            </GlassCardWithGlow>

            <AnimatedGlassCard animation="scale" variant="vibrant" hover>
              <h3 className="mb-2 text-lg font-bold text-white">Vibrant Card</h3>
              <p className="text-sm text-gray-400">
                Gradient background with entrance animation on load.
              </p>
            </AnimatedGlassCard>
          </div>
        </section>

        {/* Section: Workflow Nodes */}
        <section className="mb-20" id="workflow-nodes">
          <h2 className="mb-6 text-2xl font-bold text-white">5. Workflow Nodes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Full Workflow</h3>
              <div className="rounded-2xl border border-gray-700 bg-gray-900/50 p-8">
                <WorkflowNodes
                  nodes={workflowNodes}
                  connections={connections}
                  direction="vertical"
                  animateConnections
                />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Compact Workflow</h3>
              <div className="flex justify-center rounded-2xl border border-gray-700 bg-gray-900/50 p-8">
                <CompactWorkflow
                  steps={["Collect Data", "Process with AI", "Generate Output", "Deliver Results"]}
                  activeStep={1}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Gumloop Hero */}
        <section className="mb-20" id="gumloop-hero">
          <h2 className="mb-6 text-2xl font-bold text-white">6. Gumloop Hero Section</h2>
          <div className="rounded-2xl border border-gray-700 bg-gray-900/50 p-8">
            <GumloopHero autoRotate rotateInterval={6000} />
          </div>
        </section>

        {/* Test Summary */}
        <section className="mb-12 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">✅ Test Summary</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <TestItem label="Binary Matrix Animation" status="loaded" />
              <TestItem label="Animated Counter" status="loaded" />
              <TestItem label="Rolling Number Counter" status="loaded" />
              <TestItem label="Floating Icons" status="loaded" />
              <TestItem label="Orbiting Icons" status="loaded" />
              <TestItem label="Icon Grid" status="loaded" />
            </div>
            <div className="space-y-2">
              <TestItem label="Glass Cards" status="loaded" />
              <TestItem label="Glass Card with Glow" status="loaded" />
              <TestItem label="Workflow Nodes" status="loaded" />
              <TestItem label="Compact Workflow" status="loaded" />
              <TestItem label="Gumloop Hero" status="loaded" />
              <TestItem label="Animations" status="running" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TestItem({ label, status }: { label: string; status: "loaded" | "running" }) {
  return (
    <div className="flex items-center gap-2">
      {status === "loaded" && (
        <div className="h-2 w-2 rounded-full bg-green-500" />
      )}
      {status === "running" && (
        <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
      )}
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}

import IntegrationLogoGrid from "@/components/integration-logo-grid";
import BinaryCodeRain from "@/components/binary-code-rain";
import AIRouterVisual from "@/components/ai-router-visual";
import { WorkflowCardsGroup } from "@/components/workflow-status-card";
import {
  GmailIntegrationCard,
  GoogleDocsIntegrationCard,
  AhrefsIntegrationCard,
  AirtableIntegrationCard,
} from "@/components/app-integration-card";
import TriggerFlow from "@/components/trigger-flow";
import InterfaceCardGrid from "@/components/interface-card-grid";
import GumloopGradientBg from "@/components/gumloop-gradient-bg";

export const metadata = {
  title: "Gumloop-Inspired Graphics - Kariz",
  description: "Actual graphics inspired by Gumloop's visual design",
};

export default function GumloopInspiredPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GumloopGradientBg variant="indigo" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Gumloop-Inspired Graphics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every visual element from Gumloop's landing page, recreated as reusable React components
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Integration Logo Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Integration Logo Grid</h2>
            <p className="text-gray-400 text-lg">
              "105+ Native nodes to choose from" - The iconic app integration showcase
            </p>
          </div>

          <div className="flex justify-center">
            <IntegrationLogoGrid />
          </div>
        </div>
      </section>

      {/* Section 2: AI Router Visualization */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">AI Router Visualization</h2>
            <p className="text-gray-400 text-lg">
              "AI-Enhanced Decision Making" - Showing all AI models in one place
            </p>
          </div>

          <AIRouterVisual />

          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold text-indigo-400">One Subscription For All</h3>
            <p className="text-gray-400">No add-ons, data subscriptions or per-model fees</p>
          </div>
        </div>
      </section>

      {/* Section 3: Workflow Status Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Workflow Status Cards</h2>
            <p className="text-gray-400 text-lg">
              "Built For All Departments" - Real-time workflow monitoring
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <WorkflowCardsGroup />
          </div>
        </div>
      </section>

      {/* Section 4: Trigger Flow */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Trigger Flow Visualization</h2>
            <p className="text-gray-400 text-lg">
              "Run Background Workflows" - Connect all your app triggers
            </p>
          </div>

          <TriggerFlow />

          <div className="text-center text-gray-400">
            Triggers flows from all of the apps you use
          </div>
        </div>
      </section>

      {/* Section 5: App Integration Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">App Integration Mockups</h2>
            <p className="text-gray-400 text-lg">
              "Pick Any App" - Visual representations of app connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GmailIntegrationCard delay={0} />
            <GoogleDocsIntegrationCard delay={0.1} />
            <AhrefsIntegrationCard delay={0.2} />
            <AirtableIntegrationCard delay={0.3} />
          </div>
        </div>
      </section>

      {/* Section 6: Binary Code Animation */}
      <section className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4 relative z-10">
            <h2 className="text-4xl font-bold">Binary Code Animation</h2>
            <p className="text-gray-400 text-lg">
              "AI Powered" - The iconic MCP matrix effect
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl bg-slate-950 border border-indigo-500/30 overflow-hidden">
            <BinaryCodeRain streamCount={30} color="rgba(99, 102, 241, 0.8)" />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center space-y-3">
                <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-500/50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-white font-semibold">MCP</span>
                </div>
                <p className="text-gray-400 text-sm">AI Powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Interface Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <InterfaceCardGrid />
        </div>
      </section>

      {/* Section 8: Combined Example */}
      <section className="py-32 px-6 bg-slate-900/50 relative overflow-hidden">
        <GumloopGradientBg variant="multi" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Everything You Need
            </h2>
            <p className="text-2xl text-gray-300">
              To build any automation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-indigo-400 mb-3">Powerful Visual Builder</h3>
                <p className="text-gray-400 text-sm">
                  Automate workflows in minutes with ready-made building blocks
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-purple-400 mb-3">AI-Enhanced Decision Making</h3>
                <p className="text-gray-400 text-sm">
                  Let AI route and choose the next best step
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-pink-400 mb-3">Built For All Departments</h3>
                <p className="text-gray-400 text-sm">
                  Consolidate your tools, empower your team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Summary */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">All Components Ready to Use</h2>
          <p className="text-xl text-gray-300">
            Every graphic from Gumloop's landing page, now available as React components
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              "IntegrationLogoGrid",
              "AIRouterVisual",
              "WorkflowStatusCard",
              "AppIntegrationCard",
              "TriggerFlow",
              "InterfaceCardGrid",
              "BinaryCodeRain",
              "GumloopGradientBg",
            ].map((component) => (
              <div
                key={component}
                className="bg-slate-800/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-sm font-mono text-indigo-300"
              >
                {component}
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-gray-400">
              All components are fully animated, responsive, and ready to integrate into your landing pages.
            </p>
            <div className="flex gap-4 justify-center">
              <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm">Framer Motion</span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

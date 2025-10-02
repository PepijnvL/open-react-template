"use client";

import dynamic from "next/dynamic";

// V3 components - optimized and fixed
const N8nStyleWorkflowV3 = dynamic(() => import("@/components/gumloop-v3/n8n-style-workflow-v3"), {
  ssr: false,
});

// V3 components - new and improved
const AppActionsFlowV3 = dynamic(() => import("@/components/gumloop-v3/app-actions-flow-v3"), {
  ssr: false,
});

// V2 components with fixes
const BinaryStreamV2 = dynamic(() => import("@/components/gumloop-v2/binary-stream-v2"), {
  ssr: false,
});
const WorkflowStatusCardsV2 = dynamic(() => import("@/components/gumloop-v2/workflow-status-cards-v2"), {
  ssr: false,
});
const AppIntegrationMockupV2 = dynamic(() => import("@/components/gumloop-v2/app-integration-mockup-v2"), {
  ssr: false,
});

// Import original v1 components that are still good
const HeroAnimatedLogos = dynamic(() => import("@/components/gumloop/hero-animated-logos"), {
  ssr: false,
});
const IntegrationCarousel = dynamic(() => import("@/components/gumloop/integration-carousel"), {
  ssr: false,
});
const WorkflowTabs = dynamic(() => import("@/components/gumloop/workflow-tabs"), {
  ssr: false,
});
const FeatureCards = dynamic(() => import("@/components/gumloop/feature-cards"), {
  ssr: false,
});
const TestimonialCarousel = dynamic(() => import("@/components/gumloop/testimonial-carousel"), {
  ssr: false,
});

export default function GumloopInspired3() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Gumloop Components V3</h1>
          <p className="text-xl text-purple-100 mb-6">
            Optimized workflow visualization with proper node structure
          </p>
          <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ Static React Flow
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ Proper Node Structure
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ Fast Loading
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ AI Router Subnodes
            </div>
          </div>
        </div>
      </div>

      {/* V3 Improvements Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

        {/* Section: N8N-Style Workflow V3 (OPTIMIZED) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            🚀 V3 - N8N Style Workflow
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">N8N-Style Workflow Visualization</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Horizontal flow (Trigger → AI Agent → Output) with vertical subnodes hanging below.
            Matches N8N's professional workflow structure.
          </p>
          <N8nStyleWorkflowV3 />
        </section>

        {/* Section: Binary Stream Animation */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Smooth Animation
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Binary Stream Animation</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Dynamic binary stream with spring physics and flowing animation
          </p>
          <BinaryStreamV2 />
        </section>

        {/* Section: Workflow Status Cards */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Proper Sizing
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Workflow Status Cards</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Icons properly sized and centered within containers
          </p>
          <WorkflowStatusCardsV2 />
        </section>

        {/* Section: App Actions Flow */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            🚀 V3 - Redesigned Structure
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">App Actions Flow</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Shows apps with their available actions: App icon on top → Actions below
          </p>
          <AppActionsFlowV3 />
        </section>

        {/* Section: App Integration Mockups */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Real Icons
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">App Integration Mockups</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Real SVG-based icons with proper sizing and clean form layout
          </p>
          <AppIntegrationMockupV2 />
        </section>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 pt-16">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              ✨ V1 Components - Still Great!
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Proven Components</h2>
            <p className="text-gray-600 mt-2">
              These components from V1 are already high quality
            </p>
          </div>
        </div>

        {/* V1 Components that are still good */}
        <section>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Hero Animated Logos</h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Smooth crossfade with gradient icons
          </p>
          <HeroAnimatedLogos />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Integration Carousel</h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            21 integration icons with spring transitions
          </p>
          <IntegrationCarousel />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Workflow Tabs</h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            5 department workflows with smooth tab transitions
          </p>
          <WorkflowTabs />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Feature Cards</h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            6 feature cards with hover effects
          </p>
          <FeatureCards />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Testimonial Carousel</h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            3 testimonials with slide transitions
          </p>
          <TestimonialCarousel />
        </section>
      </div>

      {/* Version Comparison Footer */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Version Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2 text-blue-400">V1 (Original)</h4>
              <p className="text-gray-400 text-sm mb-4">Initial implementation with placeholder icons</p>
              <a href="/gumloop-inspired" className="text-blue-400 hover:text-blue-300 underline">
                View V1 →
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2 text-green-400">V2 (Improved)</h4>
              <p className="text-gray-400 text-sm mb-4">Fixed icons, animations, and alignment</p>
              <a href="/gumloop-inspired2" className="text-green-400 hover:text-green-300 underline">
                View V2 →
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-2 border-purple-500">
              <h4 className="text-lg font-bold mb-2 text-purple-400">V3 (Optimized) ⭐</h4>
              <p className="text-gray-400 text-sm mb-4">Static React Flow with proper node structure</p>
              <span className="text-purple-400 font-semibold">Current Page</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

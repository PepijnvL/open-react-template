"use client";

import dynamic from "next/dynamic";

// V2 components with fixes
const BinaryStreamV2 = dynamic(() => import("@/components/gumloop-v2/binary-stream-v2"), {
  ssr: false,
});
const AIRouterFlowV2 = dynamic(() => import("@/components/gumloop-v2/ai-router-flow-v2"), {
  ssr: false,
});
const AIRouterFlowReactFlow = dynamic(() => import("@/components/gumloop-v2/ai-router-flow-reactflow"), {
  ssr: false,
});
const WorkflowStatusCardsV2 = dynamic(() => import("@/components/gumloop-v2/workflow-status-cards-v2"), {
  ssr: false,
});
const TriggerFlowV2 = dynamic(() => import("@/components/gumloop-v2/trigger-flow-v2"), {
  ssr: false,
});
const AppIntegrationMockupV2 = dynamic(() => import("@/components/gumloop-v2/app-integration-mockup-v2"), {
  ssr: false,
});

// Import original v1 components for comparison
const HeroAnimatedLogos = dynamic(() => import("@/components/gumloop/hero-animated-logos"), {
  ssr: false,
});
const IntegrationCarousel = dynamic(() => import("@/components/gumloop/integration-carousel"), {
  ssr: false,
});
const WorkflowTabs = dynamic(() => import("@/components/gumloop/workflow-tabs"), {
  ssr: false,
});
const AIModelGrid = dynamic(() => import("@/components/gumloop/ai-model-grid"), {
  ssr: false,
});
const FeatureCards = dynamic(() => import("@/components/gumloop/feature-cards"), {
  ssr: false,
});
const TestimonialCarousel = dynamic(() => import("@/components/gumloop/testimonial-carousel"), {
  ssr: false,
});

export default function GumloopInspired2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Gumloop Components V2</h1>
          <p className="text-xl text-blue-100 mb-6">
            Improved alignment, real icons, and enhanced animations
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ Real SVG Icons
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ Fixed Binary Animation
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ Proper Alignment
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
              ✅ N8N-style Flow
            </div>
          </div>
        </div>
      </div>

      {/* V2 Improvements Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Section: Binary Stream Animation (FIXED) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Now Animating!
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Binary Stream Animation</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The binary stream now properly animates with spring physics and dynamic digit changes
          </p>
          <BinaryStreamV2 />
        </section>

        {/* Section: AI Router Flow Visualization (REBUILT) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ REBUILT - N8N Style Flow
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">AI Router Visualization</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Redesigned to show proper workflow: Input → AI Router → Tools → Output
          </p>
          <AIRouterFlowV2 />
        </section>

        {/* Section: React Flow Powered Visualization (NEW!) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            🚀 NEW - React Flow Powered
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Advanced Workflow Builder</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional-grade workflow visualization using React Flow library with custom nodes and animated edges
          </p>
          <AIRouterFlowReactFlow />
        </section>

        {/* Section: Workflow Status Cards (FIXED) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Larger Icons, Proper Centering
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Workflow Status Cards</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Icons are now properly sized (28px) and centered within their containers
          </p>
          <WorkflowStatusCardsV2 />
        </section>

        {/* Section: Trigger Flow Visualization (FIXED) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Proper Alignment
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Trigger Flow Visualization</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Trigger cards now have consistent spacing and proper icon/text alignment
          </p>
          <TriggerFlowV2 />
        </section>

        {/* Section: App Integration Mockups (FIXED) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ FIXED - Real Icons + Better Layout
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">App Integration Mockups</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Now using real SVG-based icons with proper sizing and 2-column form layout
          </p>
          <AppIntegrationMockupV2 />
        </section>

        {/* Divider */}
        <div className="border-t-4 border-gray-200 my-16"></div>

        {/* V1 Components (Still Great!) */}
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            V1 - Still Looking Good!
          </div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Original V1 Components</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            These components from V1 are already high quality and didn't need major changes
          </p>
        </section>

        {/* Hero Animated Logos */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Hero Animated Logos</h3>
          <p className="text-gray-600 mb-8">Smooth crossfade with gradient icons</p>
          <HeroAnimatedLogos />
        </section>

        {/* Integration Carousel */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Integration Carousel</h3>
          <p className="text-gray-600 mb-8">21 integration icons with spring transitions</p>
          <IntegrationCarousel />
        </section>

        {/* Workflow Tabs */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Workflow Tabs</h3>
          <p className="text-gray-600 mb-8">5 department workflows with smooth tab transitions</p>
          <WorkflowTabs />
        </section>

        {/* AI Model Grid */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Model Grid</h3>
          <p className="text-gray-600 mb-8">7 AI models with rotating center hub</p>
          <AIModelGrid />
        </section>

        {/* Feature Cards */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Feature Cards</h3>
          <p className="text-gray-600 mb-8">6 feature cards with hover effects</p>
          <FeatureCards />
        </section>

        {/* Testimonial Carousel */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Testimonial Carousel</h3>
          <p className="text-gray-600 mb-8">3 testimonials with slide transitions</p>
          <TestimonialCarousel />
        </section>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12 px-4 mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">V2 Improvements Summary</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-bold mb-2">Real Icons</h4>
              <p className="text-sm text-gray-400">
                Replaced all placeholder icons with proper SVG-based components
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Fixed Animations</h4>
              <p className="text-sm text-gray-400">Binary stream now properly animates with spring physics</p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl">
              <div className="text-3xl mb-2">📐</div>
              <h4 className="font-bold mb-2">Better Alignment</h4>
              <p className="text-sm text-gray-400">
                Fixed spacing, sizing, and centering issues across all components
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400">
              Compare at:{" "}
              <a href="/gumloop-inspired" className="text-blue-400 hover:text-blue-300 underline">
                V1 (Original)
              </a>{" "}
              vs{" "}
              <a href="/gumloop-inspired2" className="text-green-400 hover:text-green-300 underline font-bold">
                V2 (Improved)
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

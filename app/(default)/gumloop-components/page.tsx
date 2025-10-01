import HeroAnimatedLogos from "@/components/gumloop/hero-animated-logos";
import IntegrationCarousel from "@/components/gumloop/integration-carousel";
import WorkflowTabs from "@/components/gumloop/workflow-tabs";
import BinaryStream from "@/components/gumloop/binary-stream";
import AIModelGrid from "@/components/gumloop/ai-model-grid";
import FeatureCards from "@/components/gumloop/feature-cards";
import TestimonialCarousel from "@/components/gumloop/testimonial-carousel";

export const metadata = {
  title: "Gumloop Components - Animated React Components",
  description: "High-quality animated React components inspired by Gumloop's design",
};

export default function GumloopComponentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Gumloop Component Library
          </h1>
          <p className="text-gray-600">
            Production-ready animated React components using pure CSS animations (no Framer Motion, no Lottie)
          </p>
        </div>
      </div>

      {/* Components Showcase */}
      <div className="container mx-auto px-4 py-12 space-y-24">

        {/* Section 1: Hero Animated Logos */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              1. Hero Animated Logos
            </h2>
            <p className="text-gray-600">
              Rotating logo carousel that cycles through integration partners. Uses React state + CSS transitions.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/hero-animated-logos.tsx
              </code>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <HeroAnimatedLogos />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• React useState for managing visible logos</li>
              <li>• setInterval for automatic rotation every 3 seconds</li>
              <li>• CSS animation with staggered delays (animationDelay)</li>
              <li>• Hover effects with Tailwind transitions</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Integration Carousel */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              2. Integration Carousel
            </h2>
            <p className="text-gray-600">
              Interactive app grid with dynamic detail cards. Click or hover on any app to see its integration details.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/integration-carousel.tsx
              </code>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-12 border border-gray-200">
            <IntegrationCarousel />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• State-based selection tracking</li>
              <li>• Smooth transitions with CSS animation keyframes</li>
              <li>• Hover & click interactions for app selection</li>
              <li>• Animated form fields with staggered entrance</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Workflow Tabs */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              3. Workflow Tabs
            </h2>
            <p className="text-gray-600">
              Tabbed interface showcasing different workflow types with animated content switching.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/workflow-tabs.tsx
              </code>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <WorkflowTabs />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Tab state management with React</li>
              <li>• Gradient backgrounds with Tailwind</li>
              <li>• Staggered animations for workflow steps</li>
              <li>• Skeleton loading states with pulse animation</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Binary Stream */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              4. Binary Stream / Data Flow
            </h2>
            <p className="text-gray-600">
              Animated binary code visualization exactly like Gumloop's MCP feature. Changes randomly to simulate data flow.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/binary-stream.tsx
              </code>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-12 border border-gray-700">
            <BinaryStream />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Grid-based binary generation</li>
              <li>• Random cell updates with setInterval</li>
              <li>• Opacity variations for visual depth (matching Gumloop's approach)</li>
              <li>• Gradient background with floating particles</li>
              <li>• Text shadows for glow effects</li>
            </ul>
          </div>
        </section>

        {/* Section 5: AI Model Grid */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              5. AI Model Grid
            </h2>
            <p className="text-gray-600">
              Interactive grid showcasing all supported AI models with a central hub. Hover to interact.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/ai-model-grid.tsx
              </code>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-xl p-12 border border-gray-200">
            <AIModelGrid />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• CSS Grid layout with responsive columns</li>
              <li>• Gradient backgrounds for each AI provider</li>
              <li>• Scale + rotation transforms on hover</li>
              <li>• Radial blur glow effect behind grid</li>
              <li>• Pulse animation for center hub</li>
            </ul>
          </div>
        </section>

        {/* Section 6: Feature Cards */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              6. Feature Cards
            </h2>
            <p className="text-gray-600">
              Comprehensive feature showcase with animated icons and interactive preview sections.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/feature-cards.tsx
              </code>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <FeatureCards />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Responsive grid layout (1-3 columns)</li>
              <li>• Icon rotation + scale on hover</li>
              <li>• Gradient overlay on card hover</li>
              <li>• Different preview types (nodes, router, workflows, triggers)</li>
              <li>• Status indicators with color coding</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Testimonial Carousel */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              7. Testimonial Carousel
            </h2>
            <p className="text-gray-600">
              Auto-rotating testimonial carousel from real customers with smooth transitions.
            </p>
            <div className="mt-4 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <code className="text-sm text-blue-900">
                components/gumloop/testimonial-carousel.tsx
              </code>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-12 border border-gray-200">
            <TestimonialCarousel />
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Auto-rotation every 5 seconds with setInterval</li>
              <li>• Fade + scale transitions between testimonials</li>
              <li>• Clickable pagination dots</li>
              <li>• Avatar with verified badge overlay</li>
              <li>• Company logo grid at bottom</li>
            </ul>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Implementation Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-green-500">✓</span> What We Use
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• React + Next.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• CSS Keyframe Animations</li>
                  <li>• React useState/useEffect hooks</li>
                  <li>• CSS Transitions & Transforms</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">✗</span> What We Don't Need
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ✗ Framer Motion</li>
                  <li>• ✗ Lottie files</li>
                  <li>• ✗ GSAP</li>
                  <li>• ✗ React Spring</li>
                  <li>• ✗ Any external animation libraries</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-2">Why This Approach?</h3>
              <p className="text-sm text-blue-800">
                This matches <strong>exactly how Gumloop built their site</strong>. Using pure CSS animations provides:
              </p>
              <ul className="text-sm text-blue-800 mt-3 space-y-1">
                <li>• Smaller bundle size (no heavy animation libraries)</li>
                <li>• Better performance (hardware-accelerated CSS)</li>
                <li>• Easier to maintain and customize</li>
                <li>• Full React state integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

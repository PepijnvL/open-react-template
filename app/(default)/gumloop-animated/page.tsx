import IntegrationGridAnimated from "@/components/gumloop-exact/integration-grid-animated";
import BinaryCodeMCP from "@/components/gumloop-exact/binary-code-mcp";
import WorkflowStatusCards from "@/components/gumloop-exact/workflow-status-cards";

export const metadata = {
  title: "Gumloop Animated Components",
  description: "Exact recreations of Gumloop's graphics using React animations",
};

export default function GumloopAnimatedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Gumloop Animated Components</h1>
          <p className="text-xl opacity-90 mb-6">
            Exact recreations using React + CSS animations (no Lottie needed)
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-sm">
              <strong>✨ What makes these work:</strong> Precise positioning with inline styles, z-index layering,
              subtle hover effects, and simple CSS transitions. No complex animation libraries required.
            </p>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Integration Grid */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Interface Cards (Stacked)</h2>
            <p className="text-gray-600">
              Hover over cards to see the elevation effect. Notice the z-index layering and skeleton loaders.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Absolute positioning</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Z-index layering</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Hover: scale-105</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Skeleton loaders</span>
            </div>
          </div>

          <div className="flex justify-center items-center py-12 bg-gray-50 rounded-xl">
            <IntegrationGridAnimated />
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 font-mono">
              <strong>Key technique:</strong> Each card uses <code className="bg-white px-2 py-1 rounded">style=&#123;&#123;left: `$&#123;px&#125;px`, zIndex: $&#123;n&#125;&#125;&#125;</code> for exact positioning
            </p>
          </div>
        </section>

        {/* Binary Code MCP */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Binary Code MCP Animation</h2>
            <p className="text-gray-600">
              Organized grid of binary digits with subtle random changes. Blue gradient background with badges.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Gradient background</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">State-based animation</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Badge components</span>
            </div>
          </div>

          <div className="flex justify-center items-center py-12 bg-gray-50 rounded-xl">
            <BinaryCodeMCP />
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 font-mono">
              <strong>Key technique:</strong> Uses <code className="bg-white px-2 py-1 rounded">setInterval</code> to randomly toggle bits every 200ms, creating subtle movement
            </p>
          </div>
        </section>

        {/* Workflow Status Cards */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Workflow Status Cards</h2>
            <p className="text-gray-600">
              Animated progress bars with color-coded status. Green for completed, blue for in-progress.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Animated progress</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Status indicators</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Timestamps</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Hover effects</span>
            </div>
          </div>

          <div className="flex justify-center items-center py-12 bg-gray-50 rounded-xl">
            <WorkflowStatusCards />
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 font-mono">
              <strong>Key technique:</strong> Progress bars animate from 0 to target width using <code className="bg-white px-2 py-1 rounded">transition-all duration-1000</code>
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Why React Components &gt; Lottie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">✅ React + CSS Approach</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Smaller file size (KB vs MB)</li>
                <li>✓ Better performance (hardware accelerated)</li>
                <li>✓ Easier to customize and maintain</li>
                <li>✓ Responsive and accessible</li>
                <li>✓ Can interact with app state</li>
                <li>✓ No external dependencies</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">❌ Lottie Approach</h3>
              <ul className="space-y-2 text-sm opacity-75">
                <li>• Larger file sizes (JSON + library)</li>
                <li>• Requires lottie-react dependency</li>
                <li>• Harder to modify after export</li>
                <li>• Designer-developer workflow needed</li>
                <li>• Limited state interaction</li>
                <li>• Overkill for simple animations</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-sm">
              <strong>Recommendation:</strong> Use Lottie for complex illustrations and mascots. Use React + CSS for UI components and interactions.
            </p>
          </div>
        </section>

        {/* Technical Notes */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Implementation Notes</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Positioning Strategy</h3>
              <p className="text-gray-600 mb-2">Use inline styles for exact pixel positioning:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`style={{ left: \`\${x}px\`, top: \`\${y}px\`, zIndex: n }}`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Animation Timing</h3>
              <p className="text-gray-600 mb-2">Consistent duration for all transitions:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`className="transition-all duration-500"`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Hover Effects</h3>
              <p className="text-gray-600 mb-2">Combine scale, shadow, and z-index:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`className="hover:scale-105 hover:shadow-lg hover:z-20"`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Color Coordination</h3>
              <p className="text-gray-600 mb-2">Match backgrounds with borders:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`bg-blue-50 border-blue-200
bg-yellow-50 border-yellow-200
bg-purple-50 border-purple-200`}
              </pre>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

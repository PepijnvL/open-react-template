export const metadata = {
  title: "Gumloop Graphics - Extracted Reference",
  description: "Exact extracts from Gumloop for UI team reference only",
};

export default function GumloopExtractsPage() {
  const screenshots = [
    {
      title: "1. Integration Grid (105+ Native Nodes)",
      filename: "1-integration-grid-full.png",
      description: "Apollo & Outlook logos with 105+ badge. Note the precise positioning, z-index layering, and hover effects.",
    },
    {
      title: "2. AI Router Visualization",
      filename: "2-ai-router.png",
      description: "Anthropic, ChatGPT, Gemini, Copilot logos with central AI Router badge and connecting lines.",
    },
    {
      title: "3. One Subscription Section",
      filename: "3-one-subscription.png",
      description: "AI model logos in 2x2 grid with central Gumloop logo. Clean, simple layout.",
    },
    {
      title: "4. Workflow Status Cards",
      filename: "4-workflow-status-cards.png",
      description: "Channel analyzer, Enrich Company, Workspace analyzer with progress bars and timestamps.",
    },
    {
      title: "5. Trigger Flow Visualization",
      filename: "5-trigger-flow.png",
      description: "Contact Added, Spreadsheet Row, Email Received, Calendar Event with concentric circles.",
    },
    {
      title: "6. Interface Cards + Binary Code",
      filename: "6-interface-cards.png",
      description: "Cards with emojis (💼 🎥 📈 📝) plus Binary code MCP animation in blue card.",
    },
    {
      title: "7. Integration Cards Section",
      filename: "8-integration-cards-section.png",
      description: "Enterprise features view with Access Controls, Audit Logging, and integration form cards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Gumloop Graphics - Extracted Reference</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-lg mb-2">⚠️ <strong>FOR REFERENCE ONLY</strong></p>
            <p className="text-sm opacity-90">
              These are exact extracts from Gumloop's website for UI team reference. Not to be used directly on the site.
              They serve as visual and technical reference for understanding what makes Gumloop's graphics work well.
            </p>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Findings - Why Gumloop's Graphics Are Superior</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">✅ What Works</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Precise Positioning:</strong> Inline styles with exact pixel values</li>
                <li><strong>Layered Z-Index:</strong> Incrementing z-index (1,2,3,4) creates depth</li>
                <li><strong>Subtle Hover Effects:</strong> hover:scale-105 hover:shadow-lg</li>
                <li><strong>Real Content:</strong> Actual images & realistic data</li>
                <li><strong>Color Coordination:</strong> Pastel backgrounds + matching borders</li>
                <li><strong>Skeleton Loaders:</strong> Varying widths for realistic previews</li>
                <li><strong>Simple Animations:</strong> CSS transitions only</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">❌ What I Did Wrong</h3>
              <ul className="space-y-2 text-sm">
                <li>Overly complex Framer Motion animations</li>
                <li>Placeholder Lorem Ipsum content</li>
                <li>Grid layout instead of precise positioning</li>
                <li>Missing hover interactions and z-index depth</li>
                <li>Invalid SVG paths and overcomplicated structure</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm">
              📖 <strong>Read the full analysis:</strong> See <code className="bg-white px-2 py-1 rounded">/gumloop-landing/extracted-sections/analysis.md</code> for detailed breakdowns with HTML/CSS examples, color patterns, and specific recommendations.
            </p>
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="space-y-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">{screenshot.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{screenshot.description}</p>
              </div>

              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                  <img
                    src={`/extracted-screenshots/${screenshot.filename}`}
                    alt={screenshot.title}
                    className="w-full h-auto rounded shadow-sm"
                  />
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-3 text-xs text-gray-500 border-t">
                File: <code className="bg-white px-2 py-1 rounded">{screenshot.filename}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">For the UI Team</h2>
          <p className="mb-4">
            The goal is not to copy exactly, but to understand the <strong>principles</strong>:
            precise positioning, subtle interactions, realistic content, and consistent visual language.
          </p>
          <p className="text-sm opacity-90">
            Use these extracts along with the analysis document to guide your implementation decisions.
            Focus on the techniques and patterns, not pixel-perfect reproduction.
          </p>
        </div>
      </div>
    </div>
  );
}

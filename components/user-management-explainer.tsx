export default function UserManagementExplainer() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                User Management
              </span>
            </div>
            <h2 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl" data-aos="fade-up">
              The feature that changes everything
            </h2>
            <p className="text-lg text-gray-400">
              Traditional platforms are built for internal workflows. We're built for customer-facing integrations.
            </p>
          </div>

          {/* Comparison: Before vs After */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Without User Management */}
            <div
              className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-6"
              data-aos="fade-up"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span>
                <h3 className="font-nacelle text-xl font-semibold text-red-300">
                  Without User Management
                </h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Customer requests integration → Your team builds it manually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Customer needs to update credentials → Support ticket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>20 customers need same integration → Build 20 times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Customer wants to see their data → You send screenshots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">•</span>
                  <span>Integration breaks → Customer emails support</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-red-500/10 p-4">
                <p className="text-sm font-semibold text-red-300">Result:</p>
                <p className="text-sm text-gray-400">Your team becomes the integration middleman. Doesn't scale.</p>
              </div>
            </div>

            {/* With User Management (You) */}
            <div
              className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <h3 className="font-nacelle text-xl font-semibold text-green-300">
                  With User Management (Us)
                </h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Customer clicks "Connect" → Sets up their own integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Customer updates credentials → They do it themselves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>20 customers need integration → Build once, deploy to all</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Customer wants to see data → They have their own dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-400">•</span>
                  <span>Integration breaks → Customer sees error and can fix it</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-green-500/10 p-4">
                <p className="text-sm font-semibold text-green-300">Result:</p>
                <p className="text-sm text-gray-400">Self-service integrations. Your team focuses on building features.</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              How User Management Works
            </h3>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-xl font-bold text-indigo-400">
                  1
                </div>
                <h4 className="mb-2 font-semibold text-white">You Build Once</h4>
                <p className="text-sm text-gray-400">Create integration workflow in your account</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-xl font-bold text-indigo-400">
                  2
                </div>
                <h4 className="mb-2 font-semibold text-white">Enable for Customers</h4>
                <p className="text-sm text-gray-400">Mark workflow as "customer-facing"</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-xl font-bold text-indigo-400">
                  3
                </div>
                <h4 className="mb-2 font-semibold text-white">Customers Connect</h4>
                <p className="text-sm text-gray-400">They log in and set up their credentials</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-xl font-bold text-indigo-400">
                  4
                </div>
                <h4 className="mb-2 font-semibold text-white">It Just Works</h4>
                <p className="text-sm text-gray-400">Each customer has their own isolated instance</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mt-16">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">
              Common Use Cases
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-gray-950/50 p-6" data-aos="fade-up">
                <div className="mb-3 text-3xl">🏢</div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">SaaS Products</h4>
                <p className="mb-3 text-sm text-gray-400">
                  "Connect your CRM" button in your app
                </p>
                <p className="text-xs text-gray-500">
                  Each customer connects their Salesforce, HubSpot, or Pipedrive. They manage their own connection.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950/50 p-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="mb-3 text-3xl">🎨</div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">Agency Platforms</h4>
                <p className="mb-3 text-sm text-gray-400">
                  Separate workspace per client
                </p>
                <p className="text-xs text-gray-500">
                  Build automation once. Deploy to 50 clients. Each has isolated data and credentials.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950/50 p-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="mb-3 text-3xl">🏪</div>
                <h4 className="mb-2 font-nacelle font-semibold text-white">Multi-Store E-commerce</h4>
                <p className="mb-3 text-sm text-gray-400">
                  Each store = separate user
                </p>
                <p className="text-xs text-gray-500">
                  Sync inventory across 10 Shopify stores. Each store has its own credentials but shares workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function EcommerceSaasHero() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/50 to-purple-500/50 opacity-40 blur-[120px]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Hero content */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Multi-Store E-commerce Integration</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 font-nacelle text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Connect multiple stores to{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                one fulfillment system
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Your customers run 3-6 stores on average. That's $234/month just in Shopify fees, plus building separate integrations for each store.
              With Kariz: Build once → customers connect unlimited stores → you're done.
            </p>

            {/* Problem/Solution cards */}
            <div className="mb-8 grid gap-4 md:grid-cols-2 text-left">
              <div className="rounded-xl border border-red-900/30 bg-red-950/20 p-5 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2 text-red-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-semibold">Without Kariz</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• Separate OAuth setup for each customer's 6 stores</li>
                  <li>• Tracking numbers don't sync to Shippo automatically</li>
                  <li>• Inventory overselling across stores sharing warehouse</li>
                  <li>• Customer support drowning in per-store setup tickets</li>
                </ul>
              </div>

              <div className="rounded-xl border border-green-900/30 bg-green-950/20 p-5 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2 text-green-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">With Kariz</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• Customer adds their 6th store in 30 seconds via magic link</li>
                  <li>• One integration code powers all their storefronts</li>
                  <li>• Real-time inventory updates prevent overselling</li>
                  <li>• Zero support tickets for OAuth or connection issues</li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 grid gap-4 text-center sm:grid-cols-3">
              <div className="rounded-lg border border-gray-800/50 bg-gray-950/50 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">$234/month</div>
                <div className="text-sm text-gray-400">Shopify fees for 6 stores</div>
              </div>
              <div className="rounded-lg border border-gray-800/50 bg-gray-950/50 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">85% of retailers</div>
                <div className="text-sm text-gray-400">Use multiple platforms (2024)</div>
              </div>
              <div className="rounded-lg border border-gray-800/50 bg-gray-950/50 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">30 seconds</div>
                <div className="text-sm text-gray-400">To connect a new store</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="btn group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                href="https://app.trykariz.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative inline-flex items-center">
                  Start Building Free
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <a
                className="btn w-full bg-gradient-to-t from-gray-800 to-gray-800 bg-[length:100%_100%] bg-[bottom] text-gray-300 shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                href="https://cal.com/kariz-pepijn/meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Consultation
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm text-gray-500">
              500 free executions • No credit card required • Shopify, Amazon, WooCommerce & 50+ more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

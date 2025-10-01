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
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>For E-commerce SaaS Platforms</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 font-nacelle text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Build e-commerce integrations
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}your customers manage
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg text-indigo-200/65">
              Stop building the same Shopify, WooCommerce, or Amazon integration for every customer.
              Build once, let them connect their own stores and manage their credentials.
            </p>

            {/* Key benefits */}
            <div className="mb-8 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-lg border border-gray-800/50 bg-gray-950/50 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">1 workflow</div>
                <div className="text-sm text-gray-400">Deploy to unlimited customers</div>
              </div>
              <div className="rounded-lg border border-gray-800/50 bg-gray-950/50 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">Zero support</div>
                <div className="text-sm text-gray-400">Customers manage their own OAuth</div>
              </div>
              <div className="rounded-lg border border-gray-800/50 bg-gray-950/50 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">50+ connectors</div>
                <div className="text-sm text-gray-400">Shopify, Amazon, WooCommerce, etc.</div>
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
              500 free executions • No credit card required • 5-10x faster execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

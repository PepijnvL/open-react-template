export default function EcommerceUseCases() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Common e-commerce integrations
            </h2>
            <p className="text-lg text-indigo-200/65">
              Build these once, deploy to all your customers. They handle the OAuth, you build features.
            </p>
          </div>

          {/* Use cases grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                ),
                title: "Order Sync to Warehouse",
                description: "Shopify orders → Your WMS automatically. Each customer connects their store, you route to their warehouse.",
                platforms: ["Shopify", "WooCommerce", "BigCommerce"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                ),
                title: "Inventory Management",
                description: "Sync product availability across all channels. Customer connects Amazon, Shopify, eBay - inventory stays in sync.",
                platforms: ["Amazon", "eBay", "Etsy"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Payment Reconciliation",
                description: "Connect Stripe, PayPal, or platform payments to accounting software. Each merchant manages their credentials.",
                platforms: ["Stripe", "PayPal", "Square"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                ),
                title: "Product Feed Management",
                description: "Push products to Google Shopping, Facebook, Amazon. Build once, customers connect their own ad accounts.",
                platforms: ["Google Ads", "Facebook", "Pinterest"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: "Customer Communication",
                description: "Order confirmations, shipping updates, review requests via Klaviyo, Mailchimp, or SendGrid. Self-service setup.",
                platforms: ["Klaviyo", "Mailchimp", "SendGrid"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                title: "Analytics & Reporting",
                description: "Pull sales data into analytics platforms. Each customer connects their own GA4, Mixpanel, or data warehouse.",
                platforms: ["Google Analytics", "Mixpanel", "Segment"],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-3 transition-colors group-hover:bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {useCase.icon}
                  </svg>
                </div>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-white">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.platforms.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="rounded-full border border-gray-800 bg-gray-900/50 px-2.5 py-0.5 text-xs text-gray-500"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-400">
              Don't see your use case? Build custom connectors in minutes.
            </p>
            <a
              href="https://app.trykariz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300"
            >
              <span className="text-sm font-medium">Start building →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

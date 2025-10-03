export default function EcommerceUseCases() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Multi-store use cases
            </h2>
            <p className="text-lg text-indigo-200/65">
              Real scenarios where customers need multiple stores connected to your platform
            </p>
          </div>

          {/* Use cases grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                ),
                title: "Multi-Store Fulfillment via Shippo",
                description: "3 Shopify stores + 2 Amazon accounts all shipping through one Shippo integration. Each customer connects all their stores, you handle the routing.",
                platforms: ["Shopify", "Amazon", "WooCommerce"],
                badge: "Most Popular"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                ),
                title: "Unified Inventory Across Stores",
                description: "Customer has 5 Shopify stores pulling from same warehouse. Update inventory once, sync to all stores automatically. No more overselling.",
                platforms: ["Shopify", "BigCommerce", "Magento"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Consolidated Payments & Reporting",
                description: "Stripe accounts from 4 different stores → unified accounting dashboard. Single integration, unlimited stores per customer.",
                platforms: ["Stripe", "PayPal", "Shopify Payments"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
                title: "Multi-Store Order Management",
                description: "All orders from customer's Shopify, Amazon, and eBay stores flow into your OMS. Built-in user management handles all the OAuth complexity.",
                platforms: ["Shopify", "Amazon", "eBay"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                ),
                title: "Product Sync Between Stores",
                description: "Customer uploads product once, you distribute to all their connected stores (Shopify, WooCommerce, Amazon). They manage which stores, you handle the sync.",
                platforms: ["Shopify", "WooCommerce", "Amazon"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: "Multi-Channel Returns Processing",
                description: "Returns from 6 different storefronts → unified returns workflow. Customer connects stores via magic links, you handle the business logic.",
                platforms: ["All Major Platforms", "Custom APIs"],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
              >
                {useCase.badge && (
                  <div className="absolute -top-3 right-4">
                    <span className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
                      {useCase.badge}
                    </span>
                  </div>
                )}
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

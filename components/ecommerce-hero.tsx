import { Button } from "@/components/ui/button";

export default function EcommerceHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-16 md:py-24 lg:py-32">
          {/* Badge */}
          <div className="mb-6 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
              <svg className="h-4 w-4 fill-indigo-400" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 7.5l-4 4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-2-2c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l1.5 1.5 3.5-3.5c.3-.3.8-.3 1.1 0 .2.3.2.8-.2 1.1z"/>
              </svg>
              Perfect for Shopify, WooCommerce, Amazon & Bol.com sellers
            </div>
          </div>

          {/* Headline */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 font-nacelle text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Manage all your stores.
              <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-400),var(--color-pink-400),var(--color-indigo-400))] bg-[length:200%_auto] bg-clip-text text-transparent">
                One automation platform.
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Stop manually syncing inventory across Shopify, Amazon, WooCommerce, and Bol.com.
                Automate everything. Real-time. Across all channels.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={300}>
                <a href="https://app.trykariz.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-base font-semibold hover:from-indigo-500 hover:to-purple-500 sm:w-auto"
                  >
                    Get Started Free
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </a>
                <a href="https://cal.com/kariz-pepijn/meeting" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-gray-700 bg-gray-900/50 text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50 sm:w-auto"
                  >
                    Book Consultation
                  </Button>
                </a>
              </div>

              {/* Store logos */}
              <div className="mt-12" data-aos="fade-up" data-aos-delay={400}>
                <p className="mb-6 text-sm font-medium text-gray-400">Sync inventory across all major platforms</p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                  <img
                    src="https://cdn.simpleicons.org/shopify/FFFFFF"
                    alt="Shopify"
                    className="h-8 opacity-70 transition-opacity hover:opacity-100"
                  />
                  <img
                    src="https://cdn.simpleicons.org/amazon/FFFFFF"
                    alt="Amazon"
                    className="h-8 opacity-70 transition-opacity hover:opacity-100"
                  />
                  <img
                    src="https://cdn.simpleicons.org/woocommerce/FFFFFF"
                    alt="WooCommerce"
                    className="h-8 opacity-70 transition-opacity hover:opacity-100"
                  />
                  <img
                    src="https://cdn.simpleicons.org/magento/FFFFFF"
                    alt="Magento"
                    className="h-8 opacity-70 transition-opacity hover:opacity-100"
                  />
                  <div className="rounded-lg border border-orange-500/30 bg-orange-600/10 px-4 py-2 text-sm font-medium text-orange-300">
                    Bol.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

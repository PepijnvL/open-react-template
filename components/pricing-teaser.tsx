export default function PricingTeaser() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Content */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Start free, scale as you grow
            </h2>
            <p className="mb-8 text-lg text-indigo-200/65">
              500 free executions per month. No credit card required. Upgrade anytime.
            </p>

            {/* Quick pricing overview */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 backdrop-blur-sm">
                <div className="mb-2 font-nacelle text-3xl font-bold text-white">Free</div>
                <div className="mb-2 text-sm text-gray-400">500 executions/mo</div>
                <div className="text-xs text-indigo-400">Perfect for testing</div>
              </div>
              <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-gray-900/50 to-gray-950/50 p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <div className="mb-1 inline-block rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-400">
                  Popular
                </div>
                <div className="mb-2 font-nacelle text-3xl font-bold text-white">€49</div>
                <div className="mb-2 text-sm text-gray-400">10,000 executions/mo</div>
                <div className="text-xs text-indigo-400">Everything you need</div>
              </div>
              <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 backdrop-blur-sm">
                <div className="mb-2 font-nacelle text-3xl font-bold text-white">Custom</div>
                <div className="mb-2 text-sm text-gray-400">Unlimited executions</div>
                <div className="text-xs text-indigo-400">Enterprise features</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="btn group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                href="/pricing"
              >
                <span className="relative inline-flex items-center">
                  View Full Pricing
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <a
                className="btn w-full bg-gradient-to-t from-gray-800 to-gray-800 bg-[length:100%_100%] bg-[bottom] text-gray-300 shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                href="https://app.trykariz.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

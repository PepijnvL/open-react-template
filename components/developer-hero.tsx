import { Button } from "@/components/ui/button";

export default function DeveloperHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-16 md:py-24 lg:py-32">
          {/* Badge */}
          <div className="mb-6 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm text-green-300">
              <svg className="h-4 w-4 fill-green-400" viewBox="0 0 16 16">
                <path d="M8 0L0 8l8 8 8-8-8-8zm0 14L2 8l6-6 6 6-6 6z"/>
              </svg>
              No DevOps. No $24/month. Just build.
            </div>
          </div>

          {/* Headline */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 font-nacelle text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              n8n's power.
              <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-green-400),var(--color-emerald-400),var(--color-teal-400),var(--color-green-400))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Cloud convenience.
              </span>
              <br />
              Actually free.
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Build automation for side projects without paying $24/month. Managed cloud, custom connectors,
                and 5-10x faster performance. Start building in seconds.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={300}>
                <Button
                  size="lg"
                  className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 text-base font-semibold hover:from-green-500 hover:to-emerald-500 sm:w-auto"
                >
                  Start Building Free
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-700 bg-gray-900/50 text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50 sm:w-auto"
                >
                  View on GitHub
                </Button>
              </div>

              {/* Trust elements */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400" data-aos="fade-up" data-aos-delay={400}>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 fill-green-500" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 7.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l4.293-4.293a1 1 0 011.414 1.414z" />
                  </svg>
                  <span>500 free executions/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 fill-green-500" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 7.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l4.293-4.293a1 1 0 011.414 1.414z" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 fill-green-500" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 7.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l4.293-4.293a1 1 0 011.414 1.414z" />
                  </svg>
                  <span>5-10x faster than n8n</span>
                </div>
              </div>

              {/* Code snippet */}
              <div className="mt-12" data-aos="fade-up" data-aos-delay={500}>
                <div className="rounded-lg border border-gray-800 bg-gray-950 p-4 text-left font-mono text-sm">
                  <div className="mb-2 text-gray-500"># Get started in 30 seconds</div>
                  <div className="text-green-400">$ npm install @your-platform/cli</div>
                  <div className="text-blue-400">$ your-platform login</div>
                  <div className="text-purple-400">$ your-platform deploy</div>
                  <div className="mt-2 text-gray-500"># Or just use the web UI →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

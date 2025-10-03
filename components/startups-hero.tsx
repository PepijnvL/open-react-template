import { Button } from "@/components/ui/button";

export default function StartupsHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pb-12 pt-20 md:pb-20 md:pt-28">
          {/* Badge */}
          <div className="mb-6 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
              <svg className="h-4 w-4 fill-indigo-400" viewBox="0 0 16 16">
                <path d="M8 0L1 4v5c0 5 7 7 7 7s7-2 7-7V4L8 0zm0 2.2L13 5v4c0 3.5-2 5-5 5s-5-1.5-5-5V5l5-2.8z"/>
              </svg>
              Built for SaaS startups
            </div>
          </div>

          {/* Headline */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 font-nacelle text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Let your customers connect
              <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-400),var(--color-pink-400),var(--color-indigo-400))] bg-[length:200%_auto] bg-clip-text text-transparent">
                any app to your software
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Focus on your core product while we handle integrations.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={300}>
                <a href="https://app.trykariz.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="group w-full bg-indigo-600 px-8 text-base font-semibold text-white hover:bg-indigo-500 sm:w-auto"
                  >
                    Get Started Free
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </a>
                <a href="https://cal.com/kariz-pepijn/meeting" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-gray-700 bg-transparent text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50 sm:w-auto"
                  >
                    Book Demo
                  </Button>
                </a>
              </div>

              {/* Stats - updated to match user requirements */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400" data-aos="fade-up" data-aos-delay={400}>
                <div className="flex items-center gap-2">
                  <span className="font-nacelle text-lg font-semibold text-white">10x</span>
                  <span>faster than competitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-nacelle text-lg font-semibold text-white">90%</span>
                  <span>cheaper than internal dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-nacelle text-lg font-semibold text-white">2-3 mo</span>
                  <span>faster GTM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

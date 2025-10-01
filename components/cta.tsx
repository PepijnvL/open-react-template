import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent py-16 px-8 md:py-24 md:px-12">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2
              className="mb-4 font-nacelle text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              data-aos="fade-up"
            >
              Ready to automate your workflow?
            </h2>
            <p
              className="mb-10 text-lg text-gray-300 md:text-xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Join thousands of teams already building powerful AI automation workflows.
              Start free, no credit card required.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={200}>
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
                  className="w-full border-gray-700 bg-gray-900/50 text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50 sm:w-auto"
                >
                  Book Consultation
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400" data-aos="fade-up" data-aos-delay={300}>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 fill-green-500" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 7.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l4.293-4.293a1 1 0 011.414 1.414z" />
                </svg>
                <span>Free forever plan</span>
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
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

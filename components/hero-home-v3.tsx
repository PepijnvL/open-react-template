"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import FlipWords from "@/components/flip-words";

const WorkflowDemo = dynamic(() => import("@/app/(default)/workflow-demo/page"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] w-full items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-900/50">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500"></div>
        <p className="text-gray-400">Loading interactive demo...</p>
      </div>
    </div>
  ),
});

export default function HeroHomeV3() {
  const flipWords = ["workflows", "integrations", "processes", "tasks"];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-2 md:py-3 lg:py-4">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16 lg:pb-20">
            <h1
              className="mb-6 font-nacelle text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
            >
              Automate your{" "}
              <FlipWords words={flipWords} />
              <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-400),var(--color-pink-400),var(--color-indigo-400))] bg-[length:200%_auto] bg-clip-text text-transparent">
                for your users
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Create integrations for your users in minutes using Kariz. No more dealing with OAuth or months of custom development.
                Build once, deploy to unlimited users—without being the integration middleman.
              </p>

              {/* Audience navigation */}
              <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm" data-aos="fade-up" data-aos-delay={200}>
                <a href="/for-developers" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  For Developers
                </a>
                <span className="text-gray-600">•</span>
                <a href="/for-ecommerce" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  For E-commerce
                </a>
                <span className="text-gray-600">•</span>
                <a href="/for-startups" className="text-gray-400 hover:text-purple-400 transition-colors">
                  For Startups
                </a>
              </div>

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
                    Book Consultation
                  </Button>
                </a>
              </div>

              {/* Trust elements */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400" data-aos="fade-up" data-aos-delay={400}>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-indigo-500" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 6.5l-4 4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-2-2c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l1.5 1.5 3.5-3.5c.3-.3.8-.3 1.1 0 .2.3.2.8-.2 1.1z"/>
                  </svg>
                  <span>500 executions/month free</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-indigo-500" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 6.5l-4 4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-2-2c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l1.5 1.5 3.5-3.5c.3-.3.8-.3 1.1 0 .2.3.2.8-.2 1.1z"/>
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-indigo-500" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 6.5l-4 4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-2-2c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l1.5 1.5 3.5-3.5c.3-.3.8-.3 1.1 0 .2.3.2.8-.2 1.1z"/>
                  </svg>
                  <span>50+ integrations ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Workflow Demo */}
          <div data-aos="fade-up" data-aos-delay={500}>
            <WorkflowDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

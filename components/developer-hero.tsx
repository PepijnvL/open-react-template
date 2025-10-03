"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function DeveloperHero() {
  const [rotatingText, setRotatingText] = useState("any API");

  useEffect(() => {
    const options = ["any API", "any app"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % options.length;
      setRotatingText(options[currentIndex]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pb-16 pt-8 md:pb-24 md:pt-10">
          {/* Badge */}
          <div className="mb-6 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
              <svg className="h-4 w-4 fill-emerald-400" viewBox="0 0 16 16">
                <path d="M8 0L0 8l8 8 8-8-8-8zm0 14L2 8l6-6 6 6-6 6z"/>
              </svg>
              500 free executions · No credit card required
            </div>
          </div>

          {/* Headline */}
          <div className="pb-4 text-center md:pb-6">
            <h1
              className="mb-6 font-nacelle text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Connect to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {rotatingText}
              </span>{" "}
              in minutes
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-6 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Stop wrestling with API integrations. Start shipping features.
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


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

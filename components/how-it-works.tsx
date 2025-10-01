import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Connect Your Apps",
      description:
        "Choose from 50+ pre-built integrations or build custom connectors for any API in minutes.",
      // TODO: Replace with actual screenshot
      imagePlaceholder: "/images/how-it-works/connect-apps.png",
      altText: "Kariz integration connection interface",
    },
    {
      number: "2",
      title: "Build Your Workflow",
      description:
        "Drag, drop, and connect. Create powerful automations with our visual workflow builder.",
      // TODO: Replace with actual screenshot
      imagePlaceholder: "/images/how-it-works/build-workflow.png",
      altText: "Kariz visual workflow builder",
    },
    {
      number: "3",
      title: "Deploy to Users",
      description:
        "Let customers manage their own integrations. Built-in user management, zero support tickets.",
      // TODO: Replace with actual screenshot
      imagePlaceholder: "/images/how-it-works/deploy-users.png",
      altText: "Kariz customer-facing integration dashboard",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                How it works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Three steps to customer-facing integrations
            </h2>
            <p className="text-lg text-indigo-200/65">
              Build once, deploy to unlimited users. No more being the integration middleman.
            </p>
          </div>

          {/* Steps - Horizontal on desktop, stacked on mobile */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step card */}
                <div className="relative flex h-full flex-col rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-gray-950/90 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                  {/* Number badge */}
                  <div className="mb-6 inline-flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 font-nacelle text-lg font-bold text-white shadow-lg shadow-indigo-500/50">
                      {step.number}
                    </div>
                    <h3 className="font-nacelle text-xl font-bold text-gray-200">
                      {step.title}
                    </h3>
                  </div>

                  {/* Image placeholder - Large and prominent */}
                  <div className="relative mb-6 overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="relative aspect-[4/3] w-full">
                      {/*
                        TODO: Replace with actual screenshot

                        When you have images, replace this entire div with:
                        <Image
                          src={step.imagePlaceholder}
                          alt={step.altText}
                          width={600}
                          height={450}
                          className="h-full w-full object-cover"
                        />

                        Or for video:
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/videos/step-{index+1}.mp4" type="video/mp4" />
                        </video>
                      */}

                      {/* Placeholder content */}
                      <div className="flex h-full w-full items-center justify-center p-8">
                        <div className="text-center">
                          <div className="mb-3 inline-flex items-center justify-center rounded-full bg-gray-800/80 p-4">
                            <svg
                              className="h-10 w-10 text-indigo-500/70"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {index === 0 && (
                                // Apps/integrations icon
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                                />
                              )}
                              {index === 1 && (
                                // Workflow builder icon
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                />
                              )}
                              {index === 2 && (
                                // Deploy/users icon
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              )}
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">
                            Add screenshot or video here
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                  </div>

                  {/* Description */}
                  <p className="text-base text-indigo-200/75">
                    {step.description}
                  </p>

                  {/* Connecting line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/3 hidden h-px w-8 bg-gradient-to-r from-indigo-500/50 to-transparent md:block lg:right-0 lg:w-8"
                         style={{ transform: 'translateX(calc(100% + 1.5rem))' }} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center md:mt-16">
            <p className="mb-6 text-base text-indigo-200/65">
              Ready to automate your integrations?
            </p>
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
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

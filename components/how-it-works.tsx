import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Integration",
      description:
        "Create users and manage integrations with our intuitive interface. Built-in user management makes it simple.",
      image: "/images/how-it-works/step-1-create-user.png",
      altText: "Kariz create new user interface",
    },
    {
      number: "2",
      title: "Connect Your Apps",
      description:
        "Choose from 50+ pre-built integrations. Magic links make it easy for your users to connect their accounts.",
      image: "/images/how-it-works/step-2-magic-link.png",
      altText: "Kariz magic link integration selection",
    },
    {
      number: "3",
      title: "Deploy Instantly",
      description:
        "Let customers authorize and manage their own integrations. Zero support tickets, instant deployment.",
      image: "/images/how-it-works/step-3-authorize.png",
      altText: "Kariz authorization interface",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-6xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                How it works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl whitespace-nowrap">
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

                  {/* Screenshot - Large and prominent */}
                  <div className="relative mb-6 overflow-hidden rounded-xl border border-gray-800/50 bg-white/5">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={step.image}
                        alt={step.altText}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
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

          {/* Feature highlights */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3 md:mt-16">
            <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm">
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-3">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="mb-2 font-nacelle font-semibold text-white">
                AI-Powered Builder
              </h4>
              <p className="text-sm text-gray-400">
                Describe your automation in plain English. AI generates the workflow.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm">
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-3">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="mb-2 font-nacelle font-semibold text-white">
                Visual Canvas
              </h4>
              <p className="text-sm text-gray-400">
                See your workflow come to life. Drag, drop, and connect nodes visually.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 text-center backdrop-blur-sm">
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-pink-500/10 p-3">
                <svg className="h-6 w-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="mb-2 font-nacelle font-semibold text-white">
                Instant Deploy
              </h4>
              <p className="text-sm text-gray-400">
                From idea to production in minutes. Test, refine, and deploy with one click.
              </p>
            </div>
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

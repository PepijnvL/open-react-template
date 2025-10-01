"use client";

import dynamic from "next/dynamic";

// Lazy load WorkflowDemo to reduce initial bundle
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

export default function WorkflowShowcase() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-purple-200/50">
              <span className="bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                Interactive Demo
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.purple.200),theme(colors.gray.50),theme(colors.purple.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Build workflows with AI
            </h2>
            <p className="text-lg text-purple-200/65">
              Describe what you want to automate, and our AI builds the workflow for you.
              Visual workflow builder meets conversational interface.
            </p>
          </div>

          {/* Interactive Workflow Demo */}
          <div className="mx-auto max-w-6xl" data-aos="fade-up">
            <WorkflowDemo />
          </div>

          {/* Feature highlights */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}

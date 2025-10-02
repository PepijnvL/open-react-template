"use client";

import { useEffect } from "react";
import PageIllustration from "@/components/page-illustration";

export default function Docs() {
  useEffect(() => {
    // Redirect to docs site after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://docs.trykariz.com"; // Replace with actual docs URL
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex min-h-[60vh] flex-col items-center justify-center py-12 text-center md:py-20">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10">
              <svg className="h-10 w-10 animate-pulse text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h1 className="mb-4 font-nacelle text-4xl font-bold text-white md:text-5xl">
              Kariz Documentation
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-gray-400">
              Comprehensive guides, API references, and tutorials to help you build powerful integrations. Redirecting you to our documentation site...
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://docs.trykariz.com"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] px-8 py-3 text-base font-semibold text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Go to Docs
              </a>

              <a
                href="https://docs.trykariz.com/api-reference"
                className="btn-sm border border-gray-700 bg-transparent px-8 py-3 text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50"
              >
                API Reference
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <svg className="mb-3 h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="mb-2 font-semibold text-white">Quick Start</div>
                <div className="text-sm text-gray-400">Get up and running in 5 minutes</div>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <svg className="mb-3 h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div className="mb-2 font-semibold text-white">API Docs</div>
                <div className="text-sm text-gray-400">Complete REST API reference</div>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <svg className="mb-3 h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="mb-2 font-semibold text-white">Guides</div>
                <div className="text-sm text-gray-400">Step-by-step tutorials</div>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <svg className="mb-3 h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <div className="mb-2 font-semibold text-white">Examples</div>
                <div className="text-sm text-gray-400">Real-world code samples</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

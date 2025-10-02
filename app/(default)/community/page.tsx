"use client";

import { useEffect } from "react";
import PageIllustration from "@/components/page-illustration";

export default function Community() {
  useEffect(() => {
    // Redirect to Discord/Community platform after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://discord.gg/kariz"; // Replace with actual community URL
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <h1 className="mb-4 font-nacelle text-4xl font-bold text-white md:text-5xl">
              Join Our Community
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-gray-400">
              Connect with other developers, share integration patterns, and get help from the Kariz community. Redirecting you to our Discord server...
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://discord.gg/kariz"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] px-8 py-3 text-base font-semibold text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Go to Discord
              </a>

              <a
                href="https://github.com/kariz-ai"
                className="btn-sm border border-gray-700 bg-transparent px-8 py-3 text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50"
              >
                View on GitHub
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="mb-3 text-3xl font-bold text-white">2,500+</div>
                <div className="text-sm text-gray-400">Community Members</div>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="mb-3 text-3xl font-bold text-white">1,200+</div>
                <div className="text-sm text-gray-400">Integration Patterns Shared</div>
              </div>

              <div className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="mb-3 text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Active Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

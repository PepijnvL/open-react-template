export const metadata = {
  title: "Sign In - Kariz",
  description: "Access your Kariz account to manage integrations, workflows, and automations. Build customer-facing integrations faster with our powerful platform.",
};

"use client";

import { useEffect } from "react";
import PageIllustration from "@/components/page-illustration";

export default function SignIn() {
  useEffect(() => {
    // Redirect to app after a brief moment to allow SEO crawlers to index
    const timer = setTimeout(() => {
      window.location.href = "https://app.trykariz.com";
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <h1
                className="mb-6 font-nacelle text-4xl font-bold text-white md:text-5xl"
                data-aos="fade-up"
              >
                Sign In to Kariz
              </h1>
              <p
                className="text-lg text-gray-400 mb-8"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Access your account to manage integrations and workflows
              </p>

              <div
                className="flex flex-col items-center gap-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <a
                  href="https://app.trykariz.com"
                  className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] px-8 py-3 rounded-lg font-medium"
                >
                  Go to Application
                </a>
                <p className="text-sm text-gray-500">
                  Redirecting automatically...
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium text-white">Fast Integration</h3>
                  <p className="text-sm text-gray-400">Ship integrations in minutes</p>
                </div>

                <div className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium text-white">Secure Platform</h3>
                  <p className="text-sm text-gray-400">Enterprise-grade security</p>
                </div>

                <div className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium text-white">Powerful Workflows</h3>
                  <p className="text-sm text-gray-400">Automate complex processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

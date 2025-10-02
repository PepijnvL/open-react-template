"use client";

export default function SocialProofV3() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-b py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-16">
          {/* Trusted by text */}
          <div className="text-center">
            <p className="mb-8 text-sm font-medium text-indigo-200/65">
              Join developers building customer-facing integrations with Kariz
            </p>

            {/* Stats with static numbers */}
            <div className="mx-auto grid max-w-3xl gap-6 text-center sm:grid-cols-3">
              <div className="group rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-gray-950/30 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30">
                <div className="mb-2 bg-gradient-to-br from-white to-indigo-200 bg-clip-text font-nacelle text-4xl font-bold text-transparent">
                  500+
                </div>
                <div className="text-sm font-medium text-indigo-200/70">Free executions monthly</div>
              </div>
              <div className="group rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-gray-950/30 p-6 backdrop-blur-sm transition-all hover:border-purple-500/30">
                <div className="mb-2 bg-gradient-to-br from-white to-purple-200 bg-clip-text font-nacelle text-4xl font-bold text-transparent">
                  10x
                </div>
                <div className="text-sm font-medium text-purple-200/70">Faster execution</div>
              </div>
              <div className="group rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-gray-950/30 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30">
                <div className="mb-2 bg-gradient-to-br from-white to-cyan-200 bg-clip-text font-nacelle text-4xl font-bold text-transparent">
                  50+
                </div>
                <div className="text-sm font-medium text-cyan-200/70">Integrations ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

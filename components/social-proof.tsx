export default function SocialProof() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-b py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.400/.25),transparent)1] md:py-16">
          {/* Trusted by text */}
          <div className="text-center">
            <p className="mb-8 text-sm font-medium text-indigo-200/65">
              {/* Option 1: Use when you have customer logos */}
              {/* Trusted by teams at */}

              {/* Option 2: Use when you don't have logos yet */}
              Join developers building customer-facing integrations with Kariz
            </p>

            {/* Customer logos grid - Add your customer logos here */}
            {/*
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
              <Image
                src="/customer-logos/company1.svg"
                alt="Company 1"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="/customer-logos/company2.svg"
                alt="Company 2"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              // Add more logos...
            </div>
            */}

            {/* Alternative: Stats-based social proof (when you don't have logos) */}
            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 text-center md:gap-12">
              <div className="min-w-[140px]">
                <div className="mb-1 font-nacelle text-3xl font-bold text-white">
                  500+
                </div>
                <div className="text-sm text-indigo-200/65">Free executions</div>
              </div>
              <div className="min-w-[140px]">
                <div className="mb-1 font-nacelle text-3xl font-bold text-white">
                  5-10x
                </div>
                <div className="text-sm text-indigo-200/65">Faster than alternatives</div>
              </div>
              <div className="min-w-[140px]">
                <div className="mb-1 font-nacelle text-3xl font-bold text-white">
                  50+
                </div>
                <div className="text-sm text-indigo-200/65">Integrations ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

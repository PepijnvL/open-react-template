export default function EcommerceSolution() {
  const solutions = [
    {
      icon: "⚡",
      title: "Real-time inventory sync",
      description: "5-10x faster than n8n means truly real-time updates across all stores",
      benefit: "Stock levels update instantly across all channels",
    },
    {
      icon: "📊",
      title: "Unified order management",
      description: "All orders from every platform consolidated in one place",
      benefit: "Process 100+ daily orders in minutes, not hours",
    },
    {
      icon: "👥",
      title: "Customer data consolidation",
      description: "Track customer purchases across all your stores",
      benefit: "Build complete customer profiles for better marketing",
    },
    {
      icon: "🔌",
      title: "Connect any system",
      description: "Custom connectors for your ERP, POS, inventory management, or warehouse system",
      benefit: "Build integrations in minutes without waiting for us",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                The Solution
              </span>
            </div>
            <h2 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl" data-aos="fade-up">
              One platform. All your stores.
              <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Automated.
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              User management means each store gets its own workspace, but they all share the same workflows.
              Set it up once, apply to all stores.
            </p>
          </div>

          {/* Solutions grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-green-300">
                      ✅ {item.title}
                    </h3>
                    <p className="mb-2 text-gray-300">{item.description}</p>
                    <p className="text-sm text-green-400/80">{item.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual diagram */}
          <div className="mt-16" data-aos="fade-up">
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 p-8">
              <h3 className="mb-6 text-center font-nacelle text-xl font-semibold text-white">
                How It Works
              </h3>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-around">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20 text-2xl">
                    🏪
                  </div>
                  <p className="text-sm text-gray-300">Your Stores</p>
                  <p className="text-xs text-gray-500">Shopify, Amazon, etc.</p>
                </div>

                <div className="text-3xl text-indigo-400">→</div>

                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl">
                    ⚡
                  </div>
                  <p className="text-sm text-gray-300">Our Platform</p>
                  <p className="text-xs text-gray-500">Workflows & sync</p>
                </div>

                <div className="text-3xl text-indigo-400">→</div>

                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-2xl">
                    📦
                  </div>
                  <p className="text-sm text-gray-300">Your Systems</p>
                  <p className="text-xs text-gray-500">ERP, POS, Warehouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

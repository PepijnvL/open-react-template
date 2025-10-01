import { Zap, BarChart3, Users, Plug, Store, Workflow, Package } from "lucide-react";

export default function EcommerceSolution() {
  const solutions = [
    {
      icon: Zap,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      title: "Real-time inventory sync",
      description: "Lightning-fast updates across all stores with 5-10x better performance",
      benefit: "Stock levels update instantly across all channels",
    },
    {
      icon: BarChart3,
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      title: "Unified order management",
      description: "All orders from every platform consolidated in one place",
      benefit: "Process 100+ daily orders in minutes, not hours",
    },
    {
      icon: Users,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      title: "Customer data consolidation",
      description: "Track customer purchases across all your stores",
      benefit: "Build complete customer profiles for better marketing",
    },
    {
      icon: Plug,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
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
              Connect all your stores to a single automation hub. Build workflows once,
              apply to all stores. Sync inventory, orders, and customer data in real-time.
            </p>
          </div>

          {/* Solutions grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-xl border ${item.borderColor} ${item.bgColor} p-6`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className={`rounded-lg ${item.bgColor} p-3`}>
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 font-nacelle text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mb-3 text-base text-gray-300">{item.description}</p>
                      <p className={`text-sm font-medium ${item.iconColor}`}>{item.benefit}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual diagram */}
          <div className="mt-16" data-aos="fade-up">
            <div className="rounded-xl border border-indigo-500/20 bg-gray-900/50 p-8">
              <h3 className="mb-8 text-center font-nacelle text-xl font-semibold text-white">
                How It Works
              </h3>
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10">
                    <Store className="h-8 w-8 text-indigo-400" />
                  </div>
                  <p className="text-base font-semibold text-gray-200">Your Stores</p>
                  <p className="text-sm text-gray-400">Shopify, Amazon, etc.</p>
                </div>

                <div className="text-2xl text-indigo-400 font-bold">→</div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/10">
                    <Workflow className="h-8 w-8 text-purple-400" />
                  </div>
                  <p className="text-base font-semibold text-gray-200">Kariz Platform</p>
                  <p className="text-sm text-gray-400">Workflows & sync</p>
                </div>

                <div className="text-2xl text-indigo-400 font-bold">→</div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Package className="h-8 w-8 text-emerald-400" />
                  </div>
                  <p className="text-base font-semibold text-gray-200">Your Systems</p>
                  <p className="text-sm text-gray-400">ERP, POS, Warehouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

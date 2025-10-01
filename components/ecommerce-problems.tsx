export default function EcommerceProblems() {
  const problems = [
    {
      icon: "📦",
      problem: "Manual inventory updates",
      description: "Spending hours daily updating stock levels across 5+ platforms",
    },
    {
      icon: "⚠️",
      problem: "Stock-outs and overstock",
      description: "One platform sells out while another has excess inventory",
    },
    {
      icon: "👤",
      problem: "Fragmented customer data",
      description: "Can't track customers who buy across multiple stores",
    },
    {
      icon: "🔄",
      problem: "ERP integration nightmare",
      description: "Each store needs separate integration to inventory system",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl" data-aos="fade-up">
              Running 5+ stores?
              <br />
              <span className="text-gray-400">These problems sound familiar:</span>
            </h2>
          </div>

          {/* Problems grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {problems.map((item, index) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-3 flex items-start gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-red-300">
                      ❌ {item.problem}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <p className="text-xl text-gray-300">
              <span className="font-semibold text-white">Sound like your day?</span> There's a better way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

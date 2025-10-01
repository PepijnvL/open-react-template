export default function DeveloperComparison() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl" data-aos="fade-up">
              Why developers choose us over n8n
            </h2>
            <p className="text-lg text-gray-400">
              All the power of n8n. None of the DevOps hassle. Actually free.
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto" data-aos="fade-up">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-4 text-left text-sm font-semibold text-gray-400">Feature</th>
                  <th className="p-4 text-center text-sm font-semibold text-green-400">Kariz</th>
                  <th className="p-4 text-center text-sm font-semibold text-gray-400">n8n Cloud</th>
                  <th className="p-4 text-center text-sm font-semibold text-gray-400">n8n Self-Hosted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">Free Cloud Tier</td>
                  <td className="p-4 text-center text-green-400">✅ 500 executions</td>
                  <td className="p-4 text-center text-gray-500">❌ $24/month minimum</td>
                  <td className="p-4 text-center text-gray-500">N/A</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">Setup Time</td>
                  <td className="p-4 text-center text-green-400">✅ 30 seconds</td>
                  <td className="p-4 text-center text-yellow-400">⚡ 30 seconds</td>
                  <td className="p-4 text-center text-red-400">❌ Hours/Days</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">Performance</td>
                  <td className="p-4 text-center text-green-400">✅ 5-10x faster</td>
                  <td className="p-4 text-center text-gray-400">Baseline</td>
                  <td className="p-4 text-center text-gray-400">Baseline</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">Custom Connectors</td>
                  <td className="p-4 text-center text-green-400">✅ Visual builder</td>
                  <td className="p-4 text-center text-yellow-400">⚠️ Code required</td>
                  <td className="p-4 text-center text-yellow-400">⚠️ Code required</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">DevOps Required</td>
                  <td className="p-4 text-center text-green-400">✅ None</td>
                  <td className="p-4 text-center text-green-400">✅ None</td>
                  <td className="p-4 text-center text-red-400">❌ Yes</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">Starting Price</td>
                  <td className="p-4 text-center text-green-400 font-semibold">$0</td>
                  <td className="p-4 text-center text-gray-400">$24/month</td>
                  <td className="p-4 text-center text-gray-400">Free (+ hosting)</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="p-4 text-gray-300">User Management</td>
                  <td className="p-4 text-center text-green-400">✅ Built-in</td>
                  <td className="p-4 text-center text-red-400">❌ No</td>
                  <td className="p-4 text-center text-red-400">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <p className="mb-4 text-lg text-gray-300">
              <span className="font-semibold text-white">TL;DR:</span> If you want n8n but:
            </p>
            <div className="mx-auto max-w-2xl text-left">
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Don't want to pay $24/month for small projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Don't want to deal with self-hosting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Want better performance (5-10x faster)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Want to build custom connectors without coding</span>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-xl font-semibold text-white">
              We're exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

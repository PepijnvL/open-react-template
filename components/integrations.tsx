export default function Integrations() {
  const integrations = [
    { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
    { name: "Gmail", logo: "https://cdn.simpleicons.org/gmail/EA4335" },
    { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
    { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/18BFFF" },
    { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
    { name: "Google Sheets", logo: "https://cdn.simpleicons.org/googlesheets/34A853" },
    { name: "Trello", logo: "https://cdn.simpleicons.org/trello/0052CC" },
    { name: "Asana", logo: "https://cdn.simpleicons.org/asana/F06A6A" },
    { name: "Jira", logo: "https://cdn.simpleicons.org/jira/0052CC" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
    { name: "Discord", logo: "https://cdn.simpleicons.org/discord/5865F2" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/008CDD" },
    { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
    { name: "Zoom", logo: "https://cdn.simpleicons.org/zoom/2D8CFF" },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Integrations
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Connect your entire tech stack
            </h2>
            <p className="text-lg text-indigo-200/65">
              Seamlessly integrate with 1000+ apps and services. From communication tools to CRMs,
              connect all your favorite platforms in one powerful automation workflow.
            </p>
          </div>

          {/* Integration grid */}
          <div className="mx-auto max-w-5xl">
            <div
              className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 lg:gap-8"
              data-aos="fade-up"
            >
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className="group relative flex aspect-square items-center justify-center rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 p-4 transition-all hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="relative h-full w-full">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="h-full w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-gray-300 opacity-0 transition-opacity group-hover:opacity-100">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>

            {/* View all CTA */}
            <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay={400}>
              <a
                href="#0"
                className="inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300"
              >
                <span className="text-sm font-medium">View all 1000+ integrations</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="none"
                  viewBox="0 0 12 12"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    fill="currentColor"
                    d="m6.92 8-.787-.763 2.733-2.68H0V3.443h8.866L6.133.767 6.92 0 11 4 6.92 8Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Enterprise Solutions - Kariz",
  description: "Get dedicated support, custom integrations, and enterprise-grade security. Schedule a consultation to discuss your organization's integration needs.",
};

import PageIllustration from "@/components/page-illustration";

export default function Enterprise() {
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
                Enterprise Solutions
              </h1>
              <p
                className="text-lg text-gray-400"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Schedule a consultation to discuss your enterprise needs
              </p>
            </div>

            {/* Cal.com Embed */}
            <div
              className="mx-auto max-w-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 shadow-2xl backdrop-blur-sm">
                <iframe
                  src="https://cal.com/kariz-pepijn/meeting?embed=true&theme=dark&hideEventTypeDetails=false&hideBranding=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  title="Schedule a meeting"
                  className="rounded-2xl"
                />
                {/* Overlay to hide Cal.com branding */}
                <div className="pointer-events-none absolute bottom-2 left-2 h-8 w-32 bg-gray-900/50 backdrop-blur-sm rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

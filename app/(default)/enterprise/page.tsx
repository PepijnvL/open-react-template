import PageIllustration from "@/components/page-illustration";
import EnterpriseHero from "@/components/enterprise-hero";
import EnterpriseFeatures from "@/components/enterprise-features";
import PricingTeaser from "@/components/pricing-teaser";
import CTAWithRays from "@/components/cta-with-rays";

export const metadata = {
  title: "Enterprise - Kariz",
  description: "Enterprise-grade integration platform with dedicated support, custom SLAs, and advanced security features.",
};

export default function Enterprise() {
  return (
    <>
      <PageIllustration />
      <EnterpriseHero />
      <EnterpriseFeatures />

      {/* Security & Compliance Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-t border-gray-800 py-12 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div data-aos="fade-up">
                <h2 className="mb-4 font-nacelle text-3xl font-bold text-white">
                  Security & Compliance
                </h2>
                <p className="mb-6 text-lg text-gray-400">
                  Built with enterprise security standards from day one. Your data is protected with industry-leading encryption and compliance certifications.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">SOC 2 Type II certified infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">GDPR & CCPA compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">SSO (SAML, OAuth 2.0) & MFA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Comprehensive audit logs & monitoring</span>
                  </li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay={100}>
                <h2 className="mb-4 font-nacelle text-3xl font-bold text-white">
                  Dedicated Support
                </h2>
                <p className="mb-6 text-lg text-gray-400">
                  Your success is our priority. Get direct access to our engineering team with guaranteed response times and proactive support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">24/7 priority support via Slack & email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Dedicated Customer Success Manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">&lt;1 hour response for critical issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Quarterly business reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Custom onboarding & training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingTeaser />

      <CTAWithRays
        title="Ready to scale your integrations?"
        description="Talk to our team about enterprise pricing and custom solutions for your organization."
        primaryCTA={{ text: "Contact Sales", href: "https://cal.com/kariz-pepijn/meeting" }}
        secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}

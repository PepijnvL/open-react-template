export const metadata = {
  title: "Customer-Facing Integrations for SaaS Companies | Your Platform",
  description: "Build integrations your customers can manage themselves. Stop being the middleman with built-in user management that n8n doesn't have.",
};

import PageIllustration from "@/components/page-illustration";
import StartupsHero from "@/components/startups-hero";
import IntegrationDashboardPreview from "@/components/integration-dashboard-preview";
import UserManagementExplainer from "@/components/user-management-explainer";
import AIAgentsFeatureV3 from "@/components/ai-agents-feature-v3";
import FeaturesNew from "@/components/features-new";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function ForStartupsPage() {
  return (
    <>
      <PageIllustration />
      <StartupsHero />

      {/* Integration Dashboard Preview */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-4 md:pb-20 md:pt-8">
            <IntegrationDashboardPreview />
          </div>
        </div>
      </section>

      <UserManagementExplainer />
      <AIAgentsFeatureV3 />
      <FeaturesNew />
      <PricingTeaser />
      <Cta />
    </>
  );
}

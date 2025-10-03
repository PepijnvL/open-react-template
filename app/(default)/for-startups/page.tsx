export const metadata = {
  title: "Kariz for Startups | Let Your Customers Connect Their Apps",
  description: "Focus on your core product while we handle integrations. Customer-managed OAuth, 50+ pre-built connectors, built for scale.",
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
          <div className="pb-12 md:pb-20">
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

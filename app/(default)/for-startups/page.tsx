export const metadata = {
  title: "Customer-Facing Integrations for SaaS Companies | Your Platform",
  description: "Build integrations your customers can manage themselves. Stop being the middleman with built-in user management that n8n doesn't have.",
};

import StartupsHero from "@/components/startups-hero";
import UserManagementExplainer from "@/components/user-management-explainer";
import AIAgentsFeature from "@/components/ai-agents-feature";
import FeaturesNew from "@/components/features-new";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function ForStartupsPage() {
  return (
    <>
      <StartupsHero />
      <UserManagementExplainer />
      <AIAgentsFeature />
      <FeaturesNew />
      <PricingTeaser />
      <Cta />
    </>
  );
}

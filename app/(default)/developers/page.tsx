export const metadata = {
  title: "Kariz for Developers | Ship Integrations in Minutes",
  description: "Stop wrestling with API integrations. Build customer-facing connections to any app with AI-powered workflows and sub-100ms execution.",
};

import PageIllustration from "@/components/page-illustration";
import DeveloperHero from "@/components/developer-hero";
import CustomConnectorShowcase from "@/components/custom-connector-showcase";
import AIAgentsFeatureV3 from "@/components/ai-agents-feature-v3";
import FeaturesNew from "@/components/features-new";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function ForDevelopersPage() {
  return (
    <>
      <PageIllustration />
      <DeveloperHero />
      <CustomConnectorShowcase />
      <AIAgentsFeatureV3 />
      <FeaturesNew />
      <PricingTeaser />
      <Cta />
    </>
  );
}

export const metadata = {
  title: "Automation Platform for Developers | 500 Executions Free - Kariz",
  description: "Build powerful automation workflows in seconds. 500 free executions, managed cloud, custom connectors. No credit card required.",
};

import DeveloperHero from "@/components/developer-hero";
import AIAgentsFeature from "@/components/ai-agents-feature";
import FeaturesNew from "@/components/features-new";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function ForDevelopersPage() {
  return (
    <>
      <DeveloperHero />
      <AIAgentsFeature />
      <FeaturesNew />
      <PricingTeaser />
      <Cta />
    </>
  );
}

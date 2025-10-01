export const metadata = {
  title: "Automation Platform for Developers | 500 Executions Free - Kariz",
  description: "Build powerful automation workflows in seconds. 500 free executions, managed cloud, custom connectors. No credit card required.",
};

import DeveloperHero from "@/components/developer-hero";
import FeaturesNew from "@/components/features-new";
import PricingNew from "@/components/pricing-new";
import Cta from "@/components/cta";

export default function ForDevelopersPage() {
  return (
    <>
      <DeveloperHero />
      <FeaturesNew />
      <PricingNew />
      <Cta />
    </>
  );
}

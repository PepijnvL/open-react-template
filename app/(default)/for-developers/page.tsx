export const metadata = {
  title: "Automation Platform for Developers | 500 Executions Free - Kariz",
  description: "Build powerful automation workflows in seconds. 500 free executions, managed cloud, custom connectors. No credit card required.",
};

import DeveloperHero from "@/components/developer-hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export default function ForDevelopersPage() {
  return (
    <>
      <DeveloperHero />
      <Features />
      <Pricing />
      <Cta />
    </>
  );
}

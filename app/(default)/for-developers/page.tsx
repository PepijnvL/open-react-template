export const metadata = {
  title: "Free n8n Alternative for Developers | 500 Executions Free",
  description: "All the power of n8n without the $24/month minimum. 500 free executions, 5-10x faster, no DevOps required. Build custom connectors in minutes.",
};

import DeveloperHero from "@/components/developer-hero";
import DeveloperComparison from "@/components/developer-comparison";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export default function ForDevelopersPage() {
  return (
    <>
      <DeveloperHero />
      <DeveloperComparison />
      <Features />
      <Pricing />
      <Cta />
    </>
  );
}

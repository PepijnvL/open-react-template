export const metadata = {
  title: "Kariz - Customer-Facing Integration Platform | Build Integrations Your Customers Manage",
  description: "Stop being the integration middleman. Built-in user management, custom connectors, and 500 free executions. What Paragon charges $50k for, you can build for $49/month.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import FeaturesNew from "@/components/features-new";
import IntegrationsNew from "@/components/integrations-new";
import PricingNew from "@/components/pricing-new";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <FeaturesNew />
      <IntegrationsNew />
      <PricingNew />
      <Cta />
    </>
  );
}

export const metadata = {
  title: "Kariz - Customer-Facing Integration Platform | 5-10x Faster Than n8n",
  description: "Build powerful integrations your customers can manage themselves. Free tier, custom connectors, and user management built-in. 5-10x faster than n8n.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Features from "@/components/features";
import Integrations from "@/components/integrations";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <Cta />
    </>
  );
}

export const metadata = {
  title: "AI Automation Platform - Build Workflows Without Code",
  description: "Transform your business with AI automation. Build powerful workflows without coding. Connect your favorite tools and automate tasks in minutes.",
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

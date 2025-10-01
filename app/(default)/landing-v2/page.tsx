"use client";

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import SocialProof from "@/components/social-proof";
import HowItWorks from "@/components/how-it-works";
import FeaturesNew from "@/components/features-new";
import AIAgentsFeature from "@/components/ai-agents-feature";
import UserManagementFeature from "@/components/user-management-feature";
import IntegrationsNew from "@/components/integrations-new";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function LandingV2() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <FeaturesNew />
      <AIAgentsFeature />
      <UserManagementFeature />
      <IntegrationsNew />
      <PricingTeaser />
      <Cta />
    </>
  );
}

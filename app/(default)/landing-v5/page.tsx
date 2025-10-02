"use client";

import PageIllustration from "@/components/page-illustration";
import HeroHomeV5 from "@/components/hero-home-v5";
import SocialProofV3 from "@/components/social-proof-v3";
import HowItWorks from "@/components/how-it-works";
import FeaturesNew from "@/components/features-new";
import AIAgentsFeatureV3 from "@/components/ai-agents-feature-v3";
import UserManagementV4 from "@/components/user-management-v4";
import IntegrationsNew from "@/components/integrations-new";
import PricingTeaser from "@/components/pricing-teaser";
import CTAWithRays from "@/components/cta-with-rays";

export default function LandingV5() {
  return (
    <>
      <PageIllustration />
      <HeroHomeV5 />
      <SocialProofV3 />
      <HowItWorks />
      {/* Removed WorkflowShowcase - ReactFlow is 200KB+ */}
      <FeaturesNew />
      <AIAgentsFeatureV3 />
      <UserManagementV4 />
      <IntegrationsNew />
      <PricingTeaser />
      <CTAWithRays
        title="Ready to Transform Your Workflows?"
        description="Join 500+ teams already automating their processes with Kariz. Get started for free, no credit card required."
        primaryCTA={{ text: "Start Free Trial", href: "https://app.trykariz.com" }}
        secondaryCTA={{ text: "Book a Demo", href: "https://cal.com/kariz-pepijn/meeting" }}
      />
    </>
  );
}

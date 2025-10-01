"use client";

import PageIllustration from "@/components/page-illustration";
import HeroHomeV2 from "@/components/hero-home-v2";
import SocialProofV2 from "@/components/social-proof-v2";
import HowItWorks from "@/components/how-it-works";
import FeaturesNew from "@/components/features-new";
import AIAgentsFeature from "@/components/ai-agents-feature";
import WorkflowShowcase from "@/components/workflow-showcase";
import UserManagementV2 from "@/components/user-management-v2";
import IntegrationsNew from "@/components/integrations-new";
import PricingTeaser from "@/components/pricing-teaser";
import CTAWithRays from "@/components/cta-with-rays";

export default function LandingV2() {
  return (
    <>
      <PageIllustration />
      <HeroHomeV2 />
      <SocialProofV2 />
      <HowItWorks />
      <WorkflowShowcase />
      <FeaturesNew />
      <AIAgentsFeature />
      <UserManagementV2 />
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

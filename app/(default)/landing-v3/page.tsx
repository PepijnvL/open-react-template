"use client";

import dynamic from "next/dynamic";
import PageIllustration from "@/components/page-illustration";
import HeroHomeV3 from "@/components/hero-home-v3";
import SocialProofV2 from "@/components/social-proof-v2";
import HowItWorks from "@/components/how-it-works";
import FeaturesNew from "@/components/features-new";
import AIAgentsFeatureV3 from "@/components/ai-agents-feature-v3";
import WorkflowShowcase from "@/components/workflow-showcase";
import UserManagementV3 from "@/components/user-management-v3";
import IntegrationsNew from "@/components/integrations-new";
import PricingTeaser from "@/components/pricing-teaser";
import CTAWithRays from "@/components/cta-with-rays";
import FeatureCard from "@/components/feature-card";
import UserManagementGraphic from "@/components/user-management-graphic";

const AppActionsFlowV3 = dynamic(() => import("@/components/gumloop-v3/app-actions-flow-v3"), {
  ssr: false,
});

export default function LandingV3() {
  return (
    <>
      <PageIllustration />
      <HeroHomeV3 />
      <SocialProofV2 />
      <HowItWorks />
      <WorkflowShowcase />
      <FeaturesNew />
      <AIAgentsFeatureV3 />

      {/* App Actions Flow Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">App Actions Flow</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Shows apps with their available actions: App icon on top → Actions below
          </p>
          <AppActionsFlowV3 />
        </div>
      </section>

      {/* User Management Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              User Management Features
            </h2>
            <p className="text-gray-400">
              Powerful tools to manage your team and control access
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <FeatureCard
              icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="Team Management"
              description="Easily add, remove, and organize team members. Assign roles and permissions with intuitive controls."
              delay={0}
            />
            <FeatureCard
              icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Access Control"
              description="Granular permission system to control what each user can see and do across your platform."
              delay={0.1}
            />
            <FeatureCard
              icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Activity Tracking"
              description="Monitor user activity and track changes across your workspace with detailed audit logs."
              delay={0.2}
            />
          </div>

          {/* User Management Graphics */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
              <UserManagementGraphic variant="dashboard" />
              <p className="mt-4 text-center text-sm text-gray-400">Dashboard View</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
              <UserManagementGraphic variant="team" />
              <p className="mt-4 text-center text-sm text-gray-400">Team Collaboration</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
              <UserManagementGraphic variant="permissions" />
              <p className="mt-4 text-center text-sm text-gray-400">Permission Matrix</p>
            </div>
          </div>
        </div>
      </section>

      <UserManagementV3 />
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

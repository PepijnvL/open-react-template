"use client";

import Marquee, { MarqueeItem } from "@/components/marquee";
import PricingSection from "@/components/pricing-section";
import BentoGrid, { BentoCard } from "@/components/bento-grid";
import { RollingNumber } from "@/components/animated-counter";
import AnimatedButton from "@/components/animated-button";
import ShimmerButton from "@/components/shimmer-button";
import TestimonialCard from "@/components/testimonial-card";
import InteractiveButton from "@/components/interactive-button";
import FeatureCard from "@/components/feature-card";
import AnimatedBadge from "@/components/animated-badge";
import UserManagementGraphic from "@/components/user-management-graphic";
import TiltCard from "@/components/tilt-card";
import ProgressRing from "@/components/progress-ring";
import AnimatedTimeline from "@/components/animated-timeline";
import ToastNotification from "@/components/toast-notification";
import SparkleEffect from "@/components/sparkle-effect";
import DirectionAwareCard from "@/components/direction-aware-card";
import TextGenerateEffect from "@/components/text-generate-effect";
import BackgroundBeams from "@/components/background-beams";
import ExpandableCard from "@/components/expandable-card";
import FlipWords from "@/components/flip-words";
import GlowingCard from "@/components/glowing-card";
import AnimatedTabs from "@/components/animated-tabs";
import ParticleEffect from "@/components/particle-effect";
import WaveAnimation from "@/components/wave-animation";
import Image from "next/image";
import { useState } from "react";

export default function MagicUIDemoPage() {
  // Toast state
  const [toastVisible, setToastVisible] = useState(false);
  const [toastVariant, setToastVariant] = useState<"success" | "error" | "warning" | "info">("success");

  const showToast = (variant: "success" | "error" | "warning" | "info") => {
    setToastVariant(variant);
    setToastVisible(true);
  };

  // Company logos for marquee
  const companies = [
    { name: "Google", logo: "/icons/Google.svg" },
    { name: "Slack", logo: "/icons/Slack.svg" },
    { name: "Shopify", logo: "/icons/Shopify.svg" },
    { name: "Notion", logo: "/icons/Notion.svg" },
    { name: "YouTube", logo: "/icons/YouTube.svg" },
    { name: "Discord", logo: "/icons/Discord.svg" },
    { name: "GitHub", logo: "/icons/GitHub-dark.svg" },
    { name: "Spotify", logo: "/icons/Spotify.svg" },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Free",
      description: "Perfect for individual users",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "Custom domain", included: true },
        { text: "SEO-optimizations", included: true },
        { text: "Auto-generated API docs", included: true },
        { text: "Built-in components library", included: true },
        { text: "E-commerce integration", included: false },
        { text: "User authentication system", included: false },
      ],
      cta: "Start Free",
      ctaLink: "#",
    },
    {
      name: "Startup",
      description: "Ideal for professionals and small teams",
      monthlyPrice: 12,
      yearlyPrice: 10,
      popular: true,
      features: [
        { text: "Custom domain", included: true },
        { text: "SEO-optimizations", included: true },
        { text: "Auto-generated API docs", included: true },
        { text: "Built-in components library", included: true },
        { text: "E-commerce integration", included: true },
        { text: "User authentication system", included: true },
        { text: "Multi-language support", included: true },
        { text: "Real-time collaboration tools", included: true },
      ],
      cta: "Upgrade to Pro",
      ctaLink: "#",
    },
    {
      name: "Enterprise",
      description: "Best for large teams and organizations",
      monthlyPrice: 24,
      yearlyPrice: 19,
      features: [
        { text: "Custom domain", included: true },
        { text: "SEO-optimizations", included: true },
        { text: "Auto-generated API docs", included: true },
        { text: "Built-in components library", included: true },
        { text: "E-commerce integration", included: true },
        { text: "User authentication system", included: true },
        { text: "Multi-language support", included: true },
        { text: "Real-time collaboration tools", included: true },
        { text: "Priority support", included: true },
        { text: "Custom integrations", included: true },
      ],
      cta: "Contact Sales",
      ctaLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          MagicUI Components Demo
        </h1>

        {/* Marquee Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
            Trusted by Leading Teams
          </h2>

          <Marquee className="py-4" pauseOnHover>
            {companies.map((company) => (
              <MarqueeItem key={company.name} className="mx-8">
                <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 px-6 py-4 backdrop-blur-sm">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={32}
                    height={32}
                    className="opacity-70"
                  />
                  <span className="text-sm font-medium text-gray-300">{company.name}</span>
                </div>
              </MarqueeItem>
            ))}
          </Marquee>

          {/* Second row with reverse direction */}
          <Marquee className="py-4" reverse pauseOnHover>
            {companies.map((company) => (
              <MarqueeItem key={`reverse-${company.name}`} className="mx-8">
                <div className="rounded-lg bg-gray-800/30 p-4 backdrop-blur-sm transition-all hover:bg-gray-800/50">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={48}
                    height={48}
                    className="opacity-80"
                  />
                </div>
              </MarqueeItem>
            ))}
          </Marquee>
        </section>

        {/* Bento Grid Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Empower Your Workflow
            </h2>
            <p className="text-gray-400">
              Everything you need to automate and scale your business
            </p>
          </div>

          <BentoGrid>
            {/* Large card - Stats */}
            <BentoCard colSpan={2} rowSpan={2} variant="vibrant">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Instant Insights
                  </h3>
                  <p className="text-gray-400">
                    Real-time analytics and reporting at your fingertips
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <p className="mb-2 text-sm text-gray-400">Total Automations</p>
                  <div className="text-7xl font-bold text-white">
                    <RollingNumber value={1234567} duration={2000} separator />
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Integration icons */}
            <BentoCard>
              <h3 className="mb-4 text-lg font-bold text-white">Integrations</h3>
              <div className="grid grid-cols-3 gap-4">
                {companies.slice(0, 6).map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center rounded-lg bg-gray-800/30 p-3 transition-all hover:bg-gray-800/50"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={32}
                      height={32}
                      className="opacity-70"
                    />
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Quick stat card 1 */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-green-500/20 p-2">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-400">Growth Rate</h3>
                </div>
                <p className="text-3xl font-bold text-white">+245%</p>
              </div>
            </BentoCard>

            {/* Quick stat card 2 */}
            <BentoCard variant="subtle">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-purple-500/20 p-2">
                    <svg
                      className="h-6 w-6 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-400">Time Saved</h3>
                </div>
                <p className="text-3xl font-bold text-white">2,400hrs</p>
              </div>
            </BentoCard>

            {/* Wide card */}
            <BentoCard colSpan={2}>
              <h3 className="mb-4 text-lg font-bold text-white">
                Built for Developers
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                Powerful APIs and SDKs to integrate with your existing tools
              </p>
              <div className="rounded-lg bg-gray-900/50 p-4 font-mono text-sm text-green-400">
                <code>
                  npm install @gumloop/sdk
                  <br />
                  <span className="text-gray-500">// Get started in seconds</span>
                </code>
              </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Pricing that scales with you
            </h2>
            <p className="text-gray-400">
              Whichever plan you pick, it's free until you love your docs. That's our promise.
            </p>
          </div>

          <PricingSection tiers={pricingTiers} />
        </section>

        {/* Buttons Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="gradient" icon={<div className="h-2 w-2 rounded-full bg-purple-400" />}>
              Premium Components
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Interactive Button Collection
            </h2>
            <p className="text-gray-400">
              Premium button components with advanced animations and interactions
            </p>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-white text-center">Interactive Variants</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <InteractiveButton variant="default">Default Effect</InteractiveButton>
              <InteractiveButton variant="rainbow">Rainbow Gradient</InteractiveButton>
              <InteractiveButton variant="ripple">Ripple Effect</InteractiveButton>
              <InteractiveButton variant="magnetic">Magnetic Button</InteractiveButton>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white text-center">Classic Variants</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <AnimatedButton variant="default">Default Gradient</AnimatedButton>
              <AnimatedButton variant="shine">Shine Effect</AnimatedButton>
              <AnimatedButton variant="gradient">Animated Gradient</AnimatedButton>
              <AnimatedButton variant="glow">Glow Effect</AnimatedButton>
              <AnimatedButton variant="border">Border Transform</AnimatedButton>
              <AnimatedButton variant="hoverBorder">Hover Border</AnimatedButton>
              <ShimmerButton>Shimmer Magic</ShimmerButton>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              What Our Customers Say
            </h2>
            <p className="text-gray-400">
              Real feedback from teams using our platform to automate their workflows
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Kariz transformed our integration process. We went from weeks to days building customer-facing integrations. The visual workflow builder is incredibly intuitive and powerful."
              author="Sarah Chen"
              role="CTO"
              company="TechFlow"
              rating={5}
            />
            <TestimonialCard
              quote="The visual workflow builder is incredibly intuitive. Our team was up and running in hours, not days. The custom connectors saved us months of development time."
              author="Michael Rodriguez"
              role="VP of Engineering"
              company="DataSync Pro"
              rating={5}
            />
            <TestimonialCard
              quote="Best automation platform we've used. The custom connectors feature is a game-changer for our business. We've automated 80% of our manual processes."
              author="Emily Watson"
              role="Product Manager"
              company="CloudBase"
              rating={5}
            />
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="mb-20">
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
        </section>

        {/* Badge Collection */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Animated Badges
            </h2>
            <p className="text-gray-400">
              Status indicators and labels with smooth animations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedBadge variant="default">Default</AnimatedBadge>
            <AnimatedBadge variant="success" icon={<div className="h-2 w-2 rounded-full bg-emerald-400" />}>
              Active
            </AnimatedBadge>
            <AnimatedBadge variant="warning" icon={<div className="h-2 w-2 rounded-full bg-amber-400" />}>
              Pending
            </AnimatedBadge>
            <AnimatedBadge variant="info" pulse icon={<div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />}>
              Live
            </AnimatedBadge>
            <AnimatedBadge variant="gradient">Premium</AnimatedBadge>
          </div>
        </section>

        {/* 3D Tilt Cards */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="info" icon={<div className="h-2 w-2 rounded-full bg-cyan-400" />}>
              3D Effects
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              3D Tilt Cards
            </h2>
            <p className="text-gray-400">
              Interactive cards with mouse-tracking 3D tilt effects
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <TiltCard>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Lightning Fast</h3>
                <p className="text-gray-400">Blazing fast performance with optimized rendering</p>
              </div>
            </TiltCard>
            <TiltCard glowColor="rgba(236, 72, 153, 0.5)">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 p-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Secure by Default</h3>
                <p className="text-gray-400">Enterprise-grade security built into every layer</p>
              </div>
            </TiltCard>
            <TiltCard glowColor="rgba(59, 130, 246, 0.5)">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Fully Customizable</h3>
                <p className="text-gray-400">Adapt every component to match your brand</p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Progress Indicators */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="success" icon={<div className="h-2 w-2 rounded-full bg-emerald-400" />}>
              Progress Tracking
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Animated Progress Rings
            </h2>
            <p className="text-gray-400">
              Beautiful circular progress indicators with smooth animations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <ProgressRing progress={75} />
              <p className="mt-4 text-sm text-gray-400">Completion Rate</p>
            </div>
            <div className="text-center">
              <ProgressRing progress={92} size={140} strokeWidth={10} />
              <p className="mt-4 text-sm text-gray-400">User Satisfaction</p>
            </div>
            <div className="text-center">
              <ProgressRing progress={58} size={100} strokeWidth={6} />
              <p className="mt-4 text-sm text-gray-400">Performance Score</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="gradient">
              Roadmap
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Development Timeline
            </h2>
            <p className="text-gray-400">
              Track progress with animated timeline components
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <AnimatedTimeline
              items={[
                {
                  title: "Project Kickoff",
                  description: "Initial planning and requirement gathering phase. Set up development environment and core infrastructure.",
                  date: "Q1 2024",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: "Alpha Release",
                  description: "First working version with core features. Began internal testing and collected initial feedback.",
                  date: "Q2 2024",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: "Beta Launch",
                  description: "Public beta with expanded feature set. Onboarded first wave of external users and refined UX.",
                  date: "Q3 2024",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  ),
                },
                {
                  title: "v1.0 Release",
                  description: "Production-ready release with full feature set. Achieved 99.9% uptime and positive user feedback.",
                  date: "Q4 2024",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Toast Notifications */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="warning" icon={<div className="h-2 w-2 rounded-full bg-amber-400" />}>
              Notifications
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Toast Notifications
            </h2>
            <p className="text-gray-400">
              Beautiful notification system with multiple variants
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <InteractiveButton variant="default" onClick={() => showToast("success")}>
              Show Success
            </InteractiveButton>
            <InteractiveButton variant="default" onClick={() => showToast("error")}>
              Show Error
            </InteractiveButton>
            <InteractiveButton variant="default" onClick={() => showToast("warning")}>
              Show Warning
            </InteractiveButton>
            <InteractiveButton variant="default" onClick={() => showToast("info")}>
              Show Info
            </InteractiveButton>
          </div>
        </section>

        {/* Toast Component */}
        <ToastNotification
          title={
            toastVariant === "success"
              ? "Success!"
              : toastVariant === "error"
              ? "Error Occurred"
              : toastVariant === "warning"
              ? "Warning"
              : "Information"
          }
          description={
            toastVariant === "success"
              ? "Your changes have been saved successfully."
              : toastVariant === "error"
              ? "There was a problem processing your request."
              : toastVariant === "warning"
              ? "Please review your settings before continuing."
              : "Here's some useful information for you."
          }
          variant={toastVariant}
          icon={
            toastVariant === "success" ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : toastVariant === "error" ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : toastVariant === "warning" ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          }
          isVisible={toastVisible}
          onClose={() => setToastVisible(false)}
        />

        {/* Text Animation Effects */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="gradient">
              Text Effects
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Advanced Text Animations
            </h2>
            <p className="text-gray-400">
              Dynamic text effects with smooth transitions
            </p>
          </div>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="mb-6 text-xl text-gray-300">Text Generate Effect</h3>
              <TextGenerateEffect
                words="Build stunning integrations with our powerful platform that scales with your business"
                className="text-4xl text-white"
                variant="blur"
              />
            </div>
            <div className="text-center">
              <h3 className="mb-6 text-xl text-gray-300">Flip Words Animation</h3>
              <div className="text-4xl text-white">
                Automate your <FlipWords words={["workflows", "integrations", "processes", "tasks"]} /> today
              </div>
            </div>
          </div>
        </section>

        {/* Background Effects */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="info" icon={<div className="h-2 w-2 rounded-full bg-cyan-400" />}>
              Background Effects
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Immersive Background Animations
            </h2>
            <p className="text-gray-400">
              Eye-catching background effects for your sections
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <SparkleEffect className="h-64 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center" density={20}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Sparkle Effect</h3>
                <p className="text-gray-400">Magical sparkle animation</p>
              </div>
            </SparkleEffect>
            <BackgroundBeams className="h-64 rounded-2xl flex items-center justify-center" beamCount={6}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Background Beams</h3>
                <p className="text-gray-400">Flowing gradient beams</p>
              </div>
            </BackgroundBeams>
            <ParticleEffect className="h-64 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center" particleCount={40}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Particle Effect</h3>
                <p className="text-gray-400">Floating particles with connections</p>
              </div>
            </ParticleEffect>
            <WaveAnimation className="h-64 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center" waveCount={3}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Wave Animation</h3>
                <p className="text-gray-400">Smooth flowing waves</p>
              </div>
            </WaveAnimation>
          </div>
        </section>

        {/* Advanced Cards */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="success" icon={<div className="h-2 w-2 rounded-full bg-emerald-400" />}>
              Premium Cards
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Interactive Card Components
            </h2>
            <p className="text-gray-400">
              Advanced card interactions with stunning effects
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <DirectionAwareCard className="h-64">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Direction Aware</h3>
                <p className="text-gray-400">Hover from different sides</p>
              </div>
            </DirectionAwareCard>
            <GlowingCard className="h-64">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Glowing Card</h3>
                <p className="text-gray-400">Animated glow effect</p>
                <div className="mt-4 flex justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50" />
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/50" />
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/50" />
                </div>
              </div>
            </GlowingCard>
            <ExpandableCard
              title="Expandable Card"
              description="Click to expand and see more content"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              }
              expandedContent={
                <div className="text-gray-300 space-y-4">
                  <p>This card expands with a smooth animation to reveal additional content. Perfect for feature showcases, FAQs, or detailed information.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Smooth expand/collapse animation</li>
                    <li>Responsive grid layout support</li>
                    <li>Customizable content area</li>
                    <li>Interactive hover effects</li>
                  </ul>
                </div>
              }
            />
          </div>
        </section>

        {/* Animated Tabs */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <AnimatedBadge variant="warning" icon={<div className="h-2 w-2 rounded-full bg-amber-400" />}>
              Navigation
            </AnimatedBadge>
            <h2 className="mt-6 mb-4 text-3xl font-bold text-white">
              Smooth Tab Navigation
            </h2>
            <p className="text-gray-400">
              Elegant tab system with animated transitions
            </p>
          </div>
          <AnimatedTabs
            tabs={[
              {
                id: "features",
                label: "Features",
                icon: "⚡",
                content: (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Powerful Features</h3>
                    <p className="text-gray-400 mb-6">
                      Our platform provides everything you need to build, deploy, and scale your integrations.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                        <h4 className="text-white font-semibold mb-2">Visual Builder</h4>
                        <p className="text-gray-400 text-sm">Drag-and-drop interface for building workflows</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                        <h4 className="text-white font-semibold mb-2">Real-time Sync</h4>
                        <p className="text-gray-400 text-sm">Keep your data synchronized across all platforms</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "integrations",
                label: "Integrations",
                icon: "🔗",
                content: (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">200+ Integrations</h3>
                    <p className="text-gray-400 mb-6">
                      Connect with all your favorite tools and services seamlessly.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Salesforce", "HubSpot", "Shopify", "Stripe", "Slack", "Gmail"].map((tool) => (
                        <div key={tool} className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                          <span className="text-white font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                id: "pricing",
                label: "Pricing",
                icon: "💰",
                content: (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Flexible Pricing</h3>
                    <p className="text-gray-400 mb-6">
                      Choose the plan that works best for your team size and needs.
                    </p>
                    <div className="grid gap-6 md:grid-cols-3">
                      {["Starter", "Pro", "Enterprise"].map((plan, i) => (
                        <div key={plan} className="p-6 rounded-xl bg-slate-800/50 border border-white/5">
                          <h4 className="text-white font-bold text-xl mb-2">{plan}</h4>
                          <div className="text-3xl font-bold text-white mb-4">${[0, 49, 199][i]}<span className="text-sm text-gray-400">/mo</span></div>
                          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity">
                            Get Started
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </section>

        {/* Status */}
        <section className="rounded-2xl border border-green-500/30 bg-green-900/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">✅ 26 Premium Components Ready</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-white font-semibold mb-3">Interactive</h3>
              <StatusItem label="Interactive Buttons" status="working" />
              <StatusItem label="3D Tilt Cards" status="working" />
              <StatusItem label="Direction Aware Card" status="working" />
              <StatusItem label="Glowing Card" status="working" />
              <StatusItem label="Expandable Card" status="working" />
              <StatusItem label="Animated Tabs" status="working" />
              <StatusItem label="Toast Notifications" status="working" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold mb-3">Animations</h3>
              <StatusItem label="Text Generate Effect" status="working" />
              <StatusItem label="Flip Words" status="working" />
              <StatusItem label="Progress Rings" status="working" />
              <StatusItem label="Animated Timeline" status="working" />
              <StatusItem label="Animated Counter" status="working" />
              <StatusItem label="Animated Badges" status="working" />
              <StatusItem label="Marquee / Infinite Scroll" status="working" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold mb-3">Backgrounds & Layout</h3>
              <StatusItem label="Sparkle Effect" status="working" />
              <StatusItem label="Background Beams" status="working" />
              <StatusItem label="Particle Effect" status="working" />
              <StatusItem label="Wave Animation" status="working" />
              <StatusItem label="Bento Grid Layout" status="working" />
              <StatusItem label="Pricing Section" status="working" />
              <StatusItem label="Feature Cards" status="working" />
              <StatusItem label="Testimonial Cards" status="working" />
              <StatusItem label="User Management Graphics" status="working" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusItem({ label, status }: { label: string; status: "working" | "pending" }) {
  return (
    <div className="flex items-center gap-2">
      {status === "working" && (
        <div className="h-2 w-2 rounded-full bg-green-500" />
      )}
      {status === "pending" && (
        <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
      )}
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}

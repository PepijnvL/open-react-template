"use client";

import { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import {
  FaRocket,
  FaBolt,
  FaCloud,
  FaCog,
  FaChartLine,
  FaLock,
  FaUsers,
  FaCode
} from "react-icons/fa";
import {
  AiOutlineThunderbolt,
  AiFillHeart,
  AiOutlineCheckCircle
} from "react-icons/ai";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import AnimatedBadge from "@/components/animated-badge";
import InteractiveButton from "@/components/interactive-button";

export default function ToolsDemoPage() {
  const [showNotations, setShowNotations] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <AnimatedBadge variant="gradient" className="mb-6">
            New Tools Demo
          </AnimatedBadge>
          <h1 className="mb-6 font-nacelle text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Enhanced Graphics Tools
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
            Showcasing the newly installed packages: React Icons, Rough Notation, and more
          </p>
        </div>

        {/* Tools Overview */}
        <section className="mb-20">
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-bold text-white">📦 Installed Packages</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-900/50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <FaRocket className="h-8 w-8 text-indigo-400" />
                  <h3 className="text-lg font-semibold text-white">React Icons</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  50,000+ icons from 20+ icon packs in ONE package
                </p>
                <code className="text-xs text-indigo-300">npm install react-icons</code>
              </div>

              <div className="rounded-xl bg-gray-900/50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <HiSparkles className="h-8 w-8 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Rough Notation</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Hand-drawn annotations with animated effects
                </p>
                <code className="text-xs text-purple-300">npm install react-rough-notation</code>
              </div>

              <div className="rounded-xl bg-gray-900/50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <AiFillHeart className="h-8 w-8 text-pink-400" />
                  <h3 className="text-lg font-semibold text-white">Lottie React</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Lightweight animations, 90% smaller than GIFs
                </p>
                <code className="text-xs text-pink-300">npm install lottie-react</code>
              </div>
            </div>
          </div>
        </section>

        {/* React Icons Demo */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white">🎨 React Icons Showcase</h2>
            <p className="text-gray-400">
              All icons are tree-shaken - only the ones you use are bundled
            </p>
          </div>

          {/* Feature Icons Grid */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-white">Feature Icons (Font Awesome)</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-indigo-500/50 hover:bg-gray-800/50">
                <FaRocket className="mx-auto mb-4 h-12 w-12 text-indigo-400 transition-transform group-hover:scale-110" />
                <h4 className="font-semibold text-white">Lightning Fast</h4>
                <p className="mt-2 text-sm text-gray-400">FaRocket</p>
              </div>

              <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-purple-500/50 hover:bg-gray-800/50">
                <FaBolt className="mx-auto mb-4 h-12 w-12 text-purple-400 transition-transform group-hover:scale-110" />
                <h4 className="font-semibold text-white">High Performance</h4>
                <p className="mt-2 text-sm text-gray-400">FaBolt</p>
              </div>

              <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-cyan-500/50 hover:bg-gray-800/50">
                <FaCloud className="mx-auto mb-4 h-12 w-12 text-cyan-400 transition-transform group-hover:scale-110" />
                <h4 className="font-semibold text-white">Cloud Native</h4>
                <p className="mt-2 text-sm text-gray-400">FaCloud</p>
              </div>

              <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-emerald-500/50 hover:bg-gray-800/50">
                <FaLock className="mx-auto mb-4 h-12 w-12 text-emerald-400 transition-transform group-hover:scale-110" />
                <h4 className="font-semibold text-white">Secure</h4>
                <p className="mt-2 text-sm text-gray-400">FaLock</p>
              </div>
            </div>
          </div>

          {/* AI Icons */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-white">Ant Design Icons</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <AiOutlineThunderbolt className="h-10 w-10 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-white">Instant Setup</h4>
                  <p className="text-sm text-gray-400">AiOutlineThunderbolt</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <AiFillHeart className="h-10 w-10 text-pink-400" />
                <div>
                  <h4 className="font-semibold text-white">Loved by Teams</h4>
                  <p className="text-sm text-gray-400">AiFillHeart</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <AiOutlineCheckCircle className="h-10 w-10 text-green-400" />
                <div>
                  <h4 className="font-semibold text-white">Verified</h4>
                  <p className="text-sm text-gray-400">AiOutlineCheckCircle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Icons */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Heroicons v2</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-4">
                <HiSparkles className="h-8 w-8 text-amber-400" />
                <span className="text-white">Sparkles</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-4">
                <HiLightningBolt className="h-8 w-8 text-indigo-400" />
                <span className="text-white">Lightning Bolt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rough Notation Demo */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-white">✍️ Rough Notation Demo</h2>
              <p className="text-gray-400">
                Hand-drawn annotations that add personality
              </p>
            </div>
            <button
              onClick={() => setShowNotations(!showNotations)}
              className="rounded-lg border border-indigo-500 bg-indigo-500/20 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500/30"
            >
              {showNotations ? "Hide" : "Show"} Annotations
            </button>
          </div>

          <div className="space-y-12">
            {/* Underline Example */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Underline Style</h3>
              <p className="text-lg text-gray-300">
                Build powerful integrations with{" "}
                <RoughNotation type="underline" show={showNotations} color="#6366F1" strokeWidth={2}>
                  10x faster execution
                </RoughNotation>{" "}
                than competitors.
              </p>
            </div>

            {/* Circle Example */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Circle Style</h3>
              <p className="text-lg text-gray-300">
                Start automating today with{" "}
                <RoughNotation type="circle" show={showNotations} color="#EC4899" padding={8}>
                  500 free executions
                </RoughNotation>{" "}
                per month.
              </p>
            </div>

            {/* Box Example */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Box Style</h3>
              <p className="text-lg text-gray-300">
                Trusted by{" "}
                <RoughNotation type="box" show={showNotations} color="#A855F7" padding={8}>
                  500+ teams
                </RoughNotation>{" "}
                worldwide.
              </p>
            </div>

            {/* Highlight Example */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Highlight Style</h3>
              <p className="text-lg text-gray-300">
                Our platform includes{" "}
                <RoughNotation type="highlight" show={showNotations} color="#FCD34D" multiline>
                  built-in user management
                </RoughNotation>{" "}
                so your customers manage their own integrations.
              </p>
            </div>

            {/* Crossed-out Example */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Crossed-out Style</h3>
              <p className="text-lg text-gray-300">
                <RoughNotation type="crossed-off" show={showNotations} color="#EF4444">
                  $50,000 setup fee
                </RoughNotation>{" "}
                <span className="text-emerald-400 font-semibold">FREE</span> forever tier
              </p>
            </div>

            {/* Bracket Example */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Bracket Style</h3>
              <div className="space-y-2">
                <RoughNotation type="bracket" show={showNotations} color="#10B981" brackets={["left"]}>
                  <p className="text-gray-300">✓ Custom connectors</p>
                  <p className="text-gray-300">✓ AI-powered workflows</p>
                  <p className="text-gray-300">✓ Real-time sync</p>
                </RoughNotation>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Example */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white">🎯 Real-World Example</h2>
            <p className="text-gray-400">
              Combining React Icons + Rough Notation for maximum impact
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 p-12 text-center">
            <div className="mb-6 flex justify-center gap-4">
              <FaRocket className="h-12 w-12 text-indigo-400" />
              <FaBolt className="h-12 w-12 text-purple-400" />
              <HiSparkles className="h-12 w-12 text-pink-400" />
            </div>

            <h3 className="mb-4 font-nacelle text-3xl font-bold text-white md:text-4xl">
              The automation platform built for{" "}
              <RoughNotation type="underline" show={showNotations} color="#6366F1" strokeWidth={3}>
                production workflows
              </RoughNotation>
            </h3>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Enterprise-grade performance meets intuitive design. Get{" "}
              <RoughNotation type="circle" show={showNotations} color="#EC4899" padding={4}>
                500 free executions
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation type="highlight" show={showNotations} color="#A855F7">
                10x faster execution
              </RoughNotation>{" "}
              for production workloads.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <InteractiveButton variant="default">
                <FaRocket className="mr-2 inline h-4 w-4" />
                Get Started Free
              </InteractiveButton>
              <InteractiveButton variant="rainbow">
                <FaChartLine className="mr-2 inline h-4 w-4" />
                View Pricing
              </InteractiveButton>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="h-5 w-5 text-green-400" />
                <span>500 executions/month free</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="h-5 w-5 text-green-400" />
                <span>Trusted by 500+ teams</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="rounded-2xl border border-green-500/30 bg-green-900/20 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">✅ Benefits of These Tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <FaCode className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-400" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">Smaller Bundle Size</h4>
                  <p className="text-sm text-gray-400">Tree-shaking only loads icons you use</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCog className="mt-1 h-6 w-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">Easy to Use</h4>
                  <p className="text-sm text-gray-400">Simple React component API</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaUsers className="mt-1 h-6 w-6 flex-shrink-0 text-pink-400" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">Adds Personality</h4>
                  <p className="text-sm text-gray-400">Hand-drawn style feels human</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiLightningBolt className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-400" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">Fast Implementation</h4>
                  <p className="text-sm text-gray-400">Minutes, not hours to integrate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaChartLine className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-400" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">Improved Engagement</h4>
                  <p className="text-sm text-gray-400">Draws attention to key content</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AiFillHeart className="mt-1 h-6 w-6 flex-shrink-0 text-red-400" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">Free & Open Source</h4>
                  <p className="text-sm text-gray-400">No license fees, unlimited usage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="text-center">
          <div className="inline-block rounded-2xl border border-indigo-500/30 bg-indigo-900/20 px-8 py-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center justify-center gap-2">
                  <FaRocket className="h-6 w-6 text-indigo-400" />
                  <div className="text-4xl font-bold text-indigo-400">50,000+</div>
                </div>
                <p className="mt-2 text-sm text-gray-400">Available Icons</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2">
                  <HiSparkles className="h-6 w-6 text-purple-400" />
                  <div className="text-4xl font-bold text-purple-400">6</div>
                </div>
                <p className="mt-2 text-sm text-gray-400">Annotation Styles</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2">
                  <AiFillHeart className="h-6 w-6 text-pink-400" />
                  <div className="text-4xl font-bold text-pink-400">FREE</div>
                </div>
                <p className="mt-2 text-sm text-gray-400">All Tools</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

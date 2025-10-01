"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedBadge from "@/components/animated-badge";
import InteractiveButton from "@/components/interactive-button";
import AnimatedGridPattern from "@/components/animated-grid-pattern";
import SparkleEffect from "@/components/sparkle-effect";

export default function GraphicsLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Integration icons organized by category
  const integrationIcons = {
    ai: [
      { name: "Claude AI", path: "/icons/Claude AI.svg" },
      { name: "DeepSeek", path: "/icons/DeepSeek.svg" },
      { name: "Mistral AI", path: "/icons/Mistral AI.svg" },
      { name: "xAI (Grok)", path: "/icons/xAI (Grok)-dark.svg" },
      { name: "GitHub Copilot", path: "/icons/GitHub Copilot-dark.svg" },
    ],
    social: [
      { name: "Discord", path: "/icons/Discord.svg" },
      { name: "LinkedIn", path: "/icons/LinkedIn.svg" },
      { name: "Twitter", path: "/icons/Twitter.svg" },
      { name: "Meta", path: "/icons/Meta.svg" },
      { name: "TikTok", path: "/icons/TikTok.svg" },
      { name: "YouTube", path: "/icons/YouTube.svg" },
      { name: "Snapchat", path: "/icons/Snapchat.svg" },
      { name: "Telegram", path: "/icons/Telegram.svg" },
      { name: "WhatsApp", path: "/icons/WhatsApp.svg" },
      { name: "Reddit", path: "/icons/Reddit.svg" },
    ],
    productivity: [
      { name: "Google", path: "/icons/Google.svg" },
      { name: "Gmail", path: "/icons/Gmail.svg" },
      { name: "Google Drive", path: "/icons/Google Drive.svg" },
      { name: "Slack", path: "/icons/Slack.svg" },
      { name: "Notion", path: "/icons/Notion.svg" },
      { name: "Outlook", path: "/icons/Outlook.svg" },
    ],
    ecommerce: [
      { name: "Shopify", path: "/icons/Shopify.svg" },
      { name: "Spotify", path: "/icons/Spotify.svg" },
      { name: "Ebay", path: "/icons/Ebay.svg" },
      { name: "Aliexpress", path: "/icons/Aliexpress.svg" },
    ],
    development: [
      { name: "GitHub", path: "/icons/GitHub-dark.svg" },
      { name: "Docker", path: "/icons/Docker.svg" },
      { name: "PostgreSQL", path: "/icons/PostgreSQL.svg" },
      { name: "MySQL", path: "/icons/MySQL.svg" },
      { name: "Redis", path: "/icons/Redis.svg" },
      { name: "n8n", path: "/icons/n8n.svg" },
      { name: "MCP", path: "/icons/Model Context Protocol-dark.svg" },
      { name: "Home Assistant", path: "/icons/Home Assistant.svg" },
    ],
  };

  const backgroundGraphics = [
    { name: "Blurred Shape (Indigo)", path: "/images/blurred-shape.svg" },
    { name: "Blurred Shape (Gray)", path: "/images/blurred-shape-gray.svg" },
    { name: "Page Illustration", path: "/images/page-illustration.svg" },
    { name: "Footer Illustration", path: "/images/footer-illustration.svg" },
    { name: "Secondary Illustration", path: "/images/secondary-illustration.svg" },
  ];

  const categories = [
    { id: "all", label: "All Graphics", icon: "🎨", count: 76 },
    { id: "backgrounds", label: "Backgrounds", icon: "🌄", count: 5 },
    { id: "ai", label: "AI Models", icon: "🤖", count: 5 },
    { id: "social", label: "Social Media", icon: "📱", count: 10 },
    { id: "productivity", label: "Productivity", icon: "⚡", count: 6 },
    { id: "ecommerce", label: "E-commerce", icon: "🛍️", count: 4 },
    { id: "development", label: "Development", icon: "💻", count: 8 },
  ];

  const getTotalIcons = () => {
    return Object.values(integrationIcons).reduce((sum, arr) => sum + arr.length, 0);
  };

  const filteredIcons = selectedCategory === "all" || selectedCategory === "backgrounds"
    ? integrationIcons
    : { [selectedCategory]: integrationIcons[selectedCategory as keyof typeof integrationIcons] };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <AnimatedGridPattern gridSize={60} maxConnections={2} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <AnimatedBadge variant="gradient" className="mb-6">
            Graphics Library
          </AnimatedBadge>
          <h1 className="mb-6 font-nacelle text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Visual Assets & Graphics Strategy
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
            Comprehensive inventory of our visual assets inspired by Gumloop's modern aesthetic.
            {getTotalIcons() + backgroundGraphics.length} graphics ready to use.
          </p>
        </div>

        {/* Strategy Summary */}
        <section className="mb-20">
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-white">📋 Graphics Import Strategy</h2>
            <p className="mb-6 text-gray-300">
              Our strategy to enhance Kariz's visual appeal with Gumloop-inspired graphics while maintaining brand consistency.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-900/50 p-6">
                <div className="mb-3 text-3xl">⚡</div>
                <h3 className="mb-2 text-lg font-semibold text-white">Phase 1: Quick Wins</h3>
                <p className="text-sm text-gray-400">
                  Background gradients, custom icons, and SVG workflow diagrams
                </p>
              </div>
              <div className="rounded-xl bg-gray-900/50 p-6">
                <div className="mb-3 text-3xl">🎨</div>
                <h3 className="mb-2 text-lg font-semibold text-white">Phase 2: Premium Graphics</h3>
                <p className="text-sm text-gray-400">
                  Isometric illustrations, Lottie animations, and product UI mockups
                </p>
              </div>
              <div className="rounded-xl bg-gray-900/50 p-6">
                <div className="mb-3 text-3xl">🔗</div>
                <h3 className="mb-2 text-lg font-semibold text-white">Phase 3: Interactive Elements</h3>
                <p className="text-sm text-gray-400">
                  SVG patterns, data visualizations, and interactive diagrams
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="/GRAPHICS-IMPORT-STRATEGY.md" target="_blank" rel="noopener noreferrer">
                <InteractiveButton variant="default">
                  View Full Strategy
                </InteractiveButton>
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-200
                  ${
                    selectedCategory === category.id
                      ? "border-indigo-500 bg-indigo-500/20 text-white"
                      : "border-gray-800 bg-gray-900/50 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                  }
                `}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
                <span className="ml-2 rounded-full bg-gray-800 px-2 py-0.5 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Background Graphics */}
        {(selectedCategory === "all" || selectedCategory === "backgrounds") && (
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-white">🌄 Background Graphics</h2>
              <p className="text-gray-400">
                SVG gradient shapes and illustrations for backgrounds
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {backgroundGraphics.map((graphic) => (
                <div
                  key={graphic.name}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-6 transition-all hover:border-gray-700"
                >
                  <div className="mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gray-900">
                    <Image
                      src={graphic.path}
                      alt={graphic.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-contain opacity-80 transition-all group-hover:scale-110 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{graphic.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{graphic.path}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Integration Icons */}
        {selectedCategory !== "backgrounds" && (
          <section className="mb-20">
            {Object.entries(filteredIcons).map(([category, icons]) => (
              <div key={category} className="mb-16">
                <div className="mb-8">
                  <h2 className="mb-2 text-3xl font-bold text-white">
                    {categories.find((c) => c.id === category)?.icon}{" "}
                    {categories.find((c) => c.id === category)?.label} Icons
                  </h2>
                  <p className="text-gray-400">{icons.length} integration icons available</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {icons.map((icon) => (
                    <div
                      key={icon.name}
                      className="group flex flex-col items-center rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-indigo-500/50 hover:bg-gray-800/50"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center">
                        <Image
                          src={icon.path}
                          alt={icon.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain opacity-80 transition-all group-hover:scale-110 group-hover:opacity-100"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-white">{icon.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Coming Soon */}
        <section className="mb-20">
          <SparkleEffect className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 p-12" density={15}>
            <div className="text-center">
              <div className="mb-4 text-6xl">🚀</div>
              <h2 className="mb-4 text-3xl font-bold text-white">Coming Soon</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                We're creating amazing graphics based on our import strategy:
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm">
                  <div className="mb-3 text-3xl">📐</div>
                  <h3 className="mb-2 font-semibold text-white">Isometric Illustrations</h3>
                  <p className="text-sm text-gray-400">3D workflow visualizations</p>
                </div>
                <div className="rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm">
                  <div className="mb-3 text-3xl">✨</div>
                  <h3 className="mb-2 font-semibold text-white">Lottie Animations</h3>
                  <p className="text-sm text-gray-400">Smooth animated graphics</p>
                </div>
                <div className="rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm">
                  <div className="mb-3 text-3xl">🎭</div>
                  <h3 className="mb-2 font-semibold text-white">UI Mockups</h3>
                  <p className="text-sm text-gray-400">Product interface graphics</p>
                </div>
                <div className="rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm">
                  <div className="mb-3 text-3xl">🔗</div>
                  <h3 className="mb-2 font-semibold text-white">Interactive Diagrams</h3>
                  <p className="text-sm text-gray-400">System architecture visuals</p>
                </div>
              </div>
            </div>
          </SparkleEffect>
        </section>

        {/* Graphics Guidelines */}
        <section className="mb-20">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">🎨 Design Guidelines</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">Color Palette</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-indigo-500"></div>
                    <div>
                      <p className="font-mono text-sm text-white">#6366F1</p>
                      <p className="text-xs text-gray-400">Primary Indigo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-purple-500"></div>
                    <div>
                      <p className="font-mono text-sm text-white">#A855F7</p>
                      <p className="text-xs text-gray-400">Secondary Purple</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-pink-500"></div>
                    <div>
                      <p className="font-mono text-sm text-white">#EC4899</p>
                      <p className="text-xs text-gray-400">Accent Pink</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">Style Principles</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    Soft, organic shapes with blur effects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    Gradient overlays (radial and linear)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    Glass morphism effects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    Floating/layered elements for depth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    Dark backgrounds (#0F0F0F - #1A1A1A)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="text-center">
          <div className="inline-block rounded-2xl border border-green-500/30 bg-green-900/20 px-8 py-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-4xl font-bold text-green-400">
                  {getTotalIcons() + backgroundGraphics.length}
                </div>
                <p className="mt-2 text-sm text-gray-400">Total Graphics</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-400">5</div>
                <p className="mt-2 text-sm text-gray-400">Categories</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400">3</div>
                <p className="mt-2 text-sm text-gray-400">Implementation Phases</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

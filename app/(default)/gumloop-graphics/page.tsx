import GumloopGradientBg from "@/components/gumloop-gradient-bg";
import AnimatedParticles from "@/components/animated-particles";
import WorkflowDiagram from "@/components/workflow-diagram";
import ConnectionLines from "@/components/connection-lines";
import SparkleEffect from "@/components/sparkle-effect";
import GlassCard, { GlassCardWithGlow } from "@/components/glass-card";

export const metadata = {
  title: "Gumloop-Style Graphics - Kariz",
  description: "Actual Gumloop-inspired graphics and visual effects",
};

export default function GumloopGraphicsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 overflow-hidden">
        <GumloopGradientBg variant="multi" />
        <AnimatedParticles count={40} color="rgba(236, 72, 153, 0.6)" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Gumloop-Style Graphics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Actual implementations of Gumloop's signature visual style - gradient backgrounds,
              animated particles, workflow diagrams, and glassmorphism effects.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Gradient Backgrounds */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Gradient Backgrounds</h2>
            <p className="text-gray-400 text-lg">
              Soft, organic shapes with blur effects - the foundation of Gumloop's aesthetic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Indigo Variant */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
              <GumloopGradientBg variant="indigo" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Indigo</h3>
                  <p className="text-gray-300">Primary brand color</p>
                </div>
              </div>
            </div>

            {/* Purple Variant */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
              <GumloopGradientBg variant="purple" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Purple</h3>
                  <p className="text-gray-300">Tech & innovation</p>
                </div>
              </div>
            </div>

            {/* Pink Variant */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
              <GumloopGradientBg variant="pink" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Pink</h3>
                  <p className="text-gray-300">Vibrant accents</p>
                </div>
              </div>
            </div>

            {/* Multi Variant */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
              <GumloopGradientBg variant="multi" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Multi-Color</h3>
                  <p className="text-gray-300">Combined palette</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Workflow Diagrams */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Workflow Diagrams</h2>
            <p className="text-gray-400 text-lg">
              Interactive node-based diagrams with animated connections - Gumloop's signature feature visualization
            </p>
          </div>

          <WorkflowDiagram />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <GlassCard variant="gradient" padding="lg">
              <div className="text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="text-xl font-semibold">Animated Paths</h3>
                <p className="text-gray-400 text-sm">
                  SVG paths with gradient strokes and traveling particles
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="text-center space-y-3">
                <div className="text-4xl">🎯</div>
                <h3 className="text-xl font-semibold">Interactive Nodes</h3>
                <p className="text-gray-400 text-sm">
                  Pulsing rings and hover effects on each workflow step
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="text-center space-y-3">
                <div className="text-4xl">✨</div>
                <h3 className="text-xl font-semibold">Glow Effects</h3>
                <p className="text-gray-400 text-sm">
                  SVG filters for realistic glow and depth
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Section 3: Connection Lines & Particles */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Connection Lines & Particles</h2>
            <p className="text-gray-400 text-lg">
              Dynamic network visualization with animated particles and connecting lines
            </p>
          </div>

          <div className="relative h-96 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden">
            <ConnectionLines
              pointCount={30}
              maxDistance={150}
              lineColor="rgba(99, 102, 241, 0.4)"
              pointColor="rgba(99, 102, 241, 0.8)"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3 bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold">Network Visualization</h3>
                <p className="text-gray-300">30 connected nodes with dynamic linking</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Indigo Particles */}
            <div className="relative h-64 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden">
              <AnimatedParticles count={50} color="rgba(99, 102, 241, 0.8)" minSize={3} maxSize={8} />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Indigo Particles</h3>
                  <p className="text-gray-400 text-sm">Floating animation</p>
                </div>
              </div>
            </div>

            {/* Pink Particles */}
            <div className="relative h-64 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden">
              <AnimatedParticles count={50} color="rgba(236, 72, 153, 0.8)" minSize={3} maxSize={8} />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Pink Particles</h3>
                  <p className="text-gray-400 text-sm">Vibrant energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sparkle & Shine Effects */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Sparkle & Shine Effects</h2>
            <p className="text-gray-400 text-lg">
              Gumloop's signature sparkle animations and shine overlays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SparkleEffect density={30} color="rgba(139, 92, 246, 0.8)">
              <div className="h-64 flex items-center justify-center rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Purple Sparkles</h3>
                  <p className="text-gray-400">Magical atmosphere</p>
                </div>
              </div>
            </SparkleEffect>

            <SparkleEffect density={40} color="rgba(236, 72, 153, 0.8)">
              <div className="h-64 flex items-center justify-center rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Pink Sparkles</h3>
                  <p className="text-gray-400">High energy</p>
                </div>
              </div>
            </SparkleEffect>
          </div>
        </div>
      </section>

      {/* Section 5: Glassmorphism Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Glassmorphism Effects</h2>
            <p className="text-gray-400 text-lg">
              Glass-like cards with blur, transparency, and glow effects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCardWithGlow glowColor="purple" glowIntensity="medium">
              <div className="p-6 space-y-3">
                <div className="text-3xl">🎨</div>
                <h3 className="text-xl font-semibold">Purple Glow</h3>
                <p className="text-gray-400 text-sm">
                  Animated purple glow effect with glassmorphism
                </p>
              </div>
            </GlassCardWithGlow>

            <GlassCardWithGlow glowColor="pink" glowIntensity="medium">
              <div className="p-6 space-y-3">
                <div className="text-3xl">💫</div>
                <h3 className="text-xl font-semibold">Pink Glow</h3>
                <p className="text-gray-400 text-sm">
                  Vibrant pink glow with glass backdrop
                </p>
              </div>
            </GlassCardWithGlow>

            <GlassCardWithGlow glowColor="blue" glowIntensity="medium">
              <div className="p-6 space-y-3">
                <div className="text-3xl">⚡</div>
                <h3 className="text-xl font-semibold">Blue Glow</h3>
                <p className="text-gray-400 text-sm">
                  Cool blue glow for tech aesthetics
                </p>
              </div>
            </GlassCardWithGlow>
          </div>
        </div>
      </section>

      {/* Section 6: Combined Hero Example */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="relative max-w-6xl mx-auto">
          <GumloopGradientBg variant="multi" className="rounded-3xl" />
          <AnimatedParticles count={60} color="rgba(236, 72, 153, 0.6)" />
          <ConnectionLines pointCount={25} maxDistance={120} />

          <div className="relative z-10 text-center space-y-8 py-20">
            <SparkleEffect density={25} color="rgba(139, 92, 246, 0.9)">
              <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                The Full Gumloop Experience
              </h2>
            </SparkleEffect>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All effects combined - gradient backgrounds, particles, connection lines, and sparkles
              working together to create Gumloop's signature visual style.
            </p>

            <div className="flex gap-4 justify-center pt-6">
              <GlassCardWithGlow glowColor="purple">
                <button className="px-8 py-3 text-white font-semibold">
                  Get Started
                </button>
              </GlassCardWithGlow>

              <GlassCard hover variant="subtle">
                <button className="px-8 py-3 text-white font-semibold">
                  View Docs
                </button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Technical Implementation</h2>
            <p className="text-gray-400 text-lg">
              How these Gumloop-style graphics are built
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard variant="gradient" padding="lg">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-indigo-400">Gradient Backgrounds</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Radial gradients with blur effects</li>
                  <li>• Framer Motion animations</li>
                  <li>• Multiple color variants</li>
                  <li>• Subtle grid overlays</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-purple-400">Workflow Diagrams</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• SVG path animations</li>
                  <li>• Gradient stroke colors</li>
                  <li>• Traveling particles (animateMotion)</li>
                  <li>• Interactive node hover states</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-pink-400">Connection Lines</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Dynamic distance calculation</li>
                  <li>• SVG line rendering</li>
                  <li>• Glow filters (feGaussianBlur)</li>
                  <li>• Pulsing point animations</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-indigo-400">Particles</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Random position generation</li>
                  <li>• Floating Y-axis animation</li>
                  <li>• Box-shadow glow effects</li>
                  <li>• Staggered timing</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-purple-400">Sparkles</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Scale & opacity animations</li>
                  <li>• Infinite repeat with delay</li>
                  <li>• Four-pointed star SVG</li>
                  <li>• Drop-shadow filters</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard variant="gradient" padding="lg">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-pink-400">Glassmorphism</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Backdrop blur (CSS)</li>
                  <li>• Transparent backgrounds</li>
                  <li>• Border with opacity</li>
                  <li>• Animated glow on hover</li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Gumloop Color Palette</h2>
            <p className="text-gray-400 text-lg">
              The exact colors used in Gumloop's visual design
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="h-24 rounded-xl bg-[#6366F1] shadow-lg shadow-indigo-500/50"></div>
              <div className="text-center">
                <p className="font-mono text-sm">#6366F1</p>
                <p className="text-xs text-gray-400">Primary Indigo</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-24 rounded-xl bg-[#A855F7] shadow-lg shadow-purple-500/50"></div>
              <div className="text-center">
                <p className="font-mono text-sm">#A855F7</p>
                <p className="text-xs text-gray-400">Purple</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-24 rounded-xl bg-[#EC4899] shadow-lg shadow-pink-500/50"></div>
              <div className="text-center">
                <p className="font-mono text-sm">#EC4899</p>
                <p className="text-xs text-gray-400">Pink</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-24 rounded-xl bg-[#0F0F0F] border border-white/10"></div>
              <div className="text-center">
                <p className="font-mono text-sm">#0F0F0F</p>
                <p className="text-xs text-gray-400">Dark Background</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Use</h2>
          <p className="text-xl text-gray-300">
            All components are fully functional and ready to integrate into your landing pages.
            Mix and match these Gumloop-style graphics to create stunning visual experiences.
          </p>

          <div className="pt-8 space-y-4">
            <p className="text-gray-400">Components Created:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "GumloopGradientBg",
                "AnimatedParticles",
                "WorkflowDiagram",
                "ConnectionLines",
                "SparkleEffect",
                "GlassCard",
              ].map((component) => (
                <span
                  key={component}
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-indigo-500/30 text-sm font-mono text-indigo-300"
                >
                  {component}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

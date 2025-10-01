"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CTAWithRaysProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function CTAWithRays({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: CTAWithRaysProps) {
  const rays = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    rotation: (i * 360) / 12,
    delay: i * 0.1,
  }));

  return (
    <section className={cn("relative overflow-hidden py-20", className)}>
      {/* Animated rays background */}
      <div className="absolute inset-0 overflow-hidden">
        {rays.map((ray) => (
          <motion.div
            key={ray.id}
            className="absolute left-1/2 top-1/2 h-[500px] w-1 origin-bottom"
            style={{
              background:
                "linear-gradient(to top, rgba(99, 102, 241, 0.3), transparent)",
              rotate: ray.rotation,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: ray.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Rotating glow effect */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 font-nacelle text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mb-10 text-lg text-gray-300 md:text-xl">
            {description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={primaryCTA.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-base font-semibold text-white hover:from-indigo-500 hover:to-purple-500 sm:w-auto"
              >
                {primaryCTA.text}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </motion.a>

            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-700 bg-transparent text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50 sm:w-auto"
                >
                  {secondaryCTA.text}
                </Button>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-indigo-400"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}

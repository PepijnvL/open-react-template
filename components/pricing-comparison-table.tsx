"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface PricingComparisonTableProps {
  features: PricingFeature[];
  className?: string;
}

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-5 w-5 text-gray-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function PricingComparisonTable({
  features,
  className,
}: PricingComparisonTableProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? <CheckIcon /> : <XIcon />;
    }
    return <span className="text-sm text-gray-300">{value}</span>;
  };

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-gray-800", className)}>
      {/* Header */}
      <div className="grid grid-cols-4 gap-4 bg-gray-900/50 p-6 backdrop-blur-sm">
        <div className="text-sm font-semibold text-gray-400">Features</div>
        <div className="text-center">
          <div className="text-lg font-bold text-white">Starter</div>
          <div className="text-sm text-gray-400">Free Forever</div>
        </div>
        <motion.div
          className="text-center relative"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-xs font-bold text-white">
            Popular
          </div>
          <div className="text-lg font-bold text-white">Professional</div>
          <div className="text-sm text-gray-400">$49/month</div>
        </motion.div>
        <div className="text-center">
          <div className="text-lg font-bold text-white">Enterprise</div>
          <div className="text-sm text-gray-400">Custom</div>
        </div>
      </div>

      {/* Features list */}
      <div className="divide-y divide-gray-800">
        {features.map((feature, i) => (
          <motion.div
            key={feature.name}
            className="grid grid-cols-4 gap-4 bg-gray-950/50 p-6 hover:bg-gray-900/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="text-sm text-gray-300">{feature.name}</div>
            <div className="flex items-center justify-center">
              {renderValue(feature.starter)}
            </div>
            <div className="flex items-center justify-center">
              {renderValue(feature.professional)}
            </div>
            <div className="flex items-center justify-center">
              {renderValue(feature.enterprise)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="grid grid-cols-4 gap-4 bg-gray-900/50 p-6">
        <div></div>
        <div className="flex justify-center">
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500">
            Get Started
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="w-full">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}

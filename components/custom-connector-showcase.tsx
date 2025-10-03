"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Zap, Check, Code2 } from "lucide-react";

export default function CustomConnectorShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-progress through steps
  useEffect(() => {
    if (isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
      setActiveStep((prev) => (prev + 1) % 3);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeStep, isAnimating]);

  const steps = [
    {
      number: 1,
      title: "Paste API Docs URL",
      description: "Any API documentation URL - public or private",
      icon: Code2,
      color: "indigo",
    },
    {
      number: 2,
      title: "AI Builds Connector",
      description: "Automatically parses endpoints and authentication",
      icon: Zap,
      color: "purple",
    },
    {
      number: 3,
      title: "Ready to Use",
      description: "Add to your workflow in seconds",
      icon: Check,
      color: "emerald",
    },
  ];

  const endpoints = [
    { method: "POST", path: "/v1/customers", label: "Create Customer" },
    { method: "GET", path: "/v1/charges", label: "List Charges" },
    { method: "POST", path: "/v1/refunds", label: "Create Refund" },
    { method: "GET", path: "/v1/invoices", label: "Get Invoices" },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-0 md:pb-20 md:pt-0">
          {/* Main Visual Demo */}
          <div className="relative">
            {/* Time Comparison Badge */}
            <div className="absolute -top-4 right-4 z-20 rounded-full border border-emerald-500/30 bg-gray-950 px-4 py-2 text-sm font-semibold text-emerald-400 shadow-lg">
              <span className="text-gray-500">Traditional: 2-4 weeks</span>
              <span className="mx-2">→</span>
              <span>Kariz: 5 minutes</span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-black p-8 md:p-12">
              {/* Step Indicators */}
              <div className="mb-8 flex justify-center gap-4">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeStep === i
                        ? `bg-${step.color}-500/20 text-${step.color}-300 ring-1 ring-${step.color}-500/50`
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                        activeStep === i
                          ? `bg-${step.color}-500/30 text-${step.color}-300`
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span className="hidden md:inline">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Step 1: Input */}
              {activeStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="mx-auto max-w-2xl">
                    <label className="mb-2 block text-sm font-medium text-gray-400">
                      API Documentation URL
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value="https://docs.stripe.com/api"
                        className="w-full rounded-lg border border-indigo-500/30 bg-indigo-950/30 px-4 py-4 pr-12 font-mono text-sm text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-600 p-2 text-white transition-colors hover:bg-indigo-500">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Works with any API - public or private. Supports OpenAPI, Swagger, or any docs format.
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="mx-auto max-w-2xl">
                    <div className="text-xs font-medium text-gray-500">Try with:</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Stripe", "Shopify", "GitHub", "Your API"].map((api) => (
                        <div
                          key={api}
                          className="rounded-full border border-gray-800 bg-gray-900/50 px-3 py-1 text-xs text-gray-400"
                        >
                          {api}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: AI Processing */}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mx-auto max-w-2xl space-y-6"
                >
                  <div className="rounded-xl border border-purple-500/20 bg-purple-950/30 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                        <Zap className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">AI is building your connector...</div>
                        <div className="text-sm text-gray-400">Analyzing API documentation</div>
                      </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="space-y-3">
                      {[
                        { label: "Reading API documentation", delay: 0 },
                        { label: "Mapping endpoints", delay: 0.2 },
                        { label: "Identifying authentication", delay: 0.4 },
                        { label: "Generating actions", delay: 0.6 },
                      ].map((task, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: task.delay }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: task.delay + 0.3 }}
                            className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20"
                          >
                            <Check className="h-3 w-3 text-emerald-400" />
                          </motion.div>
                          <span className="text-sm text-gray-300">{task.label}</span>
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-auto"
                          >
                            <div className="flex gap-1">
                              {[0, 1, 2].map((dot) => (
                                <motion.div
                                  key={dot}
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: dot * 0.2,
                                  }}
                                  className="h-1 w-1 rounded-full bg-purple-400"
                                />
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-gray-800">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-emerald-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Ready to Use */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mx-auto max-w-2xl space-y-6"
                >
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                        <Check className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Connector Ready!</div>
                        <div className="text-sm text-gray-400">4 actions available</div>
                      </div>
                    </div>

                    {/* Generated Endpoints */}
                    <div className="space-y-2">
                      {endpoints.map((endpoint, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/50 p-3 transition-all hover:border-emerald-500/30 hover:bg-gray-900"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`rounded px-2 py-1 font-mono text-xs font-semibold ${
                                endpoint.method === "POST"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-emerald-500/20 text-emerald-400"
                              }`}
                            >
                              {endpoint.method}
                            </span>
                            <div>
                              <div className="font-mono text-sm text-white">{endpoint.path}</div>
                              <div className="text-xs text-gray-500">{endpoint.label}</div>
                            </div>
                          </div>
                          <button className="opacity-0 transition-opacity group-hover:opacity-100">
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                          </button>
                        </motion.div>
                      ))}
                    </div>

                    <button className="mt-4 w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition-colors hover:bg-emerald-500">
                      Add to Workflow
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "AI-Powered",
                description: "Automatically understands any API documentation format",
              },
              {
                icon: Code2,
                title: "No Code Required",
                description: "Visual interface to map and configure endpoints",
              },
              {
                icon: Check,
                title: "Ready in Minutes",
                description: "From API docs to working connector in under 5 minutes",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-800 bg-gray-950/50 p-6 transition-all hover:border-gray-700"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <feature.icon className="mb-3 h-8 w-8 text-emerald-400" />
                <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

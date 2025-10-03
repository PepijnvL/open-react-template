"use client";

import React, { useState } from "react";
import { Send, Loader2, Sparkles } from "lucide-react";
import WorkflowDesktop from "./WorkflowDesktop";
import WorkflowMobile from "./WorkflowMobile";

export default function WorkflowDemo() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI workflow assistant. Tell me what workflow you'd like to create, and I'll build it for you. For example: \"Create a workflow that sends a Slack message when a new Shopify order comes in\"",
    },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    // Redirect to signup page
    window.open("https://app.trykariz.com", "_blank");
  };

  return (
    <div className="relative h-[450px] md:h-[600px] w-full rounded-2xl border-2 border-gray-200 bg-[#f5f5f5] shadow-2xl overflow-hidden">
      <div className="grid h-full md:grid-cols-3 grid-cols-1">
        {/* React Flow Canvas - Full width on mobile, 2/3 on desktop */}
        <div className="md:col-span-2 col-span-1 relative md:border-r border-gray-200">
          {/* Desktop workflow - hidden on mobile */}
          <div className="hidden md:block h-full w-full">
            <WorkflowDesktop />
          </div>

          {/* Mobile workflow - hidden on desktop */}
          <div className="block md:hidden h-full w-full">
            <WorkflowMobile />
          </div>
        </div>

        {/* Chat Interface - Hidden on mobile, 1/3 width on desktop */}
        <div className="hidden md:flex md:col-span-1 flex-col bg-white">
          {/* Chat Header */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6d5a] to-[#ff5542]">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">AI Workflow Builder</h3>
                <p className="text-xs text-gray-500">Describe your automation</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    message.role === "user"
                      ? "bg-[#ff6d5a] text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-2.5">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
                  <span className="text-sm text-gray-600">Generating workflow...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Describe your workflow..."
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-[#ff6d5a] focus:outline-none focus:ring-2 focus:ring-[#ff6d5a]/20"
                disabled={isGenerating}
              />
              <button
                onClick={handleSendMessage}
                disabled={!chatInput.trim() || isGenerating}
                className="flex items-center gap-2 rounded-lg bg-[#ff6d5a] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#ff5542] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-500">
              <a
                href="https://app.trykariz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6d5a] hover:underline"
              >
                Create an account
              </a>{" "}
              to build real workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

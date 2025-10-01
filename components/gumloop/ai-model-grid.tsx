"use client";

import { useState } from "react";

const aiModels = [
  { name: "Anthropic", icon: "🤖", color: "from-orange-100 to-orange-200 border-orange-300" },
  { name: "OpenAI", icon: "⚡", color: "from-green-100 to-green-200 border-green-300" },
  { name: "ChatGPT", icon: "💬", color: "from-emerald-100 to-emerald-200 border-emerald-300" },
  { name: "Gemini", icon: "✨", color: "from-blue-100 to-blue-200 border-blue-300" },
  { name: "Copilot", icon: "🚀", color: "from-purple-100 to-purple-200 border-purple-300" },
  { name: "Perplexity", icon: "🔮", color: "from-indigo-100 to-indigo-200 border-indigo-300" },
  { name: "Meta", icon: "🎯", color: "from-pink-100 to-pink-200 border-pink-300" },
];

export default function AIModelGrid() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Grid Layout */}
        <div className="relative grid grid-cols-2 gap-4 p-4">
          {/* Top Row */}
          <div className="flex gap-4">
            {aiModels.slice(0, 2).map((model, index) => (
              <button
                key={model.name}
                className={`flex-1 aspect-square rounded-2xl bg-gradient-to-br ${model.color} border-2 flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setSelectedModel(index)}
                onClick={() => setSelectedModel(index)}
              >
                <span className="text-4xl">{model.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{model.name}</span>
              </button>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-24 rounded-2xl bg-white border-4 border-gray-200 shadow-2xl flex items-center justify-center animate-pulse-slow">
              <div className="text-center">
                <div className="text-3xl mb-1">🔄</div>
                <div className="text-xs font-bold text-gray-600">AI Hub</div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4">
            {aiModels.slice(2, 4).map((model, index) => (
              <button
                key={model.name}
                className={`flex-1 aspect-square rounded-2xl bg-gradient-to-br ${model.color} border-2 flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                onMouseEnter={() => setSelectedModel(index + 2)}
                onClick={() => setSelectedModel(index + 2)}
              >
                <span className="text-4xl">{model.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{model.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row - Additional Models */}
        <div className="grid grid-cols-3 gap-3 mt-4 px-4">
          {aiModels.slice(4).map((model, index) => (
            <button
              key={model.name}
              className={`aspect-square rounded-xl bg-gradient-to-br ${model.color} border-2 flex flex-col items-center justify-center gap-1 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
              onMouseEnter={() => setSelectedModel(index + 4)}
              onClick={() => setSelectedModel(index + 4)}
            >
              <span className="text-2xl">{model.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{model.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">One Subscription For All</h3>
        <p className="text-sm text-gray-600">
          No add-ons, data subscriptions or per-model fees
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

"use client";

import Image from "next/image";

interface WorkflowNode {
  icon: string; // Path to icon or "ai" for AI icon
  label: string;
  color: string;
}

interface WorkflowExampleCardV3Props {
  title: string;
  description: string;
  nodes: WorkflowNode[];
  delay?: number;
}

export default function WorkflowExampleCardV3({
  title,
  description,
  nodes,
  delay = 0,
}: WorkflowExampleCardV3Props) {
  return (
    <div
      className="group relative rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 via-gray-950/80 to-black p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Title and description */}
      <div className="mb-6">
        <h3 className="mb-2 font-nacelle text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      {/* Mini workflow diagram */}
      <div className="relative">
        {/* Nodes container */}
        <div className="flex items-center justify-between gap-2">
          {nodes.map((node, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {/* Node */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-all group-hover:scale-105"
                  style={{
                    backgroundColor: `${node.color}15`,
                    border: `1px solid ${node.color}30`,
                  }}
                >
                  {node.icon === "ai" ? (
                    <svg
                      className="h-6 w-6"
                      style={{ color: node.color }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  ) : (
                    <Image
                      src={node.icon}
                      alt={node.label}
                      width={24}
                      height={24}
                      className="opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  )}
                </div>
                <span className="text-xs text-gray-500">{node.label}</span>
              </div>

              {/* Arrow between nodes (except after last node) */}
              {idx < nodes.length - 1 && (
                <svg
                  className="h-4 w-4 shrink-0 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

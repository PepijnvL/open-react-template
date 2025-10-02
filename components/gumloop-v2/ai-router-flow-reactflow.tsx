"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  Node,
  Edge,
  MarkerType,
  Position,
  Handle,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { IntegrationIcon } from "./icon-component";

// Custom Node Components
const InputNode = ({ data }: { data: any }) => (
  <div className="px-6 py-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl border-2 border-white">
    <div className="flex flex-col items-center gap-2">
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span className="text-white font-semibold text-sm">User Query</span>
    </div>
    <Handle type="source" position={Position.Right} className="!bg-blue-400 !w-3 !h-3 !border-2 !border-white" />
  </div>
);

const AIRouterNode = ({ data }: { data: any }) => (
  <div className="relative">
    <Handle type="target" position={Position.Left} className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white" />
    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl border-2 border-white animate-pulse-glow">
      <span className="text-white font-bold text-2xl">AI</span>
    </div>
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-gray-700">
      AI Router
    </div>
    <Handle type="source" position={Position.Bottom} className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white" />
  </div>
);

const ToolNode = ({ data }: { data: any }) => (
  <div className="flex flex-col items-center gap-2">
    <Handle type="target" position={Position.Top} className="!bg-gray-400 !w-3 !h-3 !border-2 !border-white" />
    <IntegrationIcon name={data.icon} size={56} />
    <span className="text-xs font-medium text-gray-700">{data.label}</span>
    <Handle type="source" position={Position.Right} className="!bg-gray-400 !w-3 !h-3 !border-2 !border-white" />
  </div>
);

const OutputNode = ({ data }: { data: any }) => (
  <div className="px-6 py-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl border-2 border-white">
    <Handle type="target" position={Position.Left} className="!bg-green-400 !w-3 !h-3 !border-2 !border-white" />
    <div className="flex flex-col items-center gap-2">
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-white font-semibold text-sm">Result</span>
    </div>
  </div>
);

const nodeTypes = {
  input: InputNode,
  aiRouter: AIRouterNode,
  tool: ToolNode,
  output: OutputNode,
};

const initialNodes: Node[] = [
  {
    id: "input",
    type: "input",
    position: { x: 50, y: 150 },
    data: { label: "Input" },
    sourcePosition: Position.Right,
  },
  {
    id: "ai-router",
    type: "aiRouter",
    position: { x: 300, y: 120 },
    data: { label: "AI Router" },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Left,
  },
  {
    id: "tool-1",
    type: "tool",
    position: { x: 200, y: 300 },
    data: { label: "Gmail", icon: "gmail" },
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: "tool-2",
    type: "tool",
    position: { x: 320, y: 300 },
    data: { label: "Sheets", icon: "google-sheets" },
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: "tool-3",
    type: "tool",
    position: { x: 440, y: 300 },
    data: { label: "Slack", icon: "slack" },
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: "output",
    type: "output",
    position: { x: 600, y: 150 },
    data: { label: "Output" },
    targetPosition: Position.Left,
  },
];

const initialEdges: Edge[] = [
  {
    id: "e-input-ai",
    source: "input",
    target: "ai-router",
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#8B5CF6",
    },
  },
  {
    id: "e-ai-tool1",
    source: "ai-router",
    target: "tool-1",
    animated: true,
    style: { stroke: "#94A3B8", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e-ai-tool2",
    source: "ai-router",
    target: "tool-2",
    animated: true,
    style: { stroke: "#94A3B8", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e-ai-tool3",
    source: "ai-router",
    target: "tool-3",
    animated: true,
    style: { stroke: "#94A3B8", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e-tool1-output",
    source: "tool-1",
    target: "output",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#10B981",
    },
    type: "smoothstep",
  },
  {
    id: "e-tool2-output",
    source: "tool-2",
    target: "output",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#10B981",
    },
    type: "smoothstep",
  },
  {
    id: "e-tool3-output",
    source: "tool-3",
    target: "output",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#10B981",
    },
    type: "smoothstep",
  },
];

export default function AIRouterFlowReactFlow() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden">
      <div className="h-[500px] relative">
        <style jsx global>{`
          @keyframes pulse-glow {
            0%,
            100% {
              box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4);
            }
            50% {
              box-shadow: 0 15px 50px rgba(236, 72, 153, 0.5);
            }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          .react-flow__node {
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
          }
          .react-flow__edge-path {
            stroke-dasharray: 5;
            animation: dashdraw 0.5s linear infinite;
          }
          @keyframes dashdraw {
            to {
              stroke-dashoffset: -10;
            }
          }
        `}</style>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnPinch={false}
          preventScrolling={false}
        >
          <Background color="#cbd5e1" gap={16} />
        </ReactFlow>
      </div>

      <div className="p-6 text-center bg-white border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">React Flow Powered Visualization</h3>
        <p className="text-sm text-gray-600">
          Professional workflow builder with animated connections and custom nodes
        </p>
      </div>
    </div>
  );
}

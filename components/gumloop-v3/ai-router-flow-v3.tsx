"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Node,
  Edge,
  MarkerType,
  Position,
  Handle,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { IntegrationIcon } from "../gumloop-v2/icon-component";

// Custom Node Components with Handles
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
    <Handle type="source" position={Position.Bottom} className="!bg-blue-400 !w-3 !h-3 !border-2 !border-white" />
  </div>
);

const AIRouterNode = ({ data }: { data: any }) => (
  <div className="relative">
    <Handle type="target" position={Position.Top} className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white" />
    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl border-2 border-white animate-pulse-glow">
      <span className="text-white font-bold text-3xl">AI</span>
    </div>
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-gray-700">
      AI Router
    </div>
    <Handle type="source" position={Position.Right} id="tool-1" className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white !top-[30%]" />
    <Handle type="source" position={Position.Right} id="tool-2" className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white !top-[50%]" />
    <Handle type="source" position={Position.Right} id="tool-3" className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white !top-[70%]" />
    <Handle type="source" position={Position.Bottom} className="!bg-purple-400 !w-3 !h-3 !border-2 !border-white" />
  </div>
);

const ToolNode = ({ data }: { data: any }) => (
  <div className="flex flex-col items-center gap-2 bg-white rounded-xl p-3 shadow-lg border-2 border-gray-200">
    <Handle type="target" position={Position.Left} className="!bg-gray-400 !w-3 !h-3 !border-2 !border-white" />
    <IntegrationIcon name={data.icon} size={48} />
    <span className="text-xs font-medium text-gray-700">{data.label}</span>
  </div>
);

const OutputNode = ({ data }: { data: any }) => (
  <div className="px-6 py-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl border-2 border-white">
    <Handle type="target" position={Position.Top} className="!bg-green-400 !w-3 !h-3 !border-2 !border-white" />
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

// Node positions optimized for static layout
const initialNodes: Node[] = [
  {
    id: "input",
    type: "input",
    position: { x: 250, y: 50 },
    data: { label: "Input" },
  },
  {
    id: "ai-router",
    type: "aiRouter",
    position: { x: 230, y: 200 },
    data: { label: "AI Router" },
  },
  {
    id: "tool-1",
    type: "tool",
    position: { x: 450, y: 170 },
    data: { label: "Gmail", icon: "gmail" },
  },
  {
    id: "tool-2",
    type: "tool",
    position: { x: 450, y: 250 },
    data: { label: "Sheets", icon: "google-sheets" },
  },
  {
    id: "tool-3",
    type: "tool",
    position: { x: 450, y: 330 },
    data: { label: "Slack", icon: "slack" },
  },
  {
    id: "output",
    type: "output",
    position: { x: 230, y: 450 },
    data: { label: "Output" },
  },
];

// Edges: Input -> AI Router -> Tools (subnodes), AI Router -> Output
const initialEdges: Edge[] = [
  {
    id: "e-input-ai",
    source: "input",
    target: "ai-router",
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#8B5CF6" },
  },
  {
    id: "e-ai-tool1",
    source: "ai-router",
    sourceHandle: "tool-1",
    target: "tool-1",
    animated: true,
    style: { stroke: "#A78BFA", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e-ai-tool2",
    source: "ai-router",
    sourceHandle: "tool-2",
    target: "tool-2",
    animated: true,
    style: { stroke: "#A78BFA", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e-ai-tool3",
    source: "ai-router",
    sourceHandle: "tool-3",
    target: "tool-3",
    animated: true,
    style: { stroke: "#A78BFA", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e-ai-output",
    source: "ai-router",
    target: "output",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#10B981" },
  },
];

export default function AIRouterFlowV3() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="h-[600px] w-full">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={true}
          proOptions={{ hideAttribution: true }}
          className="bg-gradient-to-br from-gray-50 to-white"
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="#E5E7EB"
          />
        </ReactFlow>
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Workflow Visualization</h3>
        <p className="text-gray-600 text-sm">
          Static, optimized React Flow component showing: Input → AI Router (with tool subnodes) → Output
        </p>
      </div>
    </div>
  );
}

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
import Image from "next/image";

// Trigger Node Component
const TriggerNode = ({ data }: { data: any }) => (
  <div className="px-5 py-4 bg-white rounded-xl shadow-lg border-2 border-gray-300">
    <Handle type="source" position={Position.Right} className="!bg-blue-500 !w-3 !h-3 !border-2 !border-white" />
    <div className="flex flex-col items-center gap-2 min-w-[140px]">
      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold text-gray-900">When chat message</div>
        <div className="text-xs text-gray-500">received</div>
      </div>
    </div>
  </div>
);

// AI Agent Node Component with subnodes
const AIAgentNode = ({ data }: { data: any }) => (
  <div className="relative">
    <Handle type="target" position={Position.Left} className="!bg-purple-500 !w-3 !h-3 !border-2 !border-white" />
    <Handle type="source" position={Position.Right} className="!bg-purple-500 !w-3 !h-3 !border-2 !border-white" />

    {/* Main AI Agent Node */}
    <div className="px-6 py-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-xl border-2 border-white">
      <div className="flex flex-col items-center gap-2 min-w-[160px]">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-white">AI Agent</div>
        </div>
      </div>
    </div>

    {/* Subnodes hanging below - positioned absolutely */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex gap-3">
      {/* Chat Model Subnode */}
      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-gray-300"></div>
        <div className="px-3 py-2 bg-white rounded-lg shadow-md border border-gray-300 min-w-[100px]">
          <div className="text-center">
            <div className="text-xs font-semibold text-gray-700">Chat Model*</div>
            <div className="text-xs text-gray-500 mt-1">GPT-4</div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <button className="w-5 h-5 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-300">
              <span className="text-gray-600 text-xs">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Memory Tool Subnode */}
      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-gray-300"></div>
        <div className="px-3 py-2 bg-white rounded-lg shadow-md border border-gray-300 min-w-[100px]">
          <div className="text-center">
            <div className="text-xs font-semibold text-gray-700">Memory Tool</div>
            <div className="text-xs text-gray-500 mt-1">Chat</div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <button className="w-5 h-5 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-300">
              <span className="text-gray-600 text-xs">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Subnode Option */}
      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-gray-300"></div>
        <div className="px-3 py-2 bg-white rounded-lg shadow-md border border-gray-300 min-w-[100px]">
          <div className="text-center">
            <div className="text-xs font-semibold text-gray-700">Tools</div>
            <div className="text-xs text-gray-500 mt-1">Configured</div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <button className="w-5 h-5 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-300">
              <span className="text-gray-600 text-xs">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Output Node Component
const OutputNode = ({ data }: { data: any }) => (
  <div className="px-5 py-4 bg-white rounded-xl shadow-lg border-2 border-gray-300">
    <Handle type="target" position={Position.Left} className="!bg-green-500 !w-3 !h-3 !border-2 !border-white" />
    <div className="flex flex-col items-center gap-2 min-w-[140px]">
      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold text-gray-900">Continue</div>
        <div className="text-xs text-gray-500">Next action</div>
      </div>
    </div>
  </div>
);

const nodeTypes = {
  trigger: TriggerNode,
  aiAgent: AIAgentNode,
  output: OutputNode,
};

// Horizontal flow: Trigger -> AI Agent -> Output
const initialNodes: Node[] = [
  {
    id: "trigger",
    type: "trigger",
    position: { x: 50, y: 150 },
    data: { label: "Trigger" },
  },
  {
    id: "ai-agent",
    type: "aiAgent",
    position: { x: 300, y: 140 },
    data: { label: "AI Agent" },
  },
  {
    id: "output",
    type: "output",
    position: { x: 600, y: 150 },
    data: { label: "Output" },
  },
];

// Horizontal edges connecting the main flow
const initialEdges: Edge[] = [
  {
    id: "e-trigger-agent",
    source: "trigger",
    target: "ai-agent",
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#8B5CF6" },
  },
  {
    id: "e-agent-output",
    source: "ai-agent",
    target: "output",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#10B981" },
  },
];

export default function N8nStyleWorkflowV3() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="h-[500px] w-full">
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
        <h3 className="text-lg font-bold text-gray-900 mb-2">N8N-Style Workflow</h3>
        <p className="text-gray-600 text-sm">
          Horizontal flow (Trigger → AI Agent → Output) with vertical subnodes (Chat Model, Memory, Tools) hanging below the AI Agent
        </p>
      </div>
    </div>
  );
}

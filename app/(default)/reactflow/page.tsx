"use client";

import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
  Edge,
  Node,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

// Initial nodes for a workflow automation demo
const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Trigger: New Email" },
    position: { x: 250, y: 25 },
    style: {
      background: "#6366f1",
      color: "white",
      border: "1px solid #4f46e5",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "2",
    data: { label: "Filter: Contains Keyword" },
    position: { x: 250, y: 125 },
    style: {
      background: "#8b5cf6",
      color: "white",
      border: "1px solid #7c3aed",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "3",
    data: { label: "Extract Data: Parse Email" },
    position: { x: 100, y: 225 },
    style: {
      background: "#ec4899",
      color: "white",
      border: "1px solid #db2777",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "4",
    data: { label: "Send to: Slack Channel" },
    position: { x: 400, y: 225 },
    style: {
      background: "#10b981",
      color: "white",
      border: "1px solid #059669",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "5",
    data: { label: "Store in: Database" },
    position: { x: 100, y: 325 },
    style: {
      background: "#f59e0b",
      color: "white",
      border: "1px solid #d97706",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "6",
    type: "output",
    data: { label: "Send Email: Confirmation" },
    position: { x: 250, y: 425 },
    style: {
      background: "#3b82f6",
      color: "white",
      border: "1px solid #2563eb",
      borderRadius: "8px",
      padding: "10px",
    },
  },
];

// Initial edges (connections between nodes)
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#6366f1" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#8b5cf6" },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    animated: true,
    style: { stroke: "#8b5cf6" },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    style: { stroke: "#ec4899" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    style: { stroke: "#f59e0b" },
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    animated: true,
    style: { stroke: "#10b981" },
  },
];

export default function ReactFlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            React Flow Demo - Interactive Workflow Builder
          </h1>
          <p className="mt-2 text-gray-400">
            Drag nodes, connect them, zoom and pan. This is a live React Flow instance!
          </p>
        </div>
      </div>

      {/* React Flow Container */}
      <div className="h-[calc(100vh-140px)] w-full p-4">
        <div className="h-full w-full rounded-xl border border-gray-800 bg-gray-900 shadow-2xl">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-right"
          >
            <Controls className="rounded-lg border border-gray-700 bg-gray-800 shadow-lg" />
            <MiniMap
              className="rounded-lg border border-gray-700 bg-gray-800"
              nodeColor={(node) => {
                const bgColor = node.style?.background as string;
                return bgColor || "#8b5cf6";
              }}
              maskColor="rgba(0, 0, 0, 0.6)"
            />
            <Background
              variant={BackgroundVariant.Dots}
              gap={12}
              size={1}
              color="#374151"
            />
          </ReactFlow>
        </div>
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-4 rounded-lg border border-gray-800 bg-gray-900/95 p-4 shadow-xl backdrop-blur-sm">
        <h3 className="mb-2 font-semibold text-white">Quick Guide:</h3>
        <ul className="space-y-1 text-sm text-gray-400">
          <li>🖱️ Drag nodes to reposition</li>
          <li>🔗 Click and drag from node edges to connect</li>
          <li>🔍 Scroll to zoom in/out</li>
          <li>👆 Drag background to pan</li>
          <li>🗺️ Use minimap for navigation</li>
        </ul>
      </div>
    </div>
  );
}

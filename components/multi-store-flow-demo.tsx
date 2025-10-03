"use client";

import React from "react";
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  Node,
  Handle,
  Position,
  NodeProps,
  type Edge,
} from "@xyflow/react";
import { Code } from "lucide-react";
import Image from "next/image";

import "@xyflow/react/dist/style.css";

// Custom Node Component
function CustomNode({ data, selected }: NodeProps) {
  const nodeColor = data.color || "#6366f1";
  const isCodeIcon = data.icon === "code";
  const isInputNode = data.type === "input";
  const isOutputNode = data.type === "output";

  return (
    <div className="relative">
      {/* Input handle on LEFT (only for non-input nodes) */}
      {!isInputNode && (
        <Handle
          type="target"
          position={Position.Left}
          className="!h-4 !w-4 !rounded-full !border-2 !bg-white !transition-all hover:!scale-110"
          style={{
            left: -8,
            borderColor: "#888",
          }}
        />
      )}

      {/* Main node */}
      <div
        className={`group relative w-[210px] rounded-lg bg-white shadow-lg transition-all duration-200 ${
          selected ? "ring-2 ring-blue-500" : "hover:shadow-xl"
        }`}
        style={{
          border: `2px solid ${selected ? nodeColor : "#e5e5e5"}`,
        }}
      >
        <div className="flex items-center gap-3 p-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded"
            style={{
              backgroundColor: `${nodeColor}15`,
            }}
          >
            {isCodeIcon ? (
              <Code className="h-6 w-6" style={{ color: nodeColor } as React.CSSProperties} />
            ) : (
              <Image src={data.icon as string} alt={data.label as string} width={24} height={24} className="h-6 w-6 object-contain" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              {data.label as string}
            </div>
            {(data.description as string) && (
              <div className="text-xs text-gray-500 truncate leading-tight mt-0.5">
                {data.description as string}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output handle on RIGHT (only for non-output nodes) */}
      {!isOutputNode && (
        <Handle
          type="source"
          position={Position.Right}
          className="!h-4 !w-4 !rounded-full !border-2 !bg-white !transition-all hover:!scale-110"
          style={{
            right: -8,
            borderColor: "#888",
          }}
        />
      )}
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  // Input Nodes - 3 stores
  {
    id: "shopify-1",
    type: "custom",
    position: { x: 50, y: 50 },
    data: {
      label: "Shopify Store #1",
      description: "Main storefront",
      icon: "/icons/apps/shopify.svg",
      color: "#96BF48",
      type: "input",
    },
  },
  {
    id: "shopify-2",
    type: "custom",
    position: { x: 50, y: 150 },
    data: {
      label: "Shopify Store #2",
      description: "Regional store",
      icon: "/icons/apps/shopify.svg",
      color: "#96BF48",
      type: "input",
    },
  },
  {
    id: "amazon",
    type: "custom",
    position: { x: 50, y: 250 },
    data: {
      label: "Amazon Store",
      description: "Marketplace channel",
      icon: "/icons/apps/amazon",
      color: "#FF9900",
      type: "input",
    },
  },
  // Processing Node
  {
    id: "code",
    type: "custom",
    position: { x: 350, y: 150 },
    data: {
      label: "Route Orders",
      description: "Your business logic",
      icon: "code",
      color: "#8b5cf6",
      type: "processing",
    },
  },
  // Output Node - Shippo
  {
    id: "shippo",
    type: "custom",
    position: { x: 650, y: 150 },
    data: {
      label: "Shippo",
      description: "Unified fulfillment",
      icon: "/icons/apps/shippo.svg",
      color: "#00B8A9",
      type: "output",
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "shopify-1-code",
    source: "shopify-1",
    target: "code",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
  },
  {
    id: "shopify-2-code",
    source: "shopify-2",
    target: "code",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
  },
  {
    id: "amazon-code",
    source: "amazon",
    target: "code",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
  },
  {
    id: "code-shippo",
    source: "code",
    target: "shippo",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
  },
];

export default function MultiStoreFlowDemo() {
  return (
    <div className="w-full">
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl border-2 border-gray-800/50 bg-gray-950">
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
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
        >
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#333" />
        </ReactFlow>
      </div>

      {/* Text below diagram */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Build once → connect unlimited stores → sync everything automatically
        </p>
      </div>
    </div>
  );
}

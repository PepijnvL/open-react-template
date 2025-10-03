"use client";

import React from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Node,
  Handle,
  Position,
  NodeProps,
  type Edge,
} from "@xyflow/react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

import "@xyflow/react/dist/style.css";

// Desktop Custom Node Component
function DesktopNode({ data, selected }: NodeProps) {
  const nodeColor = data.color || "#6366f1";
  const isImageIcon = typeof data.icon === "string";
  const isFirstNode = data.isFirst === true;

  return (
    <div className="relative">
      {/* Input handle - LEFT (hidden for first node) */}
      {!isFirstNode && (
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
        className={`group relative min-w-[200px] rounded-lg bg-white shadow-lg transition-all duration-200 ${
          selected ? "ring-2 ring-blue-500" : "hover:shadow-xl"
        }`}
        style={{
          border: `2px solid ${selected ? nodeColor : "#e5e5e5"}`,
        }}
      >
        <div className="flex items-center gap-3 p-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded"
            style={{
              backgroundColor: `${nodeColor}15`,
            }}
          >
            {isImageIcon ? (
              <Image
                src={data.icon as string}
                alt={data.label as string}
                width={20}
                height={20}
                className="h-5 w-5"
              />
            ) : (
              <Sparkles
                className="h-5 w-5"
                style={{ color: nodeColor } as React.CSSProperties}
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900">
              {data.label as string}
            </div>
            {(data.description as string) && (
              <div className="text-xs text-gray-500 truncate">
                {data.description as string}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output handle - RIGHT */}
      <Handle
        type="source"
        position={Position.Right}
        className="!h-4 !w-4 !rounded-full !border-2 !bg-white !transition-all hover:!scale-110"
        style={{
          right: -8,
          borderColor: "#888",
        }}
      />
    </div>
  );
}

const nodeTypes = {
  custom: DesktopNode,
};

// Desktop nodes - horizontal layout
const nodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: {
      label: "Webhook",
      description: "New order received",
      icon: "/icons/apps/webhook.svg",
      color: "#6366f1",
      isFirst: true,
    },
    position: { x: 50, y: 200 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "Shopify",
      description: "Get order details",
      icon: "/icons/apps/shopify.svg",
      color: "#96BF48",
      isFirst: false,
    },
    position: { x: 300, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      label: "Gmail",
      description: "Send confirmation",
      icon: "/icons/apps/gmail.svg",
      color: "#EA4335",
      isFirst: false,
    },
    position: { x: 550, y: 200 },
  },
];

// Desktop edges - smooth curved lines
const edges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: false,
    style: { stroke: "#999", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: false,
    style: { stroke: "#999", strokeWidth: 2 },
    type: "smoothstep",
  },
];

export default function WorkflowDesktop() {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        className="bg-[#f5f5f5]"
        defaultEdgeOptions={{
          animated: false,
          style: { strokeWidth: 2, stroke: "#999" },
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="#d0d0d0"
          className="bg-[#f5f5f5]"
        />
      </ReactFlow>
    </div>
  );
}

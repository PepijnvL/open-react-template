"use client";

import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
  Node,
  Handle,
  Position,
  NodeProps,
  type Edge,
} from "@xyflow/react";
import {
  Zap,
  Plus,
  Search,
  X,
  FileText,
} from "lucide-react";
import Image from "next/image";

import "@xyflow/react/dist/style.css";

// Enhanced Custom Node Component (n8n style)
function CustomNode({ data, selected }: NodeProps) {
  const nodeColor = data.color || "#6366f1";
  const isImageIcon = typeof data.icon === "string";
  const isFirstNode = data.isFirst === true;

  return (
    <div className="relative">
      {/* Input handle on LEFT (hidden for first node) */}
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
        className={`group relative min-w-[240px] rounded-lg bg-white shadow-lg transition-all duration-200 ${
          selected
            ? "ring-2 ring-blue-500"
            : "hover:shadow-xl"
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
            {isImageIcon ? (
              <Image src={data.icon} alt={data.label} width={20} height={20} className="h-5 w-5" />
            ) : (
              <FileText className="h-5 w-5" style={{ color: nodeColor }} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900">
              {data.label}
            </div>
            {data.description && (
              <div className="text-xs text-gray-500 truncate">
                {data.description}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output handle on RIGHT with + button */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
        <Handle
          type="source"
          position={Position.Right}
          className="!h-4 !w-4 !rounded-full !border-2 !bg-white !transition-all hover:!scale-110"
          style={{
            right: -8,
            borderColor: "#888",
          }}
        />
        {/* Plus button appears on hover */}
        <button
          onClick={() => data.onAddNode && data.onAddNode()}
          className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-900 text-white"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

// Initial empty arrays with proper types
const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

// Available nodes catalog
const availableNodes = [
  {
    category: "Triggers",
    nodes: [
      { id: "webhook", label: "Webhook", description: "Trigger on HTTP request", icon: "/icons/apps/webhook.svg", color: "#6366f1" },
      { id: "schedule", label: "Schedule", description: "Run on a schedule", icon: "/icons/apps/calendar.svg", color: "#8b5cf6" },
    ]
  },
  {
    category: "Apps",
    nodes: [
      { id: "shopify", label: "Shopify", description: "E-commerce platform", icon: "/icons/apps/shopify.svg", color: "#96BF48" },
      { id: "gmail", label: "Gmail", description: "Send & receive emails", icon: "/icons/apps/gmail.svg", color: "#EA4335" },
      { id: "slack", label: "Slack", description: "Team messaging", icon: "/icons/apps/slack.svg", color: "#4A154B" },
      { id: "postgres", label: "PostgreSQL", description: "SQL database", icon: "/icons/apps/postgres.svg", color: "#336791" },
    ]
  },
  {
    category: "Core",
    nodes: [
      { id: "code", label: "Code", description: "Run JavaScript/Python", icon: "/icons/apps/code.svg", color: "#F59E0B" },
      { id: "http", label: "HTTP Request", description: "Make API calls", icon: "/icons/apps/http.svg", color: "#10B981" },
      { id: "ai", label: "AI", description: "OpenAI GPT-4", icon: "/icons/apps/ai.svg", color: "#8B5CF6" },
    ]
  },
];

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showNodePanel, setShowNodePanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [nodeCounter, setNodeCounter] = useState(1);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const addNodeToCanvas = (nodeTemplate: any) => {
    // Redirect to signup
    window.location.href = "https://app.trykariz.com";
  };

  const filteredNodes = availableNodes.map(category => ({
    ...category,
    nodes: category.nodes.filter(node =>
      node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.nodes.length > 0);

  return (
    <div className="relative h-screen w-screen bg-[#f5f5f5]">
      {/* Top Bar - n8n style */}
      <div className="absolute left-0 right-0 top-0 z-10 border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Workflow Builder</h1>
            <p className="text-sm text-gray-500">Build your automation workflow</p>
          </div>
          <a
            href="https://app.trykariz.com"
            className="flex items-center gap-2 rounded-lg bg-[#ff6d5a] px-5 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-[#ff5542] hover:shadow-md"
          >
            <Plus className="h-4 w-4" />
            Add Node
          </a>
        </div>
      </div>

      {/* React Flow Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        className="bg-[#f5f5f5]"
        defaultEdgeOptions={{
          animated: false,
          style: { strokeWidth: 2, stroke: "#999" },
        }}
      >
        <Controls className="!left-6 !bottom-6 rounded-lg border border-gray-300 bg-white shadow-lg" />
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="#d0d0d0"
          className="bg-[#f5f5f5]"
        />
      </ReactFlow>

      {/* Empty State */}
      {nodes.length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#ff6d5a] shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Build Your First Workflow</h2>
            <p className="text-gray-600">
              Create an account at <a href="https://app.trykariz.com" className="pointer-events-auto text-[#ff6d5a] hover:underline font-semibold">app.trykariz.com</a> to build real workflows
            </p>
          </div>
        </div>
      )}

      {/* Node Selection Panel (n8n-style) */}
      {showNodePanel && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowNodePanel(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[420px] border-l border-gray-200 bg-white shadow-2xl">
            {/* Panel Header */}
            <div className="border-b border-gray-200 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Add Node</h2>
                <button
                  onClick={() => setShowNodePanel(false)}
                  className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search nodes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => window.location.href = "https://app.trykariz.com"}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-[#ff6d5a] focus:outline-none focus:ring-2 focus:ring-[#ff6d5a]/20"
                  autoFocus
                />
              </div>
            </div>

            {/* Node List */}
            <div className="h-[calc(100%-130px)] overflow-y-auto p-5">
              {filteredNodes.map((category) => (
                <div key={category.category} className="mb-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.nodes.map((node) => {
                      return (
                        <button
                          key={node.id}
                          onClick={() => addNodeToCanvas(node)}
                          className="group w-full rounded-lg border border-gray-200 bg-white p-3.5 text-left transition-all hover:border-gray-300 hover:shadow-md"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded shadow-sm"
                              style={{
                                backgroundColor: `${node.color}15`,
                              }}
                            >
                              <Image src={node.icon} alt={node.label} width={20} height={20} className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="mb-0.5 text-sm font-medium text-gray-900">
                                {node.label}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {node.description}
                              </div>
                            </div>
                            <Plus className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredNodes.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-gray-600 text-sm">No nodes found</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-2 text-sm text-[#ff6d5a] hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

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
  Edge,
  Node,
  Handle,
  Position,
  NodeProps,
} from "@xyflow/react";
import {
  Mail,
  Send,
  Database,
  Zap,
  ShoppingCart,
  Plus,
  Search,
  X,
  Sparkles,
  Calendar,
  FileText,
  Webhook,
  Code,
  Globe,
} from "lucide-react";

import "@xyflow/react/dist/style.css";

// Enhanced Custom Node Component
function CustomNode({ data, selected }: NodeProps) {
  const Icon = data.icon || FileText;
  const nodeColor = data.color || "#6366f1";

  return (
    <div
      className={`group relative min-w-[220px] rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-2xl transition-all duration-300 ${
        selected
          ? "scale-105 ring-2 ring-offset-2 ring-offset-[#0f0f0f]"
          : "hover:scale-102"
      }`}
      style={{
        border: `2px solid ${selected ? nodeColor : "#2a2a2a"}`,
        boxShadow: selected
          ? `0 20px 40px -12px ${nodeColor}40, 0 0 0 2px ${nodeColor}`
          : "0 10px 30px -10px rgba(0,0,0,0.5)",
        ringColor: nodeColor,
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !rounded-full !border-2 !transition-all"
        style={{
          top: -6,
          borderColor: nodeColor,
          backgroundColor: "#1a1a1a",
        }}
      />

      <div
        className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ backgroundColor: nodeColor }}
      />

      <div className="relative flex items-center gap-4 p-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${nodeColor}30 0%, ${nodeColor}10 100%)`,
            boxShadow: `0 4px 12px ${nodeColor}20`
          }}
        >
          <Icon
            className="h-6 w-6"
            style={{ color: nodeColor }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-white mb-1">
            {data.label}
          </div>
          {data.description && (
            <div className="text-xs text-gray-400 leading-relaxed">
              {data.description}
            </div>
          )}
        </div>

        {data.status && (
          <div
            className="h-2.5 w-2.5 rounded-full animate-pulse"
            style={{
              backgroundColor: nodeColor,
              boxShadow: `0 0 8px ${nodeColor}80`
            }}
          />
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !rounded-full !border-2 !transition-all"
        style={{
          bottom: -6,
          borderColor: nodeColor,
          backgroundColor: "#1a1a1a",
        }}
      />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

// Available nodes catalog
const availableNodes = [
  {
    category: "Triggers",
    nodes: [
      { id: "webhook", label: "Webhook", description: "Trigger on HTTP request", icon: Webhook, color: "#6366f1" },
      { id: "schedule", label: "Schedule", description: "Run on a schedule", icon: Calendar, color: "#8b5cf6" },
    ]
  },
  {
    category: "Apps",
    nodes: [
      { id: "shopify", label: "Shopify", description: "E-commerce platform", icon: ShoppingCart, color: "#96BF48" },
      { id: "gmail", label: "Gmail", description: "Send & receive emails", icon: Mail, color: "#EA4335" },
      { id: "slack", label: "Slack", description: "Team messaging", icon: Send, color: "#4A154B" },
      { id: "postgres", label: "PostgreSQL", description: "SQL database", icon: Database, color: "#336791" },
    ]
  },
  {
    category: "Core",
    nodes: [
      { id: "code", label: "Code", description: "Run JavaScript/Python", icon: Code, color: "#F59E0B" },
      { id: "http", label: "HTTP Request", description: "Make API calls", icon: Globe, color: "#10B981" },
      { id: "ai", label: "AI", description: "OpenAI GPT-4", icon: Sparkles, color: "#8B5CF6" },
    ]
  },
];

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showNodePanel, setShowNodePanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [nodeCounter, setNodeCounter] = useState(1);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#6366f1", strokeWidth: 3 },
            type: "smoothstep",
          },
          eds
        )
      ),
    [setEdges]
  );

  const addNodeToCanvas = (nodeTemplate: any) => {
    const newNode: Node = {
      id: `node-${nodeCounter}`,
      type: "custom",
      data: {
        label: nodeTemplate.label,
        description: nodeTemplate.description,
        icon: nodeTemplate.icon,
        color: nodeTemplate.color,
        status: "active",
      },
      position: {
        x: 250 + Math.random() * 100,
        y: 100 + nodeCounter * 150,
      },
    };

    setNodes((nds) => [...nds, newNode]);
    setNodeCounter((c) => c + 1);
    setShowNodePanel(false);
    setSearchQuery("");
  };

  const filteredNodes = availableNodes.map(category => ({
    ...category,
    nodes: category.nodes.filter(node =>
      node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.nodes.length > 0);

  return (
    <div className="relative h-screen w-screen bg-[#0f0f0f]">
      {/* Top Bar */}
      <div className="absolute left-0 right-0 top-0 z-10 border-b border-gray-800/50 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Workflow Builder</h1>
            <p className="text-sm text-gray-400">Click + to add nodes</p>
          </div>
          <button
            onClick={() => setShowNodePanel(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 font-semibold text-white shadow-lg shadow-[#6366f1]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#6366f1]/30"
          >
            <Plus className="h-5 w-5" />
            Add Node
          </button>
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
        className="bg-[#0f0f0f]"
        defaultEdgeOptions={{
          animated: true,
          style: { strokeWidth: 3 },
        }}
      >
        <Controls className="!left-6 !bottom-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-2xl" />
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.5}
          color="#333333"
          className="bg-[#0f0f0f]"
        />
      </ReactFlow>

      {/* Empty State */}
      {nodes.length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] shadow-2xl shadow-[#6366f1]/20">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">Build Your First Workflow</h2>
            <p className="mb-6 text-gray-400">
              Click the "+ Add Node" button to get started
            </p>
          </div>
        </div>
      )}

      {/* Node Selection Panel (n8n-style) */}
      {showNodePanel && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowNodePanel(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[450px] border-l border-gray-800/50 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-2xl">
            {/* Panel Header */}
            <div className="border-b border-gray-800/50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Add Node</h2>
                <button
                  onClick={() => setShowNodePanel(false)}
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search nodes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-700/50 bg-[#0f0f0f] py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                  autoFocus
                />
              </div>
            </div>

            {/* Node List */}
            <div className="h-[calc(100%-140px)] overflow-y-auto p-6">
              {filteredNodes.map((category) => (
                <div key={category.category} className="mb-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.nodes.map((node) => {
                      const Icon = node.icon;
                      return (
                        <button
                          key={node.id}
                          onClick={() => addNodeToCanvas(node)}
                          className="group w-full rounded-xl border border-gray-800/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-4 text-left transition-all hover:scale-[1.02] hover:border-gray-700 hover:shadow-xl"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg transition-transform group-hover:scale-110"
                              style={{
                                background: `linear-gradient(135deg, ${node.color}30 0%, ${node.color}10 100%)`,
                                boxShadow: `0 4px 12px ${node.color}20`,
                              }}
                            >
                              <Icon className="h-6 w-6" style={{ color: node.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="mb-1 text-sm font-semibold text-white">
                                {node.label}
                              </div>
                              <div className="text-xs text-gray-400">
                                {node.description}
                              </div>
                            </div>
                            <Plus className="h-5 w-5 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredNodes.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-gray-500">No nodes found</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-2 text-sm text-[#6366f1] hover:underline"
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

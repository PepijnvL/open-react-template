"use client";

import React, { useCallback, useState } from "react";
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
  Handle,
  Position,
  NodeProps,
} from "@xyflow/react";
import {
  Mail,
  Filter,
  FileText,
  Send,
  Database,
  CheckCircle,
  Play,
  Sparkles,
  MessageSquare,
  X,
  Loader2,
  Zap,
  ShoppingCart,
  Globe,
  Code,
  Webhook,
} from "lucide-react";

import "@xyflow/react/dist/style.css";

interface CustomNodeData {
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color?: string;
}

// Enhanced Custom Node Component
function CustomNode({ data, selected }: NodeProps<CustomNodeData>) {
  const Icon = (data.icon || FileText) as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
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
      }}
    >
      {/* Connection Handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !rounded-full !border-2 !transition-all"
        style={{
          top: -6,
          borderColor: nodeColor as string,
          backgroundColor: "#1a1a1a",
        } as React.CSSProperties}
      />

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ backgroundColor: nodeColor } as React.CSSProperties}
      />

      {/* Node Content */}
      <div className="relative flex items-center gap-4 p-4">
        {/* Icon with gradient background */}
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${nodeColor}30 0%, ${nodeColor}10 100%)`,
            boxShadow: `0 4px 12px ${nodeColor}20`
          }}
        >
          <Icon
            className="h-6 w-6"
            style={{ color: nodeColor } as React.CSSProperties}
          />
        </div>

        {/* Content */}
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

        {/* Status Badge */}
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

// Enhanced nodes with better icons and colors
const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: {
      label: "Shopify Webhook",
      description: "New order received",
      icon: ShoppingCart,
      color: "#96BF48",
      status: "active",
    },
    position: { x: 250, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "Process Order",
      description: "Extract & validate data",
      icon: Zap,
      color: "#F59E0B",
      status: "active",
    },
    position: { x: 250, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      label: "Send Email",
      description: "Customer confirmation",
      icon: Mail,
      color: "#EA4335",
      status: "active",
    },
    position: { x: 100, y: 350 },
  },
  {
    id: "4",
    type: "custom",
    data: {
      label: "PostgreSQL",
      description: "Store order data",
      icon: Database,
      color: "#336791",
      status: "active",
    },
    position: { x: 400, y: 350 },
  },
  {
    id: "5",
    type: "custom",
    data: {
      label: "Slack Alert",
      description: "Notify sales team",
      icon: Send,
      color: "#4A154B",
      status: "active",
    },
    position: { x: 250, y: 500 },
  },
];

// Enhanced edges with better styling
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: {
      stroke: "#96BF48",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
    },
    type: "smoothstep",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: {
      stroke: "#F59E0B",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
    },
    type: "smoothstep",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    animated: true,
    style: {
      stroke: "#F59E0B",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
    },
    type: "smoothstep",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    style: {
      stroke: "#EA4335",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
    },
    type: "smoothstep",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: {
      stroke: "#336791",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
    },
    type: "smoothstep",
  },
];

// Message interface
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Mock workflow generator (simulates AI)
function generateMockWorkflow(prompt: string): {
  nodes: Node[];
  edges: Edge[];
  description: string;
} {
  const promptLower = prompt.toLowerCase();

  // Simple pattern matching for demo purposes
  if (promptLower.includes("shopify") || promptLower.includes("order") || promptLower.includes("ecommerce")) {
    return {
      nodes: [
        {
          id: "new-1",
          type: "custom",
          data: {
            label: "Shopify Trigger",
            description: "New order received",
            icon: Play,
            color: "#96BF48",
            status: "active",
          },
          position: { x: 650, y: 50 },
        },
        {
          id: "new-2",
          type: "custom",
          data: {
            label: "Send Email",
            description: "Order confirmation",
            icon: Mail,
            color: "#EA4335",
            status: "active",
          },
          position: { x: 650, y: 180 },
        },
      ],
      edges: [
        {
          id: "e-new-1-2",
          source: "new-1",
          target: "new-2",
          animated: true,
          style: { stroke: "#96BF48", strokeWidth: 2 },
          type: "smoothstep",
        },
      ],
      description: "This workflow triggers when a new Shopify order comes in and sends a confirmation email.",
    };
  }

  // Default generic workflow
  return {
    nodes: [
      {
        id: "new-1",
        type: "custom",
        data: {
          label: "Webhook Trigger",
          description: "Custom event",
          icon: Play,
          color: "#3B82F6",
          status: "active",
        },
        position: { x: 650, y: 50 },
      },
      {
        id: "new-2",
        type: "custom",
        data: {
          label: "Process Data",
          description: "Transform input",
          icon: Sparkles,
          color: "#8B5CF6",
          status: "active",
        },
        position: { x: 650, y: 180 },
      },
      {
        id: "new-3",
        type: "custom",
        data: {
          label: "Send Notification",
          description: "Alert users",
          icon: Send,
          color: "#10B981",
          status: "active",
        },
        position: { x: 650, y: 310 },
      },
    ],
    edges: [
      {
        id: "e-new-1-2",
        source: "new-1",
        target: "new-2",
        animated: true,
        style: { stroke: "#3B82F6", strokeWidth: 2 },
        type: "smoothstep",
      },
      {
        id: "e-new-2-3",
        source: "new-2",
        target: "new-3",
        animated: true,
        style: { stroke: "#8B5CF6", strokeWidth: 2 },
        type: "smoothstep",
      },
    ],
    description: "I've created a custom workflow based on your description!",
  };
}

export default function ReactFlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! Describe your workflow and I'll build it for you!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSignupCTA, setShowSignupCTA] = useState(false);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#FF6D5A", strokeWidth: 2 },
            type: "smoothstep",
          },
          eds
        )
      ),
    [setEdges]
  );

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // TODO: In production, send to your AI API endpoint
    // const response = await fetch('/api/generate-workflow', { ... })

    // Simulate AI response
    setTimeout(() => {
      const mockResponse = generateMockWorkflow(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Created workflow: ${mockResponse.description}`,
        },
      ]);

      // Add new nodes and edges to canvas
      setNodes((nds) => [...nds, ...mockResponse.nodes]);
      setEdges((eds) => [...eds, ...mockResponse.edges]);

      setIsLoading(false);
      setShowSignupCTA(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header with enhanced typography */}
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-bold text-transparent">
            AI Workflow Builder
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            Describe your workflow and watch it materialize in real-time
          </p>
        </div>

        {/* Enhanced Boxed Container */}
        <div className="overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-[#0f0f0f] to-[#000000] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {/* React Flow + Chat Grid */}
          <div className="grid h-[750px] grid-cols-3 gap-0">
            {/* React Flow Section (Left 2/3) */}
            <div className="col-span-2 border-r border-gray-800/50">
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
                <Controls className="!left-6 !bottom-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-2xl backdrop-blur-xl" />
                <Background
                  variant={BackgroundVariant.Dots}
                  gap={24}
                  size={1.5}
                  color="#333333"
                  className="bg-[#0f0f0f]"
                />
              </ReactFlow>
            </div>

            {/* Chat Interface Section (Right 1/3) - Enhanced */}
            <div className="col-span-1 flex flex-col bg-gradient-to-b from-[#0f0f0f] to-[#000000]">
              {/* Chat Header - Enhanced */}
              <div className="border-b border-gray-800/50 bg-gradient-to-r from-[#1a1a1a]/50 to-transparent p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6D5A] to-[#ff5842] shadow-lg shadow-[#FF6D5A]/20">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-gray-500">Build workflows with natural language</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages - Enhanced */}
              <div className="flex-1 space-y-4 overflow-y-auto p-5">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-[#FF6D5A] to-[#ff5842] text-white"
                          : "border border-gray-800/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-gray-200"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] px-4 py-3 shadow-lg">
                      <Loader2 className="h-4 w-4 animate-spin text-[#FF6D5A]" />
                      <span className="text-sm text-gray-400">Generating workflow...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Sign Up CTA - Enhanced */}
              {showSignupCTA && (
                <div className="border-t border-gray-800/50 bg-gradient-to-br from-[#FF6D5A]/10 via-[#ff5842]/5 to-transparent p-5">
                  <div className="mb-2 text-sm font-semibold text-white">
                    ✨ Love what you see?
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-gray-400">
                    Create a free account to save your workflows and automate your business processes!
                  </p>
                  <button className="group w-full rounded-xl bg-gradient-to-r from-[#FF6D5A] to-[#ff5842] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6D5A]/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF6D5A]/30">
                    <span className="flex items-center justify-center gap-2">
                      Get Started Free
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </div>
              )}

              {/* Chat Input - Enhanced */}
              <div className="border-t border-gray-800/50 bg-gradient-to-r from-[#1a1a1a]/50 to-transparent p-5">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="e.g., Process Shopify orders and send to Slack..."
                    className="flex-1 rounded-xl border border-gray-700/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] px-4 py-3 text-sm text-white placeholder-gray-500 shadow-inner transition-all focus:border-[#FF6D5A]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6D5A]/20"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="rounded-xl bg-gradient-to-r from-[#FF6D5A] to-[#ff5842] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6D5A]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#FF6D5A]/30 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

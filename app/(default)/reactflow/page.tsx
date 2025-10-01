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
} from "lucide-react";

import "@xyflow/react/dist/style.css";

// Custom Node Component (n8n-style)
function CustomNode({ data, selected }: NodeProps) {
  const Icon = data.icon || FileText;
  const nodeColor = data.color || "#FF6D5A";

  return (
    <div
      className={`relative min-w-[200px] rounded-lg bg-[#1a1a1a] shadow-xl transition-all duration-200 ${
        selected ? "ring-2 ring-[#FF6D5A] ring-offset-2 ring-offset-[#0f0f0f]" : ""
      }`}
      style={{
        border: `2px solid ${selected ? nodeColor : "#2a2a2a"}`,
      }}
    >
      {/* Connection Handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !border-2 !border-gray-600 !bg-gray-800"
        style={{ top: -6 }}
      />

      {/* Node Content */}
      <div className="flex items-center gap-3 p-3">
        {/* Icon */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: `${nodeColor}20` }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: nodeColor }}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">
            {data.label}
          </div>
          {data.description && (
            <div className="mt-0.5 text-xs text-gray-500">
              {data.description}
            </div>
          )}
        </div>

        {/* Status Badge */}
        {data.status && (
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: nodeColor }}
          />
        )}
      </div>

      {/* Execution Count Badge */}
      {data.executions && (
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6D5A] text-[10px] font-bold text-white shadow-lg">
          {data.executions}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !border-2 !border-gray-600 !bg-gray-800"
        style={{ bottom: -6 }}
      />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

// Initial nodes - simplified to 5 nodes
const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: {
      label: "Webhook Trigger",
      description: "New order received",
      icon: Play,
      color: "#7B68EE",
      status: "active",
    },
    position: { x: 250, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "Process Data",
      description: "Extract order details",
      icon: Filter,
      color: "#10B981",
      status: "active",
    },
    position: { x: 250, y: 180 },
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
    position: { x: 100, y: 310 },
  },
  {
    id: "4",
    type: "custom",
    data: {
      label: "Update Database",
      description: "Store order info",
      icon: Database,
      color: "#336791",
      status: "active",
    },
    position: { x: 400, y: 310 },
  },
  {
    id: "5",
    type: "custom",
    data: {
      label: "Slack Notification",
      description: "Alert team",
      icon: Send,
      color: "#4A154B",
      status: "active",
    },
    position: { x: 250, y: 440 },
  },
];

// Simplified edges
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#7B68EE", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    style: { stroke: "#EA4335", strokeWidth: 2 },
    type: "smoothstep",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#336791", strokeWidth: 2 },
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
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">AI Workflow Builder Demo</h1>
          <p className="mt-2 text-gray-400">
            Describe your workflow and watch it come to life
          </p>
        </div>

        {/* Boxed Container */}
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0f0f0f] shadow-2xl">
          {/* React Flow + Chat Grid */}
          <div className="grid h-[700px] grid-cols-3 gap-0">
            {/* React Flow Section (Left 2/3) */}
            <div className="col-span-2 border-r border-gray-800">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-right"
                className="bg-[#0f0f0f]"
                defaultEdgeOptions={{
                  animated: true,
                  style: { strokeWidth: 2 },
                }}
              >
                <Controls className="!left-4 !bottom-4 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] shadow-xl" />
                <Background
                  variant={BackgroundVariant.Dots}
                  gap={20}
                  size={1}
                  color="#2a2a2a"
                  className="bg-[#0f0f0f]"
                />
              </ReactFlow>
            </div>

            {/* Chat Interface Section (Right 1/3) */}
            <div className="col-span-1 flex flex-col bg-[#0f0f0f]">
              {/* Chat Header */}
              <div className="border-b border-gray-800 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6D5A] to-[#ff5842]">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-gray-500">Describe your workflow</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-[#FF6D5A] text-white"
                          : "bg-[#2a2a2a] text-gray-200"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-lg bg-[#2a2a2a] px-4 py-2">
                      <Loader2 className="h-4 w-4 animate-spin text-[#FF6D5A]" />
                      <span className="text-sm text-gray-400">Generating...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Sign Up CTA */}
              {showSignupCTA && (
                <div className="border-t border-gray-800 bg-gradient-to-r from-[#FF6D5A]/10 to-[#ff5842]/10 p-4">
                  <div className="mb-2 text-sm font-semibold text-white">
                    Love what you see?
                  </div>
                  <p className="mb-3 text-xs text-gray-400">
                    Create an account to save and run your workflows!
                  </p>
                  <button className="w-full rounded-lg bg-gradient-to-r from-[#FF6D5A] to-[#ff5842] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02]">
                    Get Started Free →
                  </button>
                </div>
              )}

              {/* Chat Input */}
              <div className="border-t border-gray-800 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="e.g., Shopify order notification..."
                    className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-[#FF6D5A] focus:outline-none"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="rounded-lg bg-[#FF6D5A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#ff5842] disabled:opacity-50"
                  >
                    Send
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

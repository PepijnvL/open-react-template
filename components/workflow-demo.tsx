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
  Send,
  Loader2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import "@xyflow/react/dist/style.css";

// n8n-Style Custom Node Component with Dark Mode
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
          className="!h-4 !w-4 !rounded-full !border-2 !bg-white dark:!bg-gray-700 !transition-all hover:!scale-110"
          style={{
            left: -8,
            borderColor: "#888",
          }}
        />
      )}

      {/* Main node */}
      <div
        className={`group relative min-w-[200px] rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-200 ${
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded"
            style={{
              backgroundColor: `${nodeColor}15`,
            }}
          >
            {isImageIcon ? (
              <Image src={data.icon as string} alt={data.label as string} width={20} height={20} className="h-5 w-5" />
            ) : (
              <Sparkles className="h-5 w-5" style={{ color: nodeColor } as React.CSSProperties} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {data.label as string}
            </div>
            {(data.description as string) && (
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {data.description as string}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output handle on RIGHT */}
      <Handle
        type="source"
        position={Position.Right}
        className="!h-4 !w-4 !rounded-full !border-2 !bg-white dark:!bg-gray-700 !transition-all hover:!scale-110"
        style={{
          right: -8,
          borderColor: "#888",
        }}
      />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

// Initial workflow nodes
const initialNodes: Node[] = [
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

const initialEdges: Edge[] = [
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

export default function WorkflowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Hi! I'm your AI workflow assistant. Tell me what workflow you'd like to create, and I'll build it for you. For example: \"Create a workflow that sends a Slack message when a new Shopify order comes in\"",
    },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const handleSendMessage = async () => {
    if (!chatInput.trim() || isGenerating) return;

    const userMessage = chatInput;
    setChatInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsGenerating(true);

    // Simulate AI response (in production, call your LLM API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I've created a workflow based on your request! The workflow shows how data flows from the trigger through each step. Want to create a real account to build and deploy this workflow?",
        },
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="relative h-[600px] w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-[#f5f5f5] dark:bg-gray-900 shadow-2xl overflow-hidden">
      <div className="grid h-full grid-cols-3">
        {/* React Flow Canvas - 2/3 width */}
        <div className="col-span-2 relative border-r border-gray-200 dark:border-gray-700">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
            className="bg-[#f5f5f5] dark:bg-gray-900"
            defaultEdgeOptions={{
              animated: false,
              style: { strokeWidth: 2, stroke: "#999" },
            }}
          >
            <Controls className="!left-4 !bottom-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg" />
            <Background
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="#d0d0d0"
              className="bg-[#f5f5f5] dark:bg-gray-900"
            />
          </ReactFlow>
        </div>

        {/* Chat Interface - 1/3 width */}
        <div className="col-span-1 flex flex-col bg-white dark:bg-gray-800">
          {/* Chat Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6d5a] to-[#ff5542]">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">AI Workflow Builder</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Describe your automation</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    message.role === "user"
                      ? "bg-[#ff6d5a] text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-gray-100 dark:bg-gray-700 px-4 py-2.5">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Generating workflow...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Describe your workflow..."
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#ff6d5a] focus:outline-none focus:ring-2 focus:ring-[#ff6d5a]/20"
                disabled={isGenerating}
              />
              <button
                onClick={handleSendMessage}
                disabled={!chatInput.trim() || isGenerating}
                className="flex items-center gap-2 rounded-lg bg-[#ff6d5a] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#ff5542] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
              <a href="#" className="text-[#ff6d5a] hover:underline">
                Create an account
              </a>{" "}
              to build real workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

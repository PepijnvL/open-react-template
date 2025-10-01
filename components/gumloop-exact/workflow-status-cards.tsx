"use client";

import { useEffect, useState } from "react";

interface WorkflowCard {
  id: string;
  name: string;
  icon: string;
  status: "completed" | "in-progress" | "pending";
  progress: number;
  timestamp: string;
}

const workflows: WorkflowCard[] = [
  {
    id: "1",
    name: "Channel analyzer",
    icon: "📊",
    status: "completed",
    progress: 100,
    timestamp: "Completed at 11:23 AM",
  },
  {
    id: "2",
    name: "Enrich Company Information",
    icon: "🏢",
    status: "in-progress",
    progress: 65,
    timestamp: "Started at 10:44 AM",
  },
  {
    id: "3",
    name: "Workspace analyzer",
    icon: "💼",
    status: "completed",
    progress: 100,
    timestamp: "Completed at 12:15 PM",
  },
];

export default function WorkflowStatusCards() {
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    // Animate progress bars on mount
    const timeout = setTimeout(() => {
      const progress: Record<string, number> = {};
      workflows.forEach((workflow) => {
        progress[workflow.id] = workflow.progress;
      });
      setAnimatedProgress(progress);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="space-y-3 w-full max-w-md">
      {workflows.map((workflow) => {
        const isCompleted = workflow.status === "completed";
        const progressColor = isCompleted ? "bg-green-500" : "bg-blue-500";
        const currentProgress = animatedProgress[workflow.id] || 0;

        return (
          <div
            key={workflow.id}
            className="relative rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-lg">
                  {workflow.icon}
                </div>
                <p className="font-medium text-gray-900">{workflow.name}</p>
              </div>

              {/* Checkmark for completed */}
              {isCompleted && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {/* Spinner for in-progress */}
              {workflow.status === "in-progress" && (
                <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-2 mb-2">
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${progressColor} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${currentProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Timestamp */}
            <p className="text-sm text-gray-500">{workflow.timestamp}</p>
          </div>
        );
      })}
    </div>
  );
}

import WorkflowDemo from "@/components/workflow-demo";

export const metadata = {
  title: "Workflow Demo - Kariz",
  description: "Interactive workflow builder demo with AI assistance",
};

export default function WorkflowDemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl w-full">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Build Workflows with AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Describe what you want to automate, and watch our AI create the workflow for you
          </p>
        </div>
        <WorkflowDemo />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Book a Demo | Kariz",
  description: "Schedule a demo to see how Kariz can help you build customer-facing integrations faster.",
};

export default function Demo() {
  useEffect(() => {
    window.location.href = "https://cal.com/kariz-pepijn/meeting";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-lg text-gray-400">Redirecting to booking page...</div>
        <div className="text-sm text-gray-500">
          If you're not redirected, <a href="https://cal.com/kariz-pepijn/meeting" className="text-indigo-400 hover:text-indigo-300">click here</a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function Enterprise() {
  useEffect(() => {
    window.location.href = "https://cal.com/kariz-pepijn/meeting";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500"></div>
        <p className="text-gray-400">Redirecting to booking page...</p>
      </div>
    </div>
  );
}

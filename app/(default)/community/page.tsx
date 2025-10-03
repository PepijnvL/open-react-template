"use client";

import { useEffect } from "react";

export default function Community() {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500"></div>
        <p className="text-gray-400">Redirecting...</p>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-lg text-gray-400">Redirecting to homepage...</div>
      </div>
    </div>
  );
}

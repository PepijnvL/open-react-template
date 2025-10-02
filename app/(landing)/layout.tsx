"use client";

import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/scroll-animations";
import "@/app/css/scroll-animations.css";

import Footer from "@/components/ui/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize lightweight scroll animations (replaces AOS)
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}

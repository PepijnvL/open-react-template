"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollNumberCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function ScrollNumberCounter({
  value,
  duration = 2,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
}: ScrollNumberCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(motionValue, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      <motion.span className="tabular-nums">
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </motion.span>
    </div>
  );
}

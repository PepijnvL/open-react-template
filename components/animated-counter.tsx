"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  /** Target value to count to */
  value: number;
  /** Duration of animation in milliseconds (default: 2000) */
  duration?: number;
  /** Number of decimal places (default: 0) */
  decimals?: number;
  /** Whether to use thousands separator (default: true) */
  separator?: boolean;
  /** Custom thousands separator (default: ",") */
  separatorChar?: string;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "+", "M") */
  suffix?: string;
  /** Custom className */
  className?: string;
  /** Start animation on mount (default: true) */
  startOnMount?: boolean;
  /** Trigger animation when value changes (default: true) */
  animateOnChange?: boolean;
  /** Easing function type */
  easing?: "linear" | "easeOut" | "easeInOut";
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  decimals = 0,
  separator = true,
  separatorChar = ",",
  prefix = "",
  suffix = "",
  className,
  startOnMount = true,
  animateOnChange = true,
  easing = "easeOut",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(startOnMount ? 0 : value);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const startValueRef = useRef<number>(0);

  const formatNumber = (num: number): string => {
    let formatted = num.toFixed(decimals);

    if (separator) {
      const parts = formatted.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separatorChar);
      formatted = parts.join(".");
    }

    return `${prefix}${formatted}${suffix}`;
  };

  const getEasing = (t: number): number => {
    switch (easing) {
      case "linear":
        return t;
      case "easeOut":
        return 1 - Math.pow(1 - t, 3);
      case "easeInOut":
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      default:
        return t;
    }
  };

  const animate = (currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = getEasing(progress);

    const currentValue = startValueRef.current + (value - startValueRef.current) * easedProgress;
    setDisplayValue(currentValue);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayValue(value);
      setIsAnimating(false);
      startTimeRef.current = undefined;
    }
  };

  const startAnimation = () => {
    if (isAnimating) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    startValueRef.current = displayValue;
    startTimeRef.current = undefined;
    setIsAnimating(true);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animateOnChange && !startOnMount) {
      startAnimation();
    } else if (animateOnChange) {
      startAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span className={cn("tabular-nums", className)}>{formatNumber(displayValue)}</span>;
}

interface RollingDigitProps {
  /** Target digit (0-9) */
  digit: number;
  /** Duration of roll animation in milliseconds (default: 500) */
  duration?: number;
  /** Custom className */
  className?: string;
}

/**
 * Rolling digit component - displays a single digit with slot-machine style animation
 */
export function RollingDigit({ digit, duration = 500, className }: RollingDigitProps) {
  const [currentDigit, setCurrentDigit] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (currentDigit === digit) return;

    setIsRolling(true);

    // Calculate how many steps to roll through
    let steps = digit - currentDigit;
    if (steps < 0) steps += 10;

    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCurrentDigit((prev) => (prev + 1) % 10);

      if (currentStep >= steps) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [digit, currentDigit, duration]);

  return (
    <span
      className={cn(
        "inline-block transition-transform",
        isRolling && "animate-pulse",
        className
      )}
    >
      {currentDigit}
    </span>
  );
}

interface RollingNumberProps {
  /** Target value to display */
  value: number;
  /** Duration of roll animation in milliseconds (default: 1000) */
  duration?: number;
  /** Whether to use thousands separator (default: true) */
  separator?: boolean;
  /** Custom thousands separator (default: ",") */
  separatorChar?: string;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "+", "M") */
  suffix?: string;
  /** Custom className */
  className?: string;
  /** Custom digit className */
  digitClassName?: string;
}

/**
 * Rolling number component - displays number with slot-machine style digit rolling
 * Similar to the counter on Gumloop's landing page
 */
export function RollingNumber({
  value,
  duration = 1000,
  separator = true,
  separatorChar = ",",
  prefix = "",
  suffix = "",
  className,
  digitClassName,
}: RollingNumberProps) {
  const valueStr = Math.floor(value).toString();
  const digits = valueStr.split("");

  // Add separators
  const formatted: (string | number)[] = [];
  let count = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0 && separator) {
      formatted.unshift(separatorChar);
    }
    formatted.unshift(parseInt(digits[i]));
    count++;
  }

  return (
    <span className={cn("inline-flex items-center tabular-nums", className)}>
      {prefix && <span className="mr-1">{prefix}</span>}
      {formatted.map((item, index) =>
        typeof item === "number" ? (
          <RollingDigit
            key={`${index}-${item}`}
            digit={item}
            duration={duration}
            className={digitClassName}
          />
        ) : (
          <span key={`sep-${index}`} className="mx-0.5">
            {item}
          </span>
        )
      )}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface ToastProps {
  title: string;
  description?: string;
  variant?: "success" | "error" | "warning" | "info";
  icon?: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export default function ToastNotification({
  title,
  description,
  variant = "info",
  icon,
  isVisible,
  onClose,
  duration = 5000,
  position = "top-right",
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const variants = {
    success: {
      bg: "from-emerald-900/90 to-emerald-800/80",
      border: "border-emerald-500/50",
      icon: "text-emerald-400",
      progress: "bg-emerald-500",
    },
    error: {
      bg: "from-rose-900/90 to-rose-800/80",
      border: "border-rose-500/50",
      icon: "text-rose-400",
      progress: "bg-rose-500",
    },
    warning: {
      bg: "from-amber-900/90 to-amber-800/80",
      border: "border-amber-500/50",
      icon: "text-amber-400",
      progress: "bg-amber-500",
    },
    info: {
      bg: "from-blue-900/90 to-blue-800/80",
      border: "border-blue-500/50",
      icon: "text-blue-400",
      progress: "bg-blue-500",
    },
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  const slideVariants = {
    "top-right": { initial: { x: 400, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 400, opacity: 0 } },
    "top-left": { initial: { x: -400, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -400, opacity: 0 } },
    "bottom-right": { initial: { x: 400, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 400, opacity: 0 } },
    "bottom-left": { initial: { x: -400, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -400, opacity: 0 } },
  };

  const currentVariant = variants[variant];
  const currentSlide = slideVariants[position];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={currentSlide.initial}
          animate={currentSlide.animate}
          exit={currentSlide.exit}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "fixed z-50 w-96 rounded-2xl border backdrop-blur-xl shadow-2xl",
            "bg-gradient-to-br",
            currentVariant.bg,
            currentVariant.border,
            positionClasses[position]
          )}
        >
          {/* Content */}
          <div className="relative p-4">
            <div className="flex items-start gap-4">
              {/* Icon */}
              {icon && (
                <div className={cn("flex-shrink-0 text-2xl", currentVariant.icon)}>
                  {icon}
                </div>
              )}

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white mb-1">{title}</h4>
                {description && (
                  <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
                )}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 rounded-lg p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            {duration > 0 && (
              <motion.div
                className={cn("absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl", currentVariant.progress)}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </div>

          {/* Glow effect */}
          <div className={cn("absolute -inset-px rounded-2xl opacity-50 blur-xl -z-10", currentVariant.progress)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

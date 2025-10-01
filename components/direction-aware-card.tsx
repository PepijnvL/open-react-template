"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DirectionAwareCardProps {
  children: React.ReactNode;
  overlay?: React.ReactNode;
  className?: string;
}

export default function DirectionAwareCard({
  children,
  overlay,
  className,
}: DirectionAwareCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"top" | "right" | "bottom" | "left">("top");
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const getDirection = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return "top";

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const angle = (Math.atan2(mouseY, mouseX) * 180) / Math.PI;

    if (angle >= -45 && angle < 45) return "right";
    if (angle >= 45 && angle < 135) return "bottom";
    if (angle >= 135 || angle < -135) return "left";
    return "top";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    setDirection(dir);
    setIsHovering(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    setDirection(dir);
    setIsHovering(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX);
    y.set(mouseY);
  };

  const overlayVariants = {
    top: { x: 0, y: isHovering ? 0 : -100 },
    right: { x: isHovering ? 0 : 100, y: 0 },
    bottom: { x: 0, y: isHovering ? 0 : 100 },
    left: { x: isHovering ? 0 : -100, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
        "backdrop-blur-xl border border-white/10",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Direction-aware overlay */}
      <motion.div
        className="absolute inset-0 z-20 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-rose-600/90 backdrop-blur-sm flex items-center justify-center"
        initial={false}
        animate={overlayVariants[direction]}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {overlay || (
          <div className="text-white text-center p-8">
            <h3 className="text-2xl font-bold mb-2">Learn More</h3>
            <p className="text-white/80">Hover from different directions</p>
          </div>
        )}
      </motion.div>

      {/* Glow effect following cursor */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-purple-500/30 blur-xl pointer-events-none"
        style={{
          left: mouseXSpring,
          top: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
}

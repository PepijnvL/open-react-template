"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
  variant?: "fade" | "blur" | "slide" | "scale";
}

export default function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
  delay = 0,
  variant = "fade",
}: TextGenerateEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= wordsArray.length) {
        setDisplayedWords(wordsArray.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, duration * 100);

    return () => clearInterval(interval);
  }, [isInView, wordsArray.length, duration]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className="inline">
        {displayedWords.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            initial="hidden"
            animate="visible"
            variants={variants[variant]}
            transition={{
              duration: duration,
              delay: delay + idx * 0.1,
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeLine {
  type: "command" | "output" | "success" | "error";
  content: string;
  delay?: number;
}

interface TerminalCodeBlockProps {
  lines: CodeLine[];
  className?: string;
  title?: string;
  autoPlay?: boolean;
  typingSpeed?: number;
}

export default function TerminalCodeBlock({
  lines,
  className,
  title = "Terminal",
  autoPlay = true,
  typingSpeed = 50,
}: TerminalCodeBlockProps) {
  const [displayedLines, setDisplayedLines] = useState<CodeLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(autoPlay);

  useEffect(() => {
    if (!isTyping || currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const fullText = currentLine.content;

    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Move to next line
      const timeout = setTimeout(
        () => {
          setDisplayedLines((prev) => [...prev, currentLine]);
          setCurrentText("");
          setCurrentLineIndex((prev) => prev + 1);
        },
        currentLine.delay || 500
      );

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, isTyping, lines, typingSpeed]);

  const getLineColor = (type: CodeLine["type"]) => {
    switch (type) {
      case "command":
        return "text-cyan-400";
      case "output":
        return "text-gray-300";
      case "success":
        return "text-green-400";
      case "error":
        return "text-red-400";
      default:
        return "text-gray-300";
    }
  };

  const getLinePrefix = (type: CodeLine["type"]) => {
    switch (type) {
      case "command":
        return "$ ";
      case "success":
        return "✓ ";
      case "error":
        return "✗ ";
      default:
        return "  ";
    }
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-gray-800 bg-gray-950 shadow-2xl",
        className
      )}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-4 text-sm text-gray-400">{title}</div>
      </div>

      {/* Terminal content */}
      <div className="min-h-[300px] p-4 font-mono text-sm">
        {displayedLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("mb-1", getLineColor(line.type))}
          >
            <span className="text-gray-500">{getLinePrefix(line.type)}</span>
            {line.content}
          </motion.div>
        ))}

        {/* Current typing line */}
        {isTyping && currentLineIndex < lines.length && (
          <div className={cn("mb-1", getLineColor(lines[currentLineIndex].type))}>
            <span className="text-gray-500">
              {getLinePrefix(lines[currentLineIndex].type)}
            </span>
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-400 ml-1"
            />
          </div>
        )}
      </div>
    </div>
  );
}

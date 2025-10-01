"use client";

import { cn } from "@/lib/utils";
import GlassCard from "./glass-card";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <GlassCard className={cn("flex flex-col p-6", className)}>
      {/* Rating */}
      {rating && (
        <div className="mb-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                "h-5 w-5",
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="mb-4 flex-1 text-gray-300">
        <p className="text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        {avatar && (
          <Image
            src={avatar}
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <div className="text-sm font-semibold text-white">{author}</div>
          <div className="text-xs text-gray-400">
            {role}
            {company && <span> at {company}</span>}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

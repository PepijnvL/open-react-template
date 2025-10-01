"use client";

import { cn } from "@/lib/utils";
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
    <div
      className={cn(
        "group relative flex flex-col p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1",
        "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
        "backdrop-blur-xl border border-white/10",
        "shadow-xl shadow-slate-900/50",
        "hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-purple-500/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Rating */}
      {rating && (
        <div className="relative z-10 mb-6 flex gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                "h-5 w-5 transition-all duration-300",
                i < rating
                  ? "text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                  : "text-slate-700 fill-slate-700"
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
      <blockquote className="relative z-10 mb-6 flex-1">
        <p className="text-base leading-relaxed text-gray-200 font-medium">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Author section with enhanced styling */}
      <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-white/5">
        {avatar ? (
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <Image
              src={avatar}
              alt={author}
              width={48}
              height={48}
              className="relative rounded-full ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all duration-500"
            />
          </div>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all duration-500">
              <span className="text-lg font-bold text-white drop-shadow-lg">
                {author.charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="text-base font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors duration-300">
            {author}
          </div>
          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {role}
            {company && (
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {" "}
                · {company}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
    </div>
  );
}

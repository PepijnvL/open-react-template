"use client";

import React from "react";
import Image from "next/image";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-gray-700/20 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        } as React.CSSProperties}
        className={`absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full ${
          reverse ? "[animation-direction:reverse]" : ""
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
}

interface OrbitingIconsProps {
  icons: Array<{ src: string; alt: string }>;
  radius?: number;
  duration?: number;
  centerElement?: React.ReactNode;
}

export function OrbitingIcons({
  icons,
  radius = 100,
  duration = 20,
  centerElement,
}: OrbitingIconsProps) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center">
      {/* Center element */}
      {centerElement && (
        <div className="relative z-10">{centerElement}</div>
      )}

      {/* Orbiting icons */}
      {icons.map((icon, index) => (
        <OrbitingCircles
          key={index}
          className="size-[50px] border-none bg-transparent"
          duration={duration}
          delay={index * (duration / icons.length)}
          radius={radius}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={32}
            height={32}
            className="opacity-80"
          />
        </OrbitingCircles>
      ))}
    </div>
  );
}

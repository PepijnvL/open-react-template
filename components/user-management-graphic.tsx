"use client";

import { cn } from "@/lib/utils";

interface UserManagementGraphicProps {
  className?: string;
  variant?: "dashboard" | "team" | "permissions";
}

export default function UserManagementGraphic({
  className,
  variant = "dashboard"
}: UserManagementGraphicProps) {
  if (variant === "dashboard") {
    return (
      <svg
        className={cn("w-full h-auto", className)}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="800" height="600" fill="url(#dashboardBg)" />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="dashboardBg" x1="0" y1="0" x2="800" y2="600">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Dashboard Container */}
        <g>
          {/* Main Dashboard Panel */}
          <rect x="150" y="100" width="500" height="400" rx="20" fill="#1e293b" opacity="0.8" />
          <rect x="150" y="100" width="500" height="400" rx="20" fill="none" stroke="url(#purple)" strokeWidth="2" opacity="0.5" />

          {/* Header */}
          <rect x="170" y="120" width="460" height="60" rx="10" fill="#334155" opacity="0.5" />
          <text x="190" y="155" fill="#e2e8f0" fontSize="24" fontWeight="bold">User Management</text>

          {/* Search Bar */}
          <rect x="170" y="200" width="300" height="40" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <circle cx="190" cy="220" r="8" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <line x1="196" y1="226" x2="202" y2="232" stroke="#94a3b8" strokeWidth="2" />

          {/* Add User Button */}
          <rect x="490" y="200" width="140" height="40" rx="20" fill="url(#purple)" />
          <text x="520" y="225" fill="white" fontSize="14" fontWeight="600">+ Add User</text>

          {/* User Cards */}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(0, ${i * 80})`}>
              <rect x="190" y="270" width="420" height="60" rx="10" fill="#334155" opacity="0.6" />

              {/* Avatar */}
              <circle cx="220" cy="300" r="20" fill="url(#blue)" opacity="0.8" />
              <text x="220" y="306" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">U</text>

              {/* User Info */}
              <text x="255" y="295" fill="#e2e8f0" fontSize="14" fontWeight="600">User {i + 1}</text>
              <text x="255" y="315" fill="#94a3b8" fontSize="12">user{i + 1}@example.com</text>

              {/* Status Badge */}
              <rect x="520" y="285" width="70" height="30" rx="15" fill="#10b981" opacity="0.2" />
              <circle cx="535" cy="300" r="4" fill="#10b981" />
              <text x="545" y="304" fill="#10b981" fontSize="12" fontWeight="500">Active</text>
            </g>
          ))}
        </g>

        {/* Floating Elements */}
        <g opacity="0.4">
          <circle cx="100" cy="150" r="40" fill="url(#purple)" opacity="0.1">
            <animate attributeName="cy" values="150;130;150" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="720" cy="450" r="60" fill="url(#blue)" opacity="0.1">
            <animate attributeName="cy" values="450;470;450" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    );
  }

  if (variant === "team") {
    return (
      <svg
        className={cn("w-full h-auto", className)}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="teamBg" x1="0" y1="0" x2="800" y2="600">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <rect width="800" height="600" fill="url(#teamBg)" />

        {/* Team Members in Circle */}
        <g transform="translate(400, 300)">
          {[
            { x: 150, y: 0, letter: 'A' },
            { x: 75, y: 129.9, letter: 'B' },
            { x: -75, y: 129.9, letter: 'C' },
            { x: -150, y: 0, letter: 'D' },
            { x: -75, y: -129.9, letter: 'E' },
            { x: 75, y: -129.9, letter: 'F' },
          ].map((member, i) => (
            <g key={i} transform={`translate(${member.x}, ${member.y})`}>
              <circle r="40" fill="url(#gradient1)" opacity="0.8">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur={`${10 + i}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="35" fill="#1e293b" />
              <text y="8" fill="#e2e8f0" fontSize="24" fontWeight="bold" textAnchor="middle">
                {member.letter}
              </text>
            </g>
          ))}

          {/* Center Hub */}
          <circle r="50" fill="url(#gradient2)" opacity="0.3" />
          <circle r="45" fill="#1e293b" />
          <text y="8" fill="#e2e8f0" fontSize="18" fontWeight="bold" textAnchor="middle">Team</text>
        </g>

        {/* Connection Lines */}
        <g opacity="0.2" stroke="url(#gradient1)" strokeWidth="2">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x = Math.cos(angle) * 150 + 400;
            const y = Math.sin(angle) * 150 + 300;

            return (
              <line key={i} x1="400" y1="300" x2={x} y2={y}>
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
              </line>
            );
          })}
        </g>
      </svg>
    );
  }

  // Permissions variant
  return (
    <svg
      className={cn("w-full h-auto", className)}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="permBg" x1="0" y1="0" x2="800" y2="600">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#permBg)" />

      {/* Permission Matrix */}
      <g>
        <text x="400" y="80" fill="#e2e8f0" fontSize="32" fontWeight="bold" textAnchor="middle">
          Access Control
        </text>

        {/* Grid */}
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            {[0, 1, 2, 3].map((col) => {
              const isActive = (row + col) % 2 === 0;
              return (
                <g key={col} transform={`translate(${200 + col * 100}, ${150 + row * 80})`}>
                  <rect
                    width="80"
                    height="60"
                    rx="10"
                    fill={isActive ? "#22c55e" : "#334155"}
                    opacity={isActive ? 0.3 : 0.1}
                  />
                  {isActive && (
                    <g transform="translate(40, 30)">
                      <circle r="15" fill="#22c55e" opacity="0.2" />
                      <path
                        d="M -5 0 L -2 5 L 8 -5"
                        stroke="#22c55e"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>
                  )}
                </g>
              );
            })}
          </g>
        ))}

        {/* Labels */}
        <text x="160" y="185" fill="#94a3b8" fontSize="14">Admin</text>
        <text x="160" y="265" fill="#94a3b8" fontSize="14">Editor</text>
        <text x="160" y="345" fill="#94a3b8" fontSize="14">Viewer</text>
        <text x="160" y="425" fill="#94a3b8" fontSize="14">Guest</text>
      </g>

      {/* Shield Icon */}
      <g transform="translate(650, 350)" opacity="0.3">
        <path
          d="M 0 -50 L 40 -35 L 40 10 Q 40 50 0 70 Q -40 50 -40 10 L -40 -35 Z"
          fill="url(#gradient1)"
        />
      </g>
    </svg>
  );
}

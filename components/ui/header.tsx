"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="text-sm text-gray-300 hover:text-white transition-colors py-2">
                Solutions
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 z-50">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/95 py-2 shadow-xl backdrop-blur-sm">
                    <Link
                      href="/for-developers"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-emerald-400 transition-colors"
                    >
                      For Developers
                    </Link>
                    <Link
                      href="/for-ecommerce"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 transition-colors"
                    >
                      For E-commerce
                    </Link>
                    <Link
                      href="/for-startups"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-purple-400 transition-colors"
                    >
                      For Startups
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/enterprise" className="text-sm text-gray-300 hover:text-white transition-colors">
              Enterprise
            </Link>
            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/community" className="text-sm text-gray-300 hover:text-white transition-colors">
              Community
            </Link>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="https://cal.com/kariz-pepijn/meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Book Demo
              </a>
            </li>
            <li>
              <a
                href="https://app.trykariz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

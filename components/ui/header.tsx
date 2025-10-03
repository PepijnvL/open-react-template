"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setMobileSolutionsOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-2 md:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={mobileMenuRef}>
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/95 px-3 shadow-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center gap-3">
            <Logo />

            {/* Mobile menu button - only show on mobile */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop Navigation */}
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
                      href="/developers"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-emerald-400 transition-colors"
                    >
                      Developers
                    </Link>
                    <Link
                      href="/ecommerce"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 transition-colors"
                    >
                      E-commerce
                    </Link>
                    <Link
                      href="/startups"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-purple-400 transition-colors"
                    >
                      Startups
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
          </nav>

          {/* Desktop and Mobile CTAs */}
          <ul className="flex items-center justify-end gap-2">
            <li>
              <Link
                href="/book-demo"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Book Demo
              </Link>
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-gray-800 bg-gray-900/95 backdrop-blur-sm shadow-xl overflow-hidden">
            <nav className="py-2">
              {/* Solutions dropdown */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="bg-gray-800/30 py-1">
                    <Link
                      href="/developers"
                      className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-emerald-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Developers
                    </Link>
                    <Link
                      href="/ecommerce"
                      className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      E-commerce
                    </Link>
                    <Link
                      href="/startups"
                      className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-purple-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Startups
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/enterprise"
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise
              </Link>

              <Link
                href="/pricing"
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-3 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(3,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#integrations"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/developers"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/ecommerce"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/startups"
                >
                  Startups
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/signin"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65"
                  href="/demo"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © {new Date().getFullYear()} Kariz
              </p>
              {/* Trust badges */}
              <div className="mb-4 flex flex-wrap items-center justify-end gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-green-500/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-blue-500/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-indigo-500/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <span>SOC 2 (In Progress)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

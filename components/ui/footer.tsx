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
                  href="/for-developers"
                >
                  For Developers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/for-ecommerce"
                >
                  For E-commerce
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/for-startups"
                >
                  For Startups & SaaS
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
                  href="https://app.trykariz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://cal.com/kariz-pepijn/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

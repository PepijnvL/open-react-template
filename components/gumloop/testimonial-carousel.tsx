"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Fidji Simo",
    role: "CEO",
    company: "Instacart",
    avatar: "👩‍💼",
    quote: "Gumloop has been critical in helping all teams at Instacart - including those without technical skills - adopt AI and automate their workflows, which has greatly improved our operational efficiency.",
  },
  {
    name: "Bryant Chou",
    role: "Co-Founder",
    company: "Webflow",
    avatar: "👨‍💻",
    quote: "Gumloop wins time back across an org. It puts the tools into the hands of people who understand a task and lets them completely automate it away.",
  },
  {
    name: "David Phelps",
    role: "VP, Academics",
    company: "Albert",
    avatar: "👨‍🏫",
    quote: "With Gumloop, any team member can now identify a manual process and turn it into an automated workflow without writing a single line of code.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by the world's largest companies
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative">
        <div
          className={`bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-12 shadow-2xl transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Avatar and Info */}
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-gray-200 flex items-center justify-center text-4xl shadow-lg">
                {testimonial.avatar}
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonial.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">{testimonial.role}</span>
                <span>•</span>
                <span className="font-semibold text-gray-700">{testimonial.company}</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>

          {/* Quote decoration */}
          <div className="absolute top-8 right-8 text-8xl text-gray-100 leading-none select-none pointer-events-none">
            "
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveIndex(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Company Logos */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <p className="text-center text-sm text-gray-500 mb-6">
          Powering the world's best teams
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {["Webflow", "Instacart", "Shopify", "Albert"].map((company) => (
            <div
              key={company}
              className="text-2xl font-bold text-gray-300 hover:text-gray-600 transition-colors duration-300 cursor-pointer"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

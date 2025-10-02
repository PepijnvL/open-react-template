"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Fidji Simo",
    role: "CEO",
    company: "Instacart",
    gradient: "bg-gradient-to-br from-green-400 to-green-600",
    initials: "FS",
    quote: "Gumloop has been critical in helping all teams at Instacart - including those without technical skills - adopt AI and automate their workflows, which has greatly improved our operational efficiency.",
  },
  {
    name: "Bryant Chou",
    role: "Co-Founder",
    company: "Webflow",
    gradient: "bg-gradient-to-br from-blue-400 to-purple-600",
    initials: "BC",
    quote: "Gumloop wins time back across an org. It puts the tools into the hands of people who understand a task and lets them completely automate it away.",
  },
  {
    name: "David Phelps",
    role: "VP, Academics",
    company: "Albert",
    gradient: "bg-gradient-to-br from-orange-400 to-red-600",
    initials: "DP",
    quote: "With Gumloop, any team member can now identify a manual process and turn it into an automated workflow without writing a single line of code.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by the world's largest companies
        </h2>
      </motion.div>

      {/* Testimonial Card */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="relative"
          >
            <motion.div
              className="bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-12 shadow-2xl overflow-hidden"
              whileHover={{
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient glow */}
              <motion.div
                className={`absolute -top-20 -right-20 w-64 h-64 ${testimonial.gradient} rounded-full blur-3xl opacity-10`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Avatar and Info */}
              <div className="flex items-start gap-6 mb-6 relative z-10">
                <div className="relative">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl ${testimonial.gradient} border-2 border-white flex items-center justify-center text-white text-2xl font-bold shadow-xl`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0.1,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    {testimonial.initials}
                  </motion.div>
                  {/* Verified badge */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                      delay: 0.3,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-white text-xs font-bold">✓</span>
                  </motion.div>
                </div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
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
                </motion.div>
              </div>

              {/* Quote */}
              <motion.blockquote
                className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Quote decoration */}
              <div className="absolute top-8 right-8 text-9xl text-gray-100 leading-none select-none pointer-events-none font-serif">
                "
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              animate={{
                width: index === activeIndex ? 32 : 12,
                height: 12,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Company Logos */}
      <motion.div
        className="mt-16 border-t border-gray-200 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-center text-sm text-gray-500 mb-8 font-medium">
          Powering the world's best teams
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {[
            { name: "Webflow", gradient: "from-blue-500 to-purple-600" },
            { name: "Instacart", gradient: "from-green-400 to-green-600" },
            { name: "Shopify", gradient: "from-green-500 to-emerald-600" },
            { name: "Albert", gradient: "from-orange-400 to-red-600" },
          ].map((company, index) => (
            <motion.div
              key={company.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div
                className={`text-2xl font-bold bg-gradient-to-r ${company.gradient} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              >
                {company.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

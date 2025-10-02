/**
 * Lightweight scroll animation utility using Intersection Observer
 * Replaces AOS library with zero-dependency CSS animations
 */

export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Check if animations are preferred (respect user preferences)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Only animate once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: '0px 0px -50px 0px', // Start animation slightly before element is fully in view
    }
  );

  // Observe all elements with data-animate attribute
  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

/**
 * Hook for React components
 */
export function useScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  return observer;
}

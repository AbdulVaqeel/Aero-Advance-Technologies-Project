import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. If there's a hash → try to scroll to it (with offset)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Small delay helps when navigating from another page
        // (elements might not be mounted instantly)
        const timer = setTimeout(() => {
          const yOffset = -100; // ← ADJUST THIS (navbar height + some breathing room)
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }, 50); // 0–150 ms usually works well — 50 is a good middle ground

        return () => clearTimeout(timer);
      }
    }

    // 2. No hash → just scroll to top (normal page navigation)
    else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // or 'smooth' if you prefer
      });
    }
  }, [pathname, hash]);

  return null;
}
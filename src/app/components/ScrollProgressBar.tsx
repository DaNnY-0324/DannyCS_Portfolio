'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      // Show the progress bar after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed progress bar at the top of the page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--primary)] z-50 origin-left shadow-md"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Circular progress indicator */}
      {isVisible && (
        <motion.div 
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-12 h-12">
            <circle
              className="text-[var(--border)] stroke-current"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <motion.circle
              className="text-[var(--primary)] stroke-current"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
              style={{
                pathLength: scrollYProgress,
                rotate: -90,
                transformOrigin: 'center',
                filter: 'drop-shadow(0 0 2px rgba(255, 0, 0, 0.5))'
              }}
            />
          </svg>
          <motion.div 
            className="absolute text-xs font-semibold text-[var(--foreground)]"
            style={{
              opacity: scrollYProgress
            }}
          >
            <motion.span style={{ opacity: scrollYProgress }}>
              {Math.round(Number(scrollYProgress.get() * 100))}%
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

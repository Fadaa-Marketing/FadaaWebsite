// components/shared/useScreenSize.ts
"use client"

import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize with debounce
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return { isMobile };
};
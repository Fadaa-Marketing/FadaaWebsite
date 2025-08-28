// components/CustomRouteLoader.tsx
"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CustomRouteLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Create custom event listeners
    window.addEventListener('beforeNavigate', handleStart);
    window.addEventListener('navigateComplete', handleComplete);

    return () => {
      window.removeEventListener('beforeNavigate', handleStart);
      window.removeEventListener('navigateComplete', handleComplete);
    };
  }, []);

  // Fallback: hide loader when path changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[300000] bg-[#210039] flex items-center justify-center">
      <img 
        src="/loadings.gif" 
        alt="Loading" 
        className="max-w-[800px] w-full h-auto select-none" 
      />
    </div>
  );
}
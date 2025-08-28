"use client";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  const handleReset = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    } else {
      reset();
    }
  };

  return (
    <html>
      <body className="flex flex-col items-center justify-center bg-primary text-white min-h-screen">
        <div className="text-center flex flex-col items-center justify-center px-4 h-screen">
          <h1 className="text-[120px] font-extrabold mb-2">500</h1>
          <h2 className="text-3xl font-semibold mb-4">Something Went Wrong</h2>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

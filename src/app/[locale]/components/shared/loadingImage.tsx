// components/LoadingImage.tsx
"use client";

import { useState } from "react";

interface LoadingImageProps {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
}

const LoadingImage = ({
  src,
  alt = "",
  className = "",
  sizes = "",
}: LoadingImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`relative w-full h-full ${
        loading ? "bg-[#F0F0F0]" : "bg-transparent"
      }`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`transition-opacity duration-500 ${className} ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        sizes={sizes}
      />
    </div>
  );
};

export default LoadingImage;

"use client";
import { useEffect, useState } from "react";

const ClientOnlyHTML = ({ html }: { html: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-100 animate-pulse rounded" />
        <div className="w-[90%] h-4 bg-gray-100 animate-pulse rounded" />
        <div className="w-[80%] h-4 bg-gray-100 animate-pulse rounded" />
        <div className="w-[95%] h-4 bg-gray-100 animate-pulse rounded" />
      </div>
    );
  }
  

  return <p dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ClientOnlyHTML;

// components/MediaBuying.tsx
"use client"

import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
import { useEffect, useState } from 'react';
import { useScreenSize } from "../../components/shared/useScreenSize";
import { getPortoData } from "@/lib/api";
import { useTranslations } from "next-intl";

interface MediaBuyingProps {
  categoryId: number; // Changed from data to categoryId
}

const MediaBuying = ({ categoryId }: MediaBuyingProps) => {
  const { isMobile } = useScreenSize();
  const [data, setData] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations("porto")
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await getPortoData(categoryId, isMobile);
        setData(results);
      } catch (err) {
        setError('Failed to load media buying items');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, isMobile]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        {t("Noportfolioitemsfound")}
      </div>
    );
  }

  return (
    <div className="pt-[50px] pb-[80px] x-padding mx-auto space-y-4">
      {data?.map((items, index) => (
        <div key={`${items.id}-${index}`} className="relative group px-6 md:px-0 rounded-[20px] w-full overflow-hidden">
          <LoadingImage
            src={items.image_url}
            alt={items.title || 'Media buying item'}
            className="rounded-[20px] w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default MediaBuying;
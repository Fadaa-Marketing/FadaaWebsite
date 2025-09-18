// components/AllImages.tsx
"use client"

import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
import { useEffect, useState } from 'react';
import { useScreenSize } from "../../components/shared/useScreenSize";
import { getPortoData } from "@/lib/api";
import { useTranslations } from "next-intl";

interface PortoSEOProps {
  categoryId: number; // Changed from data to categoryId
}

const AllImages = ({ categoryId }: PortoSEOProps) => {
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
        setError('Failed to load portfolio items');
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
    <div className="pt-[50px] pb-[80px] mx-auto">
      {data?.map((items, index) => (
        <div key={`${items.id}-${index}`} className="relative px-6 md:px-0 group w-full overflow-hidden">
          <LoadingImage
            src={items.image_url}
            alt={items.title || 'Portfolio item'}
            className="w-full transition-transform duration-300 group-hover:scale-105"
          />
          {items.title && items.title !== "null" && (
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
              <div className="bg-black/60 text-white py-2 px-4 rounded-t-lg text-center xl:text-[20px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] uppercase font-[500] w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                {items.title}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllImages;
"use client";

import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation"; 
import { useTranslations } from "next-intl";
interface PortoSEOProps {
  data: PortfolioItem[];
}
const PortoSocialdd = ({ data }: PortoSEOProps) => {
  const chunkArray = (arr: PortfolioItem[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const mobileChunks = chunkArray(data, 3);
  const t =useTranslations("porto")
  if (!data.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        {t("Noportfolioitemsfound")}
      </div>
    );
  }
  return (
    <div className="pt-[50px] pb-[80px] x-padding mx-auto">
      <div className="hidden sm:grid grid-cols-12 gap-4">
        {data?.map((items, index) => (
          <div
            key={index}
            className="relative group w-full rounded-[20px] overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <LoadingImage
              src={items.image_url}
              alt="Portfolio"
              className="w-full h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
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
      <div className="sm:hidden flex flex-col gap-4">
        {mobileChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="relative">
            <Swiper
              modules={[Navigation]} 
              spaceBetween={10}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: `.next-${chunkIndex}`,
                prevEl: `.prev-${chunkIndex}`,
              }}
            >
              {chunk.map((items, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group w-full rounded-[20px] overflow-hidden">
                    <LoadingImage
                      src={items.image_url}
                      alt="Portfolio"
                      className="w-full h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                    />
                    {items.title && items.title !== "null" && (
                      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                        <div className="bg-black/60 text-white py-2 px-4 rounded-t-lg text-center text-[14px] uppercase font-[500] w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                          {items.title}
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className={`prev-${chunkIndex} absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-black/60 text-white w-[30px] h-[30px] flex items-center justify-center rounded-full`}
            >
              <span className="mr-1">◀</span>
            </button>
            <button
              className={`next-${chunkIndex} absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-black/60 text-white p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full`}
            >
              <span className="ml-1">▶</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortoSocialdd;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoadingImage from "@/app/components/shared/loadingImage";
import { Gif } from "@/types";
import Image from "next/image";

export const GifSwiper = ({ gif }: { gif: Gif[] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Keyboard]}
      className="mySwiper"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      speed={900}
      keyboard={{ enabled: true }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={!isMobile}
      pagination={isMobile ? { clickable: true } : false}
    >
      {gif?.map((item, key) => (
        <SwiperSlide key={key}>
          <div className="relative w-full">
            {/* Image */}
            <div className="aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9] relative">
              <Image
                src={item.image_url}
                alt="loading"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                 fill
                className="rounded-3xl object-cover"
              />
            </div>

            <div
              className="
              relative sm:absolute sm:bottom-6 sm:left-6 
              bg-black/50 rounded-xl p-4 sm:p-6 
              max-w-full sm:max-w-[600px] 
              text-start mt-3 sm:mt-0
            "
            >
              <span className="text-[10px] sm:text-xs rounded-full px-2 sm:px-3 py-1 bg-[#3E009EED] uppercase tracking-widest mb-2 block w-fit">
                Step 0{key + 1}
              </span>
              <p className="text-white text-lg sm:text-3xl font-medium mb-1 sm:mb-2">
                {item.title}
              </p>
              <p className="text-white text-xs sm:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

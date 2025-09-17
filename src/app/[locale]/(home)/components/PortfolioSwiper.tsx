"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import { portfolio } from "@/constant";
import LinkClient from "../../components/shared/LinkClient";
import { useTranslations } from "next-intl";

const PortfolioSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<any>(null);
  const delay = 4000;
  const t = useTranslations("Portfolio.slides");

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (delay / 100)));
    }, 100);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNavClick = (direction: "left" | "right") => {
    if (!swiperRef.current) return;
    direction === "right"
      ? swiperRef.current.slideNext()
      : swiperRef.current.slidePrev();
  };

  return (
    <div className="relative mb-4 md:mb-28 xl:mb-12">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        centeredSlides={false}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Keyboard, Autoplay]}
        className="mySwiper"
      >
        {portfolio?.map((port, i) => (
          <SwiperSlide
            key={i}
            className="relative border-white rounded-3xl overflow-hidden"
          >
            {/* progress bars */}
            <div className="absolute top-0 left-0 w-full flex gap-2 p-3 z-10">
              {portfolio?.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 flex-1 bg-white/40 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-white transition-all duration-100 linear"
                    style={{
                      width:
                        idx < activeIndex
                          ? "100%"
                          : idx === activeIndex
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* images */}
            <div className="w-full h-[80vh] md:h-[760px] relative">
              <Image
                src={port.imageUrl}
                alt=""
                height={890}
                width={1259}
                className="w-full h-[760px] rounded-3xl hidden md:block object-cover"
              />
              <Image
                src={port.mobileImageUrl}
                alt=""
                height={890}
                width={1259}
                className="w-full h-[80vh] rounded-3xl block md:hidden object-cover"
              />

              {/* navigation zones */}
              <div
                onClick={() => handleNavClick("left")}
                className="absolute top-0 left-0 h-full w-1/4 cursor-[url('/icons/left.svg'),_pointer] z-20"
              />
              <div
                onClick={() => handleNavClick("right")}
                className="absolute top-0 right-0 h-full w-1/4 cursor-[url('/icons/right.svg'),_pointer] z-20"
              />
              <LinkClient
                href="/portfolio"
                className="absolute top-0 left-1/4 h-full w-1/2 z-20"
              />
            </div>

            {/* gradient overlay */}
            <div
              className="absolute left-0 bottom-0 w-full h-1/2 rounded-b-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(180.52deg, rgba(0, 0, 0, 0) 0.45%, #210039 99.55%)",
              }}
            />

            {/* translated text */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-1 text-center px-2 z-30">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-white">
                {t(`${port.key}.title`)}
              </h2>
              <p className="text-xs sm:text-sm text-[#CFCFCF]">
                {t(`${port.key}.text`)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSwiper;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LinkClient from "../../components/shared/LinkClient";
import Image from "next/image";

export const ServiceSwiper = ({ services }: { services: any[] }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay, Keyboard]}
      className="mySwiper"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      speed={900}
      keyboard={{ enabled: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {services?.map((item, key) => (
        <SwiperSlide key={key}>
          <LinkClient
            href={item.link}
            key={key}
            className="flex flex-col justify-between items-center gap-4"
          >
            <Image
              src={item.imgUrl}
              alt={""}
              width={150}
              height={150}
              className={`h-[150px] w-[150px] object-cover rounded  `}
            />
            <p className="text-[16px] uppercase text-center">{item.title}</p>
          </LinkClient>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

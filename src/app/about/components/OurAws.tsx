"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingImage from "@/app/components/shared/loadingImage";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Keyboard,
  Navigation,
} from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomButton from "@/app/components/CustomButton";

const getDistance = (
  slideIndex: number,
  activeIndex: number,
  slidesLength: number
) => {
  let diff = Math.abs(slideIndex - activeIndex);
  if (diff > slidesLength / 2) {
    diff = slidesLength - diff;
  }
  return diff;
};

const getOpacityByDistance = (distance: number) => {
  if (distance === 0) return 1;
  if (distance === 1) return 0.7;
  return 0;
};

export default function OurAws({ allGallery }: any) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Only show first 6 items
  const slicedGallery = allGallery?.slice(0, 6) || [];
  const slidesLength = slicedGallery.length;

  return (
    <section className="main-padding">
      <div className="max-w-5xl mx-auto text-center mb-[60px] px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Our Awesome Portfolio
        </h2>
        <p className="text-lg md:text-xl text-[#E0E0E0] max-w-2xl mx-auto">
          A visual journey through the brands we’ve elevated and the stories
          we’ve brought to life.
        </p>
      </div>

      <div className="flex flex-col items-center w-full relative">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
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
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 400,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            renderBullet: (index, className) =>
              `<span class='${className} rounded-full mx-1 transition-all duration-300 bg-[#7B61FF] swiper-pagination-bullet-tailwind'></span>`,
          }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
            Keyboard,
            Navigation,
          ]}
          className="w-full max-w-6xl h-[48vw] max-h-[440px] min-h-[220px]"
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
        >
          {slicedGallery?.map((photos: { image_url: string }, index: number) => {
            const distance = getDistance(index, activeIndex, slidesLength);
            const opacity = getOpacityByDistance(distance);
            return (
              <SwiperSlide
                key={index}
                className="group flex justify-center items-center rounded-[30px] md:rounded-[30px] overflow-hidden transition-transform duration-300"
                style={{
                  width: "60vw",
                  maxWidth: 580,
                  height: 300,
                  minWidth: 240,
                  aspectRatio: "16/9",
                }}
              >
                <a
                  href="/portfolio"
                  className="w-full h-full flex items-center justify-center relative"
                  style={{ opacity }}
                >
                  <LoadingImage
                    src={photos?.image_url || "/portfolio/home/1.png"}
                    alt="loading"
                    className="object-cover w-full h-full md:rounded-[48px] group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom navigation and pagination below slider */}
        <div className="relative flex items-center justify-center w-full mt-10">
          <button className="custom-swiper-prev me-2 flex items-center justify-center rounded-full text-[#999999] transition-colors text-[22px] font-bold hover:text-[#9400FF] duration-300">
            <FaArrowLeft />
          </button>
          <span className="custom-swiper-pagination flex-wrap flex justify-center items-center gap-2 z-20 mt-0" />
          <button className="custom-swiper-next ms-2 flex items-center justify-center rounded-full text-[#999999] transition-colors text-[22px] font-bold hover:text-[#9400FF] duration-300">
            <FaArrowRight />
          </button>
        </div>

        <span className="ms-auto pr-[100px] sm:pr-[120px] mt-[45px]">
          <CustomButton link="/portfolio" text="Know More" />
        </span>
      </div>
    </section>
  );
}

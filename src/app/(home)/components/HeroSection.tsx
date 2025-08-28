import LinkClient from "@/app/components/shared/LinkClient";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[url(/bannerMob.jpg)] md:bg-[url(/banner.jpg)] h-[100vh] md:h-[120vh] bg-no-repeat bg-cover main-padding  ">
      <div className="hero-overlay" />

      <div className=" absolute max-w-[578px] flex flex-col gap-4 lg:gap-6 xl:gap-9 mt-40 md:mt-32 lg:mt-20 xl:mt-16   ">
        <h1 className="secondary-title">Launch your brand beyond limits</h1>
        <p className="main-text ">
          At FADAA, we craft digital marketing strategies, websites, and apps
          that take your business from ground level to orbit.
        </p>
        <LinkClient
          href={"/portfolio"}
          className="main-button w-fit px-6 py-4 "
        >
          Our Portfolio
        </LinkClient>
      </div>
    </section>
  );
};

export default HeroSection;

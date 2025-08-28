import React from "react";

const AboutHero = () => {
  return (
    <section className="x-padding lg:py-[150px] md:pt-[100px] sm:pt-[100px] sm:pb-[30px] pt-[80px] flex items-center justify-center w-full">
      <div className="text-center flex flex-col items-center lg:gap-2">
        <div className="text-white font-[400] text-3xl sm:text-4xl md:text-5xl lg:text-[96px] tracking-wide flex gap-3 items-center">
          <span className="col-6 lg:leading-[62.9px]">READY</span>
          {/* Arrow above TO TAKE YOUR */}
          <span className="relative flex  items-center mb-1">
            <span className=" bg-gradient-to-r w-[170px] from-[#400080] to-[#9400FF] sm:w-[180px] md:w-[200px] lg:w-full rounded-md flex py-1 px-2 items-center justify-center">
              <span>
                <img
                  src="/about/aboutHappy.png"
                  alt="h"
                  className="w-full h-auto"
                />
              </span>
            </span>
          </span>
        </div>
        {/* TO TAKE YOUR */}
        <span className=" capitalize text-[#9400FF] font-[700] lg:leading-[62.9px] text-3xl sm:text-4xl md:text-5xl lg:text-[96px]">
          TO TAKE YOUR
        </span>
        {/* MARKETING TRIP */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-white font-[400] text-2xl sm:text-3xl md:text-4xl lg:leading-[62.9px] lg:text-[96px]">
          <span className="flex items-center">
            <span>MARKETING</span>
            <span className="mx-2">
              <img
                src="/about/aboutAstro.png"
                alt="Astronaut"
                className="object-cover lg:w-full sm:w-[90px] md:w-[100px] w-[80px]"
              />
            </span>
            <span>TRIP</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

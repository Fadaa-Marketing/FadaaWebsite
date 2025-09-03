"use client";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import CustomButton from "../../components/CustomButton";

const Fadaa = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [300, 0]);

  return (
    <section
      ref={sectionRef}
      className="md:py-16 py-10  bg-primary flex  flex-col-reverse lg:flex-row lg:justify-between gap-8 lg:gap-12 xl:gap-16 items-center "
    >
      <div className="w-full lg:flex-1 order-2 lg:order-1">
        <div className="relative w-full   lg:max-w-[500px] mx-auto">
          <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[640px] w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[400px] mx-auto rounded-full overflow-hidden bg-gradient-to-br to-primary from-[#3a0064]">
            <motion.div
              style={{ opacity: isInView ? opacity : 0, y: isInView ? y : 1000 }}
              className="absolute top-2 sm:top-3 md:top-4 lg:top-5"
            >
              <Image
                src={`/astronaut.png`}
                alt={"astronaut"}
                width={416}
                height={638}
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[416px] h-auto transition-all duration-300"
              />
            </motion.div>
          </div>
          
          <Image 
            src={`/stars.svg`} 
            alt={"fadaa"} 
            width={100} 
            height={100} 
            className=" hidden lg:block  absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[100px] xl:h-[100px]" 
          />
        </div>
      </div>

      <div className="w-full lg:flex-1 order-1 lg:order-2 flex justify-center items-center px-4 lg:px-0  ">
        <div className="text-white text-center lg:text-left w-full max-w-[600px] lg:max-w-none lg:sticky lg:top-0 lg:h-screen flex justify-center items-center flex-col lg:mr-14 xl:mr-28">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <span className="main-title-paragraph block">About Fadaa</span>
            <h2 className="secondary-title w-full lg:w-full mb-4 sm:mb-6">Know Your Astronaut</h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="main-text text-[#F6F6F6] leading-relaxed">
                We are Fadaa Marketing Agency a team of strategists, designers, tech
                innovators, and digital explorers who believe in pushing boundaries.
                From digital campaigns to cutting-edge websites and apps, we turn
                ideas into impactful experiences.
              </p>
              <p className="main-text text-[#F6F6F6] leading-relaxed">
              We partner with ambitious brands to craft bold stories, build unforgettable identities, and engineer results-driven growth. Whether it’s launching a startup or scaling an enterprise, we blend creativity with data to spark engagement, drive performance, and shape the future of digital presence.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start pt-4 sm:pt-6">
              <CustomButton link="/about" text="Know More" />
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Fadaa;

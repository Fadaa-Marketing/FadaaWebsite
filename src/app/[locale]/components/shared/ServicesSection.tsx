import React from "react";
import { InfinitePlanets } from "@/components/ui/infinite-moving-cards";
import { getAllServices } from "@/lib/api";


const ServicesSection = async ({ classpt = "" }) => {
  
  const services = await getAllServices();
  
  
  const formattedServices = services?.map((service: any) => ({
    title: service?.title,
    imgUrl: service?.main_image_url,
    link: `/services/${service?.slug}`, 
  }));
  return (
    <div className={` ${classpt} overflow-hidden md:overflow-visible md:h-[850px] `}>
      <InfinitePlanets
        planets={formattedServices}
        speed={30}
        className=""
      />
    </div>
  );
};

export default ServicesSection;

import React from "react";
import type { Metadata } from "next";
import CustomHero from "../components/shared/CustomHero";
import ServicesSection from "../components/shared/ServicesSection";
import FormSection from "../components/shared/FormSection";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Services",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};
const page = async () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        
        <img
          src="/PlanetsBG.jpg"
          alt="Background"
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
        />
        <div className="relative z-10">
          <CustomHero
            title="Services"
            description="Services That Drive Your Brand Forward"
            clssremover=""
          />
          <ServicesSection classpt="y-padding" />
        </div>
      </div>

      <FormSection firstClass="bg-transparent" secondClass="xl:pt-[40px] lg:pt-[40px]" />
    </div>
  );
};

export default page;

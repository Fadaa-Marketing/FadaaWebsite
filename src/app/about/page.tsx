import React from "react";
import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import AboutCompanySection from "./components/AboutCompanySection";
import AboutFamily from "./components/AboutFamily";
import WhyUs from "./components/WhyUs";
import OurAws from "./components/OurAws";
import FormSection from "../components/shared/FormSection";
export const metadata: Metadata = {
  title: "Fadaa Marketing | About Us",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};

import { getAboutData, getAboutWhyUs, getAllGallery } from "@/lib/api";
import ServicesNew from "../components/shared/ServicesNew";
export default async function Page() {
  const aboutData = await getAboutData();
  const aboutWhy = await getAboutWhyUs();
  const allGallery = await getAllGallery();
  return (
    <>
      <div className="bg-primary">
        <h1 className="hidden">About Us</h1>
        <div className="sec-porto">
          <AboutHero />
          <div className="bg-[url('/about/leftCenter.png')] bg-no-repeat bg-bottom-left">
            <AboutCompanySection aboutData={aboutData} />
            <AboutFamily aboutData={aboutData} />
          </div>
          <div className="bg-[url('/about/rightTop.png')] bg-no-repeat bg-right">
            <WhyUs aboutWhy={aboutWhy} />
            <OurAws allGallery={allGallery} />
          </div>
          <div className="bg-[url('/about/leftTop.png')] bg-no-repeat bg-top-left">
            <ServicesNew classpt="lg:pt-0 lg:pb-[60px]" />
          </div>
          <FormSection />
        </div>
      </div>
    </>
  );
}

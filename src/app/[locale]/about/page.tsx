import React from "react";
import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import AboutCompanySection from "./components/AboutCompanySection";
import AboutFamily from "./components/AboutFamily";
import WhyUs from "./components/WhyUs";
import OurAws from "./components/OurAws";
import FormSection from "../components/shared/FormSection";
import { getAboutData, getAboutWhyUs, getAllGallery } from "@/lib/api";
import ServicesNew from "../components/shared/ServicesNew";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Fadaa Marketing | About Us",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};
interface PropPage {
  params: {
    locale: string;
  };
}
export default async function Page({ params }: PropPage) {
  const aboutData = await getAboutData();
  const aboutWhy = await getAboutWhyUs();
  const allGallery = await getAllGallery();
  const t = await getTranslations("AboutPage");
  const { locale } = await params;
  return (
    <>
      <div className="bg-primary">
        <h1 className="hidden">{t("title")}</h1>
        <div className="sec-porto">
          <AboutHero locale={locale} />
          <div className="bg-[url('/about/leftCenter.png')] bg-no-repeat bg-bottom-left">
            <AboutCompanySection locale={locale} aboutData={aboutData} />
            <AboutFamily locale={locale} aboutData={aboutData} />
          </div>
          <div className="bg-[url('/about/rightTop.png')] bg-no-repeat bg-right">
            <WhyUs locale={locale} aboutWhy={aboutWhy} />
            <OurAws allGallery={allGallery} />
          </div>
          <div className="bg-[url('/about/leftTop.png')] bg-no-repeat bg-top-left">
            <ServicesNew locale={locale} classpt="lg:pt-0 lg:pb-[60px]" />
          </div>
          <FormSection locale={locale} />
        </div>
      </div>
    </>
  );
}

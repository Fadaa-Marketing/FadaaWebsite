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

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page() {
  const aboutData = await getAboutData();
  const aboutWhy = await getAboutWhyUs();
  const allGallery = await getAllGallery();
  const t = await getTranslations("AboutPage");

  return (
    <>
      <div className="bg-primary">
        <h1 className="hidden">{t("title")}</h1>
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

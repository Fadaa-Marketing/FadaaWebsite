import React from "react";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";
import Opportunities from "./components/opportunity/Opportunities";
import Socials from "./components/Socials";
import { getJobsCategory, getSocialImages, getContactData } from "@/lib/api";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("JobsPage.Meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}
interface PropPage{
  params:{
    locale:string
  }
}
const Page = async ({params}:PropPage) => {
  const jobsCategory = await getJobsCategory();
  const socialImages = await getSocialImages();
  const socialLinks = await getContactData();
  const socialData = socialLinks?.social_links;
const {locale} = await params
  return (
    <div className="bg-primary">
      <HeroSection />
      <Team />
      <Opportunities locale={locale} jobsCategory={jobsCategory} />
      <Socials socialData={socialData} socialImages={socialImages} />
    </div>
  );
};

export default Page;

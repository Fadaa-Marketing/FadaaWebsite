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

const Page = async () => {
  const jobsCategory = await getJobsCategory();
  const socialImages = await getSocialImages();
  const socialLinks = await getContactData();
  const socialData = socialLinks?.social_links;

  return (
    <div className="bg-primary">
      <HeroSection />
      <Team />
      <Opportunities jobsCategory={jobsCategory} />
      <Socials socialData={socialData} socialImages={socialImages} />
    </div>
  );
};

export default Page;

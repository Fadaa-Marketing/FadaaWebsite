import React from "react";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";
import Opportunities from "./components/opportunity/Opportunities";
import Socials from "./components/Socials";
import { getJobsCategory, getSocialImages, getContactData } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Jobs",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};
interface PropPage {
  params: { locale: string };
}
const page = async ({ params }: PropPage) => {
  const { locale } = await params;
  const jobsCategory = await getJobsCategory();
  const socialImages = await getSocialImages();
  const concat = await getContactData();
  const socialLinks = locale === "ar" ? concat?.ar : concat?.en;
  const socialData = socialLinks?.social_links;
  return (
    <div className="bg-primary">
      <HeroSection />
      <Team />
      <Opportunities locale={locale} jobsCategory={jobsCategory} />
      <Socials socialData={socialData} socialImages={socialImages} />
    </div>
  );
};

export default page;

import React from "react";
import Filters from "./components/Filters";
import { getAllBlogs } from "@/lib/api";
import { BlogPost } from "@/types";
import BlogsHero from "./components/BlogsHero";
import FormSection from "../components/shared/FormSection";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("BlogsHero");
  return {
    title: t("title"),
    description: t("description"),
  };
}
type PageProps = {
  params: {
    locale: string;
  };
};
const Page = async ({params}:PageProps) => {
  const blogs: BlogPost[] = await getAllBlogs();
  const { locale } = await params 
  return (
    <div className="bg-primary relative first-porto">
      <BlogsHero />
      <Filters blogs={blogs} locale={locale} />
      <FormSection locale={locale}/>
    </div>
  );
};

export default Page;

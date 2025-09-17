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

const Page = async () => {
  const blogs: BlogPost[] = await getAllBlogs();

  return (
    <div className="bg-primary relative first-porto">
      <BlogsHero />
      <Filters blogs={blogs} />
      <FormSection />
    </div>
  );
};

export default Page;

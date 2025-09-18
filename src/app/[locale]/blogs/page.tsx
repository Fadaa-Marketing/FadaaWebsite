import React from "react";
import Filters from "./components/Filters";
import { getAllBlogs } from "@/lib/api";
import { BlogPost } from "@/types";
import BlogsHero from "./components/BlogsHero";
import FormSection from "../components/shared/FormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Blogs",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};

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

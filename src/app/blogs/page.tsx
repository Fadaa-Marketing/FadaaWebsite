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

const page = async () => {
  const blogs: BlogPost[] = await getAllBlogs();
  return (
    <div className=" bg-primary relative first-porto ">
      <BlogsHero />
      <Filters blogs={blogs} />
      <FormSection />
    </div>
  );
};

export default page;

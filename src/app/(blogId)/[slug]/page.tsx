import { getSingleBlog } from "@/lib/api";
import { Metadata } from "next";
import React from "react";
import LeftSide from "../components/LeftSide";
import Article from "../components/Article";
import { notFound } from "next/navigation";
import BlogHero from "@/app/components/shared/BlogHero";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = await getSingleBlog(slug);
    if (!blog) {
      notFound();
    }
    return {
      title: `Fadaa Marketing | ${blog.title}`,
      description: blog.meta_description || "Default SEO description...",
      keywords: blog.meta_keywords ? blog.meta_keywords.split(",") : [],
    };
  } catch (error: any) {
    if (error?.response?.status === 404) {
      notFound();
    }
    throw error;
  }
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  try {
    const blog = await getSingleBlog(slug);
    if (!blog) {
      notFound();
    }
    return (
      <div className="bg-primary first-porto sec-porto ">
        <BlogHero title="blogs" description={blog.title} />
        <div className="px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 xl:px-[120px] ">
          <div className="flex flex-col-reverse xl:flex-row  items-start  gap-8  ">
            <LeftSide />
            <Article blog={blog} />
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    if (error?.response?.status === 404) {
      notFound(); 
    }
    throw error;
  }
};

export default page;

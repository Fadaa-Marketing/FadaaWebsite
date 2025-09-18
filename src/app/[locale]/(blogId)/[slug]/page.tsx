import { getSingleBlog } from "@/lib/api";
import { Metadata } from "next";
import React from "react";
import LeftSide from "../components/LeftSide";
import Article from "../components/Article";
import { notFound } from "next/navigation";
import BlogHero from "../../components/shared/BlogHero";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: {
    slug: string;
    locale: string;
  };
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

// Blog page component
const BlogPage = async ({ params }: PageProps) => {
  const { slug, locale } = params;

  try {
    const t = await getTranslations("blogs");
    const blog = await getSingleBlog(slug);
    if (!blog) notFound();

    return (
      <div className="bg-primary first-porto sec-porto">
        <BlogHero
          title={t("blogs")}
          description={locale === "ar" ? blog.title_ar : blog.title}
        />
        <div className="px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 xl:px-[120px]">
          <div className="flex flex-col-reverse xl:flex-row items-start gap-8">
            <LeftSide locale={locale}/>
            <Article blog={blog} locale={locale}/>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    if (error?.response?.status === 404) notFound();
    throw error;
  }
};

export default BlogPage;

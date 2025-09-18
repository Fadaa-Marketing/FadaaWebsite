import { getSingleService } from "@/lib/api";
import React from "react";
import SharedService from "../components/SharedService";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = await getSingleService(slug);

    if (!service) {
      notFound();
    }
    return {
      title: `Fadaa Marketing | ${service?.title}`,
      description: service?.meta_description || "Services",
      keywords: service?.meta_keywords ? service.meta_keywords.split(",") : [],
    };
  } catch (error: any) {
    if (error?.response?.status === 404) {
      notFound();
    }
    throw error;
  }
}

type PageProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { slug, locale } = await params;
  try {
    const service = await getSingleService(slug);
    const title = locale === "ar" ? service?.title_ar : service?.title;
    const summary = locale === "ar" ? service?.summary_ar : service.summary;
    const text = locale === "ar" ? service?.content_ar : service?.content;
    return (
      <SharedService
        gif={service?.gifs}
        title={title}
        description={summary}
        imgUrl={service?.featured_image_url}
        text={text}
        trik={service?.triks}
        locale={locale}
      />
    );
  } catch (error: any) {
    if (error?.response?.status === 404) {
      notFound();
    }
    throw error;
  }
};

export default page;

import { InfiniteMovingCards } from "@/components/ui/infinite-moving";
import { getAllServices } from "@/lib/api";
import React from "react";

const ServicesNew = async ({
  locale,
  classpt = "",
}: {
  locale: string;
  classpt?: string;
}) => {
  const services = await getAllServices();

  const formattedServices = services?.map((service: any) => ({
    title: locale === "ar" ? service?.title_ar : service?.title,
    imgUrl: service?.main_image_url,
    link: `/services/${service?.slug}`,
  }));
  return (
    <div dir="ltr" className={` ${classpt} `}>
      <InfiniteMovingCards
        planets={formattedServices}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default ServicesNew;

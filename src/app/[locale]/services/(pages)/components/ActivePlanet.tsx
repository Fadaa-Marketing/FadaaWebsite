"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { beforeNavigate } from "../../../utils/navigation";
type FormattedService = {
  title: string;
  imgUrl: string;
  link: string;
};

const ActivePlanet = ({ services ,locale}: { services: any; locale:string }) => {
  const pathname = usePathname();

  const formattedServices: FormattedService[] = services?.map(
    (service: any) => ({
      title: locale === "ar" ? service?.title_ar : service?.title,
      imgUrl: service?.main_image_url,
      link: `/services/${service?.slug}`,
    })
  );

  return (
    <div className=" pb-10 pt-20 xl:py-20 x-padding flex flex-row overflow-x-auto lg:grid lg:grid-cols-8 gap-4 hide-scrollbar">
      {formattedServices?.map((item, key) => {
        const isActive = pathname === item.link;

        return (
          <Link
            href={item.link}
            key={key}
            className="flex flex-col justify-between items-center gap-4 flex-shrink-0"
            onClick={() => beforeNavigate()}
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={150}
              height={150}
              className={`h-[70px] w-[70px] lg:h-auto lg:w-full object-cover rounded transition-opacity  hover:opacity-100 duration-300 ${
                isActive ? "opacity-100" : "opacity-30"
              }  `}
            />
            <p className="text-xs lg:text-base uppercase text-center">
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ActivePlanet;

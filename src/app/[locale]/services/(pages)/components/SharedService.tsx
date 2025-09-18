import React from "react";
import ActivePlanet from "./ActivePlanet";
import ServiceHero from "./ServiceHero";
import Image from "next/image";
import PortfolioTitle from "./PortfolioTitle";
import PortfolioComponent from "./PortfolioCompnent";
import FormSection from "../../../components/shared/FormSection";
import GifSection from "./GifSection";
import ClientsLogo from "../../../components/shared/ClintsLogo";
import { getAllServices } from "@/lib/api";
import DOMPurify from "isomorphic-dompurify";
import ClientOnlyHTML from "./ClientOnlyHTML";
import { Gif, Trik } from "@/types";
import { getTranslations } from "next-intl/server";

const SharedService = async ({
  title,
  description,
  imgUrl,
  text,
  gif,
  trik,
  locale,
}: {
  title: string;
  description: string;
  imgUrl: string;
  text: string;
  gif: Gif[];
  trik: Trik[];
  locale: string;
}) => {
  const services = await getAllServices();
  const cleanHtml = DOMPurify.sanitize(text || "");

  // Load translations for static texts
  const t = await getTranslations("servicesPage.sharedService");

  return (
    <div className="bg-primary overflow-hidden first-porto">
      <ServiceHero title={title} description={description} />

      <div className="x-padding">
        <div className="aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9] relative mb-10">
          <Image
            src={imgUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover rounded-3xl"
          />
        </div>
        <ClientOnlyHTML html={cleanHtml} />
      </div>

      <ActivePlanet locale={locale} services={services} />

      <div className="py-10 flex flex-col justify-center items-center">
        <p className="x-padding secondary-title text-center md:text-left capitalize my-10">
          {t("brandsWorkedWith")}
        </p>
        <ClientsLogo />
      </div>

      <GifSection locale={locale} gif={gif} />

      <section className="main-padding">
        <PortfolioTitle />
        <PortfolioComponent trik={trik} title={title} />
      </section>

      <FormSection locale={locale}/>
    </div>
  );
};

export default SharedService;

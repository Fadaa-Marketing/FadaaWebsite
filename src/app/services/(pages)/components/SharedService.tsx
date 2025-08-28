import React from "react";
import ActivePlanet from "./ActivePlanet";
import ServiceHero from "./ServiceHero";
import Image from "next/image";
import PortfolioTitle from "./PortfolioTitle";
import PortfolioComponent from "./PortfolioCompnent";
import FormSection from "@/app/components/shared/FormSection";
import GifSection from "./GifSection";
import { Gif, Trik } from "@/types";
import ClientsLogo from "@/app/components/shared/ClintsLogo";
import { getAllServices } from "@/lib/api";
import DOMPurify from "isomorphic-dompurify";
import ClientOnlyHTML from "./ClientOnlyHTML";
const SharedService = async ({
  title,
  description,
  imgUrl,
  text,
  gif,
  trik,
}: {
  title: string;
  description: string;
  imgUrl: string;
  text: string;
  gif: Gif[];
  trik: Trik[];
}) => {
  const services = await getAllServices();
  const cleanHtml1 = DOMPurify.sanitize(text || "");
  return (
    <div className="bg-primary overflow-hidden first-porto">
      <ServiceHero title={title} description={description} />
      <div className="x-padding">
        <div className=" aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9] relative mb-10  ">
          <Image
            src={imgUrl}
            alt="web"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className=" object-cover rounded-3xl "
          />
        </div>
        <ClientOnlyHTML html={cleanHtml1} />


      </div>
      <ActivePlanet services={services} />
      <div className="py-10 flex flex-col justify-center items-center ">
        <h2 className="x-padding secondary-title text-center md:text-left capitalize my-10">
          Brands we have worked with
        </h2>
        <ClientsLogo />
      </div>
      <GifSection gif={gif} />
      <section className="main-padding">
        <PortfolioTitle />
        <PortfolioComponent trik={trik} title={title} />
      </section>

      <FormSection />
    </div>
  );
};

export default SharedService;

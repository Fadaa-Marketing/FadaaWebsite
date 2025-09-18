"use client";

import { useEffect, useState } from "react";
import { getPortoData } from "@/lib/api";

import Branding from "./Branding";
import PortoSEO from "./PortoSEO";

import PortoReels from "./PortoReels";
import MediaProduction from "./MediaProduction";
import PortoWeb from "./PortoWeb";
import MobileApp from "./MobileApp";
import MediaBuying from "./MediaBuying";
import AllImages from "./AllImages";
import PortoSocialdd from "./PortoSocialdd";
import LoadingImage from "../../components/shared/loadingImage";
import { useTranslations } from "next-intl";

const DefaultGrid = ({ data }: { data: any[] }) => (
  <div className="pt-[50px] pb-[80px] x-padding mx-auto">
    <div className="grid grid-cols-12 gap-4">
      {data?.map((item) => {
        const isLink = item.url && item.url.trim() !== "";
        const Wrapper = isLink ? "a" : "div";
        const wrapperProps = isLink
          ? { href: item.url!, target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <Wrapper
            key={item.id}
            {...wrapperProps}
            className="relative group w-full rounded-[20px] overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <LoadingImage
              src={item.image_url}
              alt="Portfolio"
              className="object-cover w-full h-[600px] rounded-[20px] transition-transform duration-300 group-hover:scale-105"
            />
            {item.title && item.title !== "null" && (
              <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                <div className="bg-black/60 text-white py-2 px-4 rounded-t-lg text-center xl:text-[20px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] uppercase font-[500] w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </div>
              </div>
            )}
          </Wrapper>
        );
      })}
    </div>
  </div>
);
const Category = ({ portoCategory, locale }: any) => {
  const [active, setActive] = useState<string>("");
  const [portoData, setPortoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null); // Add this line

  const normalizeCategoryName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "");
  };

  useEffect(() => {
    if (portoCategory.length > 0) {
      const firstCategory = portoCategory[0];
      setActive(normalizeCategoryName(firstCategory.name));
      setActiveCategoryId(firstCategory.id); // Add this line
      fetchData(firstCategory.id);
    }
  }, [portoCategory]);

  const fetchData = async (id: number | null) => {
    setLoading(true);
    try {
      const data = await getPortoData(id ?? 0);
      setPortoData(data);
    } catch (error) {
      setPortoData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async (categoryId: number, categoryName: string) => {
    const normalizedName = normalizeCategoryName(categoryName);
    setActive(normalizedName);
    setActiveCategoryId(categoryId);
    await fetchData(categoryId);
  };
  const t = useTranslations("category");
  return (
    <>
      <div className="flex flex-wrap px-4 mx-auto gap-3 justify-center items-center">
        {portoCategory?.map((cat: any, index: any) => (
          <div
            key={index}
            onClick={() => handleClick(cat.id, cat.name)}
            className={`hover:bg-[#9400FF] uppercase hover:text-white xl:text-[20px] text-[15px] font-[500] cursor-pointer px-4 py-1 rounded-md transition-colors duration-200 ${
              active === normalizeCategoryName(cat.name)
                ? "bg-[#9400FF] text-white"
                : "bg-[#F0F0F0] text-primary"
            }`}
          >
            {locale === "ar" ? cat?.name_ar : cat?.name}
          </div>
        ))}
      </div>

      <div className="">
        {loading ? (
          <div className="text-center py-10 text-xl font-medium">
            <span className="text-center text-[18px] md:text-[24px] px-2 text-white">
              {t("loading")}
              <span className="space-x-1 mx-1">
                <span className="wave-dot">.</span>
                <span className="wave-dot delay-1">.</span>
                <span className="wave-dot delay-2">.</span>
              </span>
            </span>
          </div>
        ) : active === "all" ? (
          activeCategoryId !== null ? (
            <AllImages categoryId={activeCategoryId} />
          ) : null
        ) : active === "seo" ? (
          <PortoSEO data={portoData} />
        ) : active === "socialmedia" ? (
          <PortoSocialdd data={portoData} />
        ) : active === "branding" ? (
          <Branding data={portoData} />
        ) : active === "reels" ? (
          <PortoReels data={portoData} />
        ) : active === "mediaproduction" ? (
          <MediaProduction data={portoData} />
        ) : active === "website" ? (
          <PortoWeb data={portoData} />
        ) : active === "mobileapp" ? (
          <MobileApp data={portoData} />
        ) : active === "mediabuying" ? (
          activeCategoryId !== null ? (
            <MediaBuying categoryId={activeCategoryId} />
          ) : null
        ) : (
          <DefaultGrid data={portoData} />
        )}
      </div>
    </>
  );
};

export default Category;

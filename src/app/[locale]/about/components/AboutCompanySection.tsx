"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";

export default function AboutCompanySection({ aboutData, locale }: any) {
  const t = useTranslations("AboutCompanySection");
  const [open, setOpen] = useState<number | null>(null);
  const cleanHtml1 = DOMPurify.sanitize(
    locale === "ar" ? aboutData[0]?.content_ar : aboutData[0]?.content
  );

  const handleToggle = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <section className="main-padding lg:py-0 grid grid-cols-1 lg:grid-cols-12 items-start justify-center gap-10">
      {/* Left: About Text */}
      <div
        className={`lg:col-span-7 flex-1 ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div className="flex flex-col justify-center items-center md:justify-start md:flex-row gap-4 mb-6">
          <span className="bg-[#FFFFFF1A] w-fit text-white text-center text-[12px] font-[500] md:px-[22px] px-[18px] py-[8px] md:py-[10px] rounded-full ">
            {t("whoWeAre")}
          </span>
          <p className="text-white text-[20px] sm:text-[30px] md:text-[40px] font-[400] ">
            {locale === "ar"
              ? aboutData[0]?.title_ar
              : aboutData[0]?.title || t("aboutOurCompany")}
          </p>
        </div>
        <div className="text-[18px] md:text-[20px] font-[500] text-white space-y-2">
          <p dangerouslySetInnerHTML={{ __html: cleanHtml1 }} />
        </div>
      </div>

      {/* Right: Accordion */}
      <div className="lg:col-span-5 flex-1 w-full lg:ms-auto lg:max-w-xl flex flex-col gap-4">
        {aboutData?.slice(2)?.map((item: any, idx: number) => {
          const cleanContent = DOMPurify.sanitize(
            locale === "ar" ? item.content_ar : item.content || ""
          );
          return (
            <div
              key={item.id}
              className="bg-[#FFFFFF1A] rounded-2xl text-white transition-all duration-300 shadow-md"
            >
              <button
                className={`w-full flex items-center justify-between px-6 text-left focus:outline-none rounded-2xl transition-colors duration-200 ${
                  open === item?.id ? "pt-5" : "py-5"
                }`}
                onClick={() => handleToggle(item?.id)}
                aria-expanded={open === item?.id}
                aria-controls={`accordion-content-${item?.id}`}
              >
                <span className="flex items-center gap-3 text-lg capitalize md:text-[18px] font-[400]">
                  <span className="text-white font-[400] mr-2">
                    {String(idx + 1).padStart(2, "0") + "."}
                  </span>
                  {locale === "ar" ? item?.title_ar : item?.title}
                </span>
                <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFFFFF26] transition-colors duration-200">
                  {open === item?.id ? (
                    <Minus className="w-5 h-5 text-white transition-transform duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 text-white transition-transform duration-200" />
                  )}
                </span>
              </button>
              <div
                id={`accordion-content-${item?.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === item?.id
                    ? "max-h-30 opacity-100 pt-5"
                    : "max-h-0 opacity-0 pt-0"
                }`}
              >
                <p
                  className="font-[400] px-6 pb-5 md:text-[16px] text-white/80"
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import FormSection from "../components/shared/FormSection";
import CustomHero from "../components/shared/CustomHero";
import ContactSmallTxt from "./components/ContactSmallTxt";
import { getContactData } from "@/lib/api";
import ContactMap from "./components/ContactMap";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { URLSearchParams } from "node:url";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Contact Us",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};
interface PropPage{
  params: {
    locale: string;
  };
}
const page = async ({params}:PropPage) => {
  const t = await getTranslations("ContactPage");
  const contactData = await getContactData();
  const {locale} = await params
  return (
    <div className="bg-primary">
      <div className="sec-porto mx-auto">
        <CustomHero
          title={contactData?.contact_title || t("title")}
          description={t("description")}
        />
        <div className="leftOP">
          <FormSection locale={locale} firstClass="" secondClass="" />
          <ContactSmallTxt />
          <ContactMap
            latitude={contactData.latitude}
            longitude={contactData.longitude}
            zoom={contactData.map_zoom}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

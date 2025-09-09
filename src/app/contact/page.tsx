import React from "react";
import FormSection from "../components/shared/FormSection";
import CustomHero from "../components/shared/CustomHero";
import ContactSmallTxt from "./components/ContactSmallTxt";
import { getContactData } from "@/lib/api";
import ContactMap from "./components/ContactMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Contact Us",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};


const page = async () => {
  const contactData = await getContactData();
  return (
    <div className="bg-primary">
      <div className="sec-porto mx-auto">
        <CustomHero
          title={contactData?.contact_title || "Contact Us"}
          description={
           "Contact Fadaa Marketing — Let’s Start Your Digital Journey"
          }
        />
        <div className="leftOP">
          <FormSection firstClass="" secondClass="" />
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

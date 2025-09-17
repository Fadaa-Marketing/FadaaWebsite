"use client";

import Image from "next/image";
import React from "react";
import LinkClient from "./components/shared/LinkClient";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations("notFound"); // Namespace in your JSON file

  return (
    <div className="max-w-screen">
      <div className="bg-primary relative">
        <div className="h-screen flex flex-col items-center justify-center px-8">
          <Image
            src="/notFound.svg"
            alt={t("altText")} // Optional translation for alt
            width={637}
            height={435}
            className="mb-9"
          />
          <LinkClient href="/" className="main-button px-3">
            {t("backToHome")}
          </LinkClient>
        </div>
        <div className="bg-primary -z-50 h-full w-full"></div>
      </div>
    </div>
  );
};

NotFound.displayName = "NotFound";

export default NotFound;

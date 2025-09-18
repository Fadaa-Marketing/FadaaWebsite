import LinkClient from "../../components/shared/LinkClient";
import React from "react";
import { getTranslations } from "next-intl/server";

const HeroSection = async ({ locale }: { locale: string }) => {
  const t = await getTranslations("home.hero");
  return (
    <section
      dir="ltr"
      className="bg-[url(/bannerMob.jpg)] md:bg-[url(/banner.jpg)] h-[100vh] md:h-[120vh] bg-no-repeat bg-cover main-padding  "
    >
      <div className="hero-overlay" />

      <div
        className={`absolute max-w-[578px] flex flex-col gap-4 lg:gap-6 xl:gap-9 mt-40 md:mt-32 lg:mt-20 xl:mt-16 ${
          locale === "ar" ? "text-right md:pr-4" : "text-left"
        }`}
      >
        <h1 className="secondary-title">{t("title")}</h1>
        <p className="main-text ">{t("subtitle")}</p>
        <LinkClient
          href={"/portfolio"}
          className="main-button w-fit px-6 py-4 "
        >
          {t("button")}
        </LinkClient>
      </div>
    </section>
  );
};

export default HeroSection;

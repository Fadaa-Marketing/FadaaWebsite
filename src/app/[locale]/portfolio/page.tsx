import CustomHero from "../components/shared/CustomHero";
import FormSection from "../components/shared/FormSection";
import Category from "./component/Category";
import { getPortoCat } from "@/lib/api";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("portfolio.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
};

const Portfolio = async () => {
  const t = await getTranslations("portfolio.hero");
  const portoCategory = await getPortoCat();

  return (
    <div className="pg-primary first-porto">
      <div className="sec-porto mx-auto">
        <div className="pb-[50px]">
          <CustomHero
            title={t("title")}
            description={t("description")}
          />
        </div>
        <Category portoCategory={portoCategory} />
        <FormSection />
      </div>
    </div>
  );
};

export default Portfolio;

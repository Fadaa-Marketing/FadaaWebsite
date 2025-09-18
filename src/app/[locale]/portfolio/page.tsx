import CustomHero from "../components/shared/CustomHero";
import FormSection from "../components/shared/FormSection";
import Category from "./component/Category";
import { getPortoCat } from "@/lib/api";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export const metadata: Metadata = {
  title: "Fadaa Marketing | Portfolio",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};
interface PropPage {
  params: {
    locale: string;
  };
}
const Portfolio = async ({ params }: PropPage) => {
  const t = await getTranslations("portfolio.hero");
  const portoCategory = await getPortoCat();
  const { locale } = await params;
  return (
    <div className="pg-primary first-porto">
      <div className="sec-porto mx-auto">
        <div className="pb-[50px]">
          <CustomHero title={t("title")} description={t("description")} />
        </div>
        <Category locale={locale} portoCategory={portoCategory} />
        <FormSection locale={locale} />
      </div>
    </div>
  );
};

export default Portfolio;

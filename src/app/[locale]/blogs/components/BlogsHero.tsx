import CustomHero from "../../components/shared/CustomHero";
import React from "react";
import { getTranslations } from "next-intl/server";

const BlogsHero = async () => {
  const t = await getTranslations("BlogsHero");

  return (
    <CustomHero 
      title={t("title")} 
      description={t("description")} 
    />
  );
};

export default BlogsHero;

import { getTranslations } from "next-intl/server";
import React from "react";

const ContactSmallTxt = async () => {
  const t = await getTranslations("ContactPage")
  return (
    <div>
      <div className="x-padding xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-[500] capitalize pb-[40px]">
        {t("FindUs")} <span className="text-secondary">{t("Here")}</span>
      </div>
    </div>
  );
};

export default ContactSmallTxt;

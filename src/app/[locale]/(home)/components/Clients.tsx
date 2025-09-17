import ClientsLogo from "../../components/shared/ClintsLogo";
import React from "react";
import SectionTitle from "./SectionTitle";
import { getTranslations } from "next-intl/server";

const Clients = async () => {
  const t = await getTranslations("Clients"); 

  return (
    <section className="main-padding flex flex-col justify-center relative items-center bg-primary sec-porto">
      <SectionTitle title={t("title")} text={t("subtitle")} />
      <ClientsLogo />
    </section>
  );
};

export default Clients;

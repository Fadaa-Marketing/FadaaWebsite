import React from "react";
import Sidebar from "./Sidebar";
import ApplyForm from "./ApplyForm";
import { getSelectedJob } from "@/lib/api";
import { JobItem } from "@/types/index";
import { getTranslations } from "next-intl/server";

const Opportunities = async ({ jobsCategory ,locale}: any) => {
  const t = await getTranslations("JobsPage.Opportunities");
  const { success, data } = await getSelectedJob();
  const selectJob: JobItem[] = success && Array.isArray(data) ? data : [];

  return (
    <div className="main-padding" id="opportunity">
      <div className="flex flex-col gap-6 justify-center text-center">
        <h2 className="secondary-title">{t("title")}</h2>
        <p className="main-text">{t("description")}</p>
      </div>
      <div className="my-14">
        <Sidebar jobsCategory={jobsCategory} />
      </div>
      <ApplyForm selectJob={selectJob} />
    </div>
  );
};

export default Opportunities;

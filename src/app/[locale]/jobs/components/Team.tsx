import { team } from "@/constant";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";

const Team = async () => {
  const t = await getTranslations("JobsPage.Team");
  const members = t.raw("members") as { title: string; text: string }[];
  return (
    <section className="x-padding">
      <div className="flex flex-col gap-6 justify-center text-center">
        <h2 className="secondary-title">{t("title")}</h2>
        <p className="main-text">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 py-10">
        {members.map((member, key) => (
          <div key={key} className="relative">
            <Image
              src={team[key].imageUrl}
              alt={member.title}
              width={409}
              height={280}
              className="rounded-3xl h-[280px] w-full object-cover border"
            />
            <div
              className="absolute left-0 bottom-0 w-full h-1/2 rounded-b-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(180.52deg, rgba(0, 0, 0, 0) 0.45%, #210039 99.55%)",
              }}
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col text-center">
              <h2 className="text-xl font-medium">{member.title}</h2>
              <p className="text-sm text-[#CFCFCF]">{member.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <Image
          src={"/jobs/team/3.jpeg"}
          alt=""
          width={409}
          height={400}
          className="rounded-3xl h-[400px] w-full object-cover border"
        />
        <div
          className="absolute left-0 bottom-0 w-full h-1/2 rounded-b-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(180.52deg, rgba(0, 0, 0, 0) 0.45%, #210039 99.55%)",
          }}
        />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col text-center">
          <h2 className="text-xl font-medium">{t("familyTitle")}</h2>
          <p className="text-sm text-[#CFCFCF]">{t("familyDescription")}</p>
        </div>
      </div>
    </section>
  );
};

export default Team;

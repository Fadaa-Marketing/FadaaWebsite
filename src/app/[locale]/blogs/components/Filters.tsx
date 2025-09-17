'use client';
import { blogCategory } from "@/constant";
import React, { useState } from "react";
import Cards from "./Cards";
import { BlogPost } from "@/types";
import { useTranslations } from "next-intl";

interface FiltersProps {
  blogs: BlogPost[];
}

// Map UI labels to stable keys by lowercasing and trimming
const CATEGORY_KEYS = blogCategory.map((c) => c.toLowerCase().trim());

const Filters = ({ blogs }: FiltersProps) => {
  const [catKey, setCatKey] = useState<string>("all");
  const t = useTranslations("BlogsPage.Filters");

  const filteredBlogs =
    catKey === "all"
      ? blogs
      : blogs?.filter(
          (blog) => blog?.bcategory?.name?.toLowerCase().trim() === catKey
        );

  return (
    <div className="main-padding">
      {/* Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-24 w-full">
        {/* Title & Description */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <h2 className="secondary-title">{t("title")}</h2>
          <p className="main-text text-[15px] sm:text-[16px]">{t("description")}</p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full md:w-2/3 flex flex-wrap gap-4 sm:gap-5 items-start md:items-center justify-start md:justify-end">
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setCatKey(key)}
              className={`py-[10px] px-5 sm:px-6 text-sm sm:text-base font-semibold rounded-lg uppercase transition-all duration-150 hover:bg-secondary hover:text-white ${
                catKey === key ? "bg-secondary text-white" : "bg-white text-primary"
              }`}
            >
              {t(`categories.${key}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mt-10 min-h-screen">
        <Cards blogs={filteredBlogs} />
      </div>
    </div>
  );
};

export default Filters;

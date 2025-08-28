'use client';
import { blogCategory } from "@/constant";
import React, { useState } from "react";
import Cards from "./Cards";
import { BlogPost } from "@/types";

interface FiltersProps {
  blogs: BlogPost[];
}

const Filters = ({ blogs }: FiltersProps) => {
  const [cat, setCat] = useState("All");

  const filteredBlogs =
    cat === "All" ? blogs : blogs?.filter((blog) => blog?.bcategory?.name === cat);

  return (
    <div className="main-padding">
      {/* Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-24 w-full">
        {/* Title & Description */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <h2 className="secondary-title">All Blogs</h2>
          <p className="main-text text-[15px] sm:text-[16px]">
            Stay inspired and informed with our latest articles. From digital
            trends to campaign case studies, we share what moves the industry—and
            how we move with it.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full md:w-2/3 flex flex-wrap gap-4 sm:gap-5 items-start md:items-center justify-start md:justify-end">
          {blogCategory?.map((i) => (
            <button
              key={i}
              onClick={() => setCat(i)}
              className={`py-[10px] px-5 sm:px-6 text-sm sm:text-base font-semibold rounded-lg uppercase transition-all duration-150 hover:bg-secondary hover:text-white ${
                cat === i ? "bg-secondary text-white" : "bg-white text-primary"
              }`}
            >
              {i}
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

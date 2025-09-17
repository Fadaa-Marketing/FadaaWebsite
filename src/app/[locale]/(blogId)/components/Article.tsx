import { BlogPost } from "@/types";
import Image from "next/image";
import React from "react";

const Article = ({ blog, locale }: { blog: BlogPost; locale: string }) => {
  return (
    <div className="w-full xl:w-2/3 flex flex-col gap-6 px-4 lg:px-0">
      <Image
        src={blog.main_image_url}
        alt={blog.title || "e"}
        width={780}
        height={374}
        className="w-full h-auto max-h-[600px] object-cover rounded-3xl "
      />
      <div className="flex gap-[10px] items-center">
        <div className="bg-white text-primary  text-lg py-[6px] px-[18px] rounded-[6px] ">
          {" "}
          {locale === "ar" && blog.bcategory.name_ar
            ? blog.bcategory.name_ar
            : blog.bcategory.name}{" "}
        </div>
        <p className="text-white text-xl ">
          {new Date(blog.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div
        className="text-base sm:text-lg md:text-2xl text-white space-y-4 sm:space-y-6"
        dangerouslySetInnerHTML={{
          __html: locale === "ar" ? blog?.content_ar : blog?.content,
        }}
      ></div>
    </div>
  );
};

export default Article;

import { BlogPost } from "@/types";
import LinkClient from "@/app/components/shared/LinkClient";
import React from "react";
import Image from "next/image";
const Card = (blog: BlogPost) => {
  const plainText = blog?.content.replace(/<[^>]*>/g, "");

  return (
    <div className="bg-[#F0F0F0] p-4 sm:p-6 rounded-2xl flex flex-col gap-6 sm:gap-7 h-full">
      {/* Blog image */}
      <LinkClient href={`/${blog.slug}`}>
        <Image
          src={blog.main_image_url}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full rounded-2xl"
        />
      </LinkClient>

      <div className="flex flex-col gap-3 sm:gap-[10px] justify-between h-full">
        {/* Category & Date */}
        <div className="flex flex-wrap gap-2 sm:gap-[10px] items-center">
          <div className="bg-primary text-white text-[12px] sm:text-[14px] py-[4px] sm:py-[6px] px-[12px] sm:px-[18px] rounded-[6px]">
            {blog.bcategory.name}
          </div>
          <p className="text-[#545454] text-[13px] sm:text-[14px]">
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Title */}
        <LinkClient
          href={`/${blog.slug}`}
          className="text-primary w-fit uppercase font-medium leading-[120%] text-[18px] sm:text-[20px] md:text-[22px]"
        >
          {blog.title}
        </LinkClient>

        {/* Short content */}
        <p className="line-clamp-3 text-[#757575] text-[15px] sm:text-[16px] md:text-[18px]">
          {plainText}
        </p>

        {/* Read more */}
        <LinkClient
          href={`/${blog.slug}`}
          className="group flex items-center w-fit gap-3 sm:gap-4 md:gap-6 cursor-pointer font-semibold text-secondary text-[14px] sm:text-[16px]"
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-secondary transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4"
          >
            <path
              d="M13.5 1L19 6M19 6L13.5 11M19 6H1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="relative transition-all duration-300 group-hover:-translate-x-8 sm:group-hover:-translate-x-10">
            Read more
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary absolute left-full top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2"
            >
              <path
                d="M13.5 1L19 6M19 6L13.5 11M19 6H1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </LinkClient>
      </div>
    </div>
  );
};

export default Card;

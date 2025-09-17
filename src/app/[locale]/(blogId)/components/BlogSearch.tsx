"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "@/types";
import LinkClient from "../../components/shared/LinkClient";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { searchBlogs } from "@/lib/api";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BlogSearch = () => {
  const t = useTranslations("BlogSearch");
  const [query, setQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setFilteredBlogs([]);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => {
      searchBlogs(query).then((data) => {
        setFilteredBlogs(data?.data || []);
        setLoading(false);
      });
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <CiSearch className="absolute text-[#3C3C4399] top-1/2 -translate-y-1/2 left-4 text-lg font-semibold" />
        <Input
          placeholder={t("placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="placeholder:text-[#3C3C4399] bg-white w-full text-primary text-lg font-normal py-6 pl-12 pr-4"
        />
      </div>

      {query && (
        <div className="flex flex-col border border-[#9400FF] rounded-3xl p-6 space-y-5">
          {loading ? (
            <p className="text-white">{t("searching")}</p>
          ) : filteredBlogs.length > 0 ? (
            filteredBlogs?.slice(0, 5)?.map((blog, idx) => (
              <LinkClient
                key={idx}
                href={`/${blog.slug}`}
                className="grid grid-cols-12 gap-2 hover:scale-[101%] transition-all duration-200 bg-white rounded-3xl p-3 w-full"
              >
                <div className="col-span-12 sm:col-span-4 md:col-span-3 xl:col-span-6">
                  <Image
                    src={blog.main_image_url}
                    alt={blog.title}
                    width={150}
                    height={150}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="col-span-12 sm:col-span-8 md:col-span-9 xl:col-span-6 justify-center flex flex-col gap-2">
                  <span className="text-primary text-lg font-medium line-clamp-1">
                    {blog.title}
                  </span>
                  <p className="text-[#8F8F8F] text-sm font-normal line-clamp-3">
                    {blog?.content.replace(/<[^>]*>/g, "")}
                  </p>
                </div>
              </LinkClient>
            ))
          ) : (
            <p className="text-white">{t("noResults")}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogSearch;

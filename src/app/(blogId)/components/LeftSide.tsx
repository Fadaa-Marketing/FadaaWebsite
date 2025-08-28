import { getAllBlogs, getAllServices } from "@/lib/api";
import { BlogPost } from "@/types";
import React from "react";
import BlogSearch from "./BlogSearch";
import LinkClient from "@/app/components/shared/LinkClient";
import FormFields from "@/app/components/shared/FormFields";
import { ServiceSwiper } from "./ServiceSwipper";
import Image from "next/image";

const LeftSide = async () => {
  const blogs: BlogPost[] = await getAllBlogs();
  const services = await getAllServices();

  const formattedServices = services?.map((service: any) => ({
    title: service?.title,
    imgUrl: service?.main_image_url,
    link: `/services/${service?.slug}`, 
  }));

  return (
    <div className="w-full xl:w-1/3 px-4 sticky top-2  ">
      <div className="flex flex-col gap-6">
        <BlogSearch />

        {/* Blogs Section */}
        <div className="border border-[#9400FF] rounded-3xl p-6">
          <p className="text-white text-2xl lg:text-4xl font-medium mb-6">
            Popular Blogs
          </p>
          <div className="flex flex-col gap-6 h-[759px] overflow-y-scroll hide-scrollbar">
            {blogs?.slice(0, 10)?.map((blog, idx) => (
              <LinkClient
              key={idx}
                href={`/${blog.slug}`}
                className="grid grid-cols-12 gap-2 hover:scale-[101%] transition-all duration-200 bg-white rounded-2xl p-3 w-full"
              >
                <div className="col-span-12 sm:col-span-4 md:col-span-3 xl:col-span-6">
                  <Image
                    src={blog.main_image_url}
                    alt={""}
                    width={186}
                    height={134}
                    className="rounded-xl w-full h-full"
                  />
                </div>
                <div className="col-span-12 sm:col-span-8 md:col-span-9 xl:col-span-6 justify-center flex flex-col gap-2">
                  <span className="text-primary text-lg font-medium line-clamp-1">
                    {blog.title}
                  </span>
                  <div className="text-[#8F8F8F] text-sm font-normal line-clamp-3">
                    {blog?.content.replace(/<[^>]*>/g, "")}
                  </div>
                </div>
              </LinkClient>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="border border-[#9400FF] rounded-3xl p-6 space-y-5">
          <span className="text-white text-2xl lg:text-4xl font-medium mb-12">
            Services
          </span>
          <ServiceSwiper services={formattedServices} />
        </div>
      </div>

      <aside className="w-full border border-[#9400FF] rounded-3xl p-6 mt-6  ">
          <div className="flex flex-col gap-6">
          <span className="text-white text-2xl lg:text-4xl font-medium">
            Contact Us
          </span>
          <FormFields blogStyle={true} />
        </div>
      </aside>
    </div>
  );
};

export default LeftSide;

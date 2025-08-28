import { BlogPost } from '@/types'
import LinkClient from '@/app/components/shared/LinkClient';
import Image from 'next/image';
const BlogCards = ({ blog, featured }: { blog: BlogPost; featured?: boolean }) => {
  const plainText = blog?.content?.replace(/<[^>]*>/g, "");

  return (
    <LinkClient 
      href={blog?.slug}
      className={`rounded-2xl flex flex-col border shadow-xl ${
        featured ? "flex-col-reverse" : "flex-col"
      } bg-transparent group hover:bg-primary transition-all duration-300 p-5 gap-4 hover:scale-[101%] text-start h-full  `}
    >
      <div className="flex flex-col gap-4">
        <h3
          className={`font-medium text-[22px] leading-[120%] uppercase line-clamp-2 tracking-wider 
           text-primary group-hover:text-white transition-all duration-300 `}
        >
          {blog?.title}
        </h3>
        <div
          className={`font-normal text-base leading-6 line-clamp-4 text-[#8F8F8F] group-hover:text-white tracking-wider transition-all duration-300 `}
        >
          {plainText}
        </div>
        <div
          className={`group flex items-center gap-4 sm:gap-6 cursor-pointer font-medium text-base text-secondary group-hover:text-white transition-all duration-300`}
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-secondary group-hover:text-white text-lg sm:text-xl transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4"
          >
            <path
              d="M13.5 1L19 6M19 6L13.5 11M19 6H1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="relative transition-all duration-300 group-hover:-translate-x-10">
            Read more
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary group-hover:text-white text-lg sm:text-xl absolute left-full top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2"
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
        </div>
        
      </div>
      <div className="w-full rounded-2xl overflow-hidden tracking-wider">
      <Image
        src={blog.main_image_url}
        alt={blog.title}  
        width={500}
        height={500}
        className="w-full rounded-xl "
      />
        </div>
    </LinkClient>
  );
}

export default BlogCards;

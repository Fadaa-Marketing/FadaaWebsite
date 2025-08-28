import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
interface PortoReelsProps {
  data: PortfolioItem[];
}

const PortoReels = ({ data }: PortoReelsProps) => {
  return (
    <div className="pt-[50px] pb-[80px] x-padding mx-auto">
      <div className="grid grid-cols-12 gap-4">
        {data?.map((items, index) => {
          const isLink = items.url && items.url.trim() !== "";
          const Wrapper = isLink ? "a" : "div";
          const wrapperProps = isLink
            ? { href: items.url!, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={index}
              {...wrapperProps}
              className="relative group w-full rounded-[20px] overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4"
            >
            <LoadingImage
              src={items.image_url}
              alt="Portfolio"
              className=" w-[100%] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
            />
              {items.title && items.title !=="null" && (
                <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                  <div className="bg-black/60 text-white py-2 px-4 rounded-t-lg text-center xl:text-[20px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] uppercase font-[500] w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    {items.title}
                  </div>
                </div>
              )}
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default PortoReels;

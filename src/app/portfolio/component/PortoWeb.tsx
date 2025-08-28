import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
interface PortoSEOProps {
  data: PortfolioItem[];
}

const PortoWeb = ({ data }: PortoSEOProps) => {
  const chunked: PortfolioItem[][] = [];
  for (let i = 0; i < data.length; i += 3) {
    chunked.push(data.slice(i, i + 3));
  }

  return (
    <div className="pt-[50px] pb-[80px] x-padding mx-auto">
      {chunked?.map((group, groupIdx) => (
        <div
          key={groupIdx}
          className="grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-4"
        >
          {/* First two images (left side) */}
          <div className="col-span-12 md:col-span-8 grid grid-rows-2 gap-4 h-full">
            {group.slice(0, 2)?.map((item, index) => {
              const isLink = item.url && item.url.trim() !== "";
              const Wrapper = isLink ? "a" : "div";
              const wrapperProps = isLink
                ? {
                    href: item.url!,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <Wrapper
                  key={index}
                  {...wrapperProps}
                  className="relative group w-full rounded-[20px] overflow-hidden h-full"
                >
                  <LoadingImage
                    src={item.image_url}
                    alt="Portfolio"
                    className=" w-full h-[250px] md:h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.title && (
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                      <div className="bg-black/60 text-white py-2 px-4 rounded-t-lg text-center xl:text-[20px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] uppercase font-[500] w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        {item.title}
                      </div>
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>

          {/* Third image (right side) */}
          {group[2] &&
            (() => {
              const item = group[2];
              const isLink = item.url && item.url.trim() !== "";
              const Wrapper = isLink ? "a" : "div";
              const wrapperProps = isLink
                ? {
                    href: item.url!,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <Wrapper
                  key={`${groupIdx}-2`}
                  {...wrapperProps}
                  className="col-span-12 md:col-span-4 md:row-span-2 relative group w-full rounded-[20px] overflow-hidden h-full"
                >
                  <LoadingImage
                    src={item.image_url}
                    alt="Portfolio"
                    className=" w-full h-full my-4 md:my-0 rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.title && item.title !== "null" && (
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                      <div className="bg-black/60 text-white py-2 px-4 rounded-t-lg text-center xl:text-[20px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] uppercase font-[500] w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        {item.title}
                      </div>
                    </div>
                  )}
                </Wrapper>
              );
            })()}
        </div>
      ))}
    </div>
  );
};

export default PortoWeb;

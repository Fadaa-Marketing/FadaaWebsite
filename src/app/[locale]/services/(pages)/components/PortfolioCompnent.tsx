
import { Trik } from "@/types";
// import LoadingImage from "@/app/components/shared/loadingImage";
import LinkClient from "../../../components/shared/LinkClient";
import Image from "next/image";

const PortfolioComponent = ({ title , trik }: { title: string , trik:Trik[] }) => {
  const getGridClass = () => {
    if (["social media", "reels", "media production", "mobile application", "media buying" , "branding"].includes(title.toLowerCase())) {
      return "xl:grid-cols-3 md:grid-cols-2 grid-cols-1";
    } 
    if (["web development", "seo"].includes(title.toLowerCase())) {
      return "grid-cols-1";
    } 
    return "grid-cols-3"; 
  };

  const gridClass = getGridClass();
  const getHeightClass = () => {
    return gridClass === "grid-cols-1" ? " h-auto lg:h-auto" : "h-auto";
  };
  const imageHeightClass =
  title.toLowerCase() === "mobile application"
    ? "h-full"
    : "h-auto";
  return (
    <div className={`grid ${gridClass} items-center gap-4 mt-10`}>
      {trik?.map((img, index) => (
        <LinkClient
        key={index} 
        href={'/portfolio'} 
          className={`relative ${getHeightClass()}`} 
        >
        <Image
            src={img.image_url} 
            alt="portfolio" 
            width={2000}
            height={2000}
            className={`rounded-lg w-full ${imageHeightClass}`}
          />
        </LinkClient>
      ))}
    </div>
  );
};

export default PortfolioComponent;

import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
import { useTranslations } from "next-intl";
interface PortoSEOProps {
  data: PortfolioItem[];
}
const MobileApp = ({ data }: PortoSEOProps) => {
  const t =useTranslations("porto")
  if (!data.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        {t("Noportfolioitemsfound")}
      </div>
    );
  }
    return (
      <>
        <div className="pt-[50px] pb-[80px] x-padding mx-auto">
          <div className="grid grid-cols-12 gap-4">
          {data?.map((items,index) => (
              <div
                key={index}
                className="relative group w-full rounded-[20px] overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4"
              >
            <LoadingImage
              src={items.image_url}
              alt="Portfolio"
              className=" w-[100%] h-full rounded-[20px]"
            />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default MobileApp;
  
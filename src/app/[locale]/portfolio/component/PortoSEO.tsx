import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
import { useTranslations } from "next-intl";
interface PortoSEOProps {
  data: PortfolioItem[];
}

const PortoSEO = ({ data }: PortoSEOProps) => {
  const t =useTranslations("porto")
  if (!data.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        {t("Noportfolioitemsfound")}
      </div>
    );
  }
  return (
    <div className="pt-[50px] pb-[80px] space-y-4 mx-auto">
      {data?.map((items,index) => (
        <div key={index} className="relative group w-full overflow-hidden">
            <LoadingImage
              src={items.image_url}
              alt="Portfolio"
              className=" rounded-[20px] w-full shadow-lg h-auto"
            />
        </div>
      ))}
    </div>
  );
};

export default PortoSEO;

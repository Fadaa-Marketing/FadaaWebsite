import { PortfolioItem } from "@/types";
import LoadingImage from "../../components/shared/loadingImage";
interface PortoSEOProps {
  data: PortfolioItem[];
}

const PortoSEO = ({ data }: PortoSEOProps) => {
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

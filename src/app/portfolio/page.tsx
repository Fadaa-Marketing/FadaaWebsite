import CustomHero from "../components/shared/CustomHero";
import FormSection from "../components/shared/FormSection";
import Category from "./component/Category";
import { getPortoCat } from "@/lib/api";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fadaa Marketing | Portfolio",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};

const Portfolio = async () => {
  const portoCategory = await getPortoCat();
  return (
    <>
      <div className="pg-primary first-porto">
        <div className="sec-porto mx-auto">
          <div className="pb-[50px]">
            <CustomHero
              title="Our Portfolio"
              description="Our Portfolio – Pushing Digital Boundaries"
            />
          </div>
          <Category portoCategory={portoCategory} />
          <FormSection />
        </div>
      </div>
    </>
  );
};

export default Portfolio;

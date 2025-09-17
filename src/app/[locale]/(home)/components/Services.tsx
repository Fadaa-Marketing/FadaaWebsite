import { getTranslations } from "next-intl/server";
import ServicesNew from "../../components/shared/ServicesNew";
import SectionTitle from "./SectionTitle";

const Services = async () => {
  const t = await getTranslations('Services');

  return (
    <section dir="ltr" className="bg-primary y-padding sec-porto">
      <SectionTitle 
        title={t('title')} 
        text={t('subtitle')} 
      />
      <ServicesNew />
    </section>
  );
};

export default Services;

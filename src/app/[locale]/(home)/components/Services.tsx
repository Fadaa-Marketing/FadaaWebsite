import { getTranslations } from "next-intl/server";
import ServicesNew from "../../components/shared/ServicesNew";
import SectionTitle from "./SectionTitle";

const Services = async ({locale}:{locale:string}) => {
  const t = await getTranslations('Services');

  return (
    <section className="bg-primary y-padding sec-porto">
      <SectionTitle 
        title={t('title')} 
        text={t('subtitle')} 
      />
      <ServicesNew locale={locale}/>
    </section>
  );
};

export default Services;

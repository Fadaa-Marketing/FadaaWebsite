import CustomButton from '../../components/CustomButton';
import PortfolioSwiper from './PortfolioSwiper';
import SectionTitle from './SectionTitle';
import { getTranslations } from 'next-intl/server';

const Portfolio = async () => {
  const t = await getTranslations('Portfolio');

  return (
    <section className="x-padding bg-primary relative background-img">
      <SectionTitle 
        title={t('title')} 
        text={t('subtitle')} 
      />

      <PortfolioSwiper />

      <div className="flex justify-center md:absolute md:bottom-0 md:right-48 md:my-14">
        <CustomButton link="/portfolio" text={t('button')} />
      </div>
    </section>
  );
};

export default Portfolio;

import CustomButton from '../../../components/CustomButton';
import { getAllBlogs } from '@/lib/api';
import { BlogPost } from '@/types';
import BlogsCardSwiper from './BlogsCardSwiper';
import { getTranslations } from 'next-intl/server';
interface Prop{
  locale:string
}
const Blogs = async ({locale}:Prop) => {
  const blogs: BlogPost[] = await getAllBlogs();
  const t = await getTranslations('Blogs'); 

  return (
    <section className="main-padding bg-[#F0F0F0] overflow-hidden">
      <div className={`flex flex-col md:flex-row justify-between ${locale === "ar" ? "items-end":"items-start md:mr-24"} md:items-center mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6 lg:gap-8`}>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 w-full md:max-w-[457px]">
          <p className={`text-[#47007A] main-title-paragraph leading-[120%] text-center ${locale == "ar"?"md:text-right":"md:text-left"}`}>
            {t('subtitle')}
          </p>
          <h1 className={`secondary-title text-primary leading-[120%] blogs-title text-center ${locale == "ar"?"md:text-right":"md:text-left"}`}>
            {t('title')}
          </h1>
        </div>

        <div className="hidden md:flex sm:justify-end w-full sm:w-auto">
          <CustomButton link="/blogs" text={t('button')} background="white" />
        </div>
      </div>

      <BlogsCardSwiper blogs={blogs} locale={locale} />

      <div className="flex justify-center my-8 md:hidden">
        <CustomButton link="/blogs" text={t('button')} background="white" />
      </div>
    </section>
  );
};

export default Blogs;

import { purposeData } from '@/constant';
import Image from 'next/image';
import React from 'react';
import { getTranslations } from 'next-intl/server';



const Purpose = async () => {
  const t = await getTranslations('home.purpose');
  const items = t.raw('items') as { title: string; description: string }[];
  return (
    <section className=" bg-primary  gap-4 flex-col-reverse flex lg:flex-row justify-center lg:justify-between items-center lg:items-start x-padding background-img">
      <div className='flex flex-1 flex-col justify-center items-center lg:justify-normal lg:items-start text-center lg:text-start  gap-3 lg:gap-6 '>
        <h1 className='secondary-title '>{t('title')}</h1>
        <div className='flex flex-col text-center lg:text-start gap-3 lg:gap-6 max-w-[571px]  '>
          {items?.map((data, idx )=>(
            <div key={idx} className='flex flex-col gap-3 lg:gap-6 ' >
                <div className='flex items-center gap-3 lg:gap-6 text-secondary'>
                  <Image src='/purpose.svg' alt='star' height={29} width={29} />
                  <h2 className='main-title-paragraph font-medium'>{data.title}</h2>
                </div>
                <p className='main-text'>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Image src={'/purpose.jpg'} alt='purpose' width={500} height={581} className='rounded-[20px] ' />
    </section>
  );
};

export default Purpose;

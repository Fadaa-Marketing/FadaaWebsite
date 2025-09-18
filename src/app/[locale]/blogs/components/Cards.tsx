import { BlogPost } from '@/types';
import React from 'react';
import Card from './Card';

interface CardsProps {
  blogs: BlogPost[];
  locale:string
}

const Cards: React.FC<CardsProps> = ({ blogs,locale }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-6 md:gap-10 mt-14 items-stretch">
      {blogs?.map((blog, idx) => {
        const patternIndex = idx % 5;
        const colSpanClass =
          patternIndex < 2 ? 'xl:col-span-6' : 'xl:col-span-4';

        return (
          <div key={idx} className={`w-full ${colSpanClass} h-full`}>
            <Card {...blog} locale={locale} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

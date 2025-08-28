'use client'

import React, { Suspense, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCards from './BlogCards';
import { BlogPost } from '@/types';
import { useErrorHandler } from '@/app/components/shared/useErrorHandler';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const BlogsCardSwiper = ({ blogs }: { blogs: BlogPost[]; }) => {
  const [hasError, setHasError] = useState(false);

  const { handleError } = useErrorHandler({
    onError: (error) => {
      console.error('Swiper error:', error);
      setHasError(true);
    },
    preventDefault: false 
  });

  if (hasError) {
    throw new Error('Failed to load blog swiper');
  }

  return (
      <div className='h-full' >
        <Swiper
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            pagination={{ 
              clickable: true,
            }}
            
            modules={[Navigation, Pagination]}
            className='!shadow-none !bg-transparent '
            onError={(error) => {
              handleError(new Error(`Swiper error: ${error}`));
            }}
          > {blogs?.slice(0, 3)?.map((blog, index) => (
          <SwiperSlide key={index} className='pb-[30px] h-full ' >
            <BlogCards blog={blog}  featured={index === 1} />
            </SwiperSlide>
          ))}
          </Swiper>
      </div>
    
  )
}

export default BlogsCardSwiper

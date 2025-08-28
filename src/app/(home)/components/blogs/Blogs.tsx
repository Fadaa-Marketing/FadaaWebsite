import React from 'react'
import CustomButton from '../../../components/CustomButton'
import { getAllBlogs } from '@/lib/api';
import { BlogPost } from '@/types';
import BlogsCardSwiper from './BlogsCardSwiper';

const Blogs = async () => {
  const blogs: BlogPost[] = await getAllBlogs();
  return (
    <section className='main-padding bg-[#F0F0F0] overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6 lg:gap-8 md:mr-24 '>
        <div className='flex flex-col gap-2 sm:gap-3 lg:gap-4 w-full md:max-w-[457px]'>
            <p className='text-[#47007A] main-title-paragraph leading-[120%] text-center md:text-left'>our latest</p>
            <h1 className='secondary-title text-primary leading-[120%] blogs-title text-center md:text-left'>News & Announcements</h1>
        </div>
        <div className='hidden md:flex sm:justify-end w-full sm:w-auto'>
          <CustomButton link='/blogs' text='View All' background={'white'} />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 sm:gap-6 lg:gap-8 xl:gap-10"> */}
        
        
          <BlogsCardSwiper blogs={blogs} />
      {/* </div> */}

      <div className='flex justify-center my-8 md:hidden'>
        <CustomButton link='/blogs' text='View All' background={'white'} />
      </div>
    </section>
  )
}

export default Blogs



import { InfiniteMovingCards } from '@/components/ui/infinite-moving';
import { getAllServices } from '@/lib/api';
import React from 'react'

const ServicesNew = async ({ classpt = "" }) => {
  const services = await getAllServices();

  const formattedServices = services?.map((service: any) => ({
    title: service?.title,
    imgUrl: service?.main_image_url,
    link: `/services/${service?.slug}`, 
  }));
  return (
    <div className={` ${classpt} `}>
       <InfiniteMovingCards
        planets={formattedServices}
        direction="right"
        speed="slow"
      />
      
    </div>
  )
}

export default ServicesNew

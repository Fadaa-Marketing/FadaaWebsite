import CustomButton from '@/app/components/CustomButton'
import { portfolio } from '@/constant'
import Image from 'next/image'
import React from 'react'
import PortfolioSwiper from './PortfolioSwiper'
import SectionTitle from './SectionTitle'

const Portfolio = () => {
  return (
    <section className='x-padding bg-primary  relative  background-img'>
      
      <SectionTitle title='Portfolio' text='Work that speaks, Results that show'/>
     
      <PortfolioSwiper/>

      
      <div className="flex justify-center md:absolute md:bottom-0 md:right-48 md:my-14">
        <CustomButton link='/portfolio' text='View All' />
      </div>
    </section>
  )
}

export default Portfolio

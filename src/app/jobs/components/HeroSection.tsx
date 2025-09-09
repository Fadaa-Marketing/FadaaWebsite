import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className='min-h-screen main-padding flex flex-col-reverse xl:flex-row justify-center items-center'>
      <div className='flex flex-col gap-6 w-full xl:w-1/2 text-center xl:text-start'>
        <h1 className='secondary-title'>Careers at Fadaa Marketing </h1>
        <p className='text-2xl'>Join the creative force that builds bold brands, challenges the ordinary, sparks ideas, and shapes the future through fearless innovation.</p>
        <Link href={'#opportunity'}  className='main-button flex items-center justify-center gap-2 w-fit px-7 py-4 mx-auto xl:mx-0'>Find Jobs <FaArrowRight /> </Link>
      </div>
      <div className='w-full xl:w-1/2 flex items-center justify-center'>
        <Image src={'/jobs/hero.png'} alt='hero' width={649} height={471} className='w-full h-auto md:max-w-[649px] md:h-[471px]' />
      </div>

    </div>
  )
}

export default HeroSection

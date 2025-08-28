import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
    <section className='min-h-screen contact-section main-padding flex items-center justify-center'>
        <div className='contact-overlay' />
        <div className='  xl:pt-52 flex flex-col lg:flex-row justify-between items-center lg:items-end w-full z-30 gap-8 lg:gap-12 xl:gap-16'>
          <div className='flex flex-col gap-4 sm:gap-6 lg:gap-8 max-w-[500px] w-full text-center lg:text-left order-2 lg:order-1'>
            <h1 className='secondary-title'>Contact Us</h1>
            <p className='main-text text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
              Have questions or need assistance? We're here to help. Feel free to contact us through phone, email, or social media — and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className='order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-auto'>
            <Image 
              src="/contact/moon.png" 
              alt="hero-bg-layout" 
              width={442} 
              height={442} 
              className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[442px] xl:h-[442px] rounded-full border object-cover' 
              style={{boxShadow: '-1px 4px 35.9px 7px #FFFFFF40'}} 
            />
          </div>
        </div>
    </section>
  )
}

export default ContactHero

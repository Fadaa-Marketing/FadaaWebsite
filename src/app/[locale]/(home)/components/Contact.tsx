import Image from 'next/image'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const Contact = () => {
  return (
    <section className='bg-primary pt-16 sm:pt-24 md:pt-32 lg:pt-48 xl:pt-72 relative'>
      <Image 
        src={'/contact.svg'} 
        alt='contact' 
        width={555} 
        height={392} 
        className='w-full absolute top-0 left-0 z-30' 
      />
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] max-w-screen overflow-hidden relative">
            <Image
                src="/contact.png"
                alt="services"
                width={1000}
                height={608}
                className="w-full h-full object-cover"
            />
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
            <div className='absolute bottom-0 left-0 w-full main-padding pb-4 sm:pb-6 md:pb-8'>
                <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
                    <p className='w-full md:w-[400px] lg:w-[500px] xl:w-[571px] text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center md:text-left'>
                      Have questions or need assistance? We're here to help. Feel free to contact us through phone, email, or social media — and we'll get back to you as soon as possible.
                    </p>
                    <div className='flex justify-center md:mr-36 md:justify-end w-full md:w-auto'>
                      <CustomButton link='/contact' text='CONTACT US' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

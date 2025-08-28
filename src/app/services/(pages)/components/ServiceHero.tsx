import React from 'react'

const ServiceHero = ({title , description} : {title:string , description:string}) => {
  return (
    <div className=' px-4 pb-8 pt-28 md:px-8  md:pt-36 lg:px-16 lg:pb-10 lg:pt-40 xl:px-[120px] xl:pt-[150px] xl:pb-16  flex flex-col gap-6 items-center justify-center max-w-[966px] place-self-center text-center '>
      <h1 className='title-button'> {title} </h1>
      <span className='secondary-title font-normal'> {description} </span>
    </div>
  )
}

export default ServiceHero


import React from 'react'
import { GifSwiper } from './GifSwiper'
import { Gif } from '@/types';

const GifSection = ({  gif }: { gif:Gif[] }) => {

  return (
    <div className=' x-padding  '>
       <div className='flex flex-col gap-6 items-center justify-center max-w-[966px] place-self-center text-center mb-8 '>
        <div className='title-button '> How We Work </div>
        <div className='secondary-title font-normal'> Our Approach </div>
       </div>
      <div>

        <GifSwiper gif={gif} />
      </div>
    </div>

  )
}

export default GifSection

import React from 'react'
import { GifSwiper } from './GifSwiper'
import { Gif } from '@/types'
import { getTranslations } from 'next-intl/server'

interface GifSectionProps {
  gif: Gif[]
}

const GifSection = async ({ gif }: GifSectionProps) => {
  const t = await getTranslations('servicesPage.gifSection')

  return (
    <div className="x-padding">
      <div className="flex flex-col gap-6 items-center justify-center max-w-[966px] place-self-center text-center mb-8">
        <div className="title-button">{t('howWeWork')}</div>
        <div className="secondary-title font-normal">{t('ourApproach')}</div>
      </div>
      <div>
        <GifSwiper gif={gif} />
      </div>
    </div>
  )
}

export default GifSection

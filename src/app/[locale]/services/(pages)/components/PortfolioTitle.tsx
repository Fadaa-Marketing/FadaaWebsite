import { getTranslations } from 'next-intl/server'
import React from 'react'

const PortfolioTitle = async () => {
  const t = await getTranslations("portoserv")
  return (
    <div className='flex flex-col gap-6 items-center justify-center max-w-[966px] place-self-center text-center '>
      <div className='title-button '> {t("portfolio")}</div>
      <div className='secondary-title text-center font-normal'> <p>{t("TakeALook")} </p>
      <p className='text-secondary'>{t("AtOtherTrips")}</p>  </div>
    </div>
  )
}

export default PortfolioTitle

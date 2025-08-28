import { team } from '@/constant'
import Image from 'next/image'
import React from 'react'



const Team = () => {
  return (
    <section className='x-padding'>
      <div className='flex flex-col gap-6  justify-center text-center'>
        <h2 className='secondary-title'>Why Work with Fadaa?</h2>
        <p className='main-text'>Discover what makes our cosmic workplace a launching pad for extraordinary careers and groundbreaking marketing missions.</p>
      </div>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3  py-10' >
        {team?.map((item,key)=>(
            <div key={key} className={`relative `}>
            <Image
            src={item.imageUrl}
            alt={item.title}
            width={409}
            height={280}
            className="rounded-3xl h-[280px] w-full object-cover border "
            />
            <div
            className="absolute left-0 bottom-0 w-full h-1/2 rounded-b-3xl pointer-events-none"
            style={{
                background: ' linear-gradient(180.52deg, rgba(0, 0, 0, 0) 0.45%, #210039 99.55%)',
            }}
            />
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col text-center '>
                <h2 className='text-xl font-medium'>{item.title}</h2>
                <p className='text-sm text-[#CFCFCF]'>{item.text}</p>
            </div>
        </div>
        ))}
      </div>
      <div className={`relative`}>
            <Image
            src={'/jobs/team/3.jpeg'}
            alt={''}
            width={409}
            height={400}
            className="rounded-3xl h-[400px] w-full object-cover border"
            />
            <div
            className="absolute left-0 bottom-0 w-full h-1/2 rounded-b-3xl pointer-events-none"
            style={{
                background: ' linear-gradient(180.52deg, rgba(0, 0, 0, 0) 0.45%, #210039 99.55%)',
            }}
            />
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col  text-center '>
                <h2 className='text-xl font-medium'>Meet the FADAA Family</h2>
                <p className='text-sm text-[#CFCFCF]'>A diverse constellation of creative minds working together to launch brands into new dimensions</p>
            </div>
        </div>
    </section>
  )
}

export default Team
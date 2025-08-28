'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LinkClient from '../components/shared/LinkClient'
const ThankYouPage = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className=" bg-primary  px-4">
      <div className=" h-screen flex flex-col items-center justify-center  max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Thank You!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Your message has been sent successfully. We'll get back to you soon!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkClient 
            href="/"
            className="px-8 py-3 bg-[#9400FF] text-white rounded-full font-semibold hover:bg-[#8B18E7] transition-colors duration-300"
          >
            Go Home Now
          </LinkClient>
          
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-[#9400FF] text-[#9400FF] rounded-full font-semibold hover:bg-[#9400FF] hover:text-white transition-colors duration-300"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <Image 
            src="/logo.svg" 
            alt="Fadaa Marketing" 
            width={120} 
            height={60}
            className="opacity-50"
          />
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage

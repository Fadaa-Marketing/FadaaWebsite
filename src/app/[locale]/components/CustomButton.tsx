import LinkClient from './shared/LinkClient';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CustomButton = ({link, text, background,circleStyle ,buttonStyle}: {link: string, text: string , background?:string,circleStyle?:string,buttonStyle?:string}) => {
  return (
    <div dir='ltr'>
    <LinkClient href={link} className={`group relative flex items-center px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 ${background === 'white' ?'text-primary': 'text-white'  } font-medium w-fit  h-[60px]  sm:h-[70px] lg:h-[90px] ${buttonStyle}`}>
      <span className={` absolute  left-[0%]  flex items-center justify-center w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] border  rounded-full  group-hover:right-0  transition-all duration-500  group-hover:left-[230%] sm:group-hover:left-[160%]  ${background === 'white' ?'text-white  group-hover:bg-primary border-primary ': 'text-primary group-hover:bg-white border-white'  } ${circleStyle}`}>
        <FaArrowRightLong className="opacity-0 group-hover:opacity-100 transition-opacity duration-500  w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> 
      </span>
      <span className="w-full absolute left-[110%] md:left-[70%] inset-0 text-center transition-all duration-500 ease-in-out group-hover:transform group-hover:left-[20%]  text-base sm:text-lg md:text-xl whitespace-nowrap flex items-center justify-center">{text}</span>
    </LinkClient>
    </div>
  )
}

export default CustomButton

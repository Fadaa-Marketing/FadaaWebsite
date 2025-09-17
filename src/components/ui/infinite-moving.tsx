"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { beforeNavigate } from '../../app/[locale]/utils/navigation';
export const InfiniteMovingCards = ({
  items,
  planets,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  planets?: {
    imgUrl: string;
    title: string;
    link: string;
  }[];
  items?: {
    logo_url: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex items-center min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >{items && 
        items?.map((item, idx) => (
          <li
            className="sm:w-[250px] w-[80px] max-w-full relative  "
            style={{
              background:
                "",
            }}
            key={idx}
          >
            <Image src={item.logo_url} alt=""  width={167} height={167} className="object-contain w-[80px] h-[80px] sm:w-[167px] sm:h-[167px]" />
          </li>
        ))}

        {planets &&
        planets?.map((item, idx) => (
          <li
            className="max-w-full relative  "
            style={{
              background:
                "",
            }}
            key={idx}
          >
            <Link
              href={item.link}
              className='flex-shrink-0 flex flex-col justify-between items-center gap-4 sm:gap-6 min-w-[200px] sm:min-w-[240px] md:min-w-[264px] hover:scale-110 transition-all duration-300'
              onClick={() => beforeNavigate()}
        >
          <Image
            src={item.imgUrl}
            alt={item.title}
            width={264}
            height={264}
            className='h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[240px] md:w-[240px] lg:h-[264px] lg:w-[264px] object-cover rounded '
          />
          <h2 className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] uppercase text-center'>
            {item.title}
          </h2>
        </Link>
          </li>
        ))}
        
      
        
      </ul>
    </div>
  );
};

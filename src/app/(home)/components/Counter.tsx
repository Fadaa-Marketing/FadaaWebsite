'use client';
import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const counters = [
    { end: 4, suffix: 'k+', label: 'Customer satisfaction' },
    { end: 820, suffix: '', label: 'Average growth' },
    { end: 120, suffix: '', label: 'Daily data input' },
    { end: 90, suffix: '+', label: 'Passionate Employees' },
  ];

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-28 bg-gradient-to-br from-primary via-[#3d0a61] to-[#210039] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[80px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] text-[#e5c1ffa7]"
    >
      {counters?.map((counter, index) => (
        <div key={index} className="flex flex-col items-center justify-center text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[120px] font-semibold leading-none">
            {startCounter && <CountUp end={counter.end} />}{counter.suffix}
          </div>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase text-center mt-2 sm:mt-3 md:mt-4 leading-tight">
            {counter.label}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default Counter;
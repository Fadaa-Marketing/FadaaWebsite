"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { beforeNavigate } from '../../app/[locale]/utils/navigation';
export const InfinitePlanets = ({
  planets = [],
  speed = 20,
  className,
}: {
  planets?: {
    imgUrl: string;
    title: string;
    link: string;
  }[];
  radius?: number;
  speed?: number;
  className?: string;
  sunImage?: string;
}) => {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotationDirection] = useState(1);
  const [isMobile, setIsMobile] = useState<
    "verysmall" | "small" | "medium" | "large"
  >("large");

  const orbitWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<null | any>();
  const lastPosRef = useRef({ y: 0, time: 0 });

  const planetSize =
    isMobile === "verysmall"
      ? 80
      : isMobile === "small"
      ? 100
      : isMobile === "medium"
      ? 100
      : 140;
  const radius =
    isMobile === "verysmall"
      ? 240
      : isMobile === "small"
      ? 270
      : isMobile === "medium"
      ? 290
      : 300;
  const sunSize =
    isMobile === "verysmall"
      ? 80
      : isMobile === "small"
      ? 100
      : isMobile === "medium"
      ? 120
      : 120;
  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 400) setIsMobile("verysmall");
      else if (width <= 575) setIsMobile("small");
      else if (width <= 767) setIsMobile("medium");
      else setIsMobile("large");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getPlanetPosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    return {
      x: Math.round(Math.cos(angle) * radius),
      y: Math.round(Math.sin(angle) * radius),
    };
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.touchAction = "";
  };

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile === "large") return;

    setIsDragging(true);
    cancelAnimationFrame(animationRef.current);
    disableScroll();

    lastPosRef.current = {
      y: e.touches[0].clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = () => {
    if (isMobile === "large") return;

    setIsDragging(false);
    enableScroll();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isMobile === "large" || !isDragging) return;
    e.preventDefault();

    const now = Date.now();
    const deltaY = lastPosRef.current.y - e.touches[0].clientY;
    const deltaTime = now - lastPosRef.current.time;

    if (deltaTime > 0) {
      const sensitivity = 0.5;
      setRotation((prev) => prev + deltaY * sensitivity);
    }

    lastPosRef.current.y = e.touches[0].clientY;
    lastPosRef.current.time = now;
  };

  // Prevent iOS scroll manually
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (isDragging) e.preventDefault();
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isDragging]);

  // Auto rotation
  const startAutoRotation = () => {
    const autoSpeed = 0.3;
    const animate = () => {
      if (
        (isMobile === "large" && hoveredPlanet !== null) ||
        (isMobile !== "large" && isDragging)
      ) {
        animationRef.current = undefined;
        return;
      }

      setRotation((prev) => prev + autoSpeed);
      animationRef.current = requestAnimationFrame(animate);
    };

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isMobile === "large") return;
    if (isDragging) cancelAnimationFrame(animationRef.current);
    else startAutoRotation();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isDragging, isMobile]);

  useEffect(() => {
    startAutoRotation();
    return () => {
      cancelAnimationFrame(animationRef.current);
      enableScroll();
    };
  }, [hoveredPlanet, isMobile]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-[500px] h-[500px] md:mx-auto kwakbH",
        className
      )}
      {...(isMobile !== "large"
        ? {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
          }
        : {})}
    >
      {/* Sun in the center */}
      <Link
        href="/"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        onClick={() => beforeNavigate()}
      >
        <Image
          src="/footer-logo.svg"
          alt="logo"
          width={220}
          height={220}
          className="object-cover md:block hidden select-none"
          draggable={false}
        />
        <Image
          src="/smallIcon.svg"
          alt="Sun"
          width={sunSize}
          height={sunSize}
          className="pushlog block md:hidden select-none"
          draggable={false}
        />
      </Link>

      {/* Orbiting container */}
      <div
        ref={orbitWrapperRef}
        className="absolute top-1/2 left-1/2 orbit-wrapper"
        style={{
          width: radius * 2 + planetSize + 50,
          height: radius * 2 + planetSize + 50,
          marginLeft: -radius - planetSize / 2 - 25,
          marginTop: -radius - planetSize / 2 - 25,
          transform: `rotate(${rotation}deg)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
          overflow: isMobile === "large" ? "visible" : "hidden",
          borderRadius: isMobile === "large" ? "0px" : "50%",
        }}
      >
        {planets?.map((item, index) => {
          const position = getPlanetPosition(index, planets.length);
          return (
            <span
              key={index}
              className="absolute planet-container"
              style={{
                left: `calc(50% - ${planetSize / 2}px)`,
                top: `calc(50% - ${planetSize / 2}px)`,
                transform: `translate(${position.x}px, ${
                  position.y
                }px) rotate(${-rotation}deg)`,
                zIndex: 10 + index,
                transition: "transform 0.3s ease-out",
              }}
              onMouseEnter={() =>
                isMobile === "large" && setHoveredPlanet(index)
              }
              onMouseLeave={() =>
                isMobile === "large" && setHoveredPlanet(null)
              }
              onTouchStart={(e) => isMobile !== "large" && handleTouchStart(e)}
              onTouchEnd={() => isMobile !== "large" && handleTouchEnd()}
            >
              <Link
                href={item.link}
                className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-300 group select-none"
                onClick={() => beforeNavigate()}
              >
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={planetSize}
                  height={planetSize}
                  className="select-none pointer-events-none"
                  draggable={false}
                />
                <span className="text-[14px] capitalize sm:text-[16px] md:text-[18px] tracking-[2px] font-[400] select-none whitespace-pre-line">
                  {item.title.replace(/ /g, "\n")}
                </span>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

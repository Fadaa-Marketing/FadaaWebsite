"use client";
import { useState } from "react";
import Image from "next/image";
import LinkClient from "./shared/LinkClient";
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import ContactSidebar from "../(home)/components/ContactSidebar";
import { headerLinks } from "@/constant";

const Header = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="header-container z-50 shadow-xl md:shadow-none ">
        <LinkClient href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={166}
            height={100}
            className="w-[115px] xl:w-[166px]"
          />
        </LinkClient>
        <div className="header-links ">
          {headerLinks?.map((link) => (
            <LinkClient
              href={link.href}
              key={link.title}
              className={`header-links-style ${
                pathname === link.href ? "active-link-underline" : ""
              }  link-underline`}
            >
              {link.title}
            </LinkClient>
          ))}
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden block"
        >
          <IoMenuOutline className="h-10 w-10" />
        </button>
      </header>
      <ContactSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Header;

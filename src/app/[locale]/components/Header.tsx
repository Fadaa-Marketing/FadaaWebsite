"use client";
import { useState } from "react";
import Image from "next/image";
import LinkClient from "./shared/LinkClient";
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import ContactSidebar from "../(home)/components/ContactSidebar";
import { headerLinks } from "@/constant";
import { useTranslations } from "next-intl";
import SwitchLang from "./shared/SwitchLang";
const Header = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = useTranslations("nav");

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
          {headerLinks?.map((link) => {
            const key = link.title.toLowerCase().replace(/\s+/g, " ").trim();
            const map: Record<string, string> = {
              home: "home",
              "about us": "about",
              services: "services",
              portfolio: "portfolio",
              blogs: "blogs",
              "contact us": "contact",
              jobs: "jobs",
            };
            const i18nKey = map[key] || link.title;
            return (
              <LinkClient
                href={link.href}
                key={link.title}
                className={`header-links-style ${
                  pathname === link.href ? "active-link-underline" : ""
                }  link-underline`}
              >
                {t(i18nKey)}
              </LinkClient>
            );
          })}
        </div>
        <SwitchLang />
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkClient from "./shared/LinkClient";
import { PiPhone } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { getAllServices, getContactData } from "@/lib/api";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaGooglePlusG,
  FaWhatsapp,
  FaSnapchat,
  FaPhone,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuInstagram, LuMail } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import { getTranslations } from "next-intl/server";
import LinksClient from "./shared/LinkClient";

const SOCIAL_ICONS = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  dribbble: <FaDribbble />,
  linkedin: <FaLinkedinIn />,
  google: <FaGooglePlusG />,
  instagram: <LuInstagram />,
  whatsapp: <FaWhatsapp />,
  snapchat: <FaSnapchat />,
  phone: <FaPhone />,
  tiktok: <IoLogoTiktok />,
  youtube: <IoLogoYoutube />,
  x: <RiTwitterXLine />,
  gmail: <LuMail />,
} as const;

type SocialName = keyof typeof SOCIAL_ICONS;

const getSocialName = (iconClass: string): SocialName | undefined => {
  const lower = iconClass?.toLowerCase() || "";
  if (lower.includes("facebook")) return "facebook";
  if (lower.includes("twitter")) return "twitter";
  if (lower.includes("dribbble")) return "dribbble";
  if (lower.includes("linkedin")) return "linkedin";
  if (lower.includes("google-plus") || lower.includes("google"))
    return "google";
  if (lower.includes("instagram")) return "instagram";
  if (lower.includes("whatsapp")) return "whatsapp";
  if (lower.includes("snapchat")) return "snapchat";
  if (lower.includes("phone")) return "phone";
  if (lower.includes("tumblr")) return "tiktok";
  if (lower.includes("youtube")) return "youtube";
  if (lower.includes("x")) return "x";
  if (lower.includes("mail") || lower.includes("gmail")) return "gmail";
  return undefined;
};

export interface ServiceProps {
  title: string;
  link: string;
}
interface PropFoot {
  locale: string;
}
const Footer = async ({ locale }: PropFoot) => {
  const t = await getTranslations("footer");
  const concat = await getContactData();
  const contactData = locale === "ar" ? concat?.ar : concat?.en;
  const emails =
    contactData?.contact_mails?.split(",")?.map((e: string) => e.trim()) || [];
  const phones =
    contactData?.contact_numbers?.split(",")?.map((p: string) => p.trim()) ||
    [];

  const services = await getAllServices();

  const formattedServices: ServiceProps[] =
    services?.map((service: any) => ({
      title: locale === "ar" ? service?.title_ar : service?.title,
      link: `/services/${service?.slug}`,
    })) || [];

  return (
    <footer>
      <div className="footer-container pt-[100px] pb-[30px] bg-primary">
        {/* Logo + description */}
        <div>
          <LinkClient href="/">
            <Image
              src="/footer-logo.svg"
              alt="logo"
              width={195}
              height={195}
              className="footer-logo"
            />
          </LinkClient>
          <p className="footer-description footer-text">{t("description")}</p>
        </div>

        {/* Menu links */}
        <div>
          <h4 className="footer-title">{t("menu")}</h4>
          <ul className="space-y-2 footer-text">
            <li>
              <LinkClient href="/">{t("nav.home")}</LinkClient>
            </li>
            <li>
              <LinkClient href="/about">{t("nav.about")}</LinkClient>
            </li>
            <li>
              <LinkClient href="/services">{t("nav.services")}</LinkClient>
            </li>
            <li>
              <LinkClient href="/portfolio">{t("nav.portfolio")}</LinkClient>
            </li>
            <li>
              <LinkClient href="/blogs">{t("nav.blogs")}</LinkClient>
            </li>
            <li>
              <LinkClient href="/contact">{t("nav.contact")}</LinkClient>
            </li>
            <li>
              <LinkClient href="/jobs">{t("nav.jobs")}</LinkClient>
            </li>
          </ul>
        </div>

        {/* Services list */}
        <div>
          <h4 className="footer-title">{t("services")}</h4>
          <ul className="footer-services-list footer-text">
            {formattedServices?.length > 0
              ? formattedServices.map((service, idx) => (
                  <li key={idx} className="capitalize">
                    <LinksClient href={service.link}>
                      {service.title}
                    </LinksClient>
                  </li>
                ))
              : Object.entries(
                  t.raw("serviceList") as Record<string, string>
                ).map(([key, value]) => (
                  <li key={key} className="capitalize">
                    <LinksClient href={`/services/${key}`}>
                      {String(value)}
                    </LinksClient>
                  </li>
                ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="footer-title">{t("contact")}</h4>
          <div className="footer-contact-item footer-text flex items-start mb-3">
            <PiPhone className="mr-2" size={24} />
            <span className="flex flex-wrap gap-2">
              {phones?.map((phone: string, index: number) => (
                <a key={index} href={`tel:${phone || ""}`}>
                  <>
                    {phone}
                    {index < phones.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </>
                </a>
              ))}
            </span>
          </div>

          <div className="footer-contact-item footer-text flex items-start mb-3">
            <VscMail className="mr-2" size={24} />
            <span className="flex flex-wrap gap-2">
              {emails?.map((email: string, index: number) => (
                <a
                  key={index}
                  href={`mailto:${email || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <>
                    {email}
                    {index < emails.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </>
                </a>
              ))}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            {contactData?.social_links?.map((social: any) => {
              const socialName = getSocialName(social.icon);
              return (
                <Link
                  key={social.id}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialName ? (
                    SOCIAL_ICONS[socialName]
                  ) : (
                    <i className={social.icon} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center pt-2 text-white w-full text-sm md:text-[18px] leading-[120%]">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

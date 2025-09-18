import Image from "next/image";
import React from "react";
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

interface SocialItem {
  icon: string;
  url: string;
}

interface SocialImage {
  id: string | number;
  image_url: string;
}

interface SocialsProps {
  socialImages: SocialImage[];
  socialData: SocialItem[];
}

// Utility: Convert icon class to known key
const getSocialName = (iconClass: string): SocialName | undefined => {
  if (!iconClass) return undefined;

  const lowerClass = iconClass.toLowerCase();

  if (lowerClass.includes("facebook")) return "facebook";
  if (lowerClass.includes("twitter") && !lowerClass.includes("x"))
    return "twitter";
  if (lowerClass.includes("dribbble")) return "dribbble";
  if (lowerClass.includes("linkedin")) return "linkedin";
  if (lowerClass.includes("google-plus") || lowerClass.includes("google"))
    return "google";
  if (lowerClass.includes("instagram")) return "instagram";
  if (lowerClass.includes("whatsapp")) return "whatsapp";
  if (lowerClass.includes("snapchat")) return "snapchat";
  if (lowerClass.includes("phone")) return "phone";
  if (lowerClass.includes("tumblr")) return "tiktok";
  if (lowerClass.includes("youtube")) return "youtube";
  if (lowerClass.includes("x") || lowerClass.includes("twitter-x")) return "x";
  if (lowerClass.includes("mail") || lowerClass.includes("gmail"))
    return "gmail";

  return undefined;
};

// Utility: Format display label from key
const formatSocialName = (name: string) => {
  if (name === "x") return "Twitter X";
  if (name === "gmail") return "Gmail";
  if (name === "google") return "Google+";
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const Socials: React.FC<SocialsProps> = async ({
  socialImages,
  socialData,
}) => {
  const t = await getTranslations("socials");
  return (
    <section className="main-padding flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* Left Side */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 gap-10">
        <h2 className="secondary-title text-3xl sm:text-4xl lg:text-5xl leading-tight">
          <span>{t("followUs")}</span>
          <span className="text-secondary mx-2">{t("whatWeAreUpTo")}</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {socialData?.map((item, key) => {
            const socialName = getSocialName(item.icon);

            return (
              <a
                key={key}
                target="_blank"
                href={item?.url}
                rel="noopener noreferrer"
                className="flex items-center w-fit gap-3 font-aloevera"
              >
                <div className="p-3 bg-secondary text-primary rounded-full text-xl">
                  {socialName ? (
                    SOCIAL_ICONS[socialName]
                  ) : (
                    <i className={item.icon} />
                  )}
                </div>
                <p className="text-lg sm:text-xl">
                  {socialName
                    ? formatSocialName(socialName)
                    : item.icon
                        .split("fa-")[1]
                        ?.split(" ")[0]
                        ?.replace("-", " ")
                        ?.replace(/\b\w/g, (c) => c.toUpperCase()) || "Social"}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <Image
          src={"/jobs/team/3.jpeg"}
          alt="team"
          width={611}
          height={284}
          className="rounded-[20px] w-full h-[284px] object-cover"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={"/jobs/team/1.jpeg"}
              alt="team"
              width={200}
              height={200}
              className="rounded-[20px] w-full h-[200px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/jobs/team/2.jpeg"}
              alt="team"
              width={200}
              height={200}
              className="rounded-[20px] w-full h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;

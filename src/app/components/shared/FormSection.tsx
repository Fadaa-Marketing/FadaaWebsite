import FormFields from "./FormFields";
import LinkClient from "./LinkClient";
import { getContactData } from "@/lib/api";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
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

type SocialName = keyof typeof SOCIAL_ICONS;

// Social icons mapping with proper typing
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

// Update getSocialName to return SocialName or undefined
const getSocialName = (iconClass: string): SocialName | undefined => {
  if (!iconClass) return undefined;

  const lowerClass = iconClass.toLowerCase();

  if (lowerClass.includes("facebook")) return "facebook";
  if (lowerClass.includes("twitter")) return "twitter";
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
  if (lowerClass.includes("x")) return "x";
  if (lowerClass.includes("mail") || lowerClass.includes("gmail"))
    return "gmail";

  return undefined;
};

const FormSection = async ({
  firstClass = "bg-primary relative bg-[url('/form-bg.png')] bg-cover bg-center",
  secondClass = "bg-[#1d042fce] bg-opacity-60 z-10",
}) => {
  const contactData = await getContactData();

  // Split contact information into arrays
  const emails =
    contactData?.contact_mails
      ?.split(",")
      ?.map((email: string) => email.trim()) || [];
  const phones =
    contactData?.contact_numbers
      ?.split(",")
      ?.map((phone: string) => phone.trim()) || [];
  const addresses =
    contactData?.contact_addresses
      ?.split("\r\n")
      ?.map((address: string) => address.trim()) || [];

  const contactInfo = [
    {
      icon: HiOutlinePhone,
      title: "Call Us",
      items: phones,
    },
    {
      icon: HiOutlineMail,
      title: "Email Us",
      items: emails,
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Visit Us",
      items: addresses,
    },
  ];

  return (
    <section className={firstClass}>
      <div
        className={`flex flex-col-reverse md:flex-row justify-between items-start main-padding gap-12 md:gap-0 ${secondClass}  `}
      >
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-6 md:gap-12">
          <div className="hidden md:flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-left">
            <h2 className="secondary-title">
              {contactData?.contact_form_title || "Contact Us"}
            </h2>
            <p className="main-text">{contactData?.contact_form_subtitle}</p>
          </div>
          <div className="space-y-6 md:space-y-8 text-white w-full">
            {contactInfo?.map((section, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="p-2 rounded-full">
                  <section.icon size={24} className="text-white" />
                </span>
                <div className="space-y-2 mt-2">
                  {section.items?.map((item: string, i: number) => {
                    let href = "#";
                    if (section.title.toLowerCase().includes("call")) {
                      href = `tel:${item}`;
                    } else if (section.title.toLowerCase().includes("email")) {
                      href = `mailto:${item}`;
                    }

                    return (
                      <div key={i}>
                        {href !== "#" ? (
                          <a
                            href={href}
                            className="text-[#E0E0E0] hover:text-white transition-colors"
                          >
                            {item}
                          </a>
                        ) : (
                          <p className="text-[#E0E0E0]">{item}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {contactData?.social_links?.map((social: any) => {
              const socialName = getSocialName(social.icon);
              return (
                <LinkClient
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
                </LinkClient>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-left mb-6  md:hidden">
            <h2 className="secondary-title">
              {contactData?.contact_form_title || "Contact Us"}
            </h2>
            <p className="main-text">{contactData?.contact_form_subtitle}</p>
          </div>
          <FormFields />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

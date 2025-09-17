"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const allowedLocales = ["en", "ar"] as const;
type Locale = (typeof allowedLocales)[number];

export default function LanguageSwitcher({
  closeNavbar,
}: {
  closeNavbar?: () => void;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const cleanPathname = pathname.replace(/^\/(en|ar)/, "") || "/";

  const handleSwitch = () => {
    const newLocale: Locale = locale === "en" ? "ar" : "en";
    router.push(`/${newLocale}${cleanPathname}`);
    closeNavbar?.();
  };

  return (
    <button onClick={handleSwitch} className="header-links-style  link-underline">
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}

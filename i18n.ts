import { notFound } from "next/navigation";
import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";

export const locales = ["en", "ar"];

export default getRequestConfig(async (params: GetRequestConfigParams) => {
  const { locale } = params;
  if (!locale || !locales.includes(locale as "en" | "ar")) notFound();
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./components";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import GlobalErrorHandler from "./components/GlobalErrorHandler";
import CustomRouteProgress from "./components/CustomRouteProgress";
import MetadataHandler from "./components/MetadataHandler";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../../i18n/routing";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Home",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default async function localeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    [];
  }

  const messages = await getMessages({ locale: locale as "en" | "ar" });

  return (
    <html
      lang={locale || "en"}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <MetadataHandler />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="Dy_pDaBRSk5R6Le1tDWWKdanoIPszKOdsqBsBSpcYJQ"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* GTM */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-557MN957');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZL9DKX0G1C"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZL9DKX0G1C');
          `}
        </Script>
        <Script id="fb-token">
          {`
            const fbAccessToken = "EAAOpZBu6zpWYBOz2NzEnkZBf13I1HFet6ZAZCzb4xDpfZBkcrO03Q9ZCadhHpaZC9Eo6LtSVkxbxTKGenxsUqZBtGreZBVHZCejcZBURBmAV0L2UcQo4PTv2ywD86B0z1QMSvL8ufoNzTyO8MVcUbiY6HOnYRxBTZADeq9cVvCddfJVl6dhYSIe12C6uiAIwg0dScgZDZD";
          `}
        </Script>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        />
      </head>
      <body className={locale === "ar" ? "font-arabic" : "font-aloevera"}>
        <NextIntlClientProvider messages={messages}>
          <GlobalErrorHandler>
            <CustomRouteProgress />
            <Header />
            {children}
            <Footer locale={locale} />
            <Toaster />
          </GlobalErrorHandler>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import {
  AboutSection,
  Blogs,
  Clients,
  Counter,
  HeroSection,
  Purpose,
  Services,
} from "../components";
import FormSection from "../components/shared/FormSection";
import Portfolio from "./components/Portfolio";
import { getTranslations } from "next-intl/server";

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = params;
  const t = await getTranslations("home");

  return (
    <div className="overflow-hidden">
      <h1 className="hidden">{t("h1")}</h1>
      <HeroSection />
      <Counter />
      <AboutSection locale={locale} />
      <Purpose />
      <Services locale={locale} />
      <Portfolio />
      <Clients />
      <Blogs locale={locale} />
      <FormSection locale={locale} firstClass="bg-primary" secondClass="" />
    </div>
  );
}

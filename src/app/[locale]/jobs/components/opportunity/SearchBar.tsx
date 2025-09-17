"use client";

import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const t = useTranslations("JobsPage.SearchBar");

  return (
    <div className="relative w-full">
      <CiSearch className="absolute text-[#3C3C4399] top-1/2 -translate-y-1/2 left-4 text-lg font-semibold" />
      <Input
        placeholder={t("placeholder")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="placeholder:text-[#3C3C4399] bg-white w-full text-primary text-lg font-normal py-6 pl-12 pr-4 rounded-lg"
      />
    </div>
  );
};

export default SearchBar;

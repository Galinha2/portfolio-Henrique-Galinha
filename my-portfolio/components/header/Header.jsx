"use client";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.header.nav : contentPt.header.nav;

  return (
    <header className="shadow-new fixed top-5 inset-x-0 mx-auto flex gap-4 border-black p-4 px-8 text-[0.9em] rounded-full w-85">
      {headerContent.map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
      ))}
      <LanguageSelector />
    </header>
  );
}

export default Header;
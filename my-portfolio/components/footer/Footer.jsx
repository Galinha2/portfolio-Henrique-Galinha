"use client";

import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "@/components/LanguageContext";

function Footer() {
  const { language } = useLanguage();
  const headerContent =
    language === "En" ? contentEn.footer : contentPt.footer;

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full text-center p-5 border-t-1 border-[var(--horizontal-line)] bg-[var(--gray)] text-[var(--text-black)]">
      <p>{`© ${year} ${headerContent}`}</p>
    </footer>
  );
}

export default Footer;
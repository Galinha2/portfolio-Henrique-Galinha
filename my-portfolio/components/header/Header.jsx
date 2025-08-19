"use client";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";

function Header() {
  const { language } = useLanguage();
  const headerContent =
    language === "En" ? contentEn.header.nav : contentPt.header.nav;

  return (
    <header className="z-100 shadow-new fixed top-5 inset-x-0 mx-auto flex gap-4 border-black p-3 px-5 text-[0.9em] rounded-full w-82">
      <div className="flex gap-0">
        {headerContent.map((item) => (
          <Link
            className="hover:bg-[var(--yellow)] hover:text-white rounded-full px-2 py-1"
            key={item}
            href={
              document?.getElementById(
                contentEn.header.nav[headerContent.indexOf(item)].toLowerCase()
              )
                ? `/#${contentEn.header.nav[
                    headerContent.indexOf(item)
                  ].toLowerCase()}`
                : "/"
            }
          >
            {item}
          </Link>
        ))}
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;

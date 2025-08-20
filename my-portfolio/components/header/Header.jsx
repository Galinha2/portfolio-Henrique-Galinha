"use client";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const { language } = useLanguage();
  const headerContent =
    language === "En" ? contentEn.header.nav : contentPt.header.nav;
  const router = useRouter();

  const handleClick = (e, id) => {
    e.preventDefault(); // impedir o comportamento normal do link
    const element = document.getElementById(id);
    if (element) {
      // Se existir, faz scroll até ao elemento
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Se não existir, redireciona para /#home
      router.push("/#home");
    }
  };

  return (
    <header className="z-100 shadow-new fixed top-5 inset-x-0 mx-auto flex gap-4 border-black p-3 px-5 text-[0.9em] rounded-full w-82">
      <div className="flex gap-0">
        {headerContent.map((item) => {
          const id = item.toLowerCase();

          return (
            <a
              className="hover:bg-[var(--yellow)] hover:text-white rounded-full px-2 py-1 cursor-pointer"
              key={item}
              onClick={(e) => handleClick(e, id)}
            >
              {item}
            </a>
          );
        })}
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;
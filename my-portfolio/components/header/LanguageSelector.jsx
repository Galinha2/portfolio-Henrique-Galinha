"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLanguage } from "@/components/LanguageContext";

function LanguageSelector() {
  const {language, setLanguage} = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

   const handleChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <button
      className="absolute items-center text-center text-white shadow-md cursor-pointer top-4 right-15"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex text-white m-center bg-[var(--text-black)] w-11 px-2 pr-1 rounded-[12px] py-0 absolute z-10 gap-0.5 items-center hover:py-1 hover:mt-[-4] hover:bg-[var(--yellow)]">
        {language}
        {!isOpen ? (<IoIosArrowDown />) : (<IoIosArrowUp />)}
      </div>
      {isOpen && (
        <ul className="bg-[var(--gray-transparent)] w-11 shadow-md z-0 text-[var(--text-black)] absolute top-3 left-0 rounded-b-[12px]">
          <li className="mt-3 langButton" onClick={() => handleChange("En")}>En</li>
          <li className="langButton" onClick={() => handleChange("Pt")}>Pt</li>
        </ul>
      )}
    </button>
  );
}

export default LanguageSelector;

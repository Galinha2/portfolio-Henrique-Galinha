import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import FeaturedProjectBox from "./FeaturedProjectBox";

function Featured() {
  const { language } = useLanguage();
  const headerContent =
    language === "En" ? contentEn.featuredWorks : contentPt.featuredWorks;

  return (
    <div className="bg-[var(--text-black)] h-320 md:h-230 lg:h-140 text-center p-8 sm:p-10 md:p-13 w-full">
      <h4 className="text-xl text-white sm:text-2xl md:text-3xl">{headerContent.title}</h4>

      <div className="grid items-start justify-center grid-cols-1 gap-10 py-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        <FeaturedProjectBox />
      </div>
    </div>
  );
}

export default Featured;

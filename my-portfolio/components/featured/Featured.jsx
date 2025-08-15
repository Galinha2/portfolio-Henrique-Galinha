import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import FeaturedProjectBox from "./FeaturedProjectBox";

function Featured() {
  const { language } = useLanguage();
  const headerContent =
    language === "En" ? contentEn.featuredWorks : contentPt.featuredWorks;

  return (
    <div className="bg-[var(--text-black)] text-center p-8 sm:p-10 md:p-13 w-full">
      <h4 className="text-white text-xl sm:text-2xl md:text-3xl">{headerContent.title}</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center py-5 mt-5">
        <FeaturedProjectBox />
      </div>
    </div>
  );
}

export default Featured;

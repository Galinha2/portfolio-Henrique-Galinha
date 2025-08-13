import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import ProjectBox from "./ProjectBox";

function Featured() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.featuredWorks : contentPt.featuredWorks;

  return (
    <div className="bg-[var(--text-black)] text-center p-13 pb-20">
        <h4 className="text-white">{headerContent.title}</h4>
        
        <div className="flex gap-10 items-center justify-center h-60 flex-wrap mt-5">
            <ProjectBox />
        </div>
    </div>
  )
}

export default Featured;

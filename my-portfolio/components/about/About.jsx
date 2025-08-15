import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import Images from "./Images";

function About() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.about : contentPt.about;

  return (
    <div
      id="about"
      className="flex flex-col bg-[var(--text-black)] items-center justify-center min-h-screen w-full px-4 sm:px-10 md:px-20 py-10"
    >
      <div className="flex flex-col items-center w-full">
        <h4 className="text-xl sm:text-2xl md:text-3xl text-white">
          {headerContent.title}
        </h4>
        <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20 items-center justify-center mt-10">
          <Images />
          <p className="font-[900] text-[1em] sm:text-[1.1em] md:text-[1.3em] text-justify w-auto lg:min-w-80 lg:max-w-250 lg:w-auto text-white mt-5 lg:mt-0 whitespace-pre-line">
            {headerContent.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

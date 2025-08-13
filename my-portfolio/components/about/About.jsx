import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import Images from "./Images";

function about() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.about : contentPt.about;

  return (
    <div
      id="about"
      className="flex-col bg-[var(--text-black)] text-center items-center justify-center h-screen w-screen pt-20"
    >
      <h4 className="">{headerContent.title}</h4>
      <div className="flex flex-row w-full h-full gap-10 items-center justify-center mt-[-80px]">
        <div className="flex w-fit">
            <Images />
        </div>
        <p
          className="font-[900] text-[1.3em] text-justify w-auto max-w-[700px] text-white"
          style={{ whiteSpace: "pre-line" }}
        >
          {headerContent.description}
        </p>
      </div>
    </div>
  );
}

export default about;

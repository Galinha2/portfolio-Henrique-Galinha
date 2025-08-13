import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import UserPhoto from "./UserPhoto";
import { useLanguage } from "../LanguageContext";
import QuickInfo from "./QuickInfo";

function Home() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.hero : contentPt.hero;

  return (
    <div className="p-5 w-screen">
      <div className="flex w-screen items-center max-w-300 m-auto">
        <QuickInfo title={headerContent.designerTitle} text={headerContent.designer} />

        <div className="m-auto">
          <UserPhoto />
          <h3 className="text-center text-[2em] text-[var(--text-black)]">
            {headerContent.greeting}
          </h3>
          <h2 className="text-center text-[2em] font-black text-[var(--yellow)]">
            {headerContent.name}
          </h2>
        </div>

          <QuickInfo title={headerContent.developerTitle} text={headerContent.developer} />
      </div>
    </div>
  );
}

export default Home;

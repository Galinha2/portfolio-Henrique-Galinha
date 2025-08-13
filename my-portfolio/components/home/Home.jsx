import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import UserPhoto from "./UserPhoto";
import { useLanguage } from "../LanguageContext";
import QuickInfo from "./QuickInfo";

function Home() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.hero : contentPt.hero;

  return (
    <div className="px-5 w-screen">
      <div id="home" className="flex m-auto w-screen items-center justify-between h-screen max-w-300">
        <QuickInfo
          title={headerContent.designerTitle}
          text={headerContent.designer}
        />
        <UserPhoto />
        <QuickInfo
          title={headerContent.developerTitle}
          text={headerContent.developer}
          align={"right"}
        />
      </div>
    </div>
  );
}

export default Home;

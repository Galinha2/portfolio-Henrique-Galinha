import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import UserPhoto from "./UserPhoto";
import { useLanguage } from "../LanguageContext";
import QuickInfo from "./QuickInfo";

function Home() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.hero : contentPt.hero;

  return (
    <div className="w-auto px-5 min-w-screen ">
      <div id="home" className="flex flex-col items-center justify-between w-full h-auto min-h-screen gap-20 px-20 pb-20 m-auto lg:gap-5 pt-50 lg:pb-0 lg:pt-0 lg:flex-row max-w-350">
        <div className="order-2 lg:order-0">
            <QuickInfo
              title={headerContent.designerTitle}
              text={headerContent.designer}
            />
        </div>
        <div className="order-1 lg:order-0">
            <UserPhoto />
        </div>
        <div className="order-3 lg:order-0">
            <QuickInfo
              title={headerContent.developerTitle}
              text={headerContent.developer}
              align={"right"}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;

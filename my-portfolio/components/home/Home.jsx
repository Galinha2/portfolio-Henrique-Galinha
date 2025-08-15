import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import UserPhoto from "./UserPhoto";
import { useLanguage } from "../LanguageContext";
import QuickInfo from "./QuickInfo";

function Home() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.hero : contentPt.hero;

  return (
    <div className="px-5 w-auto min-w-screen ">
      <div id="home" className="flex px-20 gap-20 pt-50 pb-20 lg:pb-0 lg:pt-0 flex-col lg:flex-row m-auto w-full items-center justify-between h-auto min-h-screen max-w-300">
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

"use client";

import WebsiteProjects from "@/components/website-designs/WebsiteProjects";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import WebHeader from "@/components/website-designs/WebHeader";
import { useLanguage } from "../../components/LanguageContext";

function Page() {
  const { language } = useLanguage();
  const data = language === "En" ? contentEn.websiteDesign : contentPt.websiteDesign;

  return (
    <div className="mb-20">
        <WebHeader />
    
      <div className="flex flex-col gap-20">
          {Object.values(data).map((info, index) => (
            <div key={index}>
              <WebsiteProjects data={info} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Page;
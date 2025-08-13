import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";

function ProjectBox() {
  const { language } = useLanguage();
  const headerContent =
    language === "En"
      ? contentEn.featuredWorks.projects
      : contentPt.featuredWorks.projects;

  const content = [
  {
    name: headerContent[0].name,
    img: "/frotgestweb.png",
    description: headerContent[0].description,
    link: "https://www.frotgest.com",
    style: { backgroundImage: "linear-gradient(to right, #FF2E2E, #991C1C)" },
  },
  {
    name: headerContent[1].name,
    img: "/simon.png",
    description: headerContent[1].description,
    link: "...",
    style: { backgroundImage: "linear-gradient(to right, #1B998B, #09332E)" },
  },
  {
    name: headerContent[2].name,
    img: "/logo design.png",
    description: headerContent[2].description,
    link: "",
    style: { backgroundImage: "linear-gradient(to right, #485696, #171C30)" },
  },
];

  return (
    <>
      {content.map((item, index) => (
        <div
          key={index}
          className="h-[215px] w-[345px] text-white font-bold rounded-[25px]"
          style={item.style}
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-35 bg-white object-cover rounded-t-[25px]"
          />
          <div className="pt-1">
              <p className="text-2xl">{item.name}</p>
              <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectBox;

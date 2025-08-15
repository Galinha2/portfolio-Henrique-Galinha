/* Stack component: technology stacks with overlay description */
import { useState } from "react";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import { GoDotFill } from "react-icons/go";

function Stack() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.stacks : contentPt.stacks;
  const [description, setDescription] = useState(0);

  const stacks = [
    { name: 1, description: "JavaScript" },
    { name: 2, description: "Bootstrap" },
    { name: 3, description: "EJS" },
    { name: 4, description: "jQuery" },
    { name: 5, description: "React" },
    { name: 6, description: "Next.js" },
    { name: 7, description: "Node.js Express.js" },
    { name: 8, description: "HTML" },
    { name: 9, description: "CSS" },
    { name: 10, description: "Python" },
    { name: 11, description: "MySQL" },
    { name: 12, description: "PostgreSQL" },
    { name: 13, description: "Tailwind CSS" },
  ];

  return (
    <div className="m-auto text-center bg-[var(--gray)] p-10 pt-6 border-t-1 border-[var(--horizontal-line)]">
      <h1 className="pb-4">{headerContent.title}</h1>

      <div className="flex flex-wrap w-full max-w-[1000px] mx-auto items-center justify-center">
        {stacks.map((stack) => (
          <div key={stack.name} className="relative flex flex-col items-center">
            {/* Descrição como overlay absoluta */}
            {description === stack.name && (
              <>
                <div className="absolute -top-19 w-32 bg-[var(--gray-transparent)] shadow-new h-13 rounded-[25px] p-2 flex items-center justify-center z-20">
                  <p className="font-bold text-[var(--text-black)] text-center">
                    {stack.description}
                  </p>
                </div>
                <GoDotFill className="absolute -top-5 text-white z-30 drop-shadow-[2px_2px_4px_var(--orange-user-icon)]" />
              </>
            )}

            {/* Imagem permanece fixa */}
            <div
              className={`w-fit flex mx-2 hover:my-[-4px] hover:mx-[4px] cursor-pointer ${
                description === stack.name ? "animated-border" : ""
              }`}
              onClick={() =>
                stack.name === description
                  ? setDescription(0)
                  : setDescription(stack.name)
              }
            >
              <img
                className="w-13 hover:w-15 z-10"
                src={`/image ${stack.name}.png`}
                alt="user stacks"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
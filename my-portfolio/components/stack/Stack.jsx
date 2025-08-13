/* Stack component: Displays a list of technology stacks with clickable icons and descriptions */
import { useState } from "react";
import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import { GoDotFill } from "react-icons/go";

function Stack() {
  const { language } = useLanguage();
  const headerContent = language === "En" ? contentEn.stacks : contentPt.stacks;
  // State to track which stack is currently selected (0 means none)
  const [description, setDescription] = useState(0);

  // List of available technology stacks with id and description
  const stacks = [
    {
      name: 1,
      description: "JavaScript",
    },
    {
      name: 2,
      description: "Bootstrap",
    },
    {
      name: 3,
      description: "EJS",
    },
    {
      name: 4,
      description: "jQuery",
    },
    {
      name: 5,
      description: "React",
    },
    {
      name: 6,
      description: "Next.js",
    },
    {
      name: 7,
      description: "Node.js Express.js",
    },
    {
      name: 8,
      description: "HTML",
    },
    {
      name: 9,
      description: "CSS",
    },
    {
      name: 10,
      description: "Python",
    },
    {
      name: 11,
      description: "MySQL",
    },
    {
      name: 12,
      description: "PostgreSQL",
    },
    {
      name: 13,
      description: "Tailwind CSS",
    },
  ];

  return (
    <div className="m-auto text-center bg-[var(--gray)] p-10 pt-6">
      <h1 className="pb-4">{headerContent.title}</h1>

      <div className="flex h-20 m-auto w-fit max-w-300 items-center justify-center">
        {/* Loop through stacks array to render each stack icon and optional description */}
        {stacks.map((stack, index) => (
          <div key={stack.name} className="flex flex-col">
            {/* If this stack is selected, show its description in a shadow box and a dot icon below */}
            {description === stack.name && (
              <>
                <div className="flex absolute top-268 ml-[-25px] shadow-new rounded-[25px] h-15 w-30 items-center justify-center">
                  <p className="font-bold text-[var(--text-black)]">
                    {stack.description}
                  </p>
                </div>
                <GoDotFill className="filter absolute top-284 ml-7 drop-shadow-[2px_2px_4px_var(--orange-user-icon)] text-white" />
              </>
            )}

            {/* Clickable stack icon, toggles selection on click */}
            <div className={`inline-block mx-2 ${description === stack.name ? 'animated-border' : ''} cursor-pointer hover:mx-[4]`}>
              <img
                onClick={() =>
                  stack.name === description
                    ? setDescription(0)
                    : setDescription(stack.name)
                }
                className="z-1 w-13 hover:w-15"
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

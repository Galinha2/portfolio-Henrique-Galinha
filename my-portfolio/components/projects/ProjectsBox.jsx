import Link from "next/link";
import { useState } from "react";

function ProjectsBox({ image, name, description, link, target, stacks, title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
  href={link}
  target={target}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="flex flex-col border-2 border-[var(--horizontal-line)] text-center items-center justify-center p-4 rounded-[25px] w-full min-h-[235px] gap-2 transition-transform duration-300 hover:scale-102 hover:mb-[-20px] transform-gpu origin-center"
>
      {!hovered ? (
        ""
      ) : (
        <div className="animated-border hovered top-[-25px] absolute shadow-new flex px-5 py-1 gap-5 items-center justify-center">
          <p className="text-[var(--yellow)] font-black text-[1.3em]">{title}</p>
          <div className="flex flex-wrap items-center justify-start gap-2">
            {stacks.map((stack, index) => (
              <img className="w-10" key={index} src={stack} alt="Stack Icon"></img>
            ))}
          </div>
        </div>
      )}
      <img className="w-auto max-w-20" src={image} alt="Project Logo" />
      <div>
        <h5 className="text-[var(--text-black)]">{name}</h5>
        <p className="text-[var(--text-gray)]">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectsBox;

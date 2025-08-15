import Link from "next/link";

function ProjectsBox({ image, name, description, link, target }) {
  return (
    <Link
      href={link}
      target={target}
      className="flex flex-col border-2 border-[var(--horizontal-line)] text-center items-center justify-center p-4 rounded-[25px] w-full h-[235px] hover:h-[245px] hover:mt-[-10px] gap-2"
    >
      <img className="w-20" src={image} alt="Project Logo" />
      <div>
          <h5 className="text-[var(--text-black)]">{name}</h5>
          <p className="text-[var(--text-gray)]">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectsBox;

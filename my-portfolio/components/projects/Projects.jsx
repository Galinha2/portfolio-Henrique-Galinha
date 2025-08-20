import contentEn from "../../assets/contentEn.json";
import contentPt from "../../assets/contentPt.json";
import { useLanguage } from "../LanguageContext";
import ProjectsBox from "./ProjectsBox";

function Projects() {
  const { language } = useLanguage();
  const headerContent =
    language === "En" ? contentEn.projectsSection : contentPt.projectsSection;
  const projectsContent =
    language === "En"
      ? contentEn.projectsSection.projects
      : contentPt.projectsSection.projects;
  const titleContent =
    language === "En"
      ? contentEn.projectsSection
      : contentPt.projectsSection;

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-screen min-h-screen gap-0 px-5 py-20 m-auto lg:px-20"
    >
      <div className="self-center w-full text-left">
        <h1>{headerContent.title}</h1>
        <h5 className="text-[var(--text-black)]">{headerContent.subtitle}</h5>
      </div>
      <div className="grid items-start w-full grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">
        {projectsContent.map((project, index) => (
            <ProjectsBox
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                image={project.image}
                target={project.target}
                stacks={project.stacks}
                title={titleContent.stackTitle}
            />
        ))}
      </div>
    </div>
  );
}

export default Projects;

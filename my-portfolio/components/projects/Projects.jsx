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

  return (
    <div
      id="projects"
      className="min-h-screen py-20 w-screen px-5 lg:px-20 m-auto flex flex-col items-center justify-center gap-0"
    >
      <div className="text-left self-center w-full">
        <h1>{headerContent.title}</h1>
        <h5 className="text-[var(--text-black)]">{headerContent.subtitle}</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 w-full items-center">
        {projectsContent.map((project, index) => (
            <ProjectsBox
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                image={project.image}
                target={project.target}
            />
        ))}
      </div>
    </div>
  );
}

export default Projects;

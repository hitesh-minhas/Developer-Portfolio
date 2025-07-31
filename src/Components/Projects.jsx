import ProjectCard from "./ProjectCard";
import PagesHeading from "./PagesHeading";
import useProjects from "../Hooks/useProjects";

const Projects = () => {
  //Getting projects from UseProjects custom hook
  const projects = useProjects();

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
        <PagesHeading
          title={"See What I've Built"}
          description={`Each project is a story of problems solved and lessons learned`}
        />
        {/* Project Grid  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center grid-auto-rows-[minmax(300px,auto)] gap-6 pb-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

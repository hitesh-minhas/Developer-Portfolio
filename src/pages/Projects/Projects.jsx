import { useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import PagesHeading from "../../Components/PagesHeading";
import useProjects from "../../Hooks/useProjects";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Projects = () => {

  //Getting projects from UseProjects custom hook
  const { loading, projects } = useProjects();
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    if (!loading && projects.length > 0) {
      // Preloading images so that content doesn't just pop up on screen
      const imagePromises = projects.map(project => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = project.image;
          img.onload = resolve;
          img.onerror = resolve; // Also resolve on error to prevent hanging
        });
      });
      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    }
  }, [loading, projects]);

  // if (loading || !imagesLoaded) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
        {/* Loading overlay */}
        {(loading || !imagesLoaded) && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-80">
            <LoadingSpinner />
          </div>
        )}

        {/* Content  */}
        {!(loading || !imagesLoaded) && (
          <>
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
          </>
        )}
      </section>
    </>
  );
};

export default Projects;

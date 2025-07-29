import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import PagesHeading from './PagesHeading'
import useProjects from '../Hooks/useProjects';

const Projects = () => {

  //Id to recognise which project is expanded
  const [expandedCardId, setExpandedCardId] = useState(null);

  //Getting projects from UseProjects custom hook
  const projects = useProjects()

  const handleCardExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <>
      <div className="border-2 bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
        <PagesHeading title={"See What I've Built"} description={`Each project is a story of problems solved and lessons learned`} />
        {/* Project Grid  */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center grid-auto-rows-[minmax(300px,auto)] gap-6'>
          {
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedCardId === project.id}
                onExpand={() => handleCardExpand(project.id)}
              />
            ))}
        </div>


      </div>
    </>
  )
}

export default Projects
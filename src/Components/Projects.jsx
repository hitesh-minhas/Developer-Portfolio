import React from 'react'
import ProjectCard from './ProjectCard'
import PagesHeading from './PagesHeading'

const Projects = () => {
  return (
    <>
      <div className="ProjectsContainer border-2 bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
        <PagesHeading title={"See What I've Built"} description={`Each project is a story of problems solved and lessons learned`} />
        <ProjectCard />
      </div>
    </>
  )
}

export default Projects
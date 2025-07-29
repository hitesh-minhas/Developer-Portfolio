import React, { useState } from 'react';
import {
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiGithub,
    SiFlask,
    SiTailwindcss
} from 'react-icons/si';

import { FaCss3Alt } from "react-icons/fa";
import { CgLogIn } from 'react-icons/cg';



const ProjectCard = ({ project, isExpanded, onExpand }) => {
    // const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`w-[300px] min-h-80 m-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg hover:shadow-lg hover:shadow-blue-900/20 hover:scale-[1.03] transition-transform duration-300 p-4 relative ${isExpanded ? 'z-10' : ''}`} >

            {/* <div className="w-[300px] min-h-80 m-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 hover:scale-[1.03] transition-transform duration-300 p-4"> */}

            {/* Image with GitHub Button */}
            <div className="relative w-full h-40 overflow-hidden group ">
                <img
                    src={project.image}
                    className="object-cover w-full h-full group-hover:opacity-80 transition-opacity border border-gray-600"
                />
                <a
                    href={project.github}
                    className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-xs font-medium flex gap-1 items-center justify-around"
                    target='_blank'
                >
                    <SiGithub /> Code
                </a>
            </div>

            {/* Project Info */}
            <h1 className="text-lg font-semibold text-white mt-3 ">
                {project.title}
            </h1>
            <p className="text-sm text-gray-300 mt-1 text-justify">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3 items-center">
                <span className="text-xs text-gray-400">Tech:</span>
                <SiHtml5 className="text-orange-500" title="HTML5" />
                <SiReact className="text-blue-400" title="React" />
                <SiJavascript className="text-yellow-300" title="JavaScript" />
                <SiPython className="text-blue-300" title="Python" />
                <SiNodedotjs className="text-green-500" title="Node.js" />
            </div>

            {/* Expandable Section */}
            <button
                onClick={onExpand}
                className="text-blue-400 hover:text-blue-300 text-sm mt-3 flex items-center cursor-pointer"
            >
                {isExpanded ? 'Show Less' : 'Show More'} ▼
            </button>

            {
                isExpanded && (
                    <div className="mt-2 p-1 w-full">

                        <div className='w-full text-xs text-gray-300'>
                            <h3 className='text-sm text-blue-300'>Role</h3>
                            <p className='text-justify p-1'>
                                {project.role}
                            </p>
                        </div>
                        <div className='w-full text-xs text-gray-300'>
                            <h3 className='text-smx` text-blue-300'>Features</h3>
                            <ul className="text-xs text-gray-300 list-disc pl-5 space-y-1">
                                {
                                    project.features.map((feature, index) => <li key={index}>{feature}</li>)
                                }

                            </ul>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default ProjectCard;
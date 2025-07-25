import React, { useState } from 'react';
import {
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiGithub,
} from 'react-icons/si';

const ProjectCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-[300px] min-h-80 m-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 hover:scale-[1.03] transition-transform duration-300 p-4 border-2 border-white">
            {/* Image with Live Demo Button */}
            <div className="relative w-full h-40 overflow-hidden group ">
                <img
                    src="https://imgs.search.brave.com/lARQypRZ5RZ7qj2k20dFowdjV-NYTf0BEl2RM2leyLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rbm93/bGVkZ2UuaHVic3Bv/dC5jb20vaHViZnMv/YmVzdC1odG1sNS1h/ZG1pbi1kYXNoYm9h/cmQtdGVtcGxhdGVz/LTQtMjAyNDA4MjMt/NzI3NDkyNC53ZWJw"
                    alt="AI Plant Detection System"
                    className="object-cover w-full h-full group-hover:opacity-80 transition-opacity"
                />
                <a
                    href="#live-demo-url"
                    className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-xs font-medium"
                >
                    Live Demo
                </a>
            </div>

            {/* Project Info */}
            <h1 className="text-lg font-semibold text-white mt-3 ">
                AI-Based Plant Detection System
            </h1>
            <p className="text-sm text-gray-300 mt-1 text-justify">
                AI system that identifies plants from images and provides detailed information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ipsa?
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
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-400 hover:text-blue-300 text-sm mt-3 flex items-center cursor-pointer"
            >
                {isExpanded ? 'Show Less' : 'Show More'} ▼
            </button>

            {isExpanded && (
                <div className="mt-3 pt-3 border-t border-gray-700">
                    <ul className="text-xs text-gray-300 list-disc pl-5 space-y-1">
                        <li>Image classification using TensorFlow</li>
                        <li>Responsive mobile-first UI</li>
                        <li>Deployed on Vercel</li>
                    </ul>
                    <div className="flex gap-3 mt-3">
                        <a
                            href="#github-url"
                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                        >
                            <SiGithub /> Code
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
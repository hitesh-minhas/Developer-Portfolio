import { SiGithub } from "react-icons/si";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-[300px] min-h-80 m-4 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 hover:scale-[1.03] transition-all duration-300 p-4 group">
            {/* Image with GitHub Button */}
            <div className="relative w-full h-40 overflow-hidden rounded-md">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full group-hover:opacity-90 transition-opacity duration-300 border border-gray-600/50 bg-gray-850 "
                // cover nu contain kita wa te bg-gray-700 add kita wa 
                />
                <a
                    href={project.github}
                    className="absolute top-2 right-2 bg-gray-900/80 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium flex gap-1 items-center transition-all duration-200 border border-gray-600 hover:border-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiGithub className="text-lg" /> View Code
                </a>
            </div>

            {/* Project Info */}
            <div className="mt-4 space-y-3">
                <h1 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                </h1>

                <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-3">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-2">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium rounded-md bg-gray-700/60 text-gray-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Role */}
                <div className="mt-3">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
                        My Contribution
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {project.role}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
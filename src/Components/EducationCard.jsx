const EducationCard = ({ education, index }) => {

    return (
        <>
            <div className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 w-[90%] lg:w-[45%] max-w-md ${index % 2 === 0 ? 'lg:self-start' : 'lg:self-end'} relative`}>

                {/* Icon with title */}
                <div className=" flex items-center gap-3 z-10 ">
                    <span className='w-8 h-8 p-1.5 rounded-full bg-gray-900 border-2 border-blue-400 flex items-center justify-center'>{education.icon}</span>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-white">{education.title}</h3>
                </div>

                {/* Content */}
                <div className="ml-10 md:ml-0">
                    {education.institution && (
                        <p className="text-sm text-blue-300 mt-1">{education.institution}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-2">
                        {education.board && (
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                {education.board}
                            </span>
                        )}
                        {education.year && (
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                {education.year}
                            </span>
                        )}
                        {education.score && (
                            <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                                {education.score}
                            </span>
                        )}
                    </div>

                    {/* Certifications  */}
                    {education.certificates && (
                        <div>
                            <ul className="space-y-2">
                                {Object.entries(education.certificates).map(([key, value], i) => (
                                    <li key={i} className="flex items-start group">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <div className="flex-1">
                                            <span className="text-sm text-gray-200">{key}</span>
                                            <a
                                                href={value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-2 inline-flex items-center text-xs text-blue-300 hover:text-blue-400 transition-colors"
                                            >
                                                <span className="underline">View</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default EducationCard
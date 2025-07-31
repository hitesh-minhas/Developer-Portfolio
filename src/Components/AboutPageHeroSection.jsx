import {
    FaMapMarkerAlt,
    FaGraduationCap,
    FaCode,
    FaLanguage,
} from 'react-icons/fa';

import { Link } from 'react-router';

import Divider from './Divider';

const AboutPageHeroSection = () => {
    return (
        <>
            {/* Hero Container */}
            <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8  lg:mt-4">

                {/* Image  */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=880&q=80"
                        alt="Profile"
                        className="w-40 sm:w-52 lg:w-64 rounded-full border-4 border-blue-400 shadow-xl"
                    />
                </div>

                <div className="w-full lg:w-2/3 space-y-4">
                    {/* Title*/}
                    <h1 className="text-4xl font-bold text-center lg:text-left bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        I'm Hitesh Kumar
                    </h1>

                    {/* Personal info*/}
                    <ul className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-blue-400 mt-1" />
                            <div>
                                <p className="text-gray-400 text-xs uppercase">Location</p>
                                <p className="font-medium">Ludhiana, Punjab</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaGraduationCap className="text-blue-400 mt-1" />
                            <div>
                                <p className="text-gray-400 text-xs uppercase">Education</p>
                                <p className="font-medium">BCA Graduate</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaCode className="text-blue-400 mt-1" />
                            <div>
                                <p className="text-gray-400 text-xs uppercase">Domain</p>
                                <p className="font-medium">Web Developer</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaLanguage className="text-blue-400 mt-1" />
                            <div>
                                <p className="text-gray-400 text-xs uppercase">Languages</p>
                                <p className="font-medium">English, Hindi, Punjabi</p>
                            </div>
                        </li>
                    </ul>

                    <Divider />

                    {/* Short bio*/}
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg  lg:text-left text-justify">
                        I'm a <span className="text-blue-300 font-semibold">self-taught web developer</span> with experience building over <span className="text-blue-300 font-semibold">15+ projects</span>, focused on responsive design and clean code. I'm interested in how <span className="text-blue-300 font-semibold">AI and modern web tools</span> can solve everyday problems.
                    </p>

                    {/* CTA*/}
                    <div className="flex flex-wrap gap-3 pt-3  justify-center lg:justify-normal">
                        <Link to="/projects" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">View Projects</Link>
                        <Link to="/contact" className="px-5 py-2 border border-gray-500 hover:border-blue-400 rounded-lg transition">Contact Me</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPageHeroSection
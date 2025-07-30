import {
    FaMapMarkerAlt,
    FaGraduationCap,
    FaCode,
    FaLanguage
} from 'react-icons/fa';
import Divider from './Divider';

const AboutPageHeroSection = () => {
    return (
        <>
            {/* Hero Container */}
            <div className='bg-gradient-to-br from-gray-900 to-blue-900 min-h-[90vh] text-white w-full flex flex-col lg:flex-row'>
                {/* Left Side (Top side on mobile) - Profile Picture */}
                <div className="w-full lg:w-1/3 flex justify-center items-center pt-12 lg:pt-0 lg:pl-5">
                    <div className="relative group">
                        <img
                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="Profile"
                            className="w-48 md:w-56 lg:w-64 rounded-full border-4 border-blue-400 overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Side (Bottom side on mobile)- Content */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center p-6 lg:p-12 space-y-2 md:space-y-4 ">

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center md:text-left">
                        I'm Hitesh Kumar
                    </h1>

                    {/* Personal info list */}
                    <ul className="grid grid-cols-2 gap-6 text-sm sm:text-base ">
                        <li className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-blue-400 mt-1 text-lg flex-shrink-0" />
                            <div>
                                <p className="text-gray-400 uppercase text-xs">Location</p>
                                <p className="font-medium">Ludhiana, Punjab</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaGraduationCap className="text-blue-400 mt-1 text-lg flex-shrink-0" />
                            <div>
                                <p className="text-gray-400 uppercase text-xs">Education</p>
                                <p className="font-medium">BCA Graduate</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaCode className="text-blue-400 mt-1 text-lg flex-shrink-0" />
                            <div>
                                <p className="text-gray-400 uppercase text-xs">Domain</p>
                                <p className="font-medium">Web Developer</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaLanguage className="text-blue-400 mt-1 text-lg flex-shrink-0" />
                            <div>
                                <p className="text-gray-400 uppercase text-xs">Languages</p>
                                <p className="font-medium">English, Hindi, Punjabi</p>
                            </div>
                        </li>
                    </ul>

                    <Divider />

                    {/* Short bio */}
                    <div>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg text-justify md:text-left">
                            I'm a <span className="text-blue-300 font-semibold">self-taught web developer</span> with experience building over <span className="text-blue-300 font-semibold">15+ projects</span>, focused on creating clean, responsive, and functional user interfaces. I’m passionate about <span className="text-blue-300 font-semibold">solving real-world problems</span> and exploring how technology—especially <span className="text-blue-300 font-semibold">AI</span>—can improve everyday experiences.
                        </p>

                    </div>

                    {/*CTA button :- Projects and Contact*/}
                    <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                        <a href="#projects" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                            View Projects
                        </a>
                        <a href="#contact" className="px-6 py-2 border border-gray-600 hover:border-blue-400 rounded-lg transition-colors">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageHeroSection
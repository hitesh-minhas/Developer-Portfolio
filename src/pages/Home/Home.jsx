import { FaFileDownload } from 'react-icons/fa';
import TypingAnimation from '../../Components/TypingAnimation';
import FloatingIconsBackground from '../../Components/FloatingIconsBackground';
import { Link } from 'react-router';
import resume from "../../../public/documents/Resume_for_web_developer_job.pdf"
import { saveAs } from 'file-saver';
import SocialMediaIcons from '../../Components/SocialMediaIcons';

const Home = () => {

    const handleDownload = async () => {
        // Not using simple <a> tag to give file for download because:
        // 1. Provide loading state feedback
        // 2. Ensure consistent behavior across all browsers
        // 3. If somehow download fails openning file directly in browsre
        try {
            //getting file 
            const response = await fetch(resume);
            //Converting it to a blob (binary large object) which is raw file data in js 
            const blob = await response.blob();
            //saveAs expects a blob and triggers to download file with given name as second parameter
            saveAs(blob, 'Hitesh_Kumar_Frontend_Developer_Resume.pdf');
        } catch (error) {
            console.error('Download failed:', error);
            // If somehow download fails openning file directly in browsre
            window.open(resume, '_blank');
        }
    };

    return (
        <section className='bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full flex flex-col lg:flex-row'>
            <FloatingIconsBackground />
            {/* Profile Image Section - Full width on mobile, then fixed on larger screens */}
            <div className="w-full lg:w-1/3 flex justify-center items-center pt-12 lg:pt-0 lg:pl-5">
                <div className="relative group">
                    <img
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Profile"
                        className="w-48 md:w-56 lg:w-64 rounded-full border-4 border-blue-400 overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 flex items-center justify-center p-6 lg:p-12 ">
                <div className="w-full max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 text-center lg:text-left">
                        Hitesh Kumar
                    </h1>

                    <TypingAnimation />

                    <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 text-center lg:text-left">
                        I build exceptional digital experiences with modern web technologies.
                        Specializing in React, Node.js, Express.js and responsive design.
                    </p>

                    {/*CTA Buttons for Resume and Projects */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            onClick={handleDownload}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <FaFileDownload /> Download Resume
                        </button>

                        <Link
                            to="/projects"
                            className="px-6 py-3 border border-blue-400 hover:border-blue-300 text-blue-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-blue-900/30 hover:scale-105 active:scale-95 flex items-center justify-center"
                        >
                            View My Work
                        </Link>
                    </div>

                    {/* Social Links */}
                    <SocialMediaIcons />
                </div>
            </div>
        </section>
    );
};

export default Home;








































// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
// import { SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';
// import { FaNode } from 'react-icons/fa6';
// import { Typed } from 'react-typed';
// import { h1 } from 'framer-motion/client';
// import { useRef } from 'react';
// import TypingAnimation from './TypingAnimation';

// const Home = () => {
//     const animationTextRef = useRef()
//     const t = "web developer"
//     return (
//         <>
//             <div className='bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full flex flex-wrap'>
//                 <div className="border-2 border-red-600 w-full md:w-1/3 flex justify-center items-center">
//                     <img
//                         src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                         alt="Profile"
//                         className="w-48 md:w-64 rounded-full border-4 border-blue-400 overflow-hidden shadow-xl"
//                     />
//                 </div>
//                 <div className=" border-2 border-green-400 w-full  md:w-2/3 flex items-center justify-center">
//                     <div className="text-center md:text-left border-3 border-yellow-300 h-full md:h-fit md:w-full  p-6 md:pl-10">
//                         <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
//                             Hitesh Kumar
//                         </h1>
//                         <TypingAnimation />
//                         <p className="text-gray-300 max-w-lg mb-8 text-justify">
//                             I build exceptional digital experiences with modern web technologies.
//                             Specializing in React, Node.js, Express.js and responsive design.
//                         </p>

//                         {/* Call-to-Action Buttons */}
//                         <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//                             <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95">
//                                 <FaFileDownload /> Download Resume
//                             </a>

//                             <a href="#projects" className="px-6 py-3 border border-blue-400 text-blue-300 rounded-lg transition-all duration-200 hover:bg-blue-900/30 hover:scale-105 active:scale-95">
//                                 View My Work
//                             </a>
//                         </div>

//                         {/* Social Links */}
//                         <div className="flex gap-4 mt-8 justify-center md:justify-start">
//                             <a href="https://github.com/hitesh-minhas24" target='_blank' className="text-gray-300 hover:text-white">
//                                 <FaGithub className="text-2xl" />
//                             </a>
//                             <a href="https://linkedin.com/in/yourusername" target='_blank' className="text-gray-300 hover:text-white">
//                                 <FaLinkedin className="text-2xl" />
//                             </a>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;




{/* Tech Stack Badges */ }
{/* <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8 border-3">
                            <span className="px-3 py-1 bg-blue-800/50 text-blue-300 rounded-full text-sm">JavaScript</span>
                            <span className="px-3 py-1 bg-blue-800/50 text-blue-300 rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-blue-800/50 text-blue-300 rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-blue-800/50 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                            <span className="px-3 py-1 bg-blue-800/50 text-blue-300 rounded-full text-sm">MongoDB</span>
                        </div> */}
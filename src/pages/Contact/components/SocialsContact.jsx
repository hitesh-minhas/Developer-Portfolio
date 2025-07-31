import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
const SocialsContact = () => {
    return (
        <>
            <section className="flex flex-col justify-center p-6 md:p-12 w-full">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 lg:p-10 h-full mx-auto w-full max-w-[550px]">
                    <h2 className="text-xl md:text-3xl font-bold mb-6 text-blue-300">Other Ways to Reach Me</h2>

                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-start gap-4 ">
                            <div className="mt-1 text-blue-400">
                                <MdOutlineMail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Email</h3>
                                <p className="text-gray-300 text-sm md:text-base">Click to drop your message at <a href="mailto:hiteshminhas24@gmail.com" target="_blank" className="text-blue-300">hiteshminhas24@gmail.com</a></p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-blue-400">
                                <CiGlobe className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Social Media</h3>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://github.com/hitesh-minhas" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                        <FaGithub className="w-6 h-6" />
                                    </a>
                                    <a href="https://linkedin.com/in/hitesh-kumar-248540270" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                        <FaLinkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <FaInstagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialsContact
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SocialMediaIcons = () => {
    return (
        <>
            <div className="flex gap-4 mt-3  justify-center lg:justify-start">
                <a href="https://github.com/hitesh-minhas" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/hitesh-kumar-248540270" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/hitesh_minhas_24?igsh=YWp0cWFheTEzZmZ5" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <FaInstagram className="w-6 h-6" />
                </a>
            </div>
        </>
    )
}

export default SocialMediaIcons
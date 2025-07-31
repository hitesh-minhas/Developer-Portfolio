import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiGit,
    SiGithub,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap
} from 'react-icons/si';

import { FaCertificate } from 'react-icons/fa';


const coreSkills = [
    { name: 'HTML', level: 90, icon: <SiHtml5 className="text-orange-500" />, highlight: 'Semantic and accessible markup' },
    { name: 'CSS', level: 85, icon: <SiCss3 className="text-blue-500" />, highlight: 'Responsive layouts and animations' },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-cyan-400" />, highlight: 'Utility-first CSS framework' },
    { name: 'Bootstrap', level: 80, icon: <SiBootstrap className="text-purple-500" />, highlight: 'Responsive grid system' },
    { name: 'JavaScript', level: 90, icon: <SiJavascript className="text-yellow-300" />, highlight: 'Strong grasp of ES6+' },
    { name: 'React', level: 85, icon: <SiReact className="text-blue-400" />, highlight: 'Reusable components, state management' },
    { name: 'Git', level: 80, icon: <SiGit className="text-red-500" />, highlight: 'Version control with branching' },
    { name: 'GitHub', level: 80, icon: <SiGithub className="text-white" />, highlight: 'Project hosting & collaboration' },
];

const additionalSkills = [
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
];

const learning = [
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
    { name: 'Backend (Auth, Security)', icon: <SiNodedotjs className="text-green-400" /> },
];

const certificates = {
    'React and Redux': 'https://drive.google.com/file/d/1kUe-zu9GbLOilr6zFkwGHy4JRcd0vEp1/view?usp=sharing',
    'Scientific Computing with Python': 'https://drive.google.com/file/d/1iBm5-aqKZavz_EUMT7lfuU5gKEPd3rKR/view?usp=sharing',
    'Summer Training on Web Development': 'https://drive.google.com/file/d/1ypixG7Gq6tbCCFKJYBjUF-W2mmb6stCk/view?usp=sharing',
};

const Skills = () => {
    return (
        <>
            <section className="mt-20 space-y-12">
                <div>
                    {/* title */}
                    <h2 className="text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text mb-6">My Toolkit</h2>

                    {/* Core Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreSkills.map((skill, index) => (
                            <div key={index} className="bg-gray-800/80 border border-gray-700 rounded-lg p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    {skill.icon}
                                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>0%</span>
                                    <span>{skill.level}%</span>
                                    <span>100%</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-300">{skill.highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Skills */}
                <div>
                    <h3 className="text-xl font-semibold text-blue-200 mb-4">Other Tools I Use</h3>
                    <div className="flex flex-wrap gap-4">
                        {additionalSkills.map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-gray-800/60 border border-blue-400/30 rounded-full px-4 py-2">
                                {skill.icon}<span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leaning*/}
                <div>
                    <h3 className="text-xl font-semibold text-blue-200 mb-4">Currently Learning</h3>
                    <div className="flex flex-wrap gap-4">
                        {learning.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-gray-800/60 border border-blue-400/30 rounded-full px-4 py-2">
                                {item.icon}<span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications*/}
                <div>
                    <h3 className="text-xl font-semibold text-blue-200 mb-4">Certifications</h3>
                    <ul className="space-y-3">
                        {Object.entries(certificates).map(([title, url], i) => (
                            <li key={i} className="bg-gray-800/60 border border-gray-700 rounded-lg p-4 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <FaCertificate className="text-yellow-400" />
                                    <span className="text-gray-100 font-medium">{title}</span>
                                </div>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline text-sm hover:text-blue-300"
                                >
                                    View
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Skills
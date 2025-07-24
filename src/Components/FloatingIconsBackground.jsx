import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiFlask,
    SiCplusplus,
    SiReact,
    SiGit,
    SiGithub,
    SiFirebase
} from 'react-icons/si';

const FloatingIconsBackground = () => {
    const icons = [
        { Icon: SiHtml5, color: 'text-orange-500', name: 'HTML' },
        { Icon: SiCss3, color: 'text-blue-500', name: 'CSS' },
        { Icon: SiJavascript, color: 'text-yellow-300', name: 'JavaScript' },
        { Icon: SiTailwindcss, color: 'text-blue-400', name: 'Tailwind' },
        { Icon: SiBootstrap, color: 'text-purple-500', name: 'Bootstrap' },
        { Icon: SiNodedotjs, color: 'text-green-500', name: 'Node.js' },
        { Icon: SiExpress, color: 'text-gray-300', name: 'Express' },
        { Icon: SiMongodb, color: 'text-green-400', name: 'MongoDB' },
        { Icon: SiPython, color: 'text-blue-300', name: 'Python' },
        { Icon: SiReact, color: 'text-blue-400', name: 'React' },
        { Icon: SiGit, color: 'text-orange-600', name: 'Git' },
        { Icon: SiGithub, color: 'text-gray-800', name: 'GitHub' },
    ];

    // Generating random any 15 floating icons from all the icons 
    const floatingIcons = Array.from({ length: 30 }).map((_, i) => {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const Icon = icon.Icon;
        const sizeClass = `text-${Math.floor(Math.random() * 3) + 3}xl`; // assigning random size to each icon for better visulaization 

        return (
            <div
                key={i}
                className={`absolute ${icon.color} ${sizeClass} opacity-20 animate-float pointer-events-none`}
                style={{
                    left: `${Math.random() * 100}%`,
                    bottom: '-50px',
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${15 + Math.random() * 15}s`,
                }}
                aria-label={icon.name}>
                <Icon />
            </div>
        );
    });

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {floatingIcons}
        </div>
    );
};

export default FloatingIconsBackground;
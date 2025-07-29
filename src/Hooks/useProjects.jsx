// useProjects: Custom hook to provide static project data.
// Data is hardcoded because the dataset is small and does not require dynamic fetching.
// If our dataset is large and we are fetching projects data from a databse then we will use fetch in useEffect which will take URL as prop and return the {data , loading, error} after

// importing project images
import plantDemo from "../assets/Project_Cover_Images/Plant_Detection.png";
import personCounterDemo from "../assets/Project_Cover_Images/AI_Person_Detector.jpeg";
import todoDemo from "../assets/Project_Cover_Images/React_ToDo.png";
import spotifyDemo from "../assets/Project_Cover_Images/Spotify.png";
import farmerDemo from "../assets/Project_Cover_Images/Farmer_Middle_Man.png";
import libraryDemo from "../assets/Project_Cover_Images/CLMS.png";

// importing tech stack icons to show in card from react icons
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiFlask,
    SiSqlite,
} from "react-icons/si";

const techIcons = {
    html: <SiHtml5 className="text-orange-500" title="HTML5" />,
    css: <SiCss3 className="text-blue-500" title="CSS3" />,
    js: <SiJavascript className="text-yellow-300" title="JavaScript" />,
    python: <SiPython className="text-blue-300" title="Python" />,
    react: <SiReact className="text-blue-400" title="React" />,
    tailwindcss: <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />,
    flask: <SiFlask className="text-gray-300" title="Flask" />,
    sqlite: <SiSqlite className="text-indigo-400" title="SQLite" />,
};

const useProjects = () => {
    const projects = [
        {
            id: 1,
            title: "AI Plant Detection",
            description:
                "A machine learning-powered web app that allows users to upload plant leaf images to identify the plant and view related information such as its name, origin, and uses.",
            tech: [
                techIcons.html,
                techIcons.css,
                techIcons.js,
                techIcons.python,
                techIcons.flask,
                techIcons.sqlite,
            ],
            image: plantDemo,
            github: "https://github.com/hitesh-minhas/plant-detection-system",
            role: "Developed both the front-end and back-end using Flask. Integrated a machine learning model for plant identification and managed data using SQLite.",
        },
        {
            id: 2,
            title: "AI Person Counter",
            description:
                "A web app that detects and counts people in uploaded images using the YOLOv8 model. It returns a processed image with bounding boxes and a total count.",
            tech: [
                techIcons.html,
                techIcons.css,
                techIcons.js,
                techIcons.python,
                techIcons.flask,
            ],
            image: personCounterDemo,
            github: "https://github.com/hitesh-minhas/ai-person-counter",
            role: "Built the complete UI and connected it to a Flask API for image analysis using a pre-trained YOLOv8 model. Ensured responsive design and smooth integration.",
        },
        {
            id: 3,
            title: "React To-Do List",
            description:
                "A clean and simple task management app built with React that allows users to manage daily tasks and keep track of their productivity.",
            tech: [techIcons.react, techIcons.js, techIcons.css],
            image: todoDemo,
            github: "https://github.com/hitesh-minhas/React-Todo-App",
            role: "Designed and developed this front-end application independently to practice core React concepts and state management using hooks.",
        },
        {
            id: 4,
            title: "Spotify Clone",
            description:
                "A static music player web app inspired by Spotify with a responsive UI. Users can browse songs and control playback like play, pause, and skip.",
            tech: [techIcons.html, techIcons.css, techIcons.js],
            image: spotifyDemo,
            github:
                "https://github.com/hitesh-minhas/Spotify-clone-using-HTML-CSS-and-JS",
            role: "Developed this front-end-only application to improve JavaScript and CSS skills. Focused on audio controls and responsive layout.",
        },
        {
            id: 5,
            title: "Farmer-Middleman Connect",
            description:
                "A full-stack web platform where farmers and middlemen can manage crop sales, loans, and transactions. Includes login and dashboard for both roles.",
            tech: [
                techIcons.html,
                techIcons.css,
                techIcons.js,
                techIcons.python,
                techIcons.flask,
                techIcons.sqlite,
            ],
            image: farmerDemo,
            github: "https://github.com/hitesh-minhas/farmer-middleman-platform",
            role: "Built both the front-end and Flask-based back-end. Implemented user roles, data handling, and SQLite-based persistent storage.",
        },
        {
            id: 6,
            title: "Library Management System",
            description:
                "A browser-based library manager to simulate book borrowing and inventory using Local Storage. Built during early stages of my web dev learning",
            tech: [techIcons.html, techIcons.css, techIcons.js],
            image: libraryDemo,
            github: "https://github.com/hitesh-minhas/library-management-system",
            role: "Created this static front-end project to practice JavaScript DOM manipulation and local data handling. No backend or database used.",
        },
    ];

    return projects;
};

export default useProjects;

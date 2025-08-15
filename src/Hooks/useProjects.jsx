// useProjects: Custom hook to provide static project data.
// Data is hardcoded because the dataset is small and does not require dynamic fetching.
// If our dataset is large and we are fetching projects data from a databse then we will use fetch in useEffect which will take URL as prop and return the {data , loading, error} 

import { useState, useEffect } from 'react';

// importing project images
import plantDemo from "../assets/Project_Cover_Images/Plant_Detection.webp";
import personCounterDemo from "../assets/Project_Cover_Images/AI_Person_Detector.webp";
import todoDemo from "../assets/Project_Cover_Images/React_ToDo.webp";
import spotifyDemo from "../assets/Project_Cover_Images/Spotify.webp";
import farmerDemo from "../assets/Project_Cover_Images/Farmer_Middle_Man.webp";
import libraryDemo from "../assets/Project_Cover_Images/CLMS.webp";
import passwordManagerDemo from "../assets/Project_Cover_Images/passwordManagerDemo.webp";

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
    SiNodedotjs,
    SiExpress,
    SiMongodb,
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
    node: <SiNodedotjs className="text-green-500" title="Node.js" />,
    express: <SiExpress className="text-gray-400" title="Express.js" />,
    mongodb: <SiMongodb className="text-green-400" title="MongoDB" />,
};

const ProjectsData = [
    {
        id: 0,
        title: "Password Manager",
        description:
            "A password manager web app where users can add, view, and edit stored passwords through a clean interface, with upcoming updates focused on authentication, password hashing, and enhanced security.",
        tech: [
            techIcons.react,
            techIcons.tailwindcss,
            techIcons.express,
            techIcons.mongodb,
        ],
        image: passwordManagerDemo,
        github: "https://github.com/hitesh-minhas/password-manager",
        role: "Built the frontend with React and Tailwind CSS, and the backend with Express and MongoDB. Implemented CRUD operations via REST APIs and planned security features for future releases.",
    }


    ,
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
]

const useProjects = () => {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(ProjectsData)
            setLoading(false)
        }, 300);
        return () => { clearTimeout(timer) }
    }, [])


    return { projects, loading };
};

export default useProjects;

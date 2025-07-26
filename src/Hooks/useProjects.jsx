// useProjects: Custom hook to provide static project data.
// Data is hardcoded because the dataset is small and does not require dynamic fetching.
// If our dataset is large and we are fetching projects data from a databse then we will use fetch in useEffect which will take URL as prop and return the {data , loading, error} after
const useProjects = () => {
    const projects = [
        {
            id: 1,
            title: "AI Plant Detection",
            description: "A Machine Learning-powered web application that allows users to upload images of plant leaves and get detailed information.",
            tech: ["HTML", "CSS", "JS", "Python", "Flask", "SQLite"],
            image: "plant-demo.jpg",
            github: "https://github.com/hitesh-minhas/plant-detection-system",
            role: "Developed the complete application, including the front-end, Flask-based back-end, integration of the machine learning model for plant identification, and database setup using SQLite. This project helped me explore how web development and machine learning can work together in a full-stack setup.",
            features: [
                "Get detailed information about the plant—such as its name, origin, scientific name, medicinal uses, and edibility",
                "Responsive front-end interface",
                "Integrated chatbot"
            ],
        },
        {
            id: 2,
            title: "AI Person Counter",
            description: "A web application that detects and counts the number of people in an image using a pre-trained YOLOv8 model. User can upload an image or capture one in real-time, and the app will display the image with green bounding boxes around detected people along with a total count.",
            tech: ["HTML5", "CSS", "JS", "Python", "FLask", "OpenCV", "YOLO"],
            image: "person-counter-demo.jpg",
            github: "https://github.com/hitesh-minhas/ai-person-counter",
            role: "My primary contribution was designing and developing the frontend interface and integrating it with a Flask backend API",
            features: [
                "Upload or capture an image (mobile/desktop supported)",
                "Validate image type and size using JavaScript before sending to backend",
                " Send image to Flask backend via API for processing",
                " Mobile and desktop compatible interface",
                "Processed image displays number of people detected"
            ],
        },
        {
            id: 3,
            title: "React To-Do List",
            description: "A functional React-based To-Do application that allows users to manage their daily tasks with a clean UI.",
            tech: ["React", "JavaScript", "CSS"],
            image: "todo-demo.jpg",
            github: "https://github.com/hitesh-minhas/React-Todo-App",
            role: "I built this project independently to practice core React concepts. It is a front-end-only application that uses Local Storage for data persistence.",
            features: [
                "Add, edit, and delete tasks",
                "Mark tasks as completed",
                "Persistent storage using localStorage",
                "Clean and minimalistic UI"
            ],
        },
        {
            id: 4,
            title: "Spotify Clone",
            description: "A responsive music player web app inspired by Spotify that allows users to browse playlists and play songs from local folders.",
            tech: ["HTML", "CSS", "JavaScript"],
            image: "spotify-demo.jpg",
            github: "https://github.com/hitesh-minhas/Spotify-clone-using-HTML-CSS-and-JS",
            role: "I developed this project independently as a practice to improve my front-end development skills using HTML, CSS, and JavaScript.",
            features: [
                "Responsive design with custom playlists",
                "Library section dynamically updates with song folders",
                "Play, pause, next/previous controls",
                "Folder-based structure to simulate playlist organization"
            ],
        },
        {
            id: 5,
            title: "Farmer-Middleman Connect",
            description: "A web platform that connects farmers with middlemen, helping both parties manage finances, crop sales, loans, and fertilizer transactions.",
            tech: ["HTML", "CSS", "JS", "Python", "Flask", "SQLite"],
            image: "farmer-demo.jpg",
            github: "https://github.com/hitesh-minhas/farmer-middleman-platform",
            role: "I developed both the front-end and back-end of this application independently, using Flask for server-side logic and SQLite for data storage.",
            features: [
                "Farmers can manage debts and track sold crops",
                "Middlemen can record loans, fertilizer sales, and set interest rates",
                "User authentication and transaction history",
                "Simple, clean UI with Flask backend"
            ],
        },
        {
            id: 6,
            title: "Library Management System",
            description: "A simple front-end library management system built using HTML, CSS, and JavaScript. This project was developed purely for learning and practicing JavaScript during my early web development journey",
            tech: ["HTML", "CSS", "JavaScript"],
            image: "library-demo.jpg",
            github: "https://github.com/hitesh-minhas/library-management-system",
            role: "I developed this project to practice my HTML, CSS, and JavaScript skills. It uses Local Storage to simulate basic library operations.",
            features: [
                "Search and view available books",
                "Students can submit request forms to borrow or return books",
                "Librarians can update book listings",
                "Simple UI suitable for academic use"
            ],
            role: ""
        }
    ];

    return projects;
};

export default useProjects;

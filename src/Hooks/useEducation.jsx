// useEducation: Custom hook to provide static Education data.
import { FaGraduationCap, FaSchool, FaCertificate, FaBook } from 'react-icons/fa';

const useEducation = () => {

    const educationData = [
        {
            id: 1,
            icon: <FaGraduationCap className="text-blue-400 text-2xl h-5 w-5" />,
            title: "Bachelor of Computer Applications",
            institution: "Gulzar Group of Institutes",
            board: "PTU",
            year: "2022-2025",
            score: "8.44 CGPA",
        },

        {
            id: 2,
            icon: <FaBook className="text-blue-400 text-2xl h-4 w-4" />,
            title: "Senior Secondary (12th)",
            institution: "Ramgharia Senior Secondary School",
            board: "PSEB",
            year: "2021-2022",
            score: "83%",
        },
        {
            id: 3,
            icon: <FaSchool className="text-blue-400 text-2xl h-5 w-5" />,
            title: "High School (10th)",
            institution: "Durgeshwari Bal Vidya Mandir",
            board: "PSEB",
            year: "2019-2020",
            score: "90%",
        },

        {
            id: 4,
            icon: <FaCertificate className="text-green-400 text-2xl h-5 w-5" />,
            title: "Certifications",
            certificates: {
                "React and Redux": "https://drive.google.com/file/d/1kUe-zu9GbLOilr6zFkwGHy4JRcd0vEp1/view?usp=sharing",
                "Scientific computing with python": "https://drive.google.com/file/d/1iBm5-aqKZavz_EUMT7lfuU5gKEPd3rKR/view?usp=sharing",
                "Summer Training on web development": "https://drive.google.com/file/d/1ypixG7Gq6tbCCFKJYBjUF-W2mmb6stCk/view?usp=sharing"
            }
        }
    ];

    return educationData;
};

export default useEducation;

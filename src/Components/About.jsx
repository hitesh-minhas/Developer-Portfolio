import AboutPageHeroSection from "../Components/AboutPageHeroSection"
import Skills from "./Skills";
const About = () => {
    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Hero Section  */}
            <AboutPageHeroSection />
            {/* SKills Section  */}
            <Skills />
        </div>
    );
};

export default About;

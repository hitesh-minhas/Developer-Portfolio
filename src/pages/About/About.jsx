import AboutPageHeroSection from "./components/AboutPageHeroSection"
import Skills from "./components/Skills";
const About = () => {
    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Hero Section  */}
            <AboutPageHeroSection />
            {/* SKills Section  */}
            <Skills />
        </section>
    );
};

export default About;

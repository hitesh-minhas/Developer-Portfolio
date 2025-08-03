import { useEffect, useState } from "react";
import AboutPageHeroSection from "./components/AboutPageHeroSection"
import Skills from "./components/Skills";
import LoadingSpinner from "../../Components/LoadingSpinner";
const About = () => {

    const [loading, setLoading] = useState(true)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => { setLoading(false) }, 300);
        return () => { clearTimeout(timer) }
    }, [])

    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gradient-to-br from-gray-900 to-blue-900 text-white">

            {/* Loader  */}
            {(loading || !imageLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-80">
                    <LoadingSpinner />
                </div>
            )}

            {/* Hero Section  */}
            <AboutPageHeroSection imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />

            {/* SKills Section  */}
            <Skills />
        </section>
    );
};

export default About;

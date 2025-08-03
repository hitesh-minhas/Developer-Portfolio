import ContactForm from "./components/ContactForm";
import PagesHeading from "../../Components/PagesHeading";
import SocialsContact from "./components/SocialsContact";
import LoadingSpinner from "../../Components/LoadingSpinner"
import { useEffect, useState } from "react";

const Contact = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating loading
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);



    return (
        <section className=" bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">

            {/* Loading overlay */}
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-80">
                    <LoadingSpinner />
                </div>
            )}

            {/* Content  */}
            <PagesHeading title={"Get In Touch"} description={"Let's build something amazing together"} />
            <div className=" w-full flex flex-col xl:flex-row">
                <ContactForm />
                <SocialsContact />
            </div>
        </section>
    );
};

export default Contact;
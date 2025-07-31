import ContactForm from "./components/ContactForm";
import PagesHeading from "../../Components/PagesHeading";
import SocialsContact from "./components/SocialsContact";

const Contact = () => {

    return (
        <section className=" bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
            <PagesHeading title={"Get In Touch"} description={"Let's build something amazing together"} />
            <div className=" w-full flex flex-col xl:flex-row">
                <ContactForm />
                <SocialsContact />
            </div>
        </section>
    );
};

export default Contact;
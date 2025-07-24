import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import SocialsContact from "./SocialsContact";

const Contact = () => {

    return (
        <div className="container bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
            <ContactHeading />
            <div className=" w-full flex flex-col xl:flex-row">
                <ContactForm />
                <SocialsContact />
            </div>
        </div>
    );
};

export default Contact;
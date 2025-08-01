import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    //Initialize EmailJS when component mounts
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current
            );
            console.log("Success")
            reset();
        } catch (error) {
            console.error('EmailJS Error:', {
                code: error.status,
                message: error.text,
                fullError: error
            });
        }
    };

    return (
        <>
            <section className="flex items-center justify-center p-6 md:p-12 w-full">
                <div className="mx-auto w-full max-w-[550px] ">
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-base font-medium text-blue-300">
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true, })}
                                placeholder="Full Name"
                                name="name"
                                className="w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900/50" />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-base font-medium text-blue-300">
                                Email Address
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true, })}
                                placeholder="example@domain.com"
                                name="email"
                                className="w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900/50"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-2 block text-base font-medium text-blue-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                {...register("subject", { required: true, })}
                                placeholder="Enter your subject"
                                name="subject"
                                className="w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900/50"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-base font-medium text-blue-300">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                {...register("message", { required: true, })}
                                placeholder="Type your message"
                                name="message"
                                className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 py-3 px-6 text-base text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900/50"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className={`w-full rounded-md py-3 px-8 text-base font-semibold text-white transition-all
                                        ${isSubmitting
                                        ? 'bg-blue-800 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                                    }
                                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactForm



















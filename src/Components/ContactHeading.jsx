import Divider from './Divider'
const ContactHeading = () => {
    return (
        <>
            <div className="text-center md:text-left md:pr-2">
                <div className="w-[90%]  mx-auto flex flex-col justify-around gap-0.5">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-5'>
                        Get in Touch
                    </h1>
                    <p className='text-blue-300 text-md md:text-xl'>
                        Let's build something amazing together
                    </p>
                    <Divider />
                </div>
            </div>
        </>
    )
}

export default ContactHeading
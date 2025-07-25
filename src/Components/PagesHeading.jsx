import Divider from './Divider'
const PagesHeading = ({title,description}) => {
    return (
        <>
            <div className="text-center md:text-left md:pr-2  mt-7 md:mt-0">
                <div className="w-[90%]  mx-auto flex flex-col justify-around gap-0.5">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-5'>
                        {title}
                    </h1>
                    <p className='text-blue-300 text-md md:text-xl'>
                        {description}
                    </p>
                    <Divider />
                </div>
            </div>
        </>
    )
}

export default PagesHeading
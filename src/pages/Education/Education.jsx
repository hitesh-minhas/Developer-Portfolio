import useEducation from '../../Hooks/useEducation';
import EducationCard from './components/EducationCard';
import PagesHeading from '../../Components/PagesHeading'

const Education = () => {

    const educationData = useEducation()
    return (

        <section className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white w-full ">
            {/* Header */}
            <PagesHeading
                title={"Learning Journey"}
                description={`From classrooms to codebases – where my foundation was built`}
            />

            {/* Container For Education Cards */}
            <div className="relative max-w-4xl mx-auto  flex flex-col gap-15 lg:gap-8  p-5 items-start lg:items-center pb-8">


                {/* Vertical line */}
                <div className='absolute h-[80%] top-[10%]  left-[93%] lg:left-1/2  w-0.5 bg-blue-500/30 flex flex-col items-center justify-between'>
                    <span className={`h-4 w-4 rounded-full bg-blue-400 border-2 border-blue-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 hover:scale-125 transition-all duration-300`}></span>
                    <span className={`h-4 w-4 rounded-full bg-blue-400 border-2 border-blue-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 hover:scale-125 transition-all duration-300`}></span>
                    <span className={`h-4 w-4 rounded-full bg-blue-400 border-2 border-blue-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 hover:scale-125 transition-all duration-300`}></span>
                    <span className={`h-4 w-4 rounded-full bg-blue-400 border-2 border-blue-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 hover:scale-125 transition-all duration-300`}></span>
                </div>

                {/* Education Cards */}
                {educationData.map((education, index) => (
                    <EducationCard key={index} education={education} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Education;

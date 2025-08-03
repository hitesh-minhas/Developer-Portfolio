import React from 'react'

const HeroProfileImg = ({ imageLoaded, setImageLoaded }) => {
    return (
        <>
            <div className='relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto group'>
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-800 rounded-full animate-pulse" />
                )}
                <img
                    src="/images/profile.webp"
                    className={`rounded-full border-4 border-blue-400 overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 object-cover  ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                />
            </div>
        </>
    )
}

export default HeroProfileImg
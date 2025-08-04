import React from 'react'

const HeroProfileImg = ({ imageLoaded, setImageLoaded }) => {
    return (
        <div className='relative w-48 h-48 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full mx-auto group'>
            {/* Fallback while loading */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-800 rounded-full animate-pulse" />
            )}
            <picture>
                <source
                    srcSet="/images/profile-128.webp"
                    media="(max-width: 480px)"
                    type="image/webp"
                />
                <source
                    srcSet="/images/profile-256.webp"
                    media="(max-width: 768px)"
                    type="image/webp"
                />
                <source
                    srcSet="/images/profile-512.webp"
                    media="(max-width: 1024px)"
                    type="image/webp"
                />
                <img
                    src="/images/profile-512.webp"
                    width={256}
                    height={256}
                    className={`rounded-full border-4 border-blue-400 overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 object-cover w-full h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading="eager"
                    fetchPriority="high"
                    alt='Hitesh Kumar - Web Developer'
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                />
            </picture>

        </div>
    )
}

export default HeroProfileImg









{/* Optimized Image */ }
{/* <img
                src="/images/profile.webp"
                width={256}
                height={256}
                className={`rounded-full border-4 border-blue-400 overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 object-cover w-full h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="eager"
                fetchPriority="high"
                alt='Hitesh Kumar - Web Developer'
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
            /> */}
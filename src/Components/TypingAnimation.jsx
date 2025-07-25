import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web developer", "Frontend developer", "Python developer", "Backend developer"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="relative inline-block h-8 sm:h-10 md:h-12 w-full text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-300 mb-4">
                I'm a <span className="text-white" ref={el}></span>
            </h2>
        </div>

    );
};

export default TypingAnimation;
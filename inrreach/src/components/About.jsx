import React, { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {

    //scroll to footer
    const footerRef = useRef(null);

    const scrolltofooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className=' w-screen m-[5px] overflow-x-hidden sm:m-[10px] min-h-screen bg-gray-200 rounded-3xl border-white border-[5px] lg:m-[40px] lg:w-[95vw]'>

            {/* Navbar  */}
            <Navbar scrolltofooter={scrolltofooter} />

            {/* about  */}
            <div className=' my-20 mx-auto p-5 w-[85vw] lg:w-[60vw] rounded-xl border-2 border-gray-400'>
                <img src="./images/about.png" alt="about" />
            </div>

            {/* Footer  */}
            <div className=' mt-32'>
                <Footer footerRef={footerRef} />
            </div>

        </div>
    )
}

export default About

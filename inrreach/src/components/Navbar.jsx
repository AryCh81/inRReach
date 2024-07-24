import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (prop) => {
    return (

        <div className=' flex justify-evenly mx-[10px] text-md sm:justify-between font-sans font-medium sm:text-xl my-5 sm:mx-[40px] lg:mx-10'>

            <div className=' font-serif text-3xl flex gap-2'>

                <div className=' w-[40px] h-[40px] sm:w-[80px] sm:h-[80px]'><img width={80} height={80} src="./svgs/logo.svg" alt=" " /></div>
                <div className=' hidden md:block font-serif text-2xl mt-5'><span>in</span><span className=' text-red-500'>RR</span><span>each</span></div>

            </div>

            <div className=' flex justify-evenly gap-[10px] sm:gap-10'>

                <NavLink to="/"> <div className='cursor-pointer text-red-500'>Home</div></NavLink>
                <div className=' cursor-pointer'><a href="https://docs.google.com/forms/d/e/1FAIpQLSfRka1D6lVIUHgiKm6CV9X3F8VomHCB7hEIJ5ViUcKWftsxRw/viewform?pli=1&pli=1">Feedback</a></div>
                <NavLink to="/about"><div className=' cursor-pointer'>About us</div></NavLink>
                <div onClick={prop.scrolltofooter} className=' cursor-pointer'>Contact us</div>

            </div>

        </div>
    )
}

export default Navbar

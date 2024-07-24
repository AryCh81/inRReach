import React, { useRef, useState } from 'react'
import { NavLink } from "react-router-dom"

import Navbar from './Navbar'
import ImageSlider from './Imageslider'
import BhawanCard from './BhawanCard'
import FoodCard from './FoodCard'
import Footer from './Footer'

const Home = () => {

    const [cards, setcards] = useState([
        { id: 1, bhawanimg: "/images/rkb.jpg", bhawanname: "RKB Tapri Night Canteen(2am-2pm)", link: "https://rzp.io/i/hmCZij97" },
        { id: 2, bhawanimg: "/images/cautleynight.jpg", bhawanname: "Cautley Night Canteen(2am-2pm)", link: "https://rzp.io/i/27iRSMtf7" },
        { id: 3, bhawanimg: "/images/cautleyday.jpg", bhawanname: "Cautley Day Canteen(2pm-2am)", link: "https://rzp.io/i/HGxyvubw" },
        { id: 4, bhawanimg: "/images/cautleyjuice.jpg", bhawanname: "Cautley Juice Centre", link: "https://rzp.io/i/IUr8ZniCS" },
    ])

    //scroll to footer
    const footerRef = useRef(null);

    const scrolltofooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        // main container 

        <div className=' w-screen m-[5px] overflow-x-hidden sm:m-[10px] min-h-screen bg-gray-200 rounded-3xl border-white border-[5px] lg:m-[40px] lg:w-[95vw]'>

            {/* Navbar  */}
            <Navbar scrolltofooter={scrolltofooter} />

            {/* Mid Text and Image  */}
            <div className=' flex flex-col sm:flex-row mx-10 lg:mx-32 justify-evenly gap-10'>

                <div className='flex flex-col gap-5 my-10'>
                    {/* Text  */}
                    <div className=' font-serif font-bold text-3xl lg:text-5xl '>Food from your </div>
                    <div className=' font-serif font-bold text-3xl lg:text-5xl '>Favourite <span className=' text-red-500'>Bhawan Canteen,</span></div>
                    <div className=' font-serif font-bold text-3xl lg:text-5xl '>Directly to your Doorstep.</div>

                    {/* Discount banner  */}
                    <div className='mt-5 w-[225px] p-2 h-20 border-2 border-gray-500 rounded-lg pl-4 text-xl'>
                        <div><span className=' font-extrabold text-3xl text-red-500'>25%</span>  Off</div>
                        <div>On every Sundays !</div>
                    </div>

                </div>

                {/* Food Image */}
                {/* <div className='my-10'><img width={600} height={600} src="./images/buregr.png" alt="img" /></div> */}
                <div className=' my-10'>
                    <ImageSlider />
                </div>

            </div>

            {/* foodcards  */}
            <div className='foodcard overflow-y-hidden mx-[10px] overflow-x-scroll md:overflow-x-hidden flex flex-row sm:justify-center items-center sm:ml-[20px] gap-4 md:mx-4 md:gap-10 lg:gap-20 mb-20 mt-6'>

                <FoodCard foodimg="./images/chowmein.png" foodname="Chow  Mein" foodprice="₹30" />
                <FoodCard foodimg="./images/momos.png" foodname="Momos" foodprice="₹35" />
                <FoodCard foodimg="./images/bhel.png" foodname="Bhel Puri" foodprice="₹20" />
                <FoodCard foodimg="./images/patties.png" foodname="Masala Patties" foodprice="₹25" />

            </div>
            {/* heading  */}
            <div className='my-20 w-[40vw] h-16 flex flex-col m-auto text-center text-3xl font-bold font-serif'>

                <div> Choose Your Favourite </div>
                <div className=' text-red-500'>Bhawan Canteen</div>

            </div>

            {/* Bhawan cards  */}
            <div className=' flex flex-wrap gap-10 m-10 justify-center'>

                {cards.map((item) => {
                    return (

                        <NavLink keys={item.id} to={`/cart/${item.id}`} ><BhawanCard bhawanimg={item.bhawanimg} bhawanname={item.bhawanname} /></NavLink>
                    )
                })
                }

            </div>

            {/* Footer  */}
            <div className=' mt-32'>
                <Footer footerRef={footerRef} />
            </div>

        </div>
    )
}

export default Home

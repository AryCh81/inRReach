import React, { useRef,useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams, NavLink } from 'react-router-dom';
import CartCard from './CartCard';
import Footer from './Footer';

const Cart = () => {


    const [cards, setcards] = useState([
        { id: 1, bhawanimg: "/images/rkb.jpg", bhawanname: "RKB Tapri Night Canteen(2am-2pm)", link: "https://rzp.io/i/hmCZij97" },
        { id: 2, bhawanimg: "/images/cautleynight.jpg", bhawanname: "Cautley Night Canteen(2am-2pm)", link: "https://rzp.io/i/27iRSMtf7" },
        { id: 3, bhawanimg: "/images/cautleyday.jpg", bhawanname: "Cautley Day Canteen(2pm-2am)", link: "https://rzp.io/i/HGxyvubw" },
        { id: 4, bhawanimg: "/images/cautleyjuice.jpg", bhawanname: "Cautley Juice Centre", link: "https://rzp.io/i/IUr8ZniCS" },
    ])

    const { id } = useParams();
    const card = cards.find((card) => card.id === parseInt(id,10));


    if (!card) {
        return <div className=' text-2xl text-red-500 text-center m-20 font-bold'>No Item In The Cart</div>;
    }

    const footerRef = useRef(null);

    const scrolltofooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className=' w-screen m-[5px] overflow-x-hidden sm:m-[10px] min-h-screen bg-gray-200 rounded-3xl border-white border-[5px] lg:m-[40px] lg:w-[95vw]'>

            <Navbar scrolltofooter={scrolltofooter} />

            <div className=' font-serif font-bold text-3xl text-center'>Place Your <span className=' text-red-500'>Order</span></div>

            <div>
                <CartCard bhawanimg={card.bhawanimg} bhawanname={card.bhawanname} link={card.link} />
            </div>

            {/* Footer  */}
            <div className=' mt-32'>
                <Footer footerRef={footerRef} />
            </div>


        </div>
    )
}

export default Cart


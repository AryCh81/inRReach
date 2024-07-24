import React from 'react'

const CartCard = (prop) => {
    return (
        <div className=' flex flex-col gap-5 p-10 items-center w-[80vw] lg:w-[40vw] rounded-xl bg-white mx-auto my-10'>

            <div><img className=' rounded-xl' width={500} height={500} src={prop.bhawanimg} alt="img" /></div>
            <div className=' text-xl font-bold'>{prop.bhawanname}</div>

            <div className=' text-lg w-[60vw] lg:w-[30vw] p-3 rounded-lg border-2 border-gray-500 bg-yellow-50 text-center'>Please Check the Menu, then Call to place the order. <br />Pay after your order is placed.</div>
            <div className=' rounded-full bg-red-500 cursor-pointer text-white font-bold text-lg text-center p-2'><a href={prop.link}>Check Menu then Pay</a></div>
            <div className=' bg-blue-500 rounded-lg text-white p-2' > <a href="tel:+9145938795"> Call to Place Your Order</a></div>
        </div>
    )
}

export default CartCard

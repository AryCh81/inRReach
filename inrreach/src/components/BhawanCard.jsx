import React from 'react'

const BhawanCard = (prop) => {
  return (
    <>
     
        <div className=' flex flex-col gap-8 p-2 cursor-pointer w-[300px] h-[370px] rounded-2xl bg-white border-2 border-gray-300'>

          <div><img width={290} height={300} className='rounded-xl' src={prop.bhawanimg} alt="img" /></div>

          <div className=' font-medium bg-white text-center'>{prop.bhawanname}</div>
          <div className=' w-24 h-10 bg-red-500 rounded-full text-white font-bold text-center p-2 mx-auto'>Order</div>

        </div>
   
    </>
  )
}

export default BhawanCard

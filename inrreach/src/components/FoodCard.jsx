import React from 'react'

const FoodCard = (prop) => {
    return (
        <div className=' flex flex-col gap-4 p-3 w-[200px] md:w-[250px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-full bg-white '>

            <div className=' rounded-full'><img width={260} height={260} className=' rounded-full' src={prop.foodimg} alt="img" /></div>

            <div className='mx-auto text-center mt-2 w-[100px] font-bold font-serif'>{prop.foodname}</div>
            <div className=' font-medium w-[40px] mx-auto'>{prop.foodprice}</div>

        </div>

    )
}

export default FoodCard

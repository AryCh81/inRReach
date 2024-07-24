import React from 'react'

const Footer = (prop) => {
    return (
        <div ref={prop.footerRef} className='flex flex-col justify-center items-center rounded-2xl bg-gray-800 text-white p-5'>

            <div className='flex cursor-pointer justify-center gap-8'>
                <div><a href="https://www.instagram.com/aryan.chaudhary81?igsh=NTJ1cW10YWZrZzJy"><img width={40} height={40} src="./svgs/instagram.svg" alt="Insta" /></a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100093254237807&mibextid=ZbWKwL"><img width={40} height={40} src="./svgs/facebook.svg" alt="FaceBook" /></a></div>
                <div><a href="https://www.linkedin.com/in/somya-sehgal-159762292"><img width={40} height={40} src="./svgs/linkedin.svg" alt="Linkedin" /></a></div>
            </div>
            <br />

            <div className='flex gap-2'>
                <div >Contact us  : </div>
                <div > <a href="tel:+9145938795"> 9145938795</a></div>
            </div>
            <br />
            <div>Made with ♡ by :  Aryan Chaudhary and Somya Sehgal  </div>

        </div>
    )
}

export default Footer

import React, { useState } from 'react'
import logo from "../assets/Images/Logo.png"
import { IoCloseOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className='bg-[#FFFFFF] sticky top-0 left-0 right-0 z-[999999]'>
        <div className="max-w-screen-2xl mx-auto py-4 px-5 flex justify-between items-center md:px-32 ">
               {/* logo */}
        <a href="#">
            <img src={logo} alt="" className='w-32 hover:scale-105 transition-all' />
        </a>

        {/* humburger manu for small dvices */}
        <div className="lg:hidden">
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? (<IoCloseOutline className='text-2xl text-[#FF5B28]' />) :(<IoMenu className='text-2xl text-[#FF5B28]' />)
                }
            </button>

        </div>


           {/* humburger manu for large dvices */}

          <div className='hidden lg:block'>
             <ul className='flex items-center gap-6'>
            <li className='p-3 hover:scale-105 transition-all text-[#5E3BEE] cursor-pointer'>Home</li>
            <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Portfolio</li>
            <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>About</li>
            <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Testimonials</li>
           </ul>
          </div>

           <div className="hidden lg:block">
            <button className='px-4 py-3 border-2 rounded-sm border-[#5E3BEE] text-[#5E3BEE]'>
                <a href="#contact">
                    Contact Me
                </a>
            </button>

           </div>

           {/* Mobile Menu drawer */}

           {
            isMenuOpen && ( 
            <div className={`lg:hidden fixed top-16 left-0 right-0 bg-white border shadow-md z-50 py-8 
                transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
             <ul className='flex flex-col items-center gap-6'>
            <li className='p-3 hover:scale-105 transition-all text-[#5E3BEE] cursor-pointer'>Home</li>
            <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Portfolio</li>
            <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>About</li>
            <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Testimonials</li>
            <div className="lg:hidden ">
            <button className='px-4 py-3 border-2 rounded-sm border-[#5E3BEE] text-[#5E3BEE]'>
                <a href="#contact">
                    Contact Me
                </a>
            </button>

           </div>
           </ul>
          </div>)
           }


        
        </div>
     
    
    </div>
  )
}

export default Navbar

import React from 'react'
import { FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import logo from "../assets/Images/logo.png"

const Footer = () => {
  return (
    <div>

       <footer className='bg-[#F5FCFF] py-10 mt-20'>
  <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 xl:px-20">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      
      {/* Logo Section */}
      <div>
        <img src={logo} alt="Logo" className="w-32" />
      </div>

      {/* Navigation Links */}
      <ul className='flex gap-6 flex-wrap justify-center'>
        <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Home</li>
        <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Portfolio</li>
        <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>About</li>
        <li className='p-3 hover:scale-105 transition-all text-[#1C1E53] cursor-pointer'>Testimonials</li>
      </ul>

      {/* Social Icons */}
      <div className='flex gap-4 text-2xl text-[#1C1E53]'>
        <FaFacebookSquare className="cursor-pointer hover:text-blue-600 transition-all" />
        <FaLinkedin className="cursor-pointer hover:text-blue-500 transition-all" />
        <FaInstagramSquare className="cursor-pointer hover:text-pink-500 transition-all" />
        <FaTwitter className="cursor-pointer hover:text-blue-400 transition-all" />
      </div>
    </div>

    {/* Divider Line */}
    <hr className="border-t-2 border-gray-300 my-6" />

  {/* Bottom Section */}
<div className="flex flex-col sm:flex-row justify-between items-center text-center w-full mt-6 gap-4">
    <p className='text-gray-600'>Made with 💖 by Ayesha Ghaffar</p>
    
    {/* Links Section */}
    <div className='flex gap-3 flex-wrap justify-center'>
        <p className='text-gray-600 cursor-pointer hover:text-[#5E3BEE] transition-all'>Privacy Policy</p>
        <p className='text-gray-600 cursor-pointer hover:text-[#5E3BEE] transition-all'>Terms of Service</p>
        <p className='text-gray-600 cursor-pointer hover:text-[#5E3BEE] transition-all'>Cookies Settings</p>
    </div>
</div>
  </div>
</footer>




    </div>
  )
}

export default Footer

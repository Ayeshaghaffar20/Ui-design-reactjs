import React from 'react'
import heroImage from "../assets/Images/heroImage.png"

const HeroSection = () => {
  return (
   <>
   <main>
    <div className="flex bg-[#F5FCFF] py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center max-w-7xl mx-auto px-5 md:px-10 lg:px-16 xl:px-20">
    
    {/* Text Content Section */}
    <div className='flex flex-col justify-center gap-5 text-center md:text-left'>
      <p className="text-lg text-[#282938]">Hey, I am John</p>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#282938]'>
        I create <span className='text-[#5E3BEE]'>product design</span> and brand experience
      </h1>
      <p className="text-[#1C1E53] text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
     <button className="bg-[#5E3BEE] text-white px-5 py-2.5 rounded-md text-base md:text-lg font-semibold hover:bg-[#4a2ecc] transition-all md:self-start self-center">
         Get In Touch
         </button>

    </div>

    {/* Image Content Section */}
    <div className="flex justify-center">
      <img src={heroImage} alt="Hero" className="w-[85%] sm:w-[90%] md:w-[80%] lg:w-[800px] max-w-full object-cover" />

    </div>

  </div>
</div>

   </main>


   </>
  )
}

export default HeroSection

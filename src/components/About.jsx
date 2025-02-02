import React from 'react'
import aboutImage from "../assets/Images/About-Me.png"

const About = () => {
  return (
    <>
    <main>
    <div className="flex py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 place-items-center max-w-7xl mx-auto px-5 md:px-10 lg:px-16 xl:px-20">
            
            {/* Image Content Section */}
            <div className="flex justify-center">
                <img 
                    src={aboutImage} 
                    alt="About" 
                    className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] object-cover"
                />
            </div>

            {/* Text Content Section */}
            <div className='flex flex-col justify-center gap-5 text-center md:text-left'>
                <p className="text-lg text-[#282938]">About</p>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#282938]'>
                    About Me
                </h1>
                <p className="text-[#1C1E53] text-base md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. 
                    Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. 
                    Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                </p>
                <p>
                    Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. 
                    Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                </p>
            </div>

        </div>
    </div>
</main>

    </>
  )
}

export default About

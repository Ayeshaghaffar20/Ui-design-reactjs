import React from 'react'
import strategyIcon from "../assets/Images/StrategyIcon.png"
import brandingIcon from "../assets/Images/brandingIcon.png"
import UIUXIcon from "../assets/Images/UI&UXIcon.png"
import WebFlowIcon from "../assets/Images/WebFlowIcon.png"

const expertiseData =[
    {
        id:1,
        title:"Strategy & Direction",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: <img src={strategyIcon} alt="" />
    },
    {
        id:2,
        title:"Branding & Logo",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: <img src={brandingIcon} alt="" />
    },
     {
        id:3,
        title:"UI & UX Design",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: <img src={UIUXIcon} alt="" />
    },
     {
        id:4,
        title:"Webflow Development",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: <img src={WebFlowIcon} alt="" />
    }
]



const Expertise = () => {
  return (
    <>
     <div className='py-18 '>
         {/* Header Section */}
    <div className='flex flex-col justify-center gap-5 px-20 py-10 text-center md:text-left'>
        <p className="text-lg text-[#282938]">My Skills</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282938]">
            My Expertise
        </h1>
    </div>
        {/* cards section */}
        <div className='px-5 md:px-10 lg:px-16 xl:px-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {
                expertiseData.map((item)=>{
                    return(
                        <div className='space-y-4 p-6 rounded-xl bg-[#F5FCFF]'>
                            {/* image */}
                                <div className='w-20 h-20'>{item.image}</div>
                            
                            <div className='space-y-2'>
                                <h3 className='font-semibold text-[#282938] text-lg'>{item.title}</h3>
                                <p className='text-[#000000] text-sm'>{item.desc}</p>
                            </div>
                        </div>
                        


                    )
                })
            }

        </div>
        </div>
     </div>
    </>
  )
}

export default Expertise

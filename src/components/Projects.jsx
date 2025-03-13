import React from 'react'
// import image1 from '../../public/assets/Images/Image-1.png'
// import image from '../../public/assets/Images/Image.png'
// import image3 from '../../public/assets/Images/Image-3.png'
import { GoArrowUpRight } from "react-icons/go";

const Projects = ({image,title,description}) => {
  return (
<>
<div>
   
    
     <div className="max-w-sm rounded-sm overflow-hidden shadow-lg">
    {/* image section */}
  <img className="w-full" src={image} alt="project"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
  
    <div className="px-6 pt-4 pb-2 flex ">
    <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View In Dribbble</span>
    <GoArrowUpRight className='text-[#006B6A] mt-1 text-2xl -ml-[16px]'/>
    
  
  
  </div>
  
</div>
</div>

   </>
  )
}

export default Projects





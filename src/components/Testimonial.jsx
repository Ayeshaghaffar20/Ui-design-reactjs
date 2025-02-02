import React from 'react'
import avatarImage1 from "../assets/Images/Avatar-Image1.png"
import avatarImage2 from "../assets/Images/Avatar-Image2.png"
import avatarImage3 from "../assets/Images/Avatar-Image3.png"
import starImg from "../assets/Images/Stars.png"

const testimonialsData =[
    {
      id: 1,  
      name:"Dianne Russell",
      sirName:"Starbucks",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      image:avatarImage1,
      starIamge: starImg,

    },
      {
      id: 2,  
      name:"Kristin Watson",
      sirName:"Louis Vuitton",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      image:avatarImage2,
      starIamge: starImg,

    },
      {
      id: 3,  
      name:"Kathryn",
      sirName:"McDonald's",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      image:avatarImage3,
      starIamge: starImg,

    },
]

const Testimonial = () => {
  return (
    <>
    <div className="py-10 bg-[#F5FCFF]">
    <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        {/* Header Section */}
        <div className="flex flex-col gap-5 text-center md:text-left md:self-start">
            <p className="text-lg text-[#282938]">Clients Feedback</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282938]">
                Customer Testimonials
            </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
            {testimonialsData.map((item) => (
                <div key={item.id} className="w-full max-w-md mx-auto">
                    <div className="flex flex-col gap-5 p-6 shadow-lg rounded border border-[#006B6A] bg-white">
                        {/* Upper Section */}
                        <div className="space-y-4">
                            <img src={item.starIamge} alt="Stars" className="w-16 h-4 object-contain" />
                            <p className="text-sm text-gray-500">{item.text}</p>
                        </div>

                        {/* Lower Section */}
                        <div className="flex items-center gap-5">
                            <img src={item.image} alt="" className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <p className="text-xl font-bold text-black/80">{item.name}</p>
                                <p className="text-gray-600">{item.sirName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

      
    </>
  )
}

export default Testimonial

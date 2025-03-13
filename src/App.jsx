import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Expertise from './components/Expertise'
import About from './components/About'
import Projects from './components/Projects'
// import image1 from "../../public/assets/Images/Image-1.png"
// import image from '../../public/assets/Images/Image.png'
// import image3 from '../../public/assets/Images/Image-3.png'
import image1 from "/assets/Images/Image-1.png"
import image from '/assets/Images/Image.png'
import image3 from '/assets/Images/Image-3.png'
import Form from './components/Form'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'


const App = () => {
  const projectData =[
    {
      image: image1,
      title: 'Ahuse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
     {
      image: image,
      title: 'App Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
     {
      image: image3,
      title: 'Easy Rent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },

  ]



  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <HeroSection/>
    <Expertise/>
    <About/>
    
    <div className="py-10 px-5 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="flex flex-col justify-center gap-5 text-center py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282938]">
          My Projects
        </h1>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 gap-6 py-15">
        {projectData.map((item, index) => (
          <Projects
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>

     <Testimonial/>

    <Form/>
    <Footer/> 
    

    
    </div>
  )
}

export default App


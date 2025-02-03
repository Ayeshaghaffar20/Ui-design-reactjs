import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="flex flex-col mt-24">
            {/* text Aera */}
            <div className="flex flex-col text-center gap-6">
                <p className='text-[#000000] text-sm '>Get In Touch</p>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#282938]'>Contact me</h1>
                <p className='text-[#000000] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            {/* form */}
  <div className="flex flex-col w-full max-w-2xl mx-auto mt-10 px-2">
  <div className="flex flex-col md:flex-row gap-4">
    
    {/* First Name */}
    <div className="flex flex-col w-full">
      <label className="text-gray-700 font-medium ">First Name</label>
      <input 
        type="text" 
        className="border-1 mt-2 border-[#5E3BEE] focus:outline-[#5E3BEE] rounded-md px-4 py-2 w-full "
        
      />
    </div>

    {/* Last Name */}
    <div className="flex flex-col w-full">
      <label className="text-gray-700 font-medium">Last Name</label>
      <input 
        type="text" 
        className="border-1 mt-2 border-[#5E3BEE] focus:outline-[#5E3BEE] rounded-md px-4 py-2 w-full"/>
    </div>
    
  </div>
  <div className="flex flex-col w-full max-w-2xl mx-auto mt-7">
  <div className="flex flex-col md:flex-row gap-4">
    
    {/* email */}
    <div className="flex flex-col w-full">
      <label className="text-gray-700 font-medium">Email</label>
      <input 
        type="text" 
        className="border-1 mt-2 border-[#5E3BEE] focus:outline-[#5E3BEE] rounded-md px-4 py-2 w-full"/>
    </div>

    {/* phone number */}
    <div className="flex flex-col w-full">
      <label className="text-gray-700 font-medium">Phone Number</label>
      <input 
        type="text" 
        className="border-1 mt-2 border-[#5E3BEE] focus:outline-[#5E3BEE] rounded-md px-4 py-2 w-full"/>
    </div>
    
  </div>
</div>
       {/* DropDown */}
   <div className="flex flex-col w-full mt-7">
      <label className="text-gray-700 font-medium">Select</label>
      <select  defaultValue=""  className="border-1 mt-2 border-[#5E3BEE] focus:outline-[#5E3BEE] rounded-md px-4 py-2 bg-white text-gray-700 w-full">
        <option disabled  value="" className="text-gray-400">Select...</option>
        <option className='text-gray-700' value="Ahuse">Ahuse</option>
        <option className='text-gray-700' value="App Dashboard"> App Dashboard</option>
        <option className='text-gray-700' value="Easy Rent">Easy Rent</option>
      </select>
    </div>

    <div className="flex flex-col w-full mt-7">
      <label className="text-gray-700 font-medium">Message</label>
      <textarea  rows="4" cols="50" className="border-1 mt-2 border-[#5E3BEE] focus:outline-[#5E3BEE] rounded-md px-4 py-2 w-full"
       ></textarea>
    </div>

    {/* checkBox */}
    <div className='flex gap-1 mt-4'>
        <input type="checkbox" className='mt-0.5' />
        <label className="text-gray-700 font-medium">I accept the terms</label>
        
    </div>

    <button className="bg-[#5E3BEE] text-white px-5 py-2.5 mt-15 rounded-md text-base md:text-lg font-semibold hover:bg-[#4a2ecc] transition-all self-center">
         Submit
         </button>

</div>

        </div>
      
    </div>
  )
}

export default Form

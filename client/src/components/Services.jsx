import React from 'react'
import { FaCogs } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <section id='services' className="services">
        <div className="bg-services bg-cover bg-no-repeat max-w-[2566px] mx-4 md:mx-auto py-10">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 rounded-lg overflow-hidden">
              {/* <!-- Left Column --> */}
              <div className="p-8 text-white md:order-1">
                <h2 className="text-3xl font-bold mb-4">Services</h2>
                {/* <!-- Add an icon below or above the text -->
                <!-- Example using Font Awesome: --> */}
              
                <p className="text-lg">We provide a variety of services to meet your needs.</p>
                <FaCogs />
              </div>
          
              {/* <!-- Right Column --> */}
              <div className="p-8 bg-services text-black md:order-2">
                <ul className="list-disc">
                  <li className="mb-2 text-white"> Personal Care</li>
                  <li className="mb-2 text-white">Assistance with Dressing</li>
                  <li className="mb-2 text-white">Laundry Services</li>
                  <li className="mb-2 text-white">Meal preparation</li>
                  <li className="mb-2 text-white">Light housekeeping</li>
                  <li className="mb-2 text-white">Companionship</li>
                  <li className="mb-2 text-white">Transportation to and from appointments</li>
                  <li className="mb-2 text-white">Slip and fall and recovering at home</li>
                  {/* <!-- Add more list items as needed --> */}
                </ul>
                <p className='text-white font-semibold'>And so much more.....</p>
                <div className="bg-services">
                    <button className=" bg-white btn btn-sm justify-center mx-auto outline-1 rounded-md hover:shadow-xl hover:text-black text-slate-700 w-[140px] lg:w-auto  lg:mx-0 lg:mt-2">Book Now</button>
             
                </div>
                 </div>
            </div>
          </div>
          

    </section>
    </div>
  )
}

export default Services

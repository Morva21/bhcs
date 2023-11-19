import React from 'react'
import SmoothScroll from 'smooth-scroll';

const Services = () => {

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Adjust the scrolling speed (milliseconds)
    easing: 'easeInOutQuart', // Use a different easing function for a more subtle effect
  
  });
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      scroll.animateScroll(element)
    }
  }
  
  return (
    <div>
  
      <section id='services' className="services">
       
          <div className='bg-services bg-cover bg-no-repeat max-w-[1466px] rounded-[5px]
            h-[568px] relative flex items-center md:items-start -z-10'>
             <div className='container mx-auto pt-5'>
              <div className='flex items-center flex-col md:flex-row md:mb-[6opx]'>
                <div className="flex-1 max-w-2xl text-center md:text-left">
                <h2 className='h2 text-white flex-1 mb-4 md:mb-0 text-center md:text-left '>Services</h2>
                <p className='text-white flex-1 mb-4 md:mb-0 text-center md:text-left'>We provide a variety of services to meet your needs.</p>
                <div>
                <img className='hidden md:block' src="/img/services/Services_img.png" width={250} height={200} alt="" />
               </div>
                </div>
                <div className='flex-1 max-w-2xl text-center md:text-left mt-10'>
                <ul className="list-disc"> 
                  <li className="mb-2 text-white"> Personal Care</li>
                  <li className="mb-2 text-white">Assistance with Dressing</li>
                  <li className="mb-2 text-white">Laundry Services</li>
                  <li className="mb-2 text-white">Meal preparation</li>
                  <li className="mb-2 text-white">Light housekeeping</li>
                  <li className="mb-2 text-white">Companionship</li>
                  <li className="mb-2 text-white">Transportation to and from appointments</li>
                  <li className="mb-2 text-white">Slip and fall and recovering at home</li>
                 
                </ul>
                <p className='text-white font-semibold'>And so much more.....</p>
                
                    {/* <button onClick={() => scrollToSection('contact')} className=" bg-white btn btn-sm justify-center mx-auto outline-1 md:ml-[32px] hover:shadow-xl hover:text-black text-slate-700 w-[140px] lg:mt-2" >Book Now</button>
              */}
                
                  </div>
              </div>
             </div>
          </div>

    </section>
    </div>
  )
}

export default Services

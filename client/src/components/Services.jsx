import React from 'react'
import SmoothScroll from 'smooth-scroll';

const Services = () => {

  // const scroll = new SmoothScroll('a[href*="#"]', {
  //   speed: 800, // Adjust the scrolling speed (milliseconds)
  //   easing: 'easeInOutQuart', // Use a different easing function for a more subtle effect
  
  // });
  
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     scroll.animateScroll(element)
  //   }
  // }
  
  return (
    <div>
  
      <section id='services' className="services">
       
  <div className='max-w-[1466px] rounded-[5px]   h-[568px] relative flex items-center md:items-start'>
     <div className='container mx-auto pt-5 font-semibold'>
       <div className='flex items-center flex-col md:flex-row md:gap-x-20 md:mb-[60px]'>
         <div className="flex-1 max-w-2xl text-center md:text-left">
            <h2 className='h2 flex-1 mb-4 md:mb-0 text-center text-accent md:text-left '>Our Services</h2>
              
                <div>
                <img className='hidden md:block' src="/img/services/services_bg.png" width={250} height={200} alt="" />
               </div>
                </div>
                <div className='flex-1 max-w-2xl text-center md:text-left mt-10'>
                <ul className="list-disc"> 
                  <h2 className="mb-2 "> Personal Care</h2>
                  <h2 className="mb-2 ">Meal Preparation</h2>
                  <h2 className="mb-2 ">Laundry Services</h2>
                  <h2 className="mb-2 ">Companionship </h2>
                  <h2 className="mb-2 ">Assist with transporting to and from appointments (not transportation)</h2>
                  <h2 className="mb-2 ">Recovering from a personal injury </h2>
                  <h2 className="mb-2 ">Light housekeeping</h2>
                  <h2 className="">Other services upon request</h2>
                  
                 
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

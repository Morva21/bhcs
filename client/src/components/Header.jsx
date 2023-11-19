import SmoothScroll from 'smooth-scroll';
import React, { useState } from "react";
import { FaPhone, } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import 'remixicon/fonts/remixicon.css'


const Header = () => {

const [toggle, setStoggle] = useState(false)

// Smooth Scroll
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

const claseToggle =()=>{
  
  setStoggle(!toggle)
  console.log(toggle)
}

  return (
 <>
 {/* Header */}
 <header id='header' className="py-18 md:pt-8 md:pb-14 ">
  <div className="continer mx-auto">
  {/* className="bg-white text-black absolute w-full left-0 -bottom-[86px] shadow-custom2 h-16 justify-center rounded-[10px] hidden md:flex sm:items-center  md:px-[50px]" */}
    <div  className=" bg-white text-black/70 w-full shadow-xl rounded-lg p-4">
    <h3 className="uppercase font-semibold text-accent-secondary">Partner WIth Us</h3>
    <p>Our Staffing Agency supply qualified and experienced Personal Support Workers and Nurses to hospitals, 
      retirement homes and long-term care facilities on a contractual basis.</p>
      <button className="btn btn-sm btn-outline w-[180px] mx-auto md:w-auto hover:text-white hover:bg-accent" onClick={() => scrollToSection('contact')}>Contact</button>
  
    </div>
    
    </div>
    {/* Container */}
<div className="container mx-auto md:relative md:flex-row md:items-center flex flex-col md:justify-between gap-y-4 md:gap-y-0">
{/* Header Logo */}

<div className="flex justify-center lg:justify-normal">
    <img src="/img/header/bhs_new.png" width={311}  height={76} alt=""  className="py-[-40px]"/>
    {/* <img src="/img/header/mels.png" width={311}  height={76} alt="" /> */}
</div>

{/* Header Info */}
<div className="flex flex-col gap-2 items-center md:mt-10 text-[17px]">
  <div className="flex">
    <MdAttachEmail className="mt-2 mr-1 text-1xl text-accent"/>
   bernadettehomecareservices@gmail.com
  </div>
  <div className="flex">
  <FaPhone className="mt-2 mr-1 text-1xl text-accent"/>
  416.575.2356 | 613.709.6291
  </div>
  <div className="flex">
  
  <i className="ri-map-pin-2-fill mr-1 text-1xl text-accent"></i>
   Durham, York, Peel, Greater Toronto, Belleville and Trenton
  </div>
  <button className="btn btn-sm btn-outline w-[180px] mx-auto md:w-auto md:mx-0 hover:text-white hover:bg-accent" onClick={() => scrollToSection('contact')}>Book now</button>
  
{/* Mobile Navigation */}
<div onClick={claseToggle}  className="fixed left-0 top-0  md:hidden">
<div className="left-full  bg-black w-8 h-8 rounded-r-lg">
<i className="ri-arrow-right-s-line text-2xl text-white "></i>
</div>
</div>


{toggle ? ( <nav className="mnav fixed bg-white w-[90%]  top-0 h-screen shadow-lg left-[0px] sm:hidden transition-all ease-in-out duration-500
z-20">

<div onClick={claseToggle} className="mnav__close-btn bg-primary w-8 h-8 shadow-2xl  rounded-r-lg cursor-pointer transition-all relative left-full ">
<i className="ri-arrow-left-s-line text-2xl text-white "></i>
</div>  

<div>
  <img src="./img/header/logo.svg" className="mx-auto"  alt="" />

</div>

<ul onClick={claseToggle} className="flex flex-col gap-y-5">
<li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('header')}>Home</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('about-us')}>About Us</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('contact')}>Contact us</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('services')}>Services</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('testimonial')}>Testimonials</li>
       </ul>

</nav>): ''}

<nav className="bg-white text-black absolute w-full left-0 -bottom-[86px] shadow-custom2 h-16 justify-center rounded-[10px] hidden md:flex sm:items-center  md:px-[50px]"> 
    <ul className="flex gap-x-5">
    <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('about-us')}>About Us</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('contact')}>Contact us</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('services')}>Services</li>
        <li className="text-secondary hover:text-accent transition-all duration-300" onClick={() => scrollToSection('testimonial')}>Testimonials</li> 
        </ul>
   
        </nav>

</div>
</div>
 </header>
 </>
  )
}

export default Header

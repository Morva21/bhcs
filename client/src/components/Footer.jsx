import { FaTwitter, FaInstagram, FaFacebook , FaPhone, FaLinkedin} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import 'remixicon/fonts/remixicon.css'
import SmoothScroll from 'smooth-scroll';

const Footer = () => {
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
    <footer className='footer pt-12 xl:pt-[15px]'>
      <div className="container mx-auto">
      <div className="flex flex-col gap-x-5 gap-y-10 md:flex-row ">
        <div className="flex-1 footer__item">
        <div >
    <img src="/img/new_logo.jpg"  width={250} heigh={225} alt=""  className="py-[-40px]"/>
</div>
          <div className="flex flex-col gap-y-3 mb-10">
                        
                       
                        <div className="flex items-center gap-x-[6px]">
                        <FaPhone className="mt-2 mr-1 text-1xl text-accent"/>
                           <div>416.575.2356 | 613.709.6291</div> 
                           
                        </div>
                        <div className="flex items-center gap-x-[6px]">
                        <MdAttachEmail className="mt-2 mr-1 text-1xl text-accent"/>
                           <div>bernadettehomeservice@gmail.com</div> 
                           
                        </div>
                    </div>

        </div>
        <div className="flex-1 footer__item py-20">
                    <h4 className="h4 mb-5">Quick Links</h4>
                    <div className="flex  gap-x-5">
                    <ul className="flex-1 flex flex-col gap-y-5">
                    <li><a href="#" className="hover:text-accent transition-all" onClick={() => scrollToSection('header')}>Home</a></li>
                    </ul>
                </div>
                </div>
                <div className="flex-1 footer__item mt-20" >
                <h4 className="h4 mb-5">Hours</h4>
                <div>

                    <div className="flex-1 ">
                        <div className="flex justify-between items-center border-b pb-[10px]">
                            <div>Sunday - Sunday</div>
                            <div>8am - 8pm</div>
                            <div className=" px-4 rounded-md shadow-xl hover:scale-95 flex flex-col bg-accent text-white" onClick={() => scrollToSection('header')}> <a href="#header">
                                <div className=" text-center">^</div>
                                <div className="text-center">Back  </div>
                                </a></div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer

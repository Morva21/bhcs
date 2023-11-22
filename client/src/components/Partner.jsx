import SmoothScroll from 'smooth-scroll';

const Partner = () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
     // 1.  Adjust the scrolling speed (milliseconds)
        speed: 800, 
    // 2. Use a different easing function for a more subtle effect
        easing: 'easeInOutQuart', 
      });
      
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          scroll.animateScroll(element)
        }
      }
  return (
    <div className='container mx-auto font-semibold'>
      <div  className=" bg-white text-black/70 w-full shadow-xl rounded-lg p-4">
    <h3 className="uppercase font-semibold text-accent-secondary">Partner WIth Us</h3>
    <p>Our Staffing Agency supply qualified and experienced Personal Support Workers and Nurses to hospitals, 
      retirement homes and long-term care facilities on a contractual basis.</p>
      <p>Send us an email and lets talk about it.</p>
      {/* <button className="btn btn-sm btn-outline w-[180px] mx-auto md:w-auto hover:text-white hover:bg-accent" onClick={() => scrollToSection('contact')}>Contact</button> */}
  
    </div>
    
    </div>
  )
}

export default Partner

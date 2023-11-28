import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

  return (

  <div id='testimonial' className=' bg-testimonials bg-cover bg-no-repeat bg-right py-12
    xl:min-h-[595px] xl:py-0 mt-1 rounded-lg'>
     <p className='uppercase text-xl font-semibold text-accent'>Testimonials</p>
     <div className="testimonial__container container mx-auto">
     <div className='md:grid md:grid-cols-2 md:gap-8'>
     <div className="md:order-1">
     <div className="hidden md:flex">
        <img src="/img/testimonials/img.png" alt="" />
    </div>

    
    </div>
    <div className="max-w-[98%] items=center justify-center md:mt-32 xl:max-w-[710px]">
      <div >
      </div>
      
      <Swiper
      pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper"
      
      autoplay={{delay: 5000}}
     
    >
      <SwiperSlide>
      <div className="max-w-[680px] mx-auto text-center xl:text-left ">
            
            <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center
            xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 
            before:w-10 before:h-10 before:bg:no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
            after:w-10 after:h-10 after:bg:no-repeat mb-7
            "> 
               
                <span className="mx-2">
                We would like to thank the team of PSWs from Bernadette Home Care Services for the love and care they extended to my dad in his time of need.
                 We could not have done it without their help.
                </span>
            </p>
          
            <div className="text-[26px] text-[#4c5354] font-semibold">Jenny S</div>
           
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]"> Belleville</div>
        </div>
        
        
        </SwiperSlide>
      <SwiperSlide>
      <div className="max-w-[680px] mx-auto text-center xl:text-left">
            
            <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center
            xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 
            before:w-10 before:h-10 before:bg:no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
            after:w-10 after:h-10 after:bg:no-repeat mb-7
            "> 
                {/* <!-- Message --> */}
                <span className="mx-2">
                Because of the outstanding care to my elderly parents from the staff of Bernadette Home Care Services, 
                my parents were able to live in their homes for a very long time. 
                </span>
            </p>
            {/* <!-- Name --> */}
            <div className="text-[26px] text-[#4c5354] font-semibold">Marie R</div>
            {/* <!-- Job --> */}
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Ajax</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        
      <div className="max-w-[680px] mx-auto text-center xl:text-left mb-12">
            
            <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center
            xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 
            before:w-10 before:h-10 before:bg:no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
            after:w-10 after:h-10 after:bg:no-repeat mb-7
            "> 
             
                <span className="mx-2">
                The staff at Bernadette Home Care Services  made a difference in our father's life the last few months he had with us.  He was well taken care of in his home where he wanted to remain. 
                 Thank you so much for everything.
                </span>
            </p>
     
            <div className="text-[26px] text-[#4c5354] font-semibold">Manny F</div>
       
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Toronto</div>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
    </div>
    </div> 
    
    </div>
  )
}

export default Testimonials

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
  <div id='testimonial' className=' bg-testimonials bg-cover bg-no-repeat bg-right py-12
    xl:min-h-[595px] xl:py-0 mt-1 rounded-lg'>
     <p className='uppercase text-xl font-semibold text-black/70'>Testimonials</p>
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
      pagination={true} modules={[Pagination]} className="mySwiper"
      // install Swiper modules
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      // slidesPerView={1}
      // navigation
      // autoplay={{delay: 5000}}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="max-w-[680px] mx-auto text-center xl:text-left">
            
            <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center
            xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 
            before:w-10 before:h-10 before:bg:no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
            after:w-10 after:h-10 after:bg:no-repeat mb-7
            "> 
                {/* <!-- Message --> */}
                <span className="mx-2">
                    Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Animi, magnam?
                </span>
            </p>
            {/* <!-- Name --> */}
            <div className="text-[26px] text-[#4c5354] font-semibold">Daniel Lyons</div>
            {/* <!-- Job --> */}
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Customer 1</div>
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
                    Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Animi, magnam?
                </span>
            </p>
            {/* <!-- Name --> */}
            <div className="text-[26px] text-[#4c5354] font-semibold">Daniel Lyons</div>
            {/* <!-- Job --> */}
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Customer 1</div>
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
                    Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Animi, magnam?
                </span>
            </p>
            {/* <!-- Name --> */}
            <div className="text-[26px] text-[#4c5354] font-semibold">Daniel Lyons</div>
            {/* <!-- Job --> */}
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Customer 1</div>
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
                    Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Animi, magnam?
                </span>
            </p>
            {/* <!-- Name --> */}
            <div className="text-[26px] text-[#4c5354] font-semibold">Daniel Lyons</div>
            {/* <!-- Job --> */}
            <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Customer 1</div>
        </div>
      </SwiperSlide>
      <p className='text-accent '>Swipe for more</p>
    </Swiper>
    </div>
    </div>
    </div> 
    
    </div>
  )
}

export default Testimonials

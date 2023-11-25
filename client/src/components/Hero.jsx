import React from 'react'

const Hero = () => {
  return (
    <div>
      <section id='hero' className="hero bg-grey py-12 xl:pt-12 rounded-lg  xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-ful">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <!-- Left Column --> */}
              <div className="md:order-1">
                <div className="flex items-center mt-2 bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                    <i className="fa-solid fa-heart-pulse text-accent"></i>
                    <div className="uppercase text-base text-xs font-medium tracking-[2.24px]"> we can help</div>
                </div>
                <div className="p-4">
                    <h1 className="h1 mb-6">Let us take care of your loved ones.</h1>
                    {/* <p className="mb-[42px] md:max-w-xl">Our mission is to provide unparallel support and comfort to families, ensuring they lead fulfilling lives in the comfort of their homes.</p> */}
                </div>
                <button className="btn btn-lg py-[-50%] px-[-50%] mx-auto xl:mx-0 bg-accent text-white hover:bg-white hover:text-accent">Contact us</button>
              </div>
           
              {/* <!-- Right Column --> */}
              <div className="md:order-2 mt-3">
                {/* <!--  -bottom-4 left-0 right-0 object-cover max-w-full max-h-full --> */}
                <img src="/img/header/Hero_img_new.png"  className="md:w-full md:h-auto md:mt-10 rounded-lg"  alt="nurse in glasses" />
              </div>
            </div>
          </div>
          

    </section>
    </div>
  )
}

export default Hero

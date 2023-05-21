import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-purple-100">
          <div className="flex justify-center items-center py-12 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pl-7">
                <h1 className="text-4xl font-bold text-black mb-4">Welcome to ToyGalaxyHub!</h1>
                <p className="text-black text-lg mb-6">Our collection is designed to bring joy and smiles to your little explorers</p>
                <Link to='/all-toys' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Explore More</Link>
              </div>
              <div className="md:w-1/2">
                <img src="https://i.ibb.co/Rb3W6P4/banner1-1.png" alt="Toy Image" className="h-64 md:h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-100 rounded-lg">
          <div className="flex justify-center items-center py-12 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pl-7 md:pe-4">
                <h1 className="text-4xl font-bold text-black mb-4">Welcome to Toy World!</h1>
                <p className="text-black text-lg mb-6">Discover endless fun for kids of all ages! Our extensive collection includes racing car toys, police car, and trucks</p>
                <Link to='/all-toys' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Shop Now</Link>
              </div>
              <div className="md:w-1/2">
                <img src="https://i.ibb.co/khp5bD7/banner2.png" alt="Toy Image" className="h-64 md:h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <div className="my-container">
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
          <SwiperSlide className="bg-amber-100">
            <div className="flex justify-center items-center py-12">
              <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold text-white mb-4">Welcome to Toy World!</h1>
                  <p className="text-white text-lg mb-6">our collection is designed to bring joy and smiles to your little explorers</p>
                  <a href="#" className="bg-white hover:bg-gray-300 text-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg">Shop Now</a>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" alt="Toy Image" className="h-64 md:h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-purple-100">
            <div className="flex justify-center items-center py-12">
              <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold text-white mb-4">Welcome to Toy World!</h1>
                  <p className="text-white text-lg mb-6">Discover endless fun for kids of all ages! Our extensive collection includes educational toys, outdoor games, and classic favorites</p>
                  <a href="#" className="bg-white hover:bg-gray-300 text-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg">Shop Now</a>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" alt="Toy Image" className="h-64 md:h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-red-100">
            <div className="flex justify-center items-center py-12">
              <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold text-white mb-4">Welcome to Toy World!</h1>
                  <p className="text-white text-lg mb-6">Shop now and make playtime extraordinary! With our carefully curated selection, your child's laughter and happiness are just a click away.</p>
                  <a href="#" className="bg-white hover:bg-gray-300 text-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg">Shop Now</a>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" alt="Toy Image" className="h-64 md:h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
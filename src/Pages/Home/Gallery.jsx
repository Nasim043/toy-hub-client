import React from 'react';

const Gallery = () => {
  return (
    <div className="my-container mx-auto px-5 py-3 lg:px-10 lg:pt-12 my-12">
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Toy Gallery</h2>
        <p className="text-gray-400 text-base sm:text-lg text-center">Browse our captivating gallery showcasing an array of delightful toys and playtime moments.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/1522185/pexels-photo-1522185.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/2065641/pexels-photo-2065641.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/54277/pexels-photo-54277.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/552139/pexels-photo-552139.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
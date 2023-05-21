import React from 'react';

const Recommend = () => {
  return (

    <div className='my-container mt-12'>
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Recommend for you</h2>
        <p className="text-gray-400 text-base sm:text-lg text-center">Explore our extensive collection of toys categorized by themes and interests, making it easy to find the perfect playtime companions</p>
      </div>
      <div classNameName="max-w-sm rounded overflow-hidden shadow-md" >
        <img src="image.jpg" alt="Card Image" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">Card Title</div>
          <p className="text-gray-700 text-base">Card description goes here.</p>
        </div>
      </div>
    </div>


  );
};

export default Recommend;
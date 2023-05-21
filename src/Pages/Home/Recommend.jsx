import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recommend = () => {
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/getRecommendedToys')
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  return (

    <div className='my-container mt-12'>
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Recommend For You</h2>
        <p className="text-gray-400 text-base sm:text-lg text-center">Explore our extensive collection of toys categorized by themes and interests, making it easy to find the perfect playtime companions</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="max-w-sm rounded overflow-hidden shadow-md flex flex-col justify-between"
          >
            <img
              src={toy.pictureUrl}
              alt={toy.name}
              className="w-full"
            />

            <div>
              <div className="p-2">
                <h3 className="text-lg font-semibold">{toy.name}</h3>
                <p className="text-gray-500">Price: &#36;{toy.price}</p>
                <div className="text-gray-500 flex items-center">
                  <span className="me-3">Rating:</span>
                  <Rating
                    style={{ maxWidth: 70 }}
                    readOnly
                    orientation="horizontal"
                    value={toy.rating}
                  />
                </div>
              </div>

              <Link className="flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 font-semibold text-white py-2 px-4 rounded-b-lg focus:outline-none" to={`/details/${toy._id}`}>
                <FaRegEye className='me-2'></FaRegEye>View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>




  );
};

export default Recommend;